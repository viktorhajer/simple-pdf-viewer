import { Component, ViewChild } from '@angular/core';
import { SimplePdfViewerComponent } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.component';
import { SimpleProgressData } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.models';

const OUTLINE_MENU = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  src: string = 'assets/example/pdf-test.pdf#page=1#zoom=page';
  menu = 1;
  backButtonVisible = false;
  errorMsg = '';

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

  openDocument(documents: File[], firstPage?:any, firstZoom?: any) {
    this.errorMsg = '';
    if (documents && documents.length > 0) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        this.pdfViewer.openDocument(new Uint8Array(fileReader.result), firstPage, firstZoom);
      };
      fileReader.readAsArrayBuffer(documents[0]);
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
  }
}
