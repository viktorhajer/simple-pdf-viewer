import {Component, ViewChild} from '@angular/core';
import {SimplePdfViewerComponent} from '../simple-pdf-viewer/simplePdfViewer.component';

const OUTLINE_MENU = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  renderedPercent = 0;
  activeMenu = 1;
  backButtonVisible = false;
  errorMsg = '';
  lastSearch = '';

  @ViewChild(SimplePdfViewerComponent) private pdfComponent: SimplePdfViewerComponent;

  isActiveMenu(activeMenu: number): boolean {
    return this.pdfComponent.isDocumentLoaded() && this.activeMenu === activeMenu;
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
    return Math.floor(this.pdfComponent.getZoom() * 1000) / 10;
  }

  openDocument(documents: File[]) {
    this.errorMsg = '';
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

  onError(event: any) {
    this.errorMsg = 'Failed to load the document';
  }
}
