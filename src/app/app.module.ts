import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MessagesPageComponent} from './components/messages-page/messages-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {messageInformationState} from "./management/message_reducer";

@NgModule({
    imports: [BrowserModule, MatInputModule, FormsModule, MatButtonModule, MatListModule,  StoreModule.forRoot({ messages: messageInformationState })],
    declarations: [AppComponent, MessagesPageComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
