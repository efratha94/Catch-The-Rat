// keys: player 1: WASD; player 2:  IJKL

const goldBoard = new GoldMatrix(5, 5)
const renderer = new Renderer()


const loadPage = function(){
    
    renderer.renderBoard(goldBoard.matrix)
    renderer.renderScores(goldBoard.scores)
}

$(document).ready(loadPage())



$(document).on("keypress", function (e) {
    console.log(e)
    if (e.keyCode == 119) {
        console.log("thds")
        
        goldBoard.movePlayer("2", "up")
        $("#game-container").empty()
        renderer.renderBoard(goldBoard.matrix)
         
    }
    

})
