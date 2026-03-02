const requisicao = fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML = jsonBody[0].none;
    console.log(jsonBody);
  });

console.log(requisicao);

// Alternativa
fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

// Post
const data = {
  id: 'andrerafa',
  nome: 'Andre',
  email: 'andrerafa@origamid.com',
  senha: '123456',
  cep: '123456',
  rua: 'Ali Perto',
  numero: '230',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'Rio de Janeiro',
};

fetch('https://ranekapi.origamid.dev/wp-json/api/usuario', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
  body: JSON.stringify(data),
});
