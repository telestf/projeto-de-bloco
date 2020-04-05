import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Alunos from './components/Alunos';
import Videos from './components/Videos';
import DetalharAlunos from './components/DetalharAlunos';
import EditarAluno from './components/EditarAluno';
import Login from './components/Login';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/alunos',
            name: 'alunos',
            component: Alunos
        },
        {
            path: '/videos',
            name: 'videos',
            component: Videos
        },
        {
            path: '/alunos/:id',
            name: 'detalharAlunos',
            component: DetalharAlunos,
            children: [
                {
                    path: 'edit',
                    name: 'edit-aluno',
                    component: EditarAluno
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]

});