class PostDiv extends HTMLElement {

  static index = 0;

  get backTitle() {
    return this.hasAttribute('backTitle');
  }

  get title() {
    return this.hasAttribute('id');
  }

  set backTitle(val) {
    if (val) this.setAttribute('backTitle', val);
    else this.removeAttribute('backTitle');
  }

  set title(val) {
    if (val) this.setAttribute('id', val);
    else this.removeAttribute('id');
  }

  resolveBackTitle() {
    if (this.hasAttribute('backTitle')) return '<i class="back_title">' + this.getAttribute('backTitle') + '</i>';
    return '';
  }

  constructor() {
    super();

    this.innerHTML = String.format('' +
      '<div class="post post-{3}"><div class="blend post-{3}"></div>' +
      '   {0}' +
      '   <h1 class="title">{1}</h1>' +
      '   {2}' +
      '</div>'
      , this.resolveBackTitle(), this.getAttribute('id'), this.innerHTML,
      PostDiv.index++ % 2 === 0 ? 'white' : 'black');
  }
}

window.customElements.define('post-div', PostDiv);
