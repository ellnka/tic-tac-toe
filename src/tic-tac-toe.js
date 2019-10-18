class TicTacToe {
    constructor() {
            this._matrix = [[null, null, null],
                            [null, null, null],
                            [null, null, null]];
            this._currentPlayerSymbol = "x";
            this._winnerSymbol = null;         
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        
        if (this._matrix[rowIndex][columnIndex] !== null || this.isFinished()) {
          return;
        }

        let isRowWinner = true;
        let isColumnWinner = true;
        let isDiagonalWinner = true;
        let isSecondDiagonalWinner = true;

        this._matrix[rowIndex][columnIndex] = this._currentPlayerSymbol;

        for(let i = 0; i < this._matrix.length; i++) {
            if (this._matrix[rowIndex][i] !== this._currentPlayerSymbol) {
                isRowWinner = false;
            }
            if (this._matrix[i][columnIndex] !== this._currentPlayerSymbol) {
              isColumnWinner = false;
            }
            if (this._matrix[i][i] !== this._currentPlayerSymbol) {
              isDiagonalWinner = false;
            }
            if (this._matrix[i][this._matrix.length - i - 1] !== this._currentPlayerSymbol) {
              isSecondDiagonalWinner = false;
            }
        }
        if (isRowWinner || isColumnWinner || isDiagonalWinner || isSecondDiagonalWinner) {
          this._winnerSymbol = this._currentPlayerSymbol;
        }           
        
        this._currentPlayerSymbol = this._currentPlayerSymbol === "x" ? "o" : "x";
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        return this._winnerSymbol;
    }

    noMoreTurns() {
        for (let i = 0; i < this._matrix.length; i++) {
          if (this._matrix[i].includes(null)) return false;
        }
        return true;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this._matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
