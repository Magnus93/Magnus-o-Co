function docLoaded() {

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