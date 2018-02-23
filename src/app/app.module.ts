import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimplePdfViewerModule } from '../../libs/simple-pdf-viewer/src/simplePdfViewer.module';
import { SafeUrlPipe } from './app.safeurl';

@NgModule({
  declarations: [
    AppComponent, SafeUrlPipe
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
