import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Alunos from './components/Alunos';
import Professores from './components/Professores';
import Nucleos from './components/Nucleos';
import DetalharAlunos from './components/DetalharAlunos';
import EditarAluno from './components/EditarAluno';

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
            name: 'detalharAlunos',
            component: DetalharAlunos,
            children: [
                {
                    path: 'edit',
                    name: 'edit-aluno',
                    component: EditarAluno
                }
            ]
        }
    ]

});