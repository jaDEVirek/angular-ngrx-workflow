import { createReducer, on } from '@ngrx/store';
import { Message } from '../model/message';
import { addInfo, deleteInfo, updateInfo } from './info-actions';
export interface InfoMessageState {
  messages: Message[],
  status: 'pending' | 'loading' | 'error' | 'sucess',
}

export const initialState: InfoMessageState =  {
    messages: [],
    status: 'pending',
};

export const informationState = createReducer(
  initialState,
  on(addInfo, (state,{message} ) => ({
    ...state, messages: [...state.messages, { id: Date.now(), text: message}],
  })),
  on(deleteInfo, (state) => state - 1),
  on(updateInfo, (state) => 0)
);