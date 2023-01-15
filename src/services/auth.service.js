import {
    setUserInSessionStorage,
    getUserFromSessionStorage,
    removeUserFromSessionStorage
} from '../session';

export const BASE_URL = "https://react-tt-api.onrender.com";
export const signup = async (name, email, password) => {
    const user = getUserFromSessionStorage()
    if (!user) {
        try {
            const res = await fetch(`${BASE_URL}/api/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await res.json();
            setUserInSessionStorage(data);
            return data;
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    } else {
        console.error("ALREADY LOGGED IN !!");
        return { error: "ALREADY LOGGED IN !!" };
    }
}

export const login = async (email, password) => {
    const user = getUserFromSessionStorage()
    if (!user) {
        try {
            const res = await fetch(`${BASE_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json();
            setUserInSessionStorage(data);
            return data;
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    } else {
        console.error("ALREADY LOGGED IN");
        return { error: "ALREADY LOGGED IN !!" };
    }
}

export const logout = async () => {
    removeUserFromSessionStorage();
}
