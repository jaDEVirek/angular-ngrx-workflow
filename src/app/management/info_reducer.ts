import {createReducer, on} from '@ngrx/store';
import {Message} from '../model/message';
import {
    addMessage,
    deleteMessage,
    updateMessage,
    loadMessage,
    messageLoadSuccess,
    messageLoadFailure
} from './message_actions';

export interface MessageState {
    messages: Message[];
    error: string,
    status: 'pending' | 'loading' | 'error' | 'sucess';
}

export const initialState: MessageState = {
    messages: [],
    error: null,
    status: 'pending',
};

export const messageInformationState = createReducer(
    initialState,
    on(addMessage, (state, {message}) => ({
        ...state,
        messages: [...state.messages, {id: Date.now(), text: message}],
    })),
    on(deleteMessage, (state, {key}) => ({
        ...state,
        messages: state.messages.filter((message) => message.id != Number(key)),
    })),
    on(updateMessage, (state, {message}) => ({
        ...state,
        messages: state.messages.filter((message) => {
            if (message.id == Number(message.id)) message.text = message.text;
        }),
    })),
    on(loadMessage, (state) => ({
        ...state, status: 'loading',
        })),
    on(messageLoadSuccess, (state, {message}) => ({
        ...state, status: 'loading',
    })),
    on(messageLoadFailure, (state, {error}) => ({
        ...state, error: error,
    })),
);
