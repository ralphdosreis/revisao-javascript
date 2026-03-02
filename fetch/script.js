const requisicao = fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML = jsonBody[0].none;
    console.log(jsonBody);
  });

console.log(requisicao);
