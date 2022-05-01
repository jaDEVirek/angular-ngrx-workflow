import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addMessage, deleteMessage, loadMessage,} from "../../management/message_actions";
import {selectAllMessages} from "../../management/selectors/message_selector";
import {Message} from "../../model/message";

@Component({
    selector: 'app-messages-page',
    templateUrl: './messages-page.component.html',
    styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

    readonly messages$ = this.store.select(selectAllMessages);
    message: string;

    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(loadMessage())
    }

    addMessage() {
        this.store.dispatch(addMessage({message: this.message}));
        this.message = '';
    }

    removeMessage(message: Message) {
        this.store.dispatch(deleteMessage({key: String(message.id)}))
    }
}
