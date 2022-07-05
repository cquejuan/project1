let db = {
  storedFiles: [
    {
      id: 1656909710233,
      name: "file1",
      signature: "SHA-256 Signed",
      digest: "SHA-256 Signed",
      signed: "jwk",
      verify: {
        author: "https://pk.mtpk.io/",
        public: "jwk"
      }
    }
  ],
  keys: [
    {
      id: 1656909673600,
      digest: "SHA-256",
      name: "My Key",
      type: "AES-CBC",
      wrapped: 0,
      location: "Local",
      verify: {
        author: "User",
        public: "jwk"
      },
      age: 1656909673600
    }
  ],
  currentSessionKey: ''
}

/***********************************************************
Page Controller // Nav Controller // Page Loader
***********************************************************/
const main = 'main'
addEventListener('hashchange', event => {
  hashAction();
});
function hashAction() {
  const x = (location.hash).substr(1);
  y = document.getElementById('sidebarMenu').querySelectorAll('a')
  y.forEach(link => {
    if (location.hash === link.hash) {
      link.setAttribute('class', 'nav-link active')
      link.setAttribute('aria-current', 'page')
    } else {
      link.setAttribute('class', 'nav-link')
      link.setAttribute('aria-current', '')
    }
  });
  if (x === '' || x === 'dashboard' || x === 'home' || x === 'dash') {
    dashboard(main)
  } else if (x === 'keys') {
    keysPage(main)
  } else if (x === 'encrypt') {

  } else if (x === 'sign') {

  }
};

hashAction();

/***********************************************************
Pages // HTML build functions
***********************************************************/
function dashboard(target) {
  tDiv = keyTable();
  document.getElementById(target).innerHTML = `
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Dashboard</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Shares</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Exports</button>
      </div>
    </div>
  </div>
<h1 class="h2">Crypto Keys</h1>
`
  document.getElementById(target).appendChild(tDiv)
}
function keysPage(target) {
  tDiv = keyTable();
  document.getElementById(target).innerHTML = `
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Crypto Keys</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <button type="button" onclick="createKeyModal()" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#model-popup">Create</button>
      </div>
      <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Shares</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Exports</button>
      </div>
    </div>
  </div>
  `
  document.getElementById(target).appendChild(tDiv)
}
function keyTable() {
  const THeaders = ['Age', 'Name', 'Location', 'Signature', 'Public Key', 'Options']
  tDiv = document.createElement('div')
  tDiv.setAttribute('class', 'table-responsive')
  table = document.createElement('table')
  table.setAttribute('class', 'table table-striped table-sm')
  tDiv.appendChild(table)
  head = document.createElement('thead')
  y = document.createElement('tr')
  for (i = 0; i < THeaders.length; i++) {
    z = document.createElement('th')
    z.setAttribute('scope', 'col')
    z.innerText = THeaders[i]
    y.appendChild(z)
  }
  head.appendChild(y)
  table.appendChild(head)
  body = document.createElement('tbody')
  for (i = 0; i < db.keys.length; i++) {
    key = db.keys[i]

    tr = document.createElement('tr')
    td = `
  <td>${key.age}</td>
  <td>${key.name}</td>
  <td>${key.location}</td>
  <td>Signed By ${key.verify.author}</td>
  <td>${key.digest}</td>
  <td>Export | Delete</td>
  `
    tr.innerHTML = td;
    body.appendChild(tr)
    table.appendChild(body)
  }
  return tDiv;
}

