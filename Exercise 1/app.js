document.addEventListener("DOMContentLoaded", () => {
    // Move item 3 to the second container
    const item3 = document.querySelector("#container1 .item:nth-child(3)");
    const container2 = document.getElementById("container2");

    if (item3 && container2) {
        container2.appendChild(item3);
    }

    // Remove item 4 from second contiainer
    const item4 = document.querySelector("#container2 .item:nth-child(1)");

    if (item4) {
        item4.remove();
    }

    // Create item 10 and add it to container3
    const container3 = document.getElementById("container3");
    const item10 = document.createElement("div");
    item10.classList.add("item");
    item10.textContent = "10";

    if (container3) {
        container3.appendChild(item10);
    }

    // Display all items in blue containers in red text
    const blueContainers = document.querySelectorAll(".containerBlue .item");

    blueContainers.forEach(item => {
        item.style.color = "red";
    });

});