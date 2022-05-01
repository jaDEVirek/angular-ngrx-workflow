import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, from, map, mergeMap, withLatestFrom} from "rxjs";
import {addMessage, deleteMessage, loadMessage, messageLoadFailure, messageLoadSuccess} from "../message_actions";
import {MessageAppState, selectAllMessages} from "../selectors/message_selector";
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

    saveMessages$ = createEffect(() => this.actions$.pipe(ofType(addMessage, deleteMessage),
        withLatestFrom(this.store.select(selectAllMessages)),
        mergeMap(([proceedAction,
                      messages]) => from(this.messagesService.saveMessages(messages)))),
        {dispatch: false});

    constructor(
        private actions$: Actions,
        private store: Store<MessageAppState>,
        private messagesService: MessagesService,
    ) {
    }
}
