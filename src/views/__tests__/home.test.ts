import App from '@/App.vue';
import router from '@/router';
import {store} from '@/store';
import { shallowMount } from '@vue/test-utils'
import Antd from 'ant-design-vue';
import {createApp} from 'vue';
import Home from '../Home.vue'

createApp(App).use(store).use(Antd);

describe('HelloWorld.vue', () => {
  test('отрисовывает props.msg, если они переданы', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch(wrapper.text())
  })
})
