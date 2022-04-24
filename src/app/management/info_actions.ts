import { createAction, props } from '@ngrx/store';
import { Message } from '../model/message';

export const addInfo = createAction(
  '[Information Component] Add Info',
  props<{ message: string }>()
);
export const deleteInfo = createAction(
  '[Information Component] Delete Info',
  props<{ key: string }>()
);
export const updateInfo = createAction(
  '[Information Component] Update Info',
  props<{ message: Message }>()
);
export const loadInfo = createAction(
    '[Information Component] Load Info',
);

export const informationLoadSuccess = createAction('[Information Component] Success Load Info', props<{ message: Message }>());
export const informationLoadFailure = createAction('[Information Component] Failure Load Info',props<{ error: string }>());