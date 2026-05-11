
async function renderProducts(id){
  const response = await fetch('data/products.json');
  const products = await response.json();

  const container = document.getElementById(id);

  products.forEach((p,index)=>{
    container.innerHTML += `
      <div class="card fade-in">
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

  revealAnimations();
}

function revealAnimations(){
  const reveals = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  });

  reveals.forEach(r=>observer.observe(r));
}

window.addEventListener('scroll',()=>{
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.style.background='rgba(20,20,20,.95)';
  }else{
    header.style.background='rgba(45,45,45,.88)';
  }
});
