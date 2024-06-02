//Initialize an empty array for the shopping list
let shoppingList = [];

//Function to add item to the shopping list
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();

    if (item) {
        shoppingList.push(item);
        itemInput.value = ''; // Clear the input field
        renderList();
    }
}

//Function to clear all items from the shopping list
function clearAll() {
    shoppingList = [];
    renderList();
}

//Function to render the shopping list
function renderList() {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = ''; // Clear previous list

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}. ${item}`;
        listContainer.appendChild(listItem);
    });
}

//Add the form and buttons to the DOM
function createUI() {
    const root = document.getElementById('root');

    //Create form elements
    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'return false'); // Prevent form submission

    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.id = 'itemInput';
    itemInput.placeholder = 'Enter item';

    const addItemButton = document.createElement('input');
    addItemButton.type = 'button';
    addItemButton.value = 'AddItem';
    addItemButton.onclick = addItem;

    const clearAllButton = document.createElement('input');
    clearAllButton.type = 'button';
    clearAllButton.value = 'ClearAll';
    clearAllButton.onclick = clearAll;

    //Append form elements to the form
    form.appendChild(itemInput);
    form.appendChild(addItemButton);
    form.appendChild(clearAllButton);

    //Create list container
    const listContainer = document.createElement('div');
    listContainer.id = 'listContainer';

    //Append form and list container to root
    root.appendChild(form);
    root.appendChild(listContainer);
}

createUI();
