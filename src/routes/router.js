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
    const path = window.location.pathname || '/login';
    const route = routes[path];

    if (!route) {
        window.history.replaceState({}, '', '/login');
        return handleRoute();
    }

    if (route.private && !getSession()) {
        window.history.replaceState({}, '', '/login');
        return handleRoute();
    }

    route.view();
}