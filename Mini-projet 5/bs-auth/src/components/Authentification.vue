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
          mail: 'test@test.com',
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
          this.$router.push('/skills');}
  
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