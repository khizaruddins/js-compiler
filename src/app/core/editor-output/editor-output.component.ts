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
  @Input() editorData: any;
}
