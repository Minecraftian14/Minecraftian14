class LinkedBadge extends HTMLElement {

  get link() {
    return this.hasAttribute('link');
  }

  set link(val) {
    if (val) this.setAttribute('link', val);
    else this.removeAttribute('link');
  }

  getLink() {
    return this.getAttribute('link');
  }

  get text() {
    return this.hasAttribute('text');
  }

  set text(val) {
    if (val) this.setAttribute('text', val);
    else this.removeAttribute('text');
  }

  getText() {
    return this.getAttribute('text');
  }

  get icon() {
    return this.hasAttribute('icon') || this.hasAttribute('text');
  }

  set icon(val) {
    if (val) this.setAttribute('icon', val);
    else this.removeAttribute('icon');
  }

  getIcon() {
    let val = this.getAttribute('icon');
    console.log('val=' + val);
    if (val != null) return this.getAttribute('icon');
    return this.getText();
  }

  get color() {
    return this.hasAttribute('color');
  }

  set color(val) {
    if (val) this.setAttribute('color', val);
    else this.removeAttribute('color');
  }

  getColor() {
    return this.getAttribute('color');
  }

  constructor() {
    super();

    this.innerHTML = String.format('' +
      '<a href="{0}">\n' +
      ' <img src="https://img.shields.io/static/v1?label=%20&message={1}&color={2}&logo={3}&logoColor=white&style=for-the-badge">' +
      '</a>'
      , this.getLink(), this.getText(), this.getColor(), this.getIcon());
  }
}

window.customElements.define('linked-badge', LinkedBadge);
