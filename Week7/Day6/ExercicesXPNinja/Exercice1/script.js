const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

const isDessert = menu.some(item => item.type === 'dessert');
console.log(`Is there at least one dessert? ${isDessert ? 'Yes' : 'No'}`);

const allStarters = menu.every(item => item.type === 'starter');
console.log(`Are all items starters? ${allStarters ? 'Yes' : 'No'}`);

if (!menu.some(item => item.type === 'main')) {
menu.push({
    type: 'main',
    name: 'Grilled Salmon'
});
}
console.log(menu);

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
menu.forEach(item => {
    item.vegetarian = vegetarian.some(veg => item.name.toLowerCase().includes(veg));
});
console.log(menu);