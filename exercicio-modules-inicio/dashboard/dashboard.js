import {header}  from '../layouts/header.js';
import {sideBar} from '../layouts/sidebar.js';
import {issues}  from '../components/issues.js';
import {users}   from '../components/users.js';

export const dashboard = () => {
    header();
    sideBar();
    issues();
    users();
    console.log('Foi instanciado o dashboard');

}