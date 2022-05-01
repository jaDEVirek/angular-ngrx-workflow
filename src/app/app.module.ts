import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MessagesPageComponent} from './components/messages-page/messages-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";

@NgModule({
    imports: [BrowserModule, MatInputModule, MatButtonModule, MatListModule],
    declarations: [AppComponent, MessagesPageComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
