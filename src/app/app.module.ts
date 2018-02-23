import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimplePdfViewerModule } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.module';
import { SafeUrlPipe } from './app.safeurl';
import { ViewerComponent } from './app.viewer';

@NgModule({
  declarations: [
    AppComponent, SafeUrlPipe, ViewerComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    SimplePdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
