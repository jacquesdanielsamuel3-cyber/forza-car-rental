function calculatePrice() {
    let carType = document.getElementById('carType').value;
    let days = parseInt(document.getElementById('days').value);
    let pricePerDay = (carType === 'SUV') ? 50 : 40;
    let totalPrice = pricePerDay * days;

    document.getElementById('totalPrice').textContent = totalPrice;
}
