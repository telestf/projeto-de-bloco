import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Alunos from './components/Alunos';
import Professores from './components/Professores';
import Nucleos from './components/Nucleos';
<<<<<<< HEAD
import DetalharAlunos from './components/DetalharAlunos';
import EditarAluno from './components/EditarAluno';
=======
import AlunosId from './components/AlunosId';
import ProfessoresId from './components/ProfessoresId';
import NucleosId from './components/NucleosId';
>>>>>>> 901d84ae9132e3ac6106a99a13040907af338fc0

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
<<<<<<< HEAD
            name: 'detalharAlunos',
            component: DetalharAlunos,
            children: [
                {
                    path: 'edit',
                    name: 'edit-aluno',
                    component: EditarAluno
                }
            ]
=======
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
>>>>>>> 901d84ae9132e3ac6106a99a13040907af338fc0
        }
    ]

});