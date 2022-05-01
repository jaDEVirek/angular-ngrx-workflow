import {Injectable} from "@angular/core";
import {Message} from "../model/message";
import {Observable, of} from "rxjs";


@Injectable({providedIn: 'root'})
export class MessagesService {
    private storageInitialised = false;

    constructor(private storage: Storage) {
    }

    getMessages(): Observable<Message[]> {
        if (!this.storageInitialised) this.storage.create();

        return of(this.storage.get('messages') || []);
    }

    saveMessages(message: Message[]): Observable<Message[]> {
        if (!this.storageInitialised) this.storage.create();

        return of(this.storage.set('messages', message));
    }
}
