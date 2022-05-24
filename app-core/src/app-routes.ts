import LoaderComponent from './components/loader/loaderComponent'
import { withNavigationWatcher } from './contexts/navigation'

import ExpedientePage from './pages/expedientePage/expedientePage'
import LoginPage from './pages/loginPage/login'
import CambiarContraseñaPage from './pages/loginPage/components/cambiarContraseña'
import tasksPage from './components/tasks/tasks'
import ProfilePage from './pages/profile/profile'
import ContactosPage from './pages/contactosPage/addContacto'

//import { HomePage, TasksPage, ProfilePage } from './pages';

const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/expedientePage',
    component: ExpedientePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/loader',
    component: LoaderComponent,
  },
  {
    path: '/CambiarContraseña',
    component: CambiarContraseñaPage,
  },

  {
    path: '/tasks',
    component: tasksPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/addContactos',
    component: ContactosPage,
  },
]

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  }
})
