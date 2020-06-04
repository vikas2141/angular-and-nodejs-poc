import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormCreateComponent } from './components/user-form-create/user-form-create.component';
import { UserFormEditComponent } from './components/user-form-edit/user-form-edit.component';
import { UserFormViewComponent } from './components/user-form-view/user-form-view.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserFormCreateComponent,
    UserFormEditComponent,
    UserFormViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
