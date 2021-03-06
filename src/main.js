// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
