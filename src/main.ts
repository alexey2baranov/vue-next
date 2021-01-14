import container from '@/di/container';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {createApp} from 'vue';
import App from './App.vue';
import {handlerError, handlerWarn} from './config';

import router from './router';

async function main() {
    const app = createApp(App).use(router).use(Antd);
    app.mount('#app');

    app.config.errorHandler = (err: any, vm: any, info: any) => {
        handlerError(err, vm, info);
    };
    app.config.warnHandler = (msg: any, vm: any, trace: any) => {
        handlerWarn(msg, vm, trace);
    };

    window.addEventListener('error', (event) => {
        const a = {
            message: '',
            description: event.error,
            type: 1//TypesAlert.error
        }
    });

    window.addEventListener('unhandledrejection', (event) => {
        const a = {
            message: '',
            description: event.reason,
            type: 1//TypesAlert.error
        }
    });
    return app;
}


main().then();

router.push({path: window.location.href}).then();



