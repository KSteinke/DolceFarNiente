
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item, id) => {
    item.addEventListener("click", ()=> {
        
        let name =  item.querySelector(".menu-item-name").textContent;
        let image = document.getElementById(name);

        image.style.right = 0;
    });
});