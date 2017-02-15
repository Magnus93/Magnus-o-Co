function docLoaded() {
	initOrders();
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
function initOrders() {
  for (var i = 0; i < commonData.menu.food.length; i++) {
    var foodItem = commonData.menu.food[i];
    commonData.orders[foodItem.id] = 0;
    updateItemCountHTML(foodItem.id, 0);
  }
}

/**
 * Update the ammount under an item in the page
 * 
 * @param {string} id - The id of the counter to update
 * @param {number} value - The value to update with
 */
function updateItemCountHTML(id, value) {
  var item = document.getElementById(id);
  var counterDiv = item.getElementsByClassName("itemAmount")[0];
  counterDiv.innerHTML = value;
}

/**
 * Increases the number of items ordered of a certain ID.
 * 
 * @param {string} id - The id of the item to increment
 */
function incrementOrder(id) {
  commonData.orders[id]++;
  updateItemCountHTML(id, commonData.orders[id]);
}

/**
 * Decreases the number of items ordered of a certain ID.
 * Does nothing if no items have been ordered of that ID before.
 * 
 * @param {string} id - The id of the item to decrement
 */
function decrementOrder(id) {
  if (commonData.orders[id] > 0) {
    commonData.orders[id]--;
    updateItemCountHTML(id, commonData.orders[id]);
  }
}