function solve() {
    var grid = document.getElementById('puzzle_grid');
    var cells = grid.getElementsByTagName('input');

    var gridArray = [];

    for (var i = 0; i < 81; i++) {
        if (cells[i].readOnly) {
            gridArray[i] = parseInt(cells[i].value);
        } else {
            gridArray[i] = 0;
        }
    }

    console.log(gridArray);
}
