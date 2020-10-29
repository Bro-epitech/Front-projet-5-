<template>
  <div class="auth">
    <h1>Bienvenue sur la page d'authentification</h1>
      Email: <br> <input v-model="mail" placeholder=""><br>
      Mot de passe: <br> <input type="password" v-model="password" placeholder=""><br><br>
    <button  v-on:click="signIn">Se connecter</button> 
  </div>
</template>
<script>
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

export default{
  data: function() {
      return{
          mail: '',
          password:'',
        }
    },
    methods: {
      ValidateEmail(mail){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
      },
      signIn(){
        if (this.ValidateEmail(this.mail)){
          let hash = bcrypt.hashSync(this.password,salt)
          let compare = bcrypt.compareSync(this.password,hash);
          /*Stocker le token dans un local storage pour 30 jours: 
          localStorage.setItem('token',valeur_du_token_réponse)
          var hours = 720; // Reset when storage is more than 24hours
          var now = new Date().getTime();
          var setupTime = localStorage.getItem('setupTime');
          if (setupTime == null) {
            localStorage.setItem('setupTime', now)
          } else {
            if(now-setupTime > hours*60*60*1000) {
              localStorage.clear()
              localStorage.setItem('setupTime', now);
            }
                  }*/
  
        else {
              alert("Veuillez rentrer un email au format correct");
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
