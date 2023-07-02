/**Implemente uma página web que contenha uma lista vertical de imagens, quando o usuário chegar no final da página (scroll) mais imagens aleatórias devem ser carregadas por meio de uma requisição Ajax.

Dicas de implementação
Para implementar uma página web com uma lista vertical de imagens que carregam mais imagens por meio de uma requisição Ajax, você pode seguir os seguintes passos. Entretanto, lembre-se que esses passos são apenas uma referência para você ter ideias de onde iniciar, assim, não confie nos trechos de códigos dos exemplos:

1) Crie uma página HTML com a estrutura básica, incluindo um contêiner para a lista de imagens, exemplo:

2) Adicione um arquivo JavaScript externo para manipular a página e carregar as imagens dinamicamente, por exemplo:

3) Crie um arquivo JSON que irá armazenar a lista de imagens, por exemplo:

4) Modifique o trecho abaixo para carregar as imagens proveniente do json:
    if (ajax.readyState == 4 && ajax.status == 200) {
        var divImagens = document.getElementById("imagens");
        divImagens.innerHTML += ajax.responseText;
        carregando = false;
        pagina++;*/

        var pagina = 1;
        var carregando = false;
        
        function carregarImagens() {
          if (carregando) {
            return;
          }
          carregando = true;
          var url = "data.json";
          var ajax = new XMLHttpRequest();
          ajax.open("GET", url, true);
          ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
              var images = JSON.parse(ajax.responseText);
              var divImagens = document.getElementById("images");
              for (const image of images.images) {
                  var img = document.createElement("img");
                  img.src = image.imagemUrl;
                  divImagens.appendChild(img);
              }
              carregando = false;
              pagina++;
          }
          };
          ajax.send();
        }
        
        window.onscroll = function(ev) {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            carregarImagens();
          }
        };