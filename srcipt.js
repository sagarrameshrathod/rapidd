function showPopup() {
  var hoverElement = event.target;
  hoverElement.classList.add('show-popup');
}

function hidePopup() {
  var hoverElement = event.target;
  hoverElement.classList.remove('show-popup');
}

const priceRange = document.getElementById('price-range');
const priceLabel = document.getElementById('price-label');

priceRange.addEventListener('input', function() {
  const price = priceRange.value;
  priceLabel.textContent = 'Price: $' + price;
});

function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  var menuToggle = document.getElementById("menuToggle");
  var navCenter = document.getElementById("nav-center")

  if (navbarMenu.style.display === "none") {
    navbarMenu.style.display = "block";
    navCenter.style.position = "absolute"
    navCenter.style.background = "#e4e5e6"
    navCenter.style.border = "2px solid #9a9999ef";
    navCenter.style.padding = "20px"
    navCenter.style.borderRadius = "5px"
    navCenter.style.top = "75px"
    menuToggle.src = "close.png";
  } else {
    navbarMenu.style.display = "none";
    navCenter.style.border = "none";
    navCenter.style.background ="none"
    menuToggle.src = "menu.png"; 
  }
}


