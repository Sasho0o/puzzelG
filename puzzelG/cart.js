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

products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById("cart_n");
var table = document.getElementById("table");
var total = 0;

function tableHTML(i) {
    return `    
    <tr>
      <th scope="row">${i + 1}</th>
      <td><img src="${products[i].url}" style="width: 90px ;"></td>
      <td>${products[i].name}</td>
      <td>1</td>
      <td>${products[i].price}</td>
    </tr>`;

}

function buy() {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter += 1;
    let db = firebase.database().ref("order/" + counter);
    let itemdb =
    {
        id: counter,
        order: counter - 895,
        total: total
    }
    db.set(itemdb);
    swal({
        possition: 'center',
        type: 'success',
        title: 'Purchase made successfully!',
        text: `Your purchase order is: ${itemdb.order}`,
        showConfirmButton: true,
        timer: 50000

    });
    clean();
}

function clean() {
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableHTML(index);
        total = total + parseInt(products[index].price);
    }
    total = 0;
    table.innerHTML = `
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>`;
    cart_n.innerHTML = '';
    //document.getElementById('btnBuy').style.display = "none";
}

function render() {

    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableHTML(index);
        total = total + parseInt(products[index].price)
    }
    table.innerHTML += `
    <tr>
      <th scope="col"></th>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col">Total: $${total}.00</td>
    </tr>
        <tr>
      <th scope="col"></th>
      <td scope="col"></td>
      <td scope="col"></td>
      <td scope="col">
      <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">Clean Shopping Cart</button></td>
      <td scope="col">
      <button id="btnBuy" onclick="buy()" class="btn text-white btn-success">Buy</button></td>
    </tr>
`;

    products.JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;

}