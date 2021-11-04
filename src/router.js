import User from './components/user/User'
import Home from './components/Home'

export const routes = [
    { path: '', component: Home , name: 'homePage' },
    { path: '/user', component: User, name: 'userPage' }
];