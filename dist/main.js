// keys: player 1: WASD; player 2:  IJKL

const goldBoard = new GoldMatrix(5, 5)
const renderer = new Renderer()


const loadPage = function(){
    
    renderer.renderBoard(goldBoard.matrix)
    renderer.renderScores(goldBoard.scores)
}

$(document).ready(loadPage())


$(document).on("keypress", function (e) {
    if (e.keyCode == 119) {
        goldBoard.movePlayer("1", "up")
    }
    if (e.keyCode === 97){
        goldBoard.movePlayer("1", "left")
    }
    if (e.keyCode === 115){
        goldBoard.movePlayer("1", "down")
    }
    if (e.keyCode === 100){
        goldBoard.movePlayer("1", "right")
    }
    if (e.keyCode === 105){
        goldBoard.movePlayer("2", "up")
    }
    if (e.keyCode === 106){
        goldBoard.movePlayer("2", "left")
    }
    if (e.keyCode === 107){
        goldBoard.movePlayer("2", "down")
    }
    if (e.keyCode === 108){
        goldBoard.movePlayer("2", "right")
    }
    $("#game-container").empty()
    renderer.renderBoard(goldBoard.matrix)
    $("#score-container").empty()
    renderer.renderScores(goldBoard.scores)
})

