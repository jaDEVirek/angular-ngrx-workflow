import {createReducer, on} from '@ngrx/store';
import {Message} from '../model/message';
import {
    addMessage,
    deleteMessage,
    loadMessage,
    messageLoadFailure,
    messageLoadSuccess,
    updateMessage
} from './message_actions';

export interface MessageState {
    messages: Message[];
    error: string,
    status: 'pending' | 'loading' | 'error' | 'success';
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
    on(messageLoadSuccess, (state, {messages}) => ({
        ...state, error: null, status: 'success',
    })),
    on(messageLoadFailure, (state, {error}) => ({
        ...state, error: error, status: 'error'
    })),
);
