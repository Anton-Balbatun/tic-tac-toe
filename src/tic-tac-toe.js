class TicTacToe {
    constructor() {
         this.matrix = 
        [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        this.symbol= 'x'
            
    }

    getCurrentPlayerSymbol() {
        return this.symbol
    }

    nextTurn(rowIndex, columnIndex) {
        console.log(this.matrix)
        console.log(this.symbol)
        if(this.matrix[rowIndex][columnIndex] === 0){
            this.matrix[rowIndex][columnIndex] = this.symbol

            if(this.symbol === 'x'){
                this.symbol = 'o'
            }else{
                this.symbol = 'x'
            }
        }
        console.log(this.symbol + ' switched')
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true
        }else{
            return false
        }
    }

    getWinner() {
        for(let i = 0; i<3; i++) {
            if(this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]){
                return this.matrix[i][0] 
            }
        }
        for(let j = 0; j<3; j++) {
            if(this.matrix[0][j] === this.matrix[1][j] && this.matrix[0][j] === this.matrix[2][j]){
                return this.matrix[0][j] 
            }
        }
        if(this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]){
            return this.matrix[0][0]
        }else if(this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]){
            return this.matrix[0][2] 
        }else{ return null }
    }

    noMoreTurns() {
        let a
        for (let index = 0; index < this.matrix.length; index++) {
            for (let j = 0; j < this.matrix[index].length; j++) {
                if( this.matrix[index][j] === 0){
                    return false
                }else{
                    a=true
                }
                
            }
            
        }
        return a
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true
        }else{
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
