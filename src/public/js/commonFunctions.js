function docLoaded() {
	resetOrder();
}

function indexIsLoaded() {
  lol();
}

function addToTableNum(num) {
  var tbl_num_input = document.getElementById("tbl_num");
  tbl_num_input.value = tbl_num_input.value + num;
}

function resetTableNum() {
  var tbl_num_input = document.getElementById("tbl_num");
  tbl_num_input.value = '';
}


/* Functions for taking orders */

/** Initialize the orders so that all items will be 0 */
function resetOrder() {
  for (var foodIndex = 0; foodIndex < commonData.menu.food.length; foodIndex++) {
    var foodItem = commonData.menu.food[foodIndex];
    Vue.set(commonData.orders, foodItem.id, 0);
  }
  for (var categoryIndex = 0; categoryIndex < commonData.menu.drinks.length; categoryIndex++) {
    var category = commonData.menu.drinks[categoryIndex];
    for (var drinkIndex = 0; drinkIndex < category.content.length; drinkIndex++) {
      var drinkItem = category.content[drinkIndex];
      Vue.set(commonData.orders, drinkItem.id, 0);
    }
  }
  commonData.selectedDrinksMenu = {};
}

/**
 * Resets the page for a new order
 */
function resetPage() {
  resetOrder();
  resetTableNum();
  commonData.activeDrinkCategory = "beerNWine";
}

/**
 * Increases the number of items ordered of a certain ID.
 *
 * @param {string} id - The id of the item to increment
 */
function incrementOrder(id) {
  Vue.set(commonData.orders, id, commonData.orders[id] + 1);
}

/**
 * Decreases the number of items ordered of a certain ID.
 * Does nothing if no items have been ordered of that ID before.
 *
 * @param {string} id - The id of the item to decrement
 */
function decrementOrder(id) {
  if (commonData.orders[id] > 0) {
    Vue.set(commonData.orders, id, commonData.orders[id] - 1);
  }
}

function placeOrder() {
  if (vm.canPlaceOrder) {
    commonData.orderPlaced = true;
  }
}