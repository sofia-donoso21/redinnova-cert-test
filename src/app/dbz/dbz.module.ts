import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { ListComponent2 } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent2,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    ],
})
export class DbzModule { }
