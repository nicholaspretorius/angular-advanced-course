import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import { FaInputModule } from './lib/fa-input.module';
//import { FaInputComponent } from './lib/fa-input/fa-input.component';
//import { InputRefDirective } from './lib/common/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    //FaInputComponent,
    //InputRefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FaInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
