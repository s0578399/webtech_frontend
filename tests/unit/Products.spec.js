import Products from '@/views/Products'
import { mount } from '@vue/test-utils'

describe('Mounted Products', () => {
  const wrapper = mount(Products)
  const div = wrapper.find('div')
  const h3 = wrapper.find('h3')

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders a div', () => {
    expect(div.exists()).toBe(true)
  })
  it('contains correct text', () => {
    expect(h3.text()).toContain('Unsere Produkte')
  })
})
