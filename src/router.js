import User from './components/user/User'
import Home from './components/Home'
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";

export const routes = [
    { path: '', component: Home , name: 'homePage' },
    { path: '/user', component: User, name: 'userPage', children: [
            { path:'', component: UserStart },
            { path:':id', component: UserDetail },
            { path:':id/edit', component: UserEdit }
        ] }
];