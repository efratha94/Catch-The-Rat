class Renderer {
    renderBoard(matrix) {

        const source = $("#game-container-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ matrix })
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

