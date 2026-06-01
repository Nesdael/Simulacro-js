import { loginView } from '..views/loginView.js'
import { dashboardView } from '..views/dashboardView.js'
import { projectsView } from '..views/projectsView.js'
import { getSession } from '../auth/authService.js'

const routes = {
    '/login': {
        view: loginView,
        private: false
    },
    '/dashboard': {
        view: dashboardView,
        private: true
    },
    '/projects': {
        view: projectsView,
        private: true
    }
}

export function handleRoute() {
    const path = window.location.pathname

    if(path === '/'){
        history.pushState(null, '', '/login')
        loginView()
        return
    }

    const route = routes[path];

    if (!route) {
        history.pushState(null, '', '/login')
        loginView()
        return
    }

    if (route.private && !getSession()) {
        history.pushState(null, '', '/login')
        loginView()
        return
    }

    route.view();
}

export function navigate(path){
    history.pushState(null, '', path)
    handleRoute()
}