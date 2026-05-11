
async function renderProducts(id){
    const res = await fetch('data/products.json');
    const products = await res.json();

    const container = document.getElementById(id);
    if(!container) return;

    container.innerHTML='';

    products.forEach(p=>{
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <div class="card-content">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="price">${p.price}</div>
                <a class="btn" href="https://wa.me/" target="_blank">Order Now</a>
            </div>
        </div>
        `;
    });
}
