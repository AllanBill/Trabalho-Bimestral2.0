// 👉 Mostrar/ocultar conteúdo com botão ".txt-more"
const moreLinks = document.querySelectorAll(".section > .txt-more");

moreLinks.forEach(link => {
    link.addEventListener("click", function () {
        const container = this.parentNode.querySelector(".container");
        container.classList.toggle("partial");
        this.classList.toggle("txt-more");
    });
});

// 👉 Inicializar o Swiper
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function iniciarCarrinho() {
    renderizarCarrinho();

    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        alert("Compra finalizada! Obrigado 🎉");
        localStorage.removeItem("carrinho");
        renderizarCarrinho();
    });

    document.getElementById('openCart')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('cartContainer').classList.add('visible');
        document.getElementById('cartContainer').classList.remove('cart-hidden');
        renderizarCarrinho();
    });

    document.getElementById('closeCart')?.addEventListener('click', () => {
        document.getElementById('cartContainer').classList.remove('visible');
        document.getElementById('cartContainer').classList.add('cart-hidden');
    });
}

function renderizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalSpan = document.getElementById("cartTotal");

    if (!cartItemsDiv || !cartTotalSpan) return;

    cartItemsDiv.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartItemsDiv.appendChild(p);
        total += item.preco;
    });

    cartTotalSpan.textContent = total.toFixed(2);
}

