import axios from "axios";

const state = {
  alunos: []  
};

const getters = {
  allAlunos: state => state.alunos,
  alunoById: (state) => (id) => (state.alunos.filter(a => a.id == id))[0]
};

const actions = {
  deleteAluno({ commit }, id) {
    commit("removeAluno", id);
  },
  getAlunos ({ commit }) {
    axios
    .get("json/alunos.json")
    .then(response => {
      commit('getAlunos', response.data.alunos);
    })
  },
  adicionarAluno({ commit }, aluno_novo) {
    const ultima_posicao = state.alunos[state.alunos.length -1]
    const novo_id = parseInt(ultima_posicao.id)+1
    const response = {
      "id": novo_id,
      "nome": aluno_novo.nome,
      "responsavel": aluno_novo.responsavel,
      "endereco": {
        "rua": aluno_novo.endereco.rua,
        "numero": aluno_novo.endereco.numero,
        "complemento": aluno_novo.endereco.complemento
      },
      "email": aluno_novo.email,
      "telefone": {
        "numero": aluno_novo.telefone.numero,
        "tipo": aluno_novo.telefone.tipo
      },
      "mensalidadePaga": aluno_novo.mensalidadePaga
    }
    commit("novoAluno", response);
  },
  editarAluno({ commit }, editAln) {
    commit("editarAluno", editAln);
  }
};

const mutations = {
  getAlunos: (state, alunos) => state.alunos = alunos,
  removeAluno: (state, id) =>
    (state.alunos = state.alunos.filter(a => a.id !== id)),
  novoAluno: (state, aluno) => state.alunos.push(aluno),
  editarAluno: (state, editAln) => {
    const index = state.alunos.findIndex(a => a.id === editAln.id)
    if (index !== -1) {
      state.alunos.splice(index, 1, editAln)
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}