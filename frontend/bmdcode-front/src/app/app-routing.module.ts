import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonCodeEditorComponent } from './python-code-editor/python-code-editor.component';

const routes: Routes = [
  { path: '', component:  PythonCodeEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
