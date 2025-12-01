const navbar = document.getElementById("navbar");
if (navbar) {
    const stickyPoint = navbar.offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset > stickyPoint) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
}

function toggleMenu() {
    const links = document.getElementById("navLinks");
    if (links.classList.contains("active")) {
        links.classList.remove("active");
    } else {
        links.classList.add("active");
    }
}

function closeMenu() {
    const links = document.getElementById("navLinks");
    if (links) {
        links.classList.remove("active");
    }
}


window.onload = function() {

    const productElement = document.getElementById('order-product');
    const priceElement = document.getElementById('order-price');

    if (productElement && priceElement) {

        const urlParams = new URLSearchParams(window.location.search);
        const product = urlParams.get('product');
        const price = urlParams.get('price');

        if (product) {
            productElement.innerHTML = `<strong>Product:</strong> ${product}`;
        } else {
            productElement.innerHTML = `<strong>Product:</strong> No item selected`;
        }

        if (price) {
            priceElement.innerHTML = `<strong>Total:</strong> &#x20B1;${price}`;
        } else {
            priceElement.innerHTML = `<strong>Total:</strong> -`;
        }
    }
};

function handleCheckout(event) {
    event.preventDefault();
    alert("Thank you! Your order has been placed successfully. We will contact you for confirmation.");
    window.location.href = "home.html";
}
