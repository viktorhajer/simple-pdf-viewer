/**
 * Created by Viktor Hajer on 02/08/2018.
 */
import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SimpleSearchState, SimpleDocumentInfo, SimpleOutlineNode, SimpleProgressData } from './simplePdfViewer.models';

declare var require: any;

enum ScalePriority {
  FULL,
  WIDTH,
  HEIGHT
}

if (typeof window !== 'undefined') {
  window['pdfjs-dist/build/pdf'] = require('pdfjs-dist/build/pdf');
  require('pdfjs-dist/web/compatibility');
  require('pdfjs-dist/web/pdf_viewer');
  PDFJS.verbosity = (<any>PDFJS).VERBOSITY_LEVELS.errors;
}

/**
 * Simple PDF Viewer component
 */
@Component({
  selector: 'simple-pdf-viewer',
  template: `<div class="pdfViewerContainer" [hidden]="!isDocumentLoaded()"><div class="pdfViewer"></div></div>`,
  styles: [`
  :host /deep/ .pdfViewerContainer {
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  
  :host /deep/ .textLayer {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 0.2;
    line-height: 1.0;
  }
  
  :host /deep/ .textLayer > div {
    color: transparent;
    position: absolute;
    white-space: pre;
    cursor: text;
    -webkit-transform-origin: 0% 0%;
    -moz-transform-origin: 0% 0%;
    -o-transform-origin: 0% 0%;
    -ms-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }
  
  :host /deep/ .textLayer .highlight {
    margin: -1px;
    padding: 1px;
  
    background-color: #002bff;
    border-radius: 4px;
  }
  
  :host /deep/ .textLayer .highlight.begin {
    border-radius: 4px 0px 0px 4px;
  }
  
  :host /deep/ .textLayer .highlight.end {
    border-radius: 0px 4px 4px 0px;
  }
  
  :host /deep/ .textLayer .highlight.middle {
    border-radius: 0px;
  }
  
  :host /deep/ .textLayer .highlight.selected {
    background-color: rgb(0, 100, 0);
  }
  
  :host /deep/ .textLayer ::selection { background: #002bff; }
  :host /deep/ .textLayer ::-moz-selection { background: #002bff; }
  
  :host /deep/ .textLayer .endOfContent {
    display: block;
    position: absolute;
    left: 0px;
    top: 100%;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    cursor: default;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
  }
  
  :host /deep/ .annotationLayer section {
    position: absolute;
  }
  
  :host /deep/ .textLayer .endOfContent.active {
    top: 0px;
  }
  
  :host /deep/ .annotationLayer .linkAnnotation > a {
    position: absolute;
    font-size: 1em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  :host /deep/ .annotationLayer .linkAnnotation > a:hover {
    opacity: 0.2;
    background: #002bff;
    box-shadow: 0px 2px 10px #002bff;
  }
  
  :host /deep/ .annotationLayer .linkAnnotation > a /* -ms-a */  {
    background: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") 0 0 repeat;
  }
  
  :host /deep/ .annotationLayer .textAnnotation img {
    position: absolute;
    cursor: pointer;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input,
  :host /deep/ .annotationLayer .textWidgetAnnotation textarea,
  :host /deep/ .annotationLayer .choiceWidgetAnnotation select,
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input,
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input {
    background-color: #002bff;
    border: 1px solid transparent;
    box-sizing: border-box;
    font-size: 9px;
    height: 100%;
    padding: 0 3px;
    vertical-align: top;
    width: 100%;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation textarea {
    font: message-box;
    font-size: 9px;
    resize: none;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input[disabled],
  :host /deep/ .annotationLayer .textWidgetAnnotation textarea[disabled],
  :host /deep/ .annotationLayer .choiceWidgetAnnotation select[disabled],
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {
    background: none;
    border: 1px solid transparent;
    cursor: not-allowed;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input:hover,
  :host /deep/ .annotationLayer .textWidgetAnnotation textarea:hover,
  :host /deep/ .annotationLayer .choiceWidgetAnnotation select:hover,
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input:hover {
    border: 1px solid #000;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input:focus,
  :host /deep/ .annotationLayer .textWidgetAnnotation textarea:focus,
  :host /deep/ .annotationLayer .choiceWidgetAnnotation select:focus {
    background: none;
    border: 1px solid transparent;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input.comb {
    font-family: monospace;
    padding-left: 2px;
    padding-right: 0;
  }
  
  :host /deep/ .annotationLayer .textWidgetAnnotation input.comb:focus {
    width: 115%;
  }
  
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input,
  :host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }
  
  :host /deep/ .annotationLayer .popupWrapper {
    position: absolute;
    width: 20em;
  }
  
  :host /deep/ .annotationLayer .popup {
    position: absolute;
    z-index: 200;
    max-width: 20em;
    background-color: #FFFF99;
    box-shadow: 0px 2px 5px #333;
    border-radius: 2px;
    padding: 0.6em;
    margin-left: 5px;
    cursor: pointer;
    word-wrap: break-word;
  }
  
  :host /deep/ .annotationLayer .popup h1 {
    font-size: 1em;
    border-bottom: 1px solid #000000;
    padding-bottom: 0.2em;
  }
  
  :host /deep/ .annotationLayer .popup p {
    padding-top: 0.2em;
  }
  
  :host /deep/ .annotationLayer .highlightAnnotation,
  :host /deep/ .annotationLayer .underlineAnnotation,
  :host /deep/ .annotationLayer .squigglyAnnotation,
  :host /deep/ .annotationLayer .strikeoutAnnotation,
  :host /deep/ .annotationLayer .fileAttachmentAnnotation {
    cursor: pointer;
  }
  
  :host /deep/ .pdfViewer .canvasWrapper {
    overflow: hidden;
  }
  
  :host /deep/ .pdfViewer .page {
    direction: ltr;
    width: 816px;
    height: 1056px;
    margin: 1px auto -8px auto;
    position: relative;
    overflow: visible;
    border: 9px solid transparent;
    background-clip: content-box;
    border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=') 9 9 repeat;
    background-color: white;
  }
  
  :host /deep/ .pdfViewer.removePageBorders .page {
    margin: 0px auto 10px auto;
    border: none;
  }
  
  :host /deep/ .pdfViewer.singlePageView {
    display: inline-block;
  }
  
  :host /deep/ .pdfViewer.singlePageView .page {
    margin: 0;
    border: none;
  }
  
  :host /deep/ .pdfViewer .page canvas {
    margin: 0;
    display: block;
  }
  
  :host /deep/ .pdfViewer .page .loadingIcon {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/gif;base64,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') center no-repeat;
  }  
  `]
})
export class SimplePdfViewerComponent implements OnInit {

