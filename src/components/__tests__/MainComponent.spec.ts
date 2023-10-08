import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainComponent from '@/components/main/MainComponent.vue'

describe('MainComponent', () => {

  const wrapper = mount(MainComponent)

  const sharedLogoText = wrapper.get('[data-test="shared-logo-text"]')
  const sharedUserText = wrapper.get('[data-test="shared-user-text"]')

  it('Check logo text', () => {
    expect(sharedLogoText.text()).toBe('Жилфонд')
  })
  it('Check user text', () => {
    expect(sharedUserText.text()).toBe('Пользователь')
  })
})
