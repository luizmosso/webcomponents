import { style } from './style.js'

class Header extends HTMLElement {
  constructor(){
    super()
    this.root = this.attachShadow({mode : 'open'})
  }

  connectedCallback(){
    const logoUrl = this.getAttribute('logoUrl')
    const title = this.getAttribute('title')
    
    if(title)
      this.render({logoUrl, title})
  }

  set data(data){
    this.render(data)
  }

  render(data){
    this.root.innerHTML = /*html*/`
      ${style}

      <div id='coolHeader'>
        <div id='icon'>☰</div>
        <h2>${data.title}</h2>
        <img src="${data.logoUrl}" />
      </div>
      `
  }
}

customElements.define('cool-header', Header)