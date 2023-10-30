import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent {

  private destroy$ = new Subject<void>();
  constructor(private elementRef: ElementRef) {}
  @Output() editorData = new EventEmitter();
  showPlaceholder = true;
  editorValue = '';

  ngAfterViewInit() {
    this.createDebouncedObservable();
  }

  onEditorEdit(event: any) {
    if (event.data !== '') {
      this.showPlaceholder = false;
    }
  }
  createDebouncedObservable() {
    const divElement = this.elementRef.nativeElement.querySelector('.editor');
    fromEvent(divElement, 'input')
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        try {
          const data = eval(divElement.innerText);
          this.editorData.emit(data);
          console.clear();
        } catch (e)  {
          this.editorData.emit(e);
          console.clear();
        }
        this.editorValue = divElement.innerText;
        if (this.editorValue === '') {
          this.showPlaceholder = true;
        }
      });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
