import {createReducer, on} from '@ngrx/store';
import {Message} from '../model/message';
import {
    addInfo,
    deleteInfo,
    updateInfo,
    loadInfo,
    informationLoadSuccess,
    informationLoadFailure
} from './info_actions';

export interface InfoMessageState {
    messages: Message[];
    error: string,
    status: 'pending' | 'loading' | 'error' | 'sucess';
}

export const initialState: InfoMessageState = {
    messages: [],
    error: null,
    status: 'pending',
};

export const informationState = createReducer(
    initialState,
    on(addInfo, (state, {message}) => ({
        ...state,
        messages: [...state.messages, {id: Date.now(), text: message}],
    })),
    on(deleteInfo, (state, {key}) => ({
        ...state,
        messages: state.messages.filter((info) => info.id != Number(key)),
    })),
    on(updateInfo, (state, {message}) => ({
        ...state,
        messages: state.messages.filter((info) => {
            if (info.id == Number(message.id)) info.text = message.text;
        }),
    })),
    on(loadInfo, (state) => ({
        ...state, status: 'loading',
        })),
    on(informationLoadSuccess, (state, {message}) => ({
        ...state, status: 'loading',
    })),
    on(informationLoadFailure, (state, {error}) => ({
        ...state, error: error,
    })),
);
