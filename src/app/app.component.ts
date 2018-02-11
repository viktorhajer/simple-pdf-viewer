import {Component, ViewChild} from '@angular/core';
import {SimplePdfViewerComponent} from '../simple-pdf-viewer/simplePdfViewer.component';

const OUTLINE_MENU = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  src: string = 'assets/example/pdf-test.pdf#page=1#zoom=page';

  renderedPercent = 0;
  activeMenu = 1;
  backButtonVisible = false;
  errorMsg = '';
  lastSearch = '';

  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;

  isActiveMenu(activeMenu: number): boolean {
    return this.activeMenu === activeMenu && (this.pdfViewer.isDocumentLoaded() || activeMenu === 1);
  }

  setActiveMenu(activeMenuID: number) {
    this.activeMenu = activeMenuID;
    if(activeMenuID == OUTLINE_MENU) {
      this.backButtonVisible = true;
    } else {
      this.backButtonVisible =false;
    }
  }

  onProgress(event: any) {
    this.renderedPercent = Math.round((event.loaded / event.total) * 100);
    this.renderedPercent = this.renderedPercent > 100 ? 100 : this.renderedPercent;
  }

  getZoomPercent(): number {
    return Math.floor(this.pdfViewer.getZoom() * 1000) / 10;
  }

  openDocument(documents: File[], firstPage?:any, firstZoom?: any) {
    this.errorMsg = '';
    if (documents) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        this.pdfViewer.openDocument(new Uint8Array(fileReader.result), firstPage, firstZoom);
      };
      fileReader.readAsArrayBuffer(documents[0]);
    }
  }

  searchText(text: string) {
    this.lastSearch = this.pdfViewer.search(text);
  }

  onError(event: any) {
    this.errorMsg = 'Failed to load the document';
  }
}
