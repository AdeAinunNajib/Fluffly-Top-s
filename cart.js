let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    let existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    totalPrice += price;
    renderCartSummary();
}

function renderCartSummary() {
    const cartCountContainer = document.getElementById('cart-count');
    const cartTotalContainer = document.getElementById('cart-total');
    const cartSummary = document.getElementById('cart-summary');

    // Hitung total pesanan
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Tampilkan jumlah pesanan dan total harga
    cartCountContainer.textContent = `${totalItems} Pesanan`;
    cartTotalContainer.textContent = `Rp${(totalPrice).toLocaleString()} (Klik )`;

    if (totalItems > 0) {
        cartSummary.classList.add('show'); // Tampilkan keranjang
    } else {
        cartSummary.classList.remove('show'); // Sembunyikan keranjang
    }
}

function goToPaymentPage() {
    // Simpan data keranjang ke localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);

    // Arahkan ke halaman pembayaran
    window.location.href = 'payment.html';
}
