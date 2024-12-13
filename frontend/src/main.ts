import './styles.css';

import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
import store from './store';
import './assets/styles/variables.css';
// import ConfirmationComponent from './components/ConfirmationComponent.vue';

const app = createApp(App);

// app.component('ConfirmationComponent', ConfirmationComponent);
app.use(router);
app.use(store);

app.mount('#root');
