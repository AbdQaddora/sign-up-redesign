
const SESSION_STORAGE_KEY = "GSG_TT_8_SESSION_STORAGE_KEY";

export const setUserInSessionStorage = (user) => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
}

export const removeUserFromSessionStorage = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
}

export const getUserFromSessionStorage = () => {
    try {
        return JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));
    } catch (error) {
        console.log(error);
        return false;
    }
}