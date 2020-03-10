const getBooksData = () => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=FRASE' ;
  return fetch(url,{method: 'GET'})
  .then((response) => {
    return response.json();
    // console.log(response, 'response, mi primer valor que voy a obtener')
  })
  .catch((error) => console.log(error))
}

const render = (response) => {
  const listCards = document.getElementById('listCards');

  const card = response.items.map((item) => {
    console.log(item)
    return`
      <div class="card" style="width: 18rem;">
        <img src=${item.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="Portada">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  })

  listCards.innerHTML = card;
}

// mando a llamar la funcion
getBooksData()
// response, es la respuesta del valor anterior pero con el formato que necesitamos.
.then((response) => {
  // console.log(response, 'valor obtenido con el formato que necesitamos')
  render(response)
});