document.addEventListener("DOMContentLoaded", function () {
  fetch("data/menuItems.json")
    .then(response => response.json())
    .then(menuItems => {
      generateMenu(menuItems);

      const navMenuIcon = document.getElementById("navMenuIcon");
      const navMenu = document.querySelector(".nav-menu");

      navMenuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Остановить всплытие события click
        navMenu.classList.toggle("active");
      });

      document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-menu")) {
          navMenu.classList.remove("active");
        }
      });
    })
    .catch(error => {
      console.error("Error loading menuItems:", error);
    });

  function generateMenu(menuItems) {
    const menuList = document.querySelector(".menu-list");
    menuList.textContent = "";

    menuItems.forEach((menuItem) => {
      const listItem = document.createElement("li");
      listItem.classList.add("menu-list-item");

      const link = document.createElement("a");
      link.setAttribute("href", menuItem.url);
      link.textContent = menuItem.label;

      listItem.appendChild(link);

      if (menuItem.subItems && menuItem.subItems.length > 0) {
        const sublist = document.createElement("ul");
        sublist.classList.add("menu-sublist");

        menuItem.subItems.forEach((subItem) => {
          const subListItem = document.createElement("li");
          subListItem.classList.add("menu-sublist-item");

          const subLink = document.createElement("a");
          subLink.setAttribute("href", subItem.url);
          subLink.textContent = subItem.label;

          subListItem.appendChild(subLink);
          sublist.appendChild(subListItem);
        });

        listItem.appendChild(sublist);
      }

      menuList.appendChild(listItem);
    });
  }
});
