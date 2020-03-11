<template>
  <div class="professores">
    <h1>Professores</h1>
    <b-list-group flush> 
      <b-list-group-item button v-for="professor in professoresOrdenados" :key="professor.id">
        {{ professor.id }} - {{ professor.nome }}
      </b-list-group-item>
    </b-list-group>  
  </div>
</template>

<script>
export default {
  name: 'Professores',
  data(){
    return {
      professores: [
        {
          "id": 1,
          "nome": "Leanne Graham",
          "email": "Sincere@april.biz",
          "telefone": "2199999991",
          "endereco": {
            "rua": "Rua Star",
            "numero": "123",
            "complemento": "Apto 112",
            "cep": "20220021"
          }
        },
        {
          "id": 2,
          "nome": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "telefone": "2199999992",
          "endereco": {
            "rua": "Rua Bourne",
            "numero": "213",
            "complemento": "Apto 204",
            "cep": "20220022"
          }
        },
          {
          "id": 3,
          "nome": "Clementine Bauch",
          "email": "Nathan@yesenia.net",
          "telefone": "2199999993",
          "endereco": {
            "rua": "Rua Ice",
            "numero": "312",
            "complemento": "Apto 303",
            "cep": "20220023"
          }
        },
          {
          "id": 4,
          "nome": "Patricia Lebsack",
          "email": "Julianne.OConner@kory.org",
          "telefone": "2199999994",
          "endereco": {
            "rua": "Rua Lalaland",
            "numero": "404",
            "complemento": "Casa 4",
            "cep": "20220024"
          }
        },
          {
          "id": 5,
          "nome": "Chelsey Dietrich",
          "email": "Lucio_Hettinger@annie.ca",
          "telefone": "2199999995",
          "endereco": {
            "rua": "Rua Lalaland",
            "numero": "501",
            "complemento": "Sobrado 5",
            "cep": "20220020"
          }
        },
          {
          "id": 6,
          "nome": "Dennis Schulist",
          "email": "Karley_Dach@jasper.info",
          "telefone": "2199999996",
          "endereco": {
            "rua": "Rua Plate",
            "numero": "605",
            "complemento": "Subsolo 6",
            "cep": "20220026"
          }
        },
          {
          "id": 7,
          "nome": "Kurtis Weissnat",
          "email": "Telly.Hoeger@billy.biz",
          "telefone": "2199999997",
          "endereco": {
            "rua": "Rua Porche",
            "numero": "702",
            "complemento": "Apto 1",
            "cep": "20220027"
          }
        },
          {
          "id": 8,
          "nome": "Nicholas Runolfsdottir V",
          "email": "Sherwood@rosamond.me",
          "telefone": "2199999998",
          "endereco": {
            "rua": "Rua Ferrari",
            "numero": "817",
            "complemento": "Apto 802",
            "cep": "20220028"
          }
        },
          {
          "id": 9,
          "nome": "Glenna Reichert",
          "email": "Chaim_McDermott@dana.io",
          "telefone": "2199999999",
          "endereco": {
            "rua": "Rua Musk",
            "numero": "911",
            "complemento": "Apto 904",
            "cep": "20220029"
          }
        },
          {
          "id": 10,
          "nome": "Clementina DuBuque",
          "email": "Rey.Padberg@karina.biz",
          "telefone": "2199999910",
          "endereco": {
            "rua": "Rua Hub",
            "numero": "1011",
            "complemento": "Casa 10",
            "cep": "20220030"
          }
        }
      ]
    }
  },
  computed: {
    professoresOrdenados: function(){
      let professoresOrd = this.professores
      professoresOrd.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });
      return this.professores;    
    }    
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
