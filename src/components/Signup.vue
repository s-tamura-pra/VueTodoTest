//サインアップ用ページを作成(新規作成)
<template>
    <div class = "signup">
        <h2>Sign Up</h2>
        <!-- 登録フォーム -->
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button @click="signUp">登録</button>

        <!-- サインインへの遷移ボタン -->
        <p>
            アカウントをすでにお持ちの方
            <router-link to="/signin">sign in now</router-link>
        </p>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          alert("アカウントを作成しました", user.email);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<style>
</style>
