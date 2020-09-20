var firebaseConfig = {
  apiKey: "AIzaSyDfYs41_cWaC_Nwv_XojjSUAmSduYviEZ0",
  authDomain: "puzzelg-37773.firebaseapp.com",
  databaseURL: "https://puzzelg-37773.firebaseio.com",
  projectId: "puzzelg-37773",
  storageBucket: "puzzelg-37773.appspot.com",
  messagingSenderId: "61368423267",
  appId: "1:61368423267:web:355be9cc7718fc32603956",
  measurementId: "G-JDLQ0KEZRE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
//DIVS
var boardGamesDIV = document.getElementById("boardGamesDiv");
var cardGamesDIV = document.getElementById("cardGamesDiv");
var puzzelsDIV = document.getElementById("puzzelsDiv");

//inf

var BOARD_GAME = [
  { name: "Citadels", price: 85 },
  { name: "7Wonders", price: 90 },
  { name: "Betrrayal", price: 100 },
  { name: "Blood_Rage", price: 95 },
  { name: "Catan", price: 65 },
  { name: "mysterium", price: 85 },
  { name: "terraforming_mars", price: 100 },
  { name: "king_of_tokyo", price: 65 },
  { name: "whitechapel", price: 100 }];

var CARD_GAME = [
  { name: "uno", price: 20 },
  { name: "kittens", price: 40 },
  { name: "muffin-time", price: 55 },
  { name: "trial", price: 60 },
];
var PUZZEL_GAME = [
  { name: "cube ", price: 25 },
  { name: "mascara ", price: 35 },
  { name: "star ", price: 30 },
];

function HTMLBoardProduct(con) {
  let URL = `./board_games/board_game${con}.jpg`;
  let btn = `btnBoard_Game${con}`;
  return `
    <div class="col-md-4" >
      <div class="card mb-4 shadow-sm" >
        <img
          src="${URL}"
          alt="Card img cap"
          class="card-img-top"
          style="height: 14rem"
        />
        <div class="card-body">
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <p class="card-text">${BOARD_GAME[con - 1].name}</p>
          <p class="card-text">Price: ${BOARD_GAME[con - 1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                onclick="cart2('${BOARD_GAME[con - 1].name}','${BOARD_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              ><a href="cart.html">
                Buy</a>
              </button>
              <button
                type="button"
                onclick="cart('${BOARD_GAME[con - 1].name}','${BOARD_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              >
                Add to cart
              </button>
            </div>
            <small class="text-muted">Free shipping </small>
          </div>
        </div>
      </div >
    </div >
    `;
}

function HTMLCardProduct(con) {
  let URL = `./card_games/card_game${con}.jpg`;
  let btn = `btncard_Game${con}`;
  return `
    <div class="col-md-4" >
      <div class="card mb-4 shadow-sm" >
        <img
          src="${URL}"
          alt="Card img cap"
          class="card-img-top"
          style="height: 14rem"
        />
        <div class="card-body">
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <p class="card-text">${CARD_GAME[con - 1].name}</p>
          <p class="card-text">Price: ${CARD_GAME[con - 1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                onclick="cart2('${CARD_GAME[con - 1].name}','${CARD_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              ><a href="cart.html">
                Buy</a>
              </button>
              <button
                type="button"
                onclick="cart('${CARD_GAME[con - 1].name}','${CARD_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              >
                Add to cart
              </button>
            </div>
            <small class="text-muted">Free shipping </small>
          </div>
        </div>
      </div >
    </div >
    `;
}

function HTMLPuzzelProduct(con) {
  let URL = `./puzzels/puzzel${con}.jpg`;
  let btn = `btncard_Game${con}`;
  return `
    <div class="col-md-4" >
      <div class="card mb-4 shadow-sm" >
        <img
          src="${URL}"
          alt="Card img cap"
          class="card-img-top"
          style="height: 14rem"
        />
        <div class="card-body">
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <i style="color: orange" class="fa fa-star"></i>
          <p class="card-text">${PUZZEL_GAME[con - 1].name}</p>
          <p class="card-text">Price: ${PUZZEL_GAME[con - 1].price}.00</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                onclick="cart2('${PUZZEL_GAME[con - 1].name}','${PUZZEL_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              ><a href="cart.html">
                Buy</a>
              </button>
              <button
                type="button"
                onclick="cart('${PUZZEL_GAME[con - 1].name}','${PUZZEL_GAME[con - 1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary"
              >
                Add to cart
              </button>
            </div>
            <small class="text-muted">Free shipping </small>
          </div>
        </div>
      </div >
    </div >
    `;
}

function animation() {
  const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  });
  toast({
    type: 'success',
    title: 'Added tp shopping cart'
  })
}

function cart(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products))
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products))
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  //document.getElementById(btncart).style.display = "none";
  animation();

}

function cart2(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url
  }
  cartItems.push(item);
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products))
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products))
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;

}

function render() {
  for (let index = 1; index <= BOARD_GAME.length; index++) {
    boardGamesDIV.innerHTML += `${HTMLBoardProduct(index)}`;
  }

  for (let index = 1; index <= CARD_GAME.length; index++) {
    cardGamesDIV.innerHTML += `${HTMLCardProduct(index)}`;
  }

  for (let index = 1; index <= PUZZEL_GAME.length; index++) {
    puzzelsDIV.innerHTML += `${HTMLPuzzelProduct(index)}`;
  }

  if (localStorage.getItem("cart") == null) {

  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
  }
}

