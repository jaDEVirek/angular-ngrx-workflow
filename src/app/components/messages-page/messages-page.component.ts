import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadInfo} from "../../management/info_actions";

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

  readonly messages$;
  readonly message;

  constructor(private store: Store) { }

  ngOnInit(): void {
      this.store.dispatch(loadInfo())
  }

}
