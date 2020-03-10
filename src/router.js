import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Alunos from './components/Alunos';
import Professores from './components/Professores';
import Nucleos from './components/Nucleos';
import AlunosId from './components/AlunosId';
import ProfessoresId from './components/ProfessoresId';
import NucleosId from './components/NucleosId';

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
            path: '/professores',
            name: 'professores',
            component: Professores
        },
        {
            path: '/nucleos',
            name: 'nucleos',
            component: Nucleos
        },
        {
            path: '/alunos/:id',
            name: 'alunosId',
            component: AlunosId
        },
        {
            path: '/professores/:id',
            name: 'professoresId',
            component: ProfessoresId
        },
        {
            path: '/nucleos/:id',
            name: 'nucleosId',
            component: NucleosId
        }
    ]

});