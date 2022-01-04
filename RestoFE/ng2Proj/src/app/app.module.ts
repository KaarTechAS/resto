import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2Component } from './ng2/ng2.component';
import { DialogComponent } from './dialog/dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import {FileUploader} from 'ng2-file-upload';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ngfModule } from "angular-file"
import { FileUploadModule } from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
//import { Subscription } from 'rxjs'
//import {  FileUploader } from 'ng2-file-upload';
import { AngularFileUploaderModule } from 'angular-file-uploader';
//import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    Ng2Component,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FileUploadModule,
    ngfModule,
    CommonModule,
    //Subscription
    //FileUploader
    AngularFileUploaderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
