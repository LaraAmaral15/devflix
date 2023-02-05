function listaCanais() {
  var canais = {
    rafa: {
      nome: "Rafaella Ballerini",
      imagem: "https://www.alura.com.br/assets/img/imersoes/rafa-instructor.png",
      urlCanal: "https://www.youtube.com/@rafaellaballerini"
    },
    codigoFonte: {
      nome: "Código Fonte TV",
      imagem:  "https://yt3.googleusercontent.com/ytc/AL5GRJX5l0qHrRdXPAAmUQRKUR4YD-AXJuau6KkWPF5e5g=s900-c-k-c0x00ffffff-no-rj",
      urlCanal: "https://www.youtube.com/@codigofontetv"
    },
    alura: {
      nome: "Alura Cursos Online",
      imagem: "https://pbs.twimg.com/profile_images/1597421774676828165/m-BUQtop_400x400.jpg",
      urlCanal: "https://www.youtube.com/@Alura"
    },
    rocketseat: {
      nome: "Rocketseat",
      imagem: "https://yt3.googleusercontent.com/ytc/AL5GRJUUOa0zwnz4BmrdAe0ZvJIGxbS8b62t-AFMz_4sFw=s900-c-k-c0x00ffffff-no-rj",
      urlCanal: "https://www.youtube.com/@rocketseat"
    },
    guanabara: {
      nome: "Curso em Vídeo",
      imagem: "https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg",
      urlCanal: "https://www.youtube.com/@CursoemVideo"
    },
    attekita: {
      nome: "Attekita Dev",
      imagem: "https://media.licdn.com/dms/image/D4D03AQGvJS2XBMFCqA/profile-displayphoto-shrink_800_800/0/1669376205072?e=1680739200&v=beta&t=j-X97ZHaEGi0cq6paKn1o_cwXiqxujqJ5fakv4rHTD4",
      urlCanal: "https://www.youtube.com/@attekitadev"
    },
    mayk: {
      nome: "Mayk Brito",
      imagem: "https://yt3.googleusercontent.com/4gMLy6yM9XUUZCvyObXHMkVTqn-fdmOGkznbseBylxOMIawmlhVy1-tUCLX9pjCOFoyIylfpzNg=s900-c-k-c0x00ffffff-no-rj",
      urlCanal: "https://www.youtube.com/@MaykBrito"
    }
  }

  var content = document.getElementById("content");

  for (var canal in canais) {
    content.innerHTML +=
    '<div class="card">' +
      '<h2>' + canais[canal].nome + '</h2>' +
      '<a href=" ' + canais[canal].urlCanal + ' "target=`_blank`>' +
        '<img src=" '+ canais[canal].imagem + ' "/>' +
      '</a>' +
    '</div>'    
  }
}

listaCanais();

ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700
}).reveal(`
  .container,
  .card
`)