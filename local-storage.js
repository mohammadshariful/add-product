/* ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে।  */

// add to item
const addItem = () => {
  const productName = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");
  const product = productName.value;
  const price = parseInt(productPrice.value);
  if (isNaN(price)) {
    return;
  }

  // conditional checking

  if (!isNaN(product)) {
    return;
  } else {
    // display ui
    displayItem(product, price);
    // add value to localStorage
    addToCart(product, price);
  }

  productName.value = "";
  productPrice.value = "";
};
// display items
const displayItem = (name, price) => {
  const ul = document.getElementById("product");
  const div = document.createElement("div");
  div.className = "d-flex justify-content-between list-unstyled mt-2";
  div.innerHTML = `
    <li class="fs-6 ">${name}</li>
    <li class="fs-6">${price}</li>
  `;
  ul.appendChild(div);
};
// local storage
const getCart = () => {
  const product = localStorage.getItem("cart");
  let cartObj;
  if (product) {
    cartObj = JSON.parse(product);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addToCart = (product, price) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] += price;
  } else {
    cart[product] = price;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const showLocalStorageItem = () => {
  const product = getCart();
  for (const item in product) {
    displayItem(item, product[item]);
  }
};
showLocalStorageItem();

// place order
const placeOrder = () => {
  document.getElementById("product").textContent = "";
  localStorage.removeItem("cart");
};
