const TEMPLATE = '' +
  '<a class="card-a" href="{0}"><div class="card"><div class="card-blend"></div>' +
  '   <h1 class="title">{1}</h1>' +
  '   <h1 class="sub-title">{2}</h1>' +
  '   <div class="desc_holder">' +
  '      <div class="desc">{3}</div>' +
  '      <div class="i_holder"><i class="devicon-{5}-plain colored"></i></div>' +
  '   </div>' +
  '   <div class="icon_holder">' +
  '      <div class="icon major_language"><img src="https://img.shields.io/github/languages/top/{2}?style=for-the-badge" alt="failed to load image for {2}"></div>' +
  '      <div class="icon stars"><img src="https://img.shields.io/badge/Stars-{6}-yellow?style=for-the-badge"></div>' +
  '      <div class="icon forks"><img src="https://img.shields.io/badge/Forks-{7}-green?style=for-the-badge"></div>' +
  '   </div>' +
  '</div></a>';
/*https://img.shields.io/badge/Stars-MESSAGE-yellow*/
// '   <div class="icon stars"><a class="github-button" href="{0}" data-icon="octicon-star" data-size="large" aria-label="Star on GitHub">Stars: {6}</a></div>' +

let responsex = null;
let hasRequestBeenSent = false;
let live_cards = [];

class GithubCard extends HTMLElement {

  get repo() {
    return this.hasAttribute('repo');
  }

  set repo(val) {
    if (val) this.setAttribute('repo', val);
    else this.removeAttribute('repo');
  }

  get override_name() {
    return this.hasAttribute('override_name');
  }

  set override_name(val) {
    if (val) this.setAttribute('override_name', val);
    else this.removeAttribute('override_name');
  }

  updateInnerHTML(resp) {
    let json = resp.filter(value => value.name === this.getAttribute('repo'));
    json = json[0];
    if (this.hasAttribute('override_name')) json.name = this.getAttribute('override_name');
    this.innerHTML = String.format(TEMPLATE,
      json.html_url,
      String.makeTitlable(json.name), json.full_name,
      String.replaceAll(json.description, "  ", "<br /><br />"),
      json.language, String.replaceAll(json.language.toLowerCase(), "+", "plus"),
      json.stargazers_count, json.forks_count);
  }

  constructor() {
    super();
    live_cards.push(this);

    if (responsex === null) {
      if (hasCookie(GITHUB_DATA)) {
        responsex = JSON.parse(getCookie(GITHUB_DATA));
        this.updateInnerHTML(responsex);
      } else if (!hasRequestBeenSent) {
        hasRequestBeenSent = true;
        console.log("RESPONSE REQUEST SENT :(");

        fetch('https://api.github.com/users/Minecraftian14/repos?per_page=100')
          .then(value => value.json())
          .then(value => {
            responsex = value;
            setCookie(GITHUB_DATA, JSON.stringify(value), PERMANENT);
            live_cards.forEach(card => card.updateInnerHTML(value));
            // this.updateInnerHTML(value)
          })
      }
    } else {
      this.updateInnerHTML(responsex);
    }
  }
}

window.customElements.define('github-card', GithubCard);
