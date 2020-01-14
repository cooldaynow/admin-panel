import { createAction } from 'typesafe-actions';

export const showLogin = '@modal/SHOW_LOGIN';
export const closeLogin = '@modal/CLOSE_LOGIN';

export const setShowLogin = createAction(showLogin)<string>();
export const setCloseLogin = createAction(closeLogin)<string>();
