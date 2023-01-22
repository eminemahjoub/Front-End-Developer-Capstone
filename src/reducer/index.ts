import { fetchAPI } from "src/apis";

export type Action = {
  type: string;
  payload?: string;
};

export type State = {
  confirm: boolean;
  availableTimes: string[];
  sending: boolean;
};

export const CHANGE_DATE = "CHANGE_DATE";
export const SWITCH_CONFIRM = "SWITCH_CONFIRM";
export const SENDING_DATA = "SENDING_DATA";

export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
};

export const reducer = (state: State, action: Action) => {
  const date = action.payload ? new Date(action.payload) : new Date();

  if (action.type === CHANGE_DATE) {
    return { ...state, availableTimes: fetchAPI(date) };
  }

  if (action.type === SWITCH_CONFIRM) {
    return { ...state, confirm: !state.confirm };
  }

  if (action.type === SENDING_DATA) {
    return { ...state, sending: true };
  }

  return { ...state };
};
