import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormCreateComponent } from './components/user-form-create/user-form-create.component';
import { UserFormEditComponent } from './components/user-form-edit/user-form-edit.component';
import { UserFormViewComponent } from './components/user-form-view/user-form-view.component';

const routes: Routes = [
  {
    path: 'users/create',
    component: UserFormCreateComponent
  },
  {
    path: 'users/edit/:id',
    component: UserFormEditComponent
  },
  {
    path: 'users/view/:id',
    component: UserFormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
