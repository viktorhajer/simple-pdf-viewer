/**
 * Created by Viktor Hajer on 02/08/2018.
 */
import {NgModule} from '@angular/core';
import {SimplePdfViewerComponent} from './simplePdfViewer.component';
import {PDFJSStatic} from 'pdfjs-dist';

declare global {
  const PDFJS: PDFJSStatic;
}

export { PDFJSStatic, PDFDocumentProxy, PDFViewerParams, PDFPageProxy, PDFSource,
  PDFProgressData, PDFPromise, PDFTreeNode, PDFInfo } from 'pdfjs-dist';

@NgModule({
  declarations: [SimplePdfViewerComponent],
  exports: [SimplePdfViewerComponent]
})
export class SimplePdfViewerModule {
}
