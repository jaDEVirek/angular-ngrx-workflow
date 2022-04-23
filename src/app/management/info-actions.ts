import { createAction, props } from '@ngrx/store';

export const addInfo = createAction('[Information Component] Add Info',
props<{ message: string }>()
);
export const deleteInfo = createAction(
  '[Information Component] Delete Info',
  props<{ key: string }>()
);
export const updateInfo = createAction('[Information Component] Update Info');
