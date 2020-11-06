import App from '@/App.vue';
import router from '@/router';
import {store, useStore} from '@/store';
import {ActionTypes} from '@/store/modules/alert/actions';
import {mount, shallowMount} from '@vue/test-utils';
import Antd from 'ant-design-vue';
import {createApp} from 'vue';
import Home from '../Home.vue'


// @ts-ignore
// const app = createApp(App).use(store).use(router).use(Antd);


describe('HelloWorld.vue',  () => {
  test('отрисовывает props.msg, если они переданы', async () => {
    // @ts-ignore
    const wrapper = mount(Home)
    // await wrapper.find('.btn').trigger('click')
    console.log(wrapper.html());
    // let store = useStore()
    // console.log(await store.dispatch(ActionTypes.fetchData));
  })
})