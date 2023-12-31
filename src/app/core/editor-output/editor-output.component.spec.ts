import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorOutputComponent } from './editor-output.component';

describe('EditorOutputComponent', () => {
  let component: EditorOutputComponent;
  let fixture: ComponentFixture<EditorOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditorOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
