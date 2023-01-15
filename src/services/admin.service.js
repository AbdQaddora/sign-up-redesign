import { BASE_URL } from "./auth.service";
import { getUserFromSessionStorage } from '../session';

export const getAllUsers = async () => {
    const user = getUserFromSessionStorage();
    if (user.isAdmin) {
        try {
            const res = await fetch(`${BASE_URL}/api/users`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            return { error }
        }
    } else {
        console.log("YOU HAVE TO BE ADMIN TO ACCESS THIS METHOD");
    }
}

export const getSingleUser = async (id) => {
    const user = getUserFromSessionStorage();
    if (user.isAdmin) {
        try {
            const res = await fetch(`${BASE_URL}/api/users/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            return { error }
        }
    } else {
        console.log("YOU HAVE TO BE ADMIN TO ACCESS THIS METHOD");
    }
}

export const deleteUser = async (id) => {
    const user = getUserFromSessionStorage();
    if (user.isAdmin) {
        try {
            const res = await fetch(`${BASE_URL}/api/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            return { error }
        }
    } else {
        console.log("YOU HAVE TO BE ADMIN TO ACCESS THIS METHOD");
    }
}