const TEMPLATE = '' +
  '<a class="card-a" href="{0}"><div class="card"><div class="card-blend"></div>' +
  '   <h1 class="title">{1}</h1>' +
  '   <h1 class="sub-title">{2}</h1>' +
  '   <div class="desc">{3}</div>' +
  '   <div class="icon">{4}</div>' +
  '   <div class="icon">{5}</div>' +
  '   <div class="icon">{6}</div>' +
  '</div></a>';


class GithubCard extends HTMLElement {

  get author() {
    return this.hasAttribute('author');
  }

  set author(val) {
    if (val) this.setAttribute('author', val);
    else this.removeAttribute('author');
  }

  get repo() {
    return this.hasAttribute('repo');
  }

  set repo(val) {
    if (val) this.setAttribute('repo', val);
    else this.removeAttribute('repo');
  }

  updateInnerHTML(json) {
    this.innerHTML = String.format(TEMPLATE,
      json.html_url,
      json.name, json.full_name,
      json.description,
      json.language, json.stargazers_count, json.forks_count);
  }

  constructor() {
    super();

    fetch(String.format('https://api.github.com/repos/{0}/{1}',
      this.getAttribute('author'), this.getAttribute('repo')))
      .then(response => response.json())
      .then(json => this.updateInnerHTML(json));

    this.innerHTML = 'Loading content.';
  }

}

window.customElements.define('github-card', GithubCard);
