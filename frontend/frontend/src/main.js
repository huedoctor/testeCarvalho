document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results");

    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const keyword = searchInput.value.trim();
        if (!keyword) return;

        resultsContainer.innerHTML = "Loading...";

        try {
            const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
            const data = await response.json();
            
            resultsContainer.innerHTML = "";
            if (data.products.length === 0) {
                resultsContainer.innerHTML = "No results found.";
                return;
            }

            data.products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>Rating: ${product.rating} stars</p>
                    <p>Reviews: ${product.reviews}</p>
                `;
                resultsContainer.appendChild(productElement);
            });
        } catch (error) {
            resultsContainer.innerHTML = "Error fetching results.";
        }
    });
});