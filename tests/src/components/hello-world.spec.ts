import { shallowMount } from '@vue/test-utils';
import Component from '@/components/hello-world.vue';

describe('tests for hello-world component', () => {
  it('find root element', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.findAll('.root').length).toEqual(1);
  });
});
