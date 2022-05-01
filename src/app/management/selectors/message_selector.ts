import {createSelector} from "@ngrx/store";
import {MessageState} from "../message_reducer";


/**
 *
 */
export interface MessageAppState {
    messages: MessageState,
}

/**
 *
 * @param state
 */
export const selectMessages = (state: MessageAppState) => state.messages;

/**
 *
 */
export const selectAllMessages = createSelector(
    selectMessages, (state: MessageState) => state.messages,
)
