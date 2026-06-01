// Su único trabajo es verificar si el usuario puede entrar a una ruta

import { getSession, getRole } from "./authService.js";
import { navigate } from "../routes/router.js";

//require sesion
export function requireAuth(){
    const user = getSession
    if (!user){
        navigate('/login')
        return false
    }
    return true
}

// requiere el rol manager
export function requireManager() {
    if (!requireAuth()) return false

    const role = getRole()

    if (role !== 'manager') {
    navigate('/dashboard')
    return false
    }

    return true
}

