import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor-output.component.html',
  styleUrls: ['./editor-output.component.scss']
})
export class EditorOutputComponent {
  _editorData: any;
  @Input() set editorData(value: any) {
    if (!value) {
      this.counter = 0;
    }
    this.showPlaceholder = this.counter >= 1 ? false: true;
    this._editorData = value;
    this.counter += 1;
  }
  get editorData() {
    return this._editorData;
  }
  counter = 0;

  showPlaceholder = true;
}
