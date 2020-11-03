import { shallowMount } from '@vue/test-utils'
import Home from '../Home.vue'

describe('HelloWorld.vue', () => {
  test('отрисовывает props.msg, если они переданы', () => {
    // @ts-ignore
    const wrapper = shallowMount(Home)
    expect(wrapper.find('.home').text()).toContain('check Error')
  })
})
