import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import MainSidebar from '@/components/main/MainSidebar.vue'

describe('MainSidebar left', () => {
    const wrapper = mount(MainSidebar,
        {
            props: {
                side: 'left'
            }
        }
    )

    it('Check class of sidebar classes', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes()).toContain('main__sidebar')
    })
    it('Check class of sidebar left side classes with left props side', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes('main__sidebar_left')).toBe(true)
    })
    it('Check class of sidebar right side classes with left props side', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes('main__sidebar_right')).toBe(false)
    })
})

describe('MainSidebar right', () => {
    const wrapper = mount(MainSidebar,
        {
            props: {
                side: 'right'
            }
        }
    )

    it('Check class of sidebar classes', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes()).toContain('main__sidebar')
    })
    it('Check class of sidebar left side classes with left props side', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes('main__sidebar_right')).toBe(true)
    })
    it('Check class of sidebar right side classes with left props side', () => {
        expect(wrapper.get('[data-test="main-sidebar"]').classes('main__sidebar_left')).toBe(false)
    })
})