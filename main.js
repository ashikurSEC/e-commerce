// ! Dropdown Menu  

let profile = document.querySelector('.profile');
profile.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function (e) {
    const profile = document.querySelector('.profile');
    if (!profile.contains(e.target)) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});



//? Animation Salide 

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  });
  

// ? Product Slider
AOS.init({
    duration: 1000,
});




// ? Side bar 

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeSidebar = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
  
    shoppingCart.addEventListener('click', function () {
      sidebar.style.right = '0';
      overlay.classList.add('show');
    });
  
    closeSidebar.addEventListener('click', function () {
      sidebar.style.right = '-300px';
      overlay.classList.remove('show');
    });
  
    overlay.addEventListener('click', function () {
      sidebar.style.right = '-300px';
      overlay.classList.remove('show');
    });
  });


  //? Product's Card  
  
  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeSidebar = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    let cart = [];
  
    shoppingCart.addEventListener('click', function () {
      sidebar.classList.add('show');
      overlay.classList.add('show');
    });
  
    closeSidebar.addEventListener('click', function () {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });
  
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });
  
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', function (event) {
        const productCard = event.target.closest('.product-card');
        const product = {
          imgSrc: productCard.querySelector('img').src,
          name: productCard.querySelector('.product-name').textContent,
          brand: productCard.querySelector('.product-brand').textContent,
          price: parseFloat(productCard.querySelector('span').textContent.replace('Price: $', '')),
        };
        
        addToCart(product);
      });
    });
  
    function addToCart(product) {
      cart.push(product);
      updateCart();
    }
  
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }
  
    function updateCart() {
      cartCount.textContent = cart.length;
      
      cartItems.innerHTML = '';
      let total = 0;
      
      cart.forEach((product, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
          <img src="${product.imgSrc}" alt="${product.name}" />
          <div>
            <h4>${product.name}</h4>
            <p>${product.brand}</p>
            <span>$${product.price.toFixed(2)}</span>
          </div>
          <i class="fas fa-times" onclick="removeFromCart(${index})"></i>
        `;
        cartItems.appendChild(item);
        total += product.price;
      });
      
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
    
    window.removeFromCart = removeFromCart; // Make removeFromCart function globally accessible
  });
  


  //? According Menu
  
  document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
  
    readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        const currentlyOpenPanel = document.querySelector('.panel:not([style="display: none;"])');
  
        if (currentlyOpenPanel && currentlyOpenPanel !== panel) {
          currentlyOpenPanel.style.maxHeight = null;
          currentlyOpenPanel.style.display = 'none';
        }
  
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  });


//? TimeLine 

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.timeline-box');
  const options = {
      threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add('appear');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  boxes.forEach(box => {
      observer.observe(box);
  });
});

  
  
