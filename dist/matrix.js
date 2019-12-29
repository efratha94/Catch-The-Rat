class Matrix {
    constructor(numRows, numColumns) {
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let goldBoard = []
        let spot = "dot"

        for (let r = 0; r < numRows; r++) {
            goldBoard.push([])
            for (let c = 0; c < numColumns; c++) {
                goldBoard[r].push(spot)
            }
        }
        this.generateCoins(goldBoard)
        return goldBoard
    }


    generateCoins(_matrix) {
        const randomNumber = Math.floor(Math.random() * 10) + 1
        for (let coin = 1; coin < randomNumber; coin++) {

            const randomRow = Math.floor(Math.random() * 5)
            const randomCol = Math.floor(Math.random() * 5)
            let coin = "c"
            this.alter(randomRow, randomCol, coin, _matrix)
            
        }
        _matrix[0][0] = "1"
        _matrix[4][4] = "2"
        return _matrix

    }

    get(numRows, numColumns) {
        return this.matrix[numRows][numColumns]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")

            }
            console.log(line)
        }
    }

    printColumn(numColumns) {
        let col = []
        for (let i = 0; i < this.matrix.length; i++) {
            col.push(this.matrix[i][numColumns])
        }
        return col
    }

    printRow(numRows) {
        for (let i = 0; i < this.matrix[numRows].length; i++) {
            console.log(this.matrix[numRows])
            return this.matrix[numRows]
        }
    }

    alter(numRows, numColumns, value, matrix) {
        let alteredValue = matrix[numRows][numColumns]
        matrix[numRows][numColumns] = value

        return alteredValue
    }

    findCoordinate(value) {
        let valueCoordinates = {}
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i].includes(value)) {
                valueCoordinates.y = i
                valueCoordinates.x = this.matrix[i].indexOf(value)
            }
        }
        return valueCoordinates
    }
}

// const m1 = new Matrix(5, 5)
// m1.print()

// module.exports = Matrix