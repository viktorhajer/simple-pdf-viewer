<h1 align="center">Simple PDF Viewer</h1>

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

This is a simple but smart PDF Viewer component for angular/ionic websites. 

### Demo page
[https://viktorhajer.github.io/simple-pdf-viewer/](https://viktorhajer.github.io/simple-pdf-viewer/)

### Features

* Open: the src can be one of the following: file URL, Uint8Array or PDFSource
* Separated methods to open javascript File object or http URL
* Display: PDF conatiner is displayed
* Information: number of pages, viewport information (zoom, rotation...), meta information (author, subject, creator...)
* Navigation: navigate to the first page, the last page, next page, previous page and any of the pages
* Zooming: zoon in, zoom out, full page, page width, page height, set any zoom as double or percent
* Rotation: turn the document left or right (+/- 90 degree)
* Outline / Table of Content: provides the outline if exists and possiblity to navigate to the outline item
* Searching: case sensitive/insensitve text search (```phraseSearch``` and ```highlightAll``` can be turn on/off), go to next/prev match, number of matches
* Bookmarks: create bookmark based on the actual viewport and that can be used for navigation
* Snapshot: create snapshot about the actual page, scale can be specified (1.0 by default)

### Installation Instructions and Usage
[https://github.com/viktorhajer/simple-pdf-viewer/wiki/How-to-use](https://github.com/viktorhajer/simple-pdf-viewer/wiki/How-to-use)

### Type Documentation
[https://github.com/viktorhajer/simple-pdf-viewer/wiki/API-Documentation](https://github.com/viktorhajer/simple-pdf-viewer/wiki/API-Documentation)

### Screenshot

<img src="/src/assets/screen_1.png" alt="Screenshot" style="width: 450px;"/>

### Contribute
[See CONTRIBUTING.md](CONTRIBUTING.md)

### License
[MIT](https://tldrlegal.com/license/mit-license) © [Viktor Hajer](https://github.com/viktorhajer)
