import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, mergeMap} from "rxjs";
import {loadMessage, messageLoadFailure, messageLoadSuccess} from "../message_actions";
import {MessageAppState} from "../selectors/message_selector";
import {Store} from "@ngrx/store";
import {MessagesService} from "../../services/messages_service";


@Injectable()
export class MessageEffect {

    messages$ = createEffect(() => this.actions$.pipe(
        ofType(loadMessage),
        mergeMap(() => this.messagesService.getMessages()
            .pipe(
                map(messages => (messageLoadSuccess({messages: messages}))),
                catchError(async (error) => messageLoadFailure({error}))
            ))
        )
    );



    constructor(
        private actions$: Actions,
        private store: Store<MessageAppState>,
        private messagesService: MessagesService,
    ) {
    }
}
