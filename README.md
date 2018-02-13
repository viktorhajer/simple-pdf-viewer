<h1 align="center">Simple PDF Viewer</h1>
<!--
<p align="center">
  <a href="https://www.npmjs.com/package/simple-pdf-viewer">
    <img src="https://img.shields.io/npm/dm/simple-pdf-viewer.svg?style=flat" alt="downloads">
  </a>
  <a href="https://badge.fury.io/js/simple-pdf-viewer">
    <img src="https://badge.fury.io/js/simple-pdf-viewer.svg" alt="npm version">
  </a>
  <a href="https://david-dm.org/viktorhajer/simple-pdf-viewer" title="dependencies status">
    <img src="https://david-dm.org/viktorhajer/simple-pdf-viewer/status.svg"/>
  </a>
  <a href="https://travis-ci.org/viktorhajer/simple-pdf-viewer" title="test">
    <img src="https://travis-ci.org/viktorhajer/simple-pdf-viewer.svg?branch=master"/>
  </a>
  <a href="https://www.paypal.me/viktorhajer" title="Donate to this project using Paypal">
    <img src="https://img.shields.io/badge/paypal-donate-green.svg" alt="PayPal donate button" />
  </a>
</p>
 -->
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Demo page

[https://viktorhajer.github.io/simple-pdf-viewer/](https://viktorhajer.github.io/simple-pdf-viewer/)

## Install

```
npm install simple-pdf-viewer --save
```

## Usage

Add ```SimplePdfViewerModule``` to your module's ```imports```

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SimplePdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your component html

```html
<!-- Example actions -->
<button (click)="pdfViewer.zoomIn()">Zoom In</button>
<button (click)="pdfViewer.nextPage()">Next Page</button>
<button (click)="pdfViewer.turnLeft()">Turn the document left</button>
<button (click)="pdfViewer.search('PDF')">Search the world 'PDF'</button>

<section id="viewer">
    <!-- Simple PDF Viewer: open the test.pdf at the second page -->
    <simple-pdf-viewer #pdfViewer [src]="'test.pdf#page=2'"></simple-pdf-viewer>
</section>

<!-- Information -->
<p>Number of pages: {{ pdfViewer.getNumberOfPages() }}</p>
<p>Actual page: {{ pdfViewer.getCurrentPage() }}</p>
<p>Zoom: {{ pdfViewer.getZoomPercent() }} %</p>
<p>Meta: 
    <ul *ngFor="let info of pdfViewer.getDocumentInformation()">
        <li>{{info.key}}: {{info.value}}</li>
    </ul>
</p>
```

## Options

### Input parameter

| Signature        | Short Description | 
| :------------- |:-------------| 
| `src: string \| Uint8Array \| PDFSource` | Source of the PDF document (Required) |

### Event Emitters

| Signature        | Short Description | 
| :------------- |:-------------| 
| `onLoadComplete: EventEmitter<PDFDocumentProxy>` | Description |
| `onError: EventEmitter<any>` | Description |
| `onProgress: EventEmitter<PDFProgressData>` | Description |
| `onSearchStateChange: EventEmitter<SimpleSearchState>` | Description |

### Methods

| Signature        | Short Description | 
| :------------- |:-------------| 
| `openDocument(src: string \| Uint8Array \| PDFSource, page?: number, zoom?: number \| string): void` | Open a PDF document at the specified page (at the first page by default with full page zoom) |
| `isDocumentLoaded(): boolean` | Returns whether the PDF document is loaded properly |
| `getDocumentInformation(): SimpleDocumentInfo[]` | Returns the basic information about the PDF document |
| `getZoom(): number` | Returns the value of the viewport scale |
| `getZoomPercent(): number` | Returns the value of the viewport scale in % |
| `setZoom(scale: number): void` | Set the zoom of the document in double |
| `setZoomInPercent(zoom: number): void` | Set the zoom of the document in percent |
| `zoomIn(): void` | Increases the scale of the PDF viewport |
| `zoomOut(): void` | Decreases the scale of the PDF viewport |
| `zoomReset(): void` | Sets the original viewport scale back to 1.0 |
| `zoomFullPage(): void` | Sets the scale of the PDF viewport to fit in the actual screen |
| `zoomPageWidth(): void` | Sets the scale of the PDF viewport to fit in the actual screen (width priority) |
| `zoomPageHeight(): void` | Sets the scale of the PDF viewport to fit in the actual screen (height priority) |
| `search(text: string, caseSensitive?: boolean, phraseSearch?: boolean): void` | Starts case sensitive/insensitive text search and navigate to the first match (from the actual page). Phrase search can be turned on/off. |
| `nextMatch(): void` | Navigates to the next search match if there were multiple hits |
| `previousMatch(): void` | Navigates to the previous search match if there were multiple hits |
| `getNumberOfMatches(): number` | Returns the number of the search hits |
| `hasMatches(): boolean` | Returns whether there is a matched item |
| `isSearching(): boolean` | Returns whether the search is in-progress |
| `getCurrentPage(): number` | Returns the number of the actual page |
| `getNumberOfPages(): number` | Returns the number of the pages |
| `getOutline(): SimpleOutlineNode[]` | Returns outline / table of content in tree structure |
| `hasOutline(): boolean` | Returns whether the outline is available |
| `navigateToChapter(destination: any): void` | Navigates to the specified (outline) destination/chapter |
| `firstPage(): void` | Navigates to the first page |
| `lastPage(): void` | Navigates to the last page |
| `nextPage(): void` | Navigates to the next page |
| `prevPage(): void` | Navigates to the previous page |
| `navigateToPage(page?: number): void` | Navigates to the specified page |
| `getRotation(): number` | Returns the actual rotation value in degree |
| `resetRotation(): void` | Sets the rotation to the default 0 degree |
| `turnLeft(): void` | Turns left the document with 90 degree (counterclockwise) |
| `turnRight(): void` | Turns right the document with 90 degree (clockwise) |

## Contribute
[See CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Viktor Hajer](https://github.com/viktorhajer)
