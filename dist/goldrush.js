
class GoldMatrix extends Matrix {
    constructor(numRows, numColumns) {
        super(numRows, numColumns)
        this.scores = { player1: 0, player2: 0 }


    }

    movePlayer(player, direction) {
        const currentColumn = this.findCoordinate(player).x
        const currentRow = this.findCoordinate(player).y

        let beforeValue
        switch (direction) {
            case "up":
                beforeValue = this.get(currentRow - 1, currentColumn)
                switch (beforeValue) {
                    case "1":
                        break;
                    case "2":
                        break;
                    case "undefined":
                        break;
                    default:
                        this.alter(currentRow - 1, currentColumn, player, this.matrix)
                        this.alter(currentRow, currentColumn, "dot", this.matrix)
                        
                }
                break;
            case "down":
                beforeValue = this.get(currentRow + 1, currentColumn)
                switch (beforeValue) {
                    case "1":
                        break;
                    case "2":
                        break;
                    case "undefined":
                        break;
                    default:
                        this.alter(currentRow + 1, currentColumn, player, this.matrix)
                        this.alter(currentRow, currentColumn, "dot", this.matrix)
                        
                }
                break;
            case "left":
                beforeValue = this.get(currentRow, currentColumn -1)
                if (currentColumn - 1 == "-1"){
                    return
                }
                switch (beforeValue) {
                    case "1":
                        break;
                    case "2":
                        break;
                    case "undefined":
                        break;
                    default:
                        this.alter(currentRow, currentColumn - 1, player, this.matrix)
                        this.alter(currentRow, currentColumn, "dot", this.matrix)
                        
                }
                break;
            case "right":
                beforeValue = this.get(currentRow , currentColumn +1)
                if (currentColumn + 1 == "5"){
                    return
                }
                switch (beforeValue) {
                    case "1":
                        break;
                    case "2":
                        break;
                    case "undefined":
                        break;
                    default:
                        this.alter(currentRow, currentColumn + 1, player, this.matrix)
                        this.alter(currentRow, currentColumn, "dot", this.matrix)
                        
                }
                break;
        }

        if (beforeValue === "c") {
            if (player === "1") {
                this.updateScore("player1")
            }
            else {
                this.updateScore("player2")
            }
        }

        return this.matrix
    }
    updateScore(player) {
        this.scores[player] = this.scores[player] + 10

    }
}

