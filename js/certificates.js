let certs = document.getElementById('Certificates');

// document.createElement('img')

// let space = document.createElement('img')
// space.src = "img/certs.idx"

let request = new XMLHttpRequest();
request.open("GET", "img/certs.idx", true);
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    if (request.status === 200 || request.status == 0) {
      let indices_text = request.responseText;
      console.log(indices_text)
    }
  }
}
request.send(null);
