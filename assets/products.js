
const defaultProducts = [
    {
        name:"Royal Heritage Necklace",
        price:"$65",
        description:"Elegant handcrafted necklace inspired by traditional culture.",
        image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Artisan Gem Bracelet",
        price:"$38",
        description:"Beautiful handmade bracelet with artisan finishing.",
        image:"https://images.unsplash.com/photo-1617038260897-41a1f14a2a1b?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Golden Desert Earrings",
        price:"$49",
        description:"Luxury earrings inspired by desert traditions.",
        image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
    }
];

if(!localStorage.getItem('products')){
    localStorage.setItem('products', JSON.stringify(defaultProducts));
}

function getProducts(){
    return JSON.parse(localStorage.getItem('products')) || [];
}

function renderProducts(containerId){
    const products = getProducts();
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    products.forEach(p=>{
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div class="card-content">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <div class="price">${p.price}</div>
                <a class="btn" href="https://wa.me/" target="_blank">Order Now</a>
            </div>
        `;

        container.appendChild(card);
    });
}
