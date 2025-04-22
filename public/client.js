fetch("/products")
    .then(response => response.json())
    .then(data => {
        let content = data.map(product => `<h2>${product.name}</h2><p>${product.description}</p>`).join("");
        document.getElementById("page-content").innerHTML = content;
    })
    .catch(error => console.error("خطأ في تحميل البيانات:", error));