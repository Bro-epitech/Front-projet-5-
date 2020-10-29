<template>
  <div class="up">
    <h1>Bienvenue sur la page d'inscription</h1>
      Email: <br> <input v-model="mail" placeholder=""><br>
      Choisir mot de passe: <br> <input type="password" v-model="passwordA" placeholder=""><br>
      Entrer à nouveau le mot de passe: <br> <input type="password" v-model="passwordB" placeholder=""><br><br>
    <button v-on:click="signUp">S'inscrire</button>
  </div>
</template>
<script>
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

export default{
  data: function() {
      return{
          mail: '',
          passwordA:'',
          passwordB:'',
        }
    },
    methods: {
      ValidateEmail(mail){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
      },
      signUp(){
        if (this.ValidateEmail(this.mail) && this.passwordA == this.passwordB && this.passwordA != ''){
          alert("ça marche")
          }

        else {
              alert("Il y a une erreur. Vérifiez bien le format de votre email et veuillez choisir un mot de passe !");
              } 
        /*axios
        .get("route")
        .then(response => this.responseUser = response.data.data)
        this.userID = this.responseUser.id;
        this.affichage = !(this.userID != 0);
        this.active = this.userID != 0;*/
      },
  }
};
</script>