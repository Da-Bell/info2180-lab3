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

    const resetBttn = document.getElementsByClassName('btn');
    const fullreset = resetBttn[0];
    let myArr = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X"; 

    tilespaces.forEach((square, index) => {

        square.classList.add('square');

        // Add css hover 
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        // Erase css hover 
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });

        square.addEventListener('click', () =>{

            if(!square.innerHTML && !didHeWin()){
        
                square.classList.add(currentPlayer);
                square.innerHTML = currentPlayer;
                myArr[index] = currentPlayer;

                // Checks for a win every turn
                const winner = didHeWin();
                    if (winner){
                        status.innerHTML = `Congratulations! ${winner} wins!`;
                        status.classList.add('you-won');
                    }
                    else{

                        // Swaps to the next player
                        currentPlayer = currentPlayer === "X" ? "O" : "X";

                    }
            }
        });
    });

    function didHeWin(){
    for (let combo of luckyNumbers) {
      const [a, b, c] = combo;
      if (myArr[a] && myArr[a] === myArr[b] && myArr[a] === myArr[c]) {
        return myArr[a];
      }
    }
    return null;
  }
    console.log(squares);
    console.log(resetBttn);

}