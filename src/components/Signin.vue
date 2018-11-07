//サインイン用ページを作成(新規作成)
<template>
    <div id = "signin">
        <h2>Sign in</h2>

        <input type="email" placeholder="email" v-model="email" style="margin:10px;">
        <input type="password" placeholder="password" v-model="password" style="margin:10px;">
        <button style="margin:10px;" @click="signIn">サインイン</button>
        <br>
        <br>
        <button @click="signInWithGoogle">Googleアカウントでサインイン</button>

        <p>
        アカウントをお持ちではない方
        <router-link to="/signup">新規作成</router-link>
        </p>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインが成功した場合にメインページに遷移させる
          alert("success" + user.email);
          this.$router.push("/");
        })
        .catch(error => {
          // ログインに失敗した場合
          alert(error.message);
        });
    },

    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log(user.data);
          this.$router.push("/");
        })
        .error(error => {
          alert(error.message);
        });
    }
  }
};
</script>


<style>
</style>