  public static readonly ZOOM_PAGE: string = 'page';
  public static readonly ZOOM_PAGE_WIDTH: string = 'width';
  public static readonly ZOOM_PAGE_HEIGHT: string = 'height';
  private static readonly ZOOM_PERCENT: string = 'percent';

  private static readonly CSS_UNITS: number = 96.0 / 72.0;
  private static readonly PAGE_RESIZE_BORDER_HEIGHT: number = 30;
  private static readonly PAGE_RESIZE_BORDER_WIDTH: number = 50;
  private static readonly ZOOM_UNIT = 0.1;
  private static readonly MAX_ZOOM = 5; // max. zoom 500%
  private static readonly MIN_ZOOM = 0.05; // min. zoom 5%
  private static readonly PDF_FINDER_FIND_COMMAND = 'find';
  private static readonly PDF_FINDER_AGAIN_COMMAND = 'again';
  private static readonly PDF_VIEWER_DEFAULT_SCALE = 'page-fit';

  /**
   * Source of the PDF document (Required)
   */
  @Input() src: string | Uint8Array | PDF.PDFSource;

  @Output('onLoadComplete') onLoadComplete = new EventEmitter<void>();
  @Output('onError') onError = new EventEmitter<any>();
  @Output('onProgress') onProgress = new EventEmitter<SimpleProgressData>();
  @Output('onSearchStateChange') onSearchStateChange = new EventEmitter<SimpleSearchState>();

  private startPage: number = 1;
  private loaded: boolean = false;
  private currentPage: number = 1;
  private numberOfPages: number = 1;
  private outline: SimpleOutlineNode[] = [];
  private information: SimpleDocumentInfo[];
  private zoom: number = 1.0;
  private zoom_open: string = SimplePdfViewerComponent.ZOOM_PAGE;
  private rotation: number = 0;
  private disableTextLayer: boolean = false;

