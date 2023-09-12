function transferItems(fromListId, toListId) {
    const fromList = document.getElementById(fromListId);
    const toList = document.getElementById(toListId);
    const selectedItems = Array.from(fromList.querySelectorAll("li.highlighted"));

    selectedItems.forEach(item => {
        item.classList.remove("highlighted");
        toList.appendChild(item.cloneNode(true));
    });
}

function highlightSelected(listId) {
    const list = document.getElementById(listId);
    const selectedItems = Array.from(list.querySelectorAll("li"));

    selectedItems.forEach(item => {
        if (item.classList.contains("highlighted")) {
            item.classList.remove("highlighted");
        } else {
            item.classList.add("highlighted");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const lists = document.querySelectorAll("ul");

    lists.forEach(list => {
        list.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                event.target.classList.toggle("highlighted");
            }
        });
    });
});