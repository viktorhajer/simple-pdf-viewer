import {Component, ViewChild} from '@angular/core';
import {SimplePdfViewerComponent} from '../simple-pdf-viewer/simplePdfViewer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Examples
  src1 = 'assets/example/pdf-test.pdf';

  renderedPercent = 0;
  activeMenuID = 3;
  outline = false;
  errorMsg = '';
  lastSearch = '';

  @ViewChild(SimplePdfViewerComponent) private pdfComponent: SimplePdfViewerComponent;

  isActiveMenu(activeMenuID: number): boolean {
    return this.pdfComponent.isDocumentLoaded() && this.activeMenuID === activeMenuID;
  }

  setActiveMenu(activeMenuID: number) {
    this.activeMenuID = activeMenuID;
  }

  toggleOutline() {
    if (this.pdfComponent.hasOutline()) {
      this.outline = !this.outline;
    } else {
      alert('No outline');
    }
  }

  onProgress(event: any) {
    this.renderedPercent = Math.round((event.loaded / event.total) * 100);
    this.renderedPercent = this.renderedPercent > 100 ? 100 : this.renderedPercent;
  }

  getZoomPercent(): number {
    return Math.floor(this.pdfComponent.getZoom() * 1000) / 10;
  }

  openDocument(documents: File[]) {
    this.errorMsg = '';
    this.outline = false;
    if (documents) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        this.pdfComponent.openDocument(new Uint8Array(fileReader.result));
      };
      fileReader.readAsArrayBuffer(documents[0]);
    }
  }

  searchText(text: string) {
    this.lastSearch = this.pdfComponent.search(text);
  }

  error(event: any) {
    this.errorMsg = 'Failed to load the document';
  }
}
