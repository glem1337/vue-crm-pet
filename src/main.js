import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loader from "./components/app/Loader.vue";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyCX5Mnw4Dk7pN2gvpU5Ck9HgU7NOJxHpiw",
  authDomain: "vue-crm-30e3b.firebaseapp.com",
  databaseURL: "https://vue-crm-30e3b.firebaseio.com",
  projectId: "vue-crm-30e3b",
  storageBucket: "vue-crm-30e3b.appspot.com",
  messagingSenderId: "747950958653",
  appId: "1:747950958653:web:54375ad9697301918aa254"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
