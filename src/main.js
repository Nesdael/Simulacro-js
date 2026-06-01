import { handleRoute } from "./routes/router.js"

window.addEventListener('DOMContentLoaded', handleRoute)
window.addEventListener('popstate', handleRoute)