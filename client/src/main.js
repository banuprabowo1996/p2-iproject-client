import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

// setup fake backend
import { fakeBackend } from './_helpers';
fakeBackend();

import { initFacebookSdk, jwtInterceptor, errorInterceptor, router } from './_helpers';

import App from './App.vue'
// import router from './router'

// enable interceptors for http requests
jwtInterceptor();
errorInterceptor();

// wait for facebook sdk to start app
initFacebookSdk().then(startApp);

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.mount('#app')
