import Vue from 'vue';
import HcLogin from './hcLogin.vue';

HcLogin.newInstance = function () {
    const Instance = new Vue({
        data: {
            action: 'login',
        },
        render: h => h(HcLogin),
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
}

export default HcLogin;
