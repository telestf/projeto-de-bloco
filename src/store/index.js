import Vuex from "vuex";
import Vue from "vue";
import alunos from "./modules/alunos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alunos
  }
});
