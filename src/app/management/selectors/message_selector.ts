import {createSelector} from "@ngrx/store";
import {MessageState} from "../info_reducer";


/**
 *
 * @param state
 */
export const selectMessages= (state: MessageAppState) => state.messages;

/**
 *
 */
export const selectAllMessages = createSelector(
    selectMessages, (state: MessageState) => state.messages,
)
