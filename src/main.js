import Vue from 'vue'

import * as firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
};
firebase.initializeApp(firebaseConfig);
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Default from './layouts/Default.vue'
Vue.component('default-layout', Default);

firebase.auth().onAuthStateChanged(user => {
    new Vue({
        router,
        store,
        render: function (h) { return h(App) }
    }).$mount('#app')
});