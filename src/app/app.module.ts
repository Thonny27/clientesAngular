import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormListComponent} from './form-list/form-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {FormService} from './form-service.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DetalleComponent} from './form/detalle/detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: FormListComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/ver/:id', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
