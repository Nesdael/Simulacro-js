const API_URL = 'http://localhost:3001'


// Trae a los usuarios de db.json
//GET /users -> retorna un array de usuarios
export async function getUsers(){
    const res = await fetch(`${API_URL}/users`)
    return res.json() // Convierte la respuesta JSON a objeto JS
}

//Trae los proyectos
//GET /users -> retorna un array de proyectos
export async function getProjects(){
    const res = await fetch(`${API_URL}/projects`)
    return res.json()
}

// Crea un nuevo proyecto
// POST /projects -> manda el objeto y json-server lo guarda con un id nuevo
export async function createProjects(){
    const res = await fetch(`${API_URL}/projects`, {
        method: 'POST',                                 // tipo de petición
        headers: {'Content-type': 'application/json'},  // le dice al server que mandamos JSON
        body: JSON.stringify(project)                   // convierte el objeto a texto JSON
    })
    return res.json()                                   // retorna el proyecto creado (ya con su id)
}

// Actualiza un proyecto completo o parcialmente
// PATCH /projects/:id -> solo actualiza los campos que le mandas
export async function updateProjects(id, data){
    const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
    })
    return res.json()
}

// Elimina un proyecto por su id
// DELETE /projects/:id -> borra el registro del db.json
export async function deleteProject(id) {
    const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE'
    })
    return res.json()
}

