import { USER_LOGIN, USER_LOGOUT, SHOW_TRANSFER_SCREEN, MONEY_CHEAT, SPEND_MONEY } from './actionTypes';

export const userLogin = (user_info) => ({
    type: USER_LOGIN,
    payload: user_info
});

export const userLogOut = () => ({
    type: USER_LOGOUT
})

export const showTransferScreen = () => ({
    type: SHOW_TRANSFER_SCREEN
})

export const moneyCheat = (payload) => ({
    type: MONEY_CHEAT,
    payload: payload
})
export const spendMoney = (amount) => ({
    type: SPEND_MONEY,
    payload: amount
})