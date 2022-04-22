let certificatesDiv = document.getElementById('Certificates');

certificateImageNames.forEach(value => {
  let imgTag = document.createElement('img');
  imgTag.src = "img/certs/" + value;
  certificatesDiv.appendChild(imgTag);
})
