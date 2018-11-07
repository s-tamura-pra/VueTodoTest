import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import firebase from 'firebase'

Vue.config.productionTip = false


const config = {
  apiKey: "AIzaSyAXvallbIbDNJR1IslQUNK9HXOPpryoFVw",
  authDomain: "vue-todo-pra.firebaseapp.com",
  databaseURL: "https://vue-todo-pra.firebaseio.com",
  projectId: "vue-todo-pra",
  storageBucket: "vue-todo-pra.appspot.com",
  messagingSenderId: "260588013149"
};
firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
