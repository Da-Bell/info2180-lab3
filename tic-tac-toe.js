window.onload = function(){
    const gridboxes = document.getElementById('board')
    const tilespaces = gridboxes.querySelectorAll('div');
    const status = document.getElementById('status');

    const luckyNumbers = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    const resetBttn = document.getElementByClassName('btn');
    let options = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X"; 

    tilespaces.forEach((square, index) => {

        square.classList.add('square');

        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        //Remove hover effect
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });


}