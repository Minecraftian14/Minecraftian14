class AutoTitleButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = String.format('<a href="{0}">{1}</a>', this.getAttribute('href'), this.getAttribute('href').substr(1));
  }
}

window.customElements.define('at-butt', AutoTitleButton);
