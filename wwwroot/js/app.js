
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item, id) => {
    item.addEventListener("click", ()=> {
        //TODO - Check if there will be no error when 2 were clicked add fixing code if neede
        let name =  item.querySelector(".menu-item-name").textContent;
        let image = document.getElementById(name);

        image.style.display = 'block';
    });
});