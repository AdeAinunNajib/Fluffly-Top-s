
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalPrice = localStorage.getItem('totalPrice') || 0;

const cartItemsContainer = document.getElementById('cart-items');
cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${item.name} x ${item.quantity}</span>
        <span>Rp${(item.price * item.quantity).toLocaleString()}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
});

// Tampilkan total harga
const totalPriceContainer = document.getElementById('total-price');
totalPriceContainer.textContent = `Total Harga: Rp${parseInt(totalPrice).toLocaleString()}`;

function pay() {
    const serviceSelected = document.querySelector('input[name="service"]:checked');
    const paymentSelected = document.querySelector('input[name="payment"]:checked');

    if (!serviceSelected || !paymentSelected) {
        alert("Anda harus memilih metode pengiriman dan metode pembayaran untuk melanjutkan.");
        return;
    }
    alert('Transaksi Berhasil');
    window.location.href = 'index.html';
}