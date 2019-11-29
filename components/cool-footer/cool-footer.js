import { style } from './style.js'

class Footer extends HTMLElement {
  constructor(){
    super()
    this.root = this.attachShadow({mode : 'open'})
  }

  connectedCallback(){
    const text = this.getAttribute('text')
    
    if(text)
      this.render({text})
  }

  set data(data){
    this.render(data)
  }

  render(data){
    this.root.innerHTML = /*html*/`
      ${style}

      <div>
        <p>${data.text}</p>
      </div>
      `
  }
}

customElements.define('cool-footer', Footer)