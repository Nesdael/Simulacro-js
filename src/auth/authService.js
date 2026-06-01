// Maneja todo lo relacionado con la sesión del usuario

import { getUsers } from "../api/api.js";
import { navigate } from "../routes/router.js";

const SESSION_KEY = 'currentUser'

//login
export async function login(email, password){
    const users = await getUsers()

    const user = users.find(
        u => u.email === email && u.password === password
    )

    if(!user)
        throw new Error('Credeciales incorrectas')

    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    return user
}

//logout
// borra la sesion y redirige al login

export function logout(){
    localStorage.removeItem(SESSION_KEY)
    //usamos navigate() que llama a history.pushState sin recargar
    navigate('/login')
}

// get session

export function getSession() {
    const user = localStorage.getItem(SESSION_KEY)
    return user ? JSON.parse(user) : null
}

// get role
export function getRole() {
    const user = getSession()
    return user ? user.role : null
}


