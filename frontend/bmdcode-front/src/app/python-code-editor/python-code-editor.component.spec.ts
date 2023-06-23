import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonCodeEditorComponent } from './python-code-editor.component';

describe('PythonCodeEditorComponent', () => {
  let component: PythonCodeEditorComponent;
  let fixture: ComponentFixture<PythonCodeEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonCodeEditorComponent]
    });
    fixture = TestBed.createComponent(PythonCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
