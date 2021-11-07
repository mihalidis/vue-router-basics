
import Home from './components/Home'
import Header from "./components/Header";
import Error from "./components/Error";

//Lazy load routes: load this components, only while using them
const User = resolve => {
    require.ensure(["./components/user/User"], ()=>{
       resolve(require("./components/user/User"));
    });
}
const UserStart = resolve => {
    require.ensure(["./components/user/UserStart"], ()=>{
        resolve(require("./components/user/UserStart"));
    });
}
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail"], ()=>{
        resolve(require("./components/user/UserDetail"));
    });
}
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit"], ()=>{
        resolve(require("./components/user/UserEdit"));
    });
}

/*import User from './components/user/User'
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";*/

export const routes = [
    {
        path: '',
        name: 'homePage',
        components: {
            default: Home,
            'header-top': Header
            }
        },
    {
        path: '/user',
        components: {
            default: User, 'header-top': Header
        },
        name: 'userPage',
        children: [
            { path:'', component: UserStart, name: 'userStartPage' },
            { path:':id', component: UserDetail, name: 'UserDetailPage' },
            { path:':id/edit', component: UserEdit, name: 'UserEditPage' }
        ],
        // Guard Hook functions dummy
        beforeEnter: (to,from,next) => {
            console.log("page level control");
            next(); // typing "false"" in next, prohibits accessing this page
        }
    },
    {
        path: '*',
        name: 'error',
        component: Error
    }
];