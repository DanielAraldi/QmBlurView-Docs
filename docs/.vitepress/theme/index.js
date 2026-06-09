import './style.css'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import members from './data/members'

import { VPTeamMembers } from 'vitepress/theme'

const Developers = {
  props: {
    size: { default: 'small' }
  },
  setup(props) {
    return () => h(VPTeamMembers, {
      size: props.size,
      members: members
    })
  }
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Developers', Developers)
  }
}