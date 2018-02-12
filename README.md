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
    <img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" />
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

## Contribute
[See CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Viktor Hajer](https://github.com/viktorhajer)