import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './core/code-editor/code-editor.component';
import { EditorOutputComponent } from './core/editor-output/editor-output.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CodeEditorComponent,
    EditorOutputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
