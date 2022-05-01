import { createAction, props } from '@ngrx/store';
import { Message } from '../model/message';

export const addMessage = createAction(
  '[Message Component] Add Message',
  props<{ message: string }>()
);
export const deleteMessage = createAction(
  '[Message Component] Delete Message',
  props<{ key: string }>()
);
export const updateMessage = createAction(
  '[Message Component] Update Message',
  props<{ message: Message }>()
);
export const loadMessage = createAction(
    '[Message Component] Load Message',
);

export const messageLoadSuccess = createAction('[Message Component] Success Load Messages', props<{ messages: Message[] }>());
export const messageLoadFailure = createAction('[Message Component] Failure Load Messages',props<{ error: string }>());
