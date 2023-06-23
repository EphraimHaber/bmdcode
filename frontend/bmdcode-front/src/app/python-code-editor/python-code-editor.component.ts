import { Component } from '@angular/core';

@Component({
  selector: 'app-python-code-editor',
  templateUrl: './python-code-editor.component.html',
  styleUrls: ['./python-code-editor.component.scss']
})
export class PythonCodeEditorComponent {

  
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  options = {
    theme: 'vs-dark'
  };

}
