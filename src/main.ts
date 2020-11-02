import {MutationTypes} from '@/store/modules/alert/mutations';
import TypesAlert from '@/store/modules/alert/types';
import {createApp} from 'vue'
import App from './App.vue'
import {handlerError, handlerWarn} from './config'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import router from './router'
import {store} from './store'

const app = createApp(App).use(store).use(router).use(Antd);
// app.config.productionTip = false;
app.mount('#app')

app.config.errorHandler = (err: any, vm: any, info: any) => {
  handlerError(err, vm, info)
}
app.config.warnHandler = (msg: any, vm: any, trace: any) => {
  handlerWarn(msg, vm, trace)
}

window.addEventListener('error', (event) => {
  store.commit(MutationTypes.SetItems, {
    message: '',
    description: event.error,
    type: TypesAlert.error
  })
})

window.addEventListener('unhandledrejection', (event) => {
  store.commit(MutationTypes.SetItems, {
    message: '',
    description: event.reason,
    type: TypesAlert.error
  })
})
