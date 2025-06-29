const filterButtons = document.querySelectorAll(".filters button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    
    productCards.forEach(card => {
      const category = card.getAttribute("data-category");
      
      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const productName = card.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});