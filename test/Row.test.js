const expect = chai.expect
import Vue from "vue"
import Row from "../src/Row"
import Col from "../src/Col"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Row", () => {
  it("存在.", () => {
    expect(Row).exist
  })
  it("接受 gutter 属性", (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it("接受 align 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Row({propsData: {align: 'right'}}).$mount(div)
    expect(getComputedStyle(vm.$el).justifyContent).to.eq('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})