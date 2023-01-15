import { BASE_URL } from "./auth.service";
import { getUserFromSessionStorage } from '../session';

export const getUserProfile = async () => {
    const user = getUserFromSessionStorage();
    if (user) {
        try {
            const res = await fetch(`${BASE_URL}/api/users/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            return data;
        } catch (error) {
            return { error: error.message }
        }
    } else {
        console.error("YOU HAVE TO LOGIN TO ACCESS THIS METHOD");
        return { error: "YOU HAVE TO LOGIN TO ACCESS THIS METHOD" }
    }
}

