var app = new Vue({
  el: "#app",
  data: {
    perguntas: [],
    perguntasExibidas: [],
    indice: 0,
    indiceResposta: 0,
    vidas: 3
  },
  methods: {
    TrocarIndice: function() {
      this.indice = this.indice + 1;
    },
    enviarResposta: function() {
      console.log(typeof this.indiceResposta);
      console.log(typeof this.pergunta["opc"]);

      if (Number(this.indiceResposta) != this.pergunta["opc"]) {
        this.vidas = this.vidas - 1;
      }
      this.TrocarIndice();
    },
    jogarNovamente: function() {
      this.indiceResposta = 0;
      this.indice = 0;
      this.vidas = 3;
    }
  },
  computed: {
    pergunta: function() {
      return this.perguntas[this.indice];
    }
  },
  mounted: function() {
    fetch("./db.json").then(resposta => {
      resposta.json().then(json => {
        this.perguntas = json;
      });
    });
  }
});