  private pdf: PDF.PDFDocumentProxy;
  private pdfLinkService: any;
  private pdfViewer: any;
  private pdfFindController: any;

  private searching: boolean = false;
  private lastSearchText: string = '';
  private searchPrevious: boolean = false;
  private searchCaseSensitive: boolean = false;
  private searchPhraseSearch: boolean = true;

  constructor(private element: ElementRef) {
  }

  public ngOnInit() {
    if (typeof window !== 'undefined') {
      if (typeof PDFJS.workerSrc !== 'string') {
        const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ (PDFJS as any).version }/pdf.worker.min.js`;
        PDFJS.workerSrc = workerUrl;
      }
      this.initPDFJS();
      this.setAndParseSrc(this.src);
      this.loadFile();
    }
  }

  /**
   * Open a PDF document at the specified page (at the first page by default)
   * @param src Source of the PDF document
   * @param page The specified page where should start, default: 1
   * @param zoom The specified zoom value, default: full page
   */
  public openDocument(src: string | Uint8Array | PDF.PDFSource, page: number = 1, zoom: number | string = 'page'): void {
    this.parsePageParameter(`page=${page}`);
    this.parseZoomParameter(`zoom=${zoom}`);
    this.setAndParseSrc(src);
    if (this.pdfFindController) {
      this.pdfFindController.reset();
    }
    this.loadFile();
  }

  /**
   * Returns whether the PDF document is loaded properly
   */
  public isDocumentLoaded(): boolean {
    return this.loaded;
  }

  private initPDFJS() {
    const container = this.getContainer();
    (<any>PDFJS).disableTextLayer = this.disableTextLayer;
    this.pdfLinkService = new (<any>PDFJS).PDFLinkService();

    this.pdfViewer = new (<any>PDFJS).PDFSinglePageViewer({
      container: container,
      removePageBorders: false,
      linkService: this.pdfLinkService,
    });
    this.pdfLinkService.setViewer(this.pdfViewer);

    this.pdfFindController = new (<any>PDFJS).PDFFindController({
      pdfViewer: this.pdfViewer
    });
    this.pdfViewer.setFindController(this.pdfFindController);
    container.addEventListener('pagesinit', this.pagesinitEventListener.bind(this));
    container.addEventListener('pagechange', this.pagechangeEventListener.bind(this));
  }

  private pagesinitEventListener() {
    this.pdfViewer.currentScaleValue = SimplePdfViewerComponent.PDF_VIEWER_DEFAULT_SCALE;
    this.initZoom();
    if (this.startPage !== 1) {
      this.navigateToPage(this.startPage);
    }
    this.onLoadComplete.emit();
  }

  private pagechangeEventListener() {
    this.currentPage = this.pdfViewer._currentPageNumber;
    this.zoom = this.pdfViewer._currentScale;
  }

  private setAndParseSrc(src: string | Uint8Array | PDF.PDFSource) {
    this.src = src;
    if (this.src && typeof this.src === 'string') {
      var res = this.src.split("#");
      if (res.length > 1) {
        this.src = res[0];
        res.forEach(part => {
          this.parsePageParameter(part);
          this.parseZoomParameter(part);
        });
      }
    }
  }

  private parsePageParameter(part: string) {
    const parameter = part.split("=");
    if (parameter.length > 1 && part.indexOf('page') !== -1) {
      const pageParameterValue = Math.abs(parseInt(`${parameter[1]}`, 10));
      this.startPage = Number.isNaN(pageParameterValue) ? 1 : pageParameterValue;
    }
  }

  private parseZoomParameter(part: string) {
    const parameter = part.split("=");
    if (parameter.length > 1 && part.indexOf('zoom') !== -1) {
      const parameterValue = parameter[1];
      if (!Number.isNaN(parseInt(`${parameterValue}`, 10))) {
        this.zoom = Math.abs(parseInt(`${parameterValue}`, 10)/100);
        this.zoom_open = SimplePdfViewerComponent.ZOOM_PERCENT;
      } else {
        this.zoom_open = parameterValue;
      }
    }
  }

  private loadFile() {
    this.loaded = false;
    if (this.src) {

      let progressSrc: any;
      if (typeof this.src === 'string') {
        progressSrc = PDFJS.getDocument({url: this.src, withCredentials: true} as any);
      } else {
        progressSrc = PDFJS.getDocument(this.src as any);
      }

      // progress
      progressSrc.onProgress = (progressData: PDF.PDFProgressData) => {
        this.onProgress.emit(new SimpleProgressData(progressData.loaded, progressData.total));
      };

      // loaded
      (<PDF.PDFPromise<PDF.PDFDocumentProxy>>progressSrc.promise).then(pdfDocument => {
        this.pdfViewer.setDocument(pdfDocument);
        this.pdfViewer.currentScaleValue = SimplePdfViewerComponent.PDF_VIEWER_DEFAULT_SCALE;
        this.pdfLinkService.setDocument(pdfDocument, null);
        this.pdf = pdfDocument;
        this.information = [];
        this.outline = null;
        this.pdf.getOutline().then((nodes: PDF.PDFTreeNode[]) => {
          this.outline = this.mapOutline(nodes);
        });
        this.pdf.getMetadata().then(information => {
          Object.getOwnPropertyNames(information.info).forEach(key => {
            this.information.push(new SimpleDocumentInfo(key, information.info[key]));
          });
          // Meta: info.metadata
        });
        this.numberOfPages = this.pdf.numPages;
        this.loaded = true;
      }, (error: any) => {
        this.numberOfPages = 1;
        this.zoom = 1;
        this.information = [];
        this.onError.emit(error);
      });
    }
  }

  private mapOutline(nodes: PDF.PDFTreeNode[]): SimpleOutlineNode[] {
    return nodes ? nodes.map(node => new SimpleOutlineNode(node.title, node.dest, this.mapOutline(node.items)), this) : [];
  }

  private getContainer(): HTMLElement {
    return this.element.nativeElement.querySelector('div') as HTMLElement;
  }

  /**
   * Returns the basic information about the PDF document
   */
  public getDocumentInformation(): SimpleDocumentInfo[] {
    return this.loaded && !!this.information ? this.information : [];
  }

  /**
   * Returns the value of the viewport scale
   */
  public getZoom(): number {
    return this.zoom;
  }

  /**
   * Returns the value of the viewport scale in %
   */
  public getZoomPercent(): number {
    return Math.floor(this.getZoom() * 1000) / 10;
  }

  /**
   * Increases the scale of the PDF viewport
   */
  public zoomIn(): void {
    if (this.isDocumentLoaded()) {
      this.zoom += SimplePdfViewerComponent.ZOOM_UNIT;
      this.setZoom(this.zoom);
    }
  }

  /**
   * Decreases the scale of the PDF viewport
   */
  public zoomOut(): void {
    if (this.isDocumentLoaded()) {
      this.zoom -= SimplePdfViewerComponent.ZOOM_UNIT;
      this.setZoom(this.zoom);
    }
  }

  /**
   * Sets the original viewport scale back to 1.0
   */
  public zoomReset(): void {
    if (this.isDocumentLoaded()) {
      this.zoom = 1.0;
      this.setZoom(this.zoom);
    }
  }

  /**
   * Sets the scale of the PDF viewport to fit in the actual screen
   */
  public zoomFullPage(): void {
    if (this.isDocumentLoaded()) {
      this.pdf.getPage(this.currentPage).then((page: PDF.PDFPageProxy) => {
        const scale = this.getScale(page, ScalePriority.FULL);
        this.setZoom(scale);
      });
    }
  }

  /**
   * Sets the scale of the PDF viewport to fit in the actual screen (width priority)
   */
  public zoomPageWidth(): void {
    if (this.isDocumentLoaded()) {
      this.pdf.getPage(this.currentPage).then((page: PDF.PDFPageProxy) => {
        const scale = this.getScale(page, ScalePriority.WIDTH);
        this.setZoom(scale);
      });
    }
  }

  /**
   * Sets the scale of the PDF viewport to fit in the actual screen (height priority)
   */
  public zoomPageHeight(): void {
    if (this.isDocumentLoaded()) {
      this.pdf.getPage(this.currentPage).then((page: PDF.PDFPageProxy) => {
        const scale = this.getScale(page, ScalePriority.HEIGHT);
        this.setZoom(scale);
      });
    }
  }

  private getScale(page: PDF.PDFPageProxy, priority: ScalePriority = ScalePriority.FULL): number {
    const viewport = page.getViewport(1, this.rotation);
    const offsetHeight = this.getContainer().offsetHeight;
    const offsetWidth = this.getContainer().offsetWidth;
    if (offsetHeight === 0 || offsetWidth === 0) {
      return 1;
    }
    const heightRatio = (offsetHeight - SimplePdfViewerComponent.PAGE_RESIZE_BORDER_HEIGHT) / viewport.height;
    const widthRatio = (offsetWidth - SimplePdfViewerComponent.PAGE_RESIZE_BORDER_WIDTH) / viewport.width;
    let ratio = heightRatio < widthRatio ? heightRatio : widthRatio;
    if (priority !== ScalePriority.FULL) {
      ratio = priority === ScalePriority.WIDTH ? widthRatio : heightRatio;
    }
    const zoom = 1;
    return Math.floor(zoom * ratio / SimplePdfViewerComponent.CSS_UNITS * 100) / 100;
  }

  /**
   * Set the zoom of the document in double
   * @param scale The zoom value in double
   */
  public setZoom(scale: number): void {
    if (this.isDocumentLoaded() && typeof scale === 'number') {
      const normalizedScale = this.normalizeScale(scale);
      this.pdfViewer._setScale(normalizedScale, false);
      this.zoom = normalizedScale;
    }
  }

  /**
   * Set the zoom of the document in percent
   * @param zoom The scale value in percent
   */
  public setZoomInPercent(zoom: number): void {
    if (this.isDocumentLoaded() && typeof zoom === 'number') {
      this.setZoom(zoom / 100);
    }
  }

  private initZoom() {
    switch (this.zoom_open) {
      case SimplePdfViewerComponent.ZOOM_PERCENT: 
        this.setZoom(this.zoom);
        break;
      case SimplePdfViewerComponent.ZOOM_PAGE_WIDTH: 
        this.zoomPageWidth();
        break;
      case SimplePdfViewerComponent.ZOOM_PAGE_HEIGHT: 
        this.zoomPageHeight();
        break;
      default: 
        this.zoomFullPage();
    }
  }

  private normalizeScale(scale): number {
    let normalizedScale = scale;
    if (scale > SimplePdfViewerComponent.MAX_ZOOM) {
      normalizedScale = SimplePdfViewerComponent.MAX_ZOOM;
    } else if (scale < SimplePdfViewerComponent.MIN_ZOOM) {
      normalizedScale = SimplePdfViewerComponent.MIN_ZOOM;
    }
    return normalizedScale;
  }

  /**
   * Starts case sensitive/insensitive text search and navigate to the first match (from the actual page)
   * @param text searched text
   * @param caseSensitive set true to use case sensitive searching (false by default)
   * @param phraseSearch set true to use full phrase search (that's the default)
   */
  public search(text: string, caseSensitive: boolean = false, phraseSearch: boolean = true): void {
    if (this.isDocumentLoaded()) {
      const searchText = text ? text.trim() : '';
      if (!searchText) {
        return;
      }
      this.lastSearchText = text;
      this.searchPrevious = false;
      this.searchCaseSensitive = caseSensitive;
      this.searchPhraseSearch = phraseSearch;
      this.pdfFindController.onUpdateResultsCount = this.onUpdateResultsCount.bind(this);
      this.pdfFindController.onUpdateState = this.onUpdateState.bind(this);
      this.pdfFindController.executeCommand(SimplePdfViewerComponent.PDF_FINDER_FIND_COMMAND, {
        caseSensitive: this.searchCaseSensitive,
        findPrevious: false,
        highlightAll: true,
        phraseSearch: this.searchPhraseSearch,
        query: searchText
      });
    }
  }

  /**
   * Navigates to the next search match if there were multiple hits
   */
  public nextMatch(): void {
    this.stepMatch(false);
  }

  /**
   * Navigates to the previous search match if there were multiple hits
   */
  public previousMatch(): void {
    this.stepMatch(true);
  }

  private stepMatch(findPrevious: boolean): void {
    if (this.isDocumentLoaded() && this.getNumberOfMatches() > 1) {
      if (this.searchPrevious !== findPrevious) {
        this.searchPrevious = findPrevious;
        this.searchAgain();
      } else {
        this.pdfFindController.nextMatch();
        this.currentPage = this.pdfViewer._currentPageNumber;
      }
    }
  }

  private searchAgain(): void {
    if (this.isDocumentLoaded()) {
      this.pdfFindController.executeCommand(SimplePdfViewerComponent.PDF_FINDER_AGAIN_COMMAND, {
        caseSensitive: this.searchCaseSensitive,
        findPrevious: this.searchPrevious,
        highlightAll: true,
        phraseSearch: this.searchPhraseSearch,
        query: this.lastSearchText
      });
    }
  }

  /**
   * Returns the number of the search hits
   */
  public getNumberOfMatches(): number {
    if (this.isDocumentLoaded()) {
      return this.pdfFindController.matchCount;
    }
    return 0;
  }

  /**
   * Returns whether there is a matched item
   */
  public hasMatches(): boolean {
    return this.getNumberOfMatches() > 0;
  }

  /**
   * Returns whether the search is in-progress
   */
  public isSearching(): boolean {
    return this.searching;
  }

  private onUpdateResultsCount(): void {
    this.pdfFindController.onUpdateResultsCount = null;
    this.currentPage = this.pdfViewer._currentPageNumber;
  }

  private onUpdateState(state: SimpleSearchState): void {
    this.onSearchStateChange.emit(state);
    this.searching = state === SimpleSearchState.PENDING;
    if (!this.searching) {
      this.pdfFindController.onUpdateState = null;
    }
  }

  /**
   * Returns the number of the actual page
   */
  public getCurrentPage(): number {
    return this.currentPage;
  }

  /**
   * Returns the number of the pages
   */
  public getNumberOfPages(): number {
    return this.numberOfPages;
  }

  /**
   * Returns outline / table of content in tree structure
   */
  public getOutline(): SimpleOutlineNode[] {
    return this.hasOutline() ? this.outline : [];
  }

  /**
   * Returns whether the outline is available
   */
  public hasOutline(): boolean {
    return this.loaded && !!this.outline && !!this.outline.length;
  }

  /**
   * Navigates to the specified (outline) destination/chapter
   * @param destination the destination object of the outline item
   */
  public navigateToChapter(destination: any): void {
    if (this.isDocumentLoaded()) {
      // TODO: input validation
      this.pdfLinkService.navigateTo(destination);
    }
  }

  /**
   * Navigates to the first page
   */
  public firstPage(): void {
    if (this.isDocumentLoaded()) {
      this.currentPage = 1;
      this.navigateToPage(this.currentPage);
    }
  }

  /**
   * Navigates to the last page
   */
  public lastPage(): void {
    if (this.isDocumentLoaded()) {
      this.currentPage = this.getNumberOfPages();
      this.navigateToPage(this.currentPage);
    }
  }

  /**
   * Navigates to the next page
   */
  public nextPage(): void {
    if (this.isDocumentLoaded()) {
      this.currentPage++;
      this.navigateToPage(this.currentPage);
    }
  }

  /**
   * Navigates to the previous page
   */
  public prevPage(): void {
    if (this.isDocumentLoaded()) {
      this.currentPage--;
      this.navigateToPage(this.currentPage);
    }
  }

  /**
   * Navigates to the specified page
   * @param page the number of the page
   */
  public navigateToPage(page?: number): void {
    if (this.isDocumentLoaded()) {
      if (page) {
        const pageInt = parseInt(`${page}`, 10);
        this.currentPage = pageInt ? pageInt : this.currentPage;
      }
      if (this.currentPage > this.numberOfPages) {
        this.currentPage = this.numberOfPages;
      }
      if (this.currentPage <= 0) {
        this.currentPage = 1;
      }
      this.pdfViewer.scrollPageIntoView({
        pageNumber: this.currentPage
      });
    }
  }

  /**
   * Sets the rotation to the default 0 degree
   */
  public resetRotation(): void {
    this.rotate(0);
  }

  /**
   * Turns left the document with 90 degree (counterclockwise)
   */
  public turnLeft(): void {
    this.rotate(this.rotation - 90);
  }

  /**
   * Turns right the document with 90 degree (clockwise)
   */
  public turnRight(): void {
    this.rotate(this.rotation + 90);
  }

  /**
   * Returns the actual rotation value in degree
   */
  public getRotation(): number {
    return this.rotation;
  }

  private rotate(angle: number = 90): void {
    if (this.isDocumentLoaded()) {
      this.rotation = parseInt(`${angle}`, 10);
      this.pdfViewer.pagesRotation = this.rotation;
    }
  }
}
