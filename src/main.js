import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Tree from './components/tree/index';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Tree)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})