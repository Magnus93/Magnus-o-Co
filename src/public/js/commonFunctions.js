function docLoaded() {
	resetOrder();
}

function indexIsLoaded() {
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
  for (var i = 0; i < commonData.menu.food.length; i++) {
    var foodItem = commonData.menu.food[i];
    Vue.set(commonData.orders, foodItem.id, 0);
  }
}

/**
 * Resets the page for a new order
 */
function resetPage() {
  resetOrder();
  resetTableNum();
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