window.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelectorAll("button[data-order]"); // Array de los botones data-order
    orderButton.forEach(item => {                                        // recorre el array de botones
        item.addEventListener('click', (event) => {                      // a cada boton le agrego un evento, 
            const button = event.currentTarget;                          // indica a que elemento se le hizo click
            const container = button.parentNode;
            let order = {
                title: container.querySelector(".title").innerText,                
                price: container.querySelector(".price").innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("catalogo.html", "order.html");
            window.location.href = url;
        });
    });
});