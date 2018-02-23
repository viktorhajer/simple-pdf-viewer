import { Component, ViewChild } from '@angular/core';
import { SimplePdfViewerComponent } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.component';
import { SimpleProgressData, SimplePDFBookmark } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.models';

const OUTLINE_MENU = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  src: string = 'assets/example/pdf-test.pdf';
  menu = 1;
  backButtonVisible = false;
  errorMsg = '';
  bookmarks: SimplePDFBookmark[] = [];
  snapshots: string[] = [];

  urlBox: any;
  firstPageBox: any;
  firstZoomBox: any;
  pageBox: any;
  zoomBox: any;
  searchBox: any;

  @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;

  isActiveMenu(menu: number): boolean {
    return this.menu === menu && (this.pdfViewer.isDocumentLoaded() || menu === 1);
  }

  setActiveMenu(menu: number) {
    this.menu = menu;
    if(menu == OUTLINE_MENU) {
      this.backButtonVisible = true;
    } else {
      this.backButtonVisible =false;
    }
  }

  openDocument(documents: File[]) {
    this.errorMsg = '';
    if (documents && documents.length > 0) {
      this.pdfViewer.openFile(documents[0]);
    }
  }

  openUrl(url: string) {
    this.errorMsg = '';
    if (url && url.length > 0) {
      this.pdfViewer.openUrl(url);
    }
  }

  onError(event: any) {
    this.errorMsg = 'Failed to load the document';
  }

  onProgress(progress: SimpleProgressData) {
    console.log(progress);
  }

  onLoadComplete()  {
    console.log('Document is loaded');
    // see the whole document
    this.pdfViewer.zoomFullPage();
  }

  createBookmark() {
    this.pdfViewer.createBookmark().then(bookmark => {
      if(bookmark) {
        this.bookmarks.push(bookmark);
      }
    })
  }

  createSnapshot() {
    this.pdfViewer.createSnapshot().then(snapshot => {
      if(snapshot) {
        this.snapshots.push(URL.createObjectURL(snapshot));
      }
    })
  }

  openImage(url: string) {
    window.open(url);
    return true;
  }
}
