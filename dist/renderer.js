class Renderer {
    renderBoard(matrix) {

        const source = $("#game-container-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ matrix })
        // console.log(newHTML)
        $("#game-container").append(newHTML)
    }
    renderScores(scores) {
        // console.log(scores)
        const source = $("#score-container-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(scores)
        $("#score-container").append(newHTML)
    }
}

