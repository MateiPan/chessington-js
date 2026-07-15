import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let queenPosition: Square = board.findPiece(this);

        let moves: Square[] = [];

        // Adds the possible moves that can be made on a certain row
        for (let i: number = 0; i < 8; i++)
            if(queenPosition.col !== i)
                moves.push(Square.at(queenPosition.row, i));

        // Adds the possible moves that can be made on a certain column
        for (let j: number = 0; j < 8; j++)
            if(queenPosition.row !== j)
                moves.push(Square.at(j, queenPosition.col));

        let row: number = queenPosition.row;
        let col: number = queenPosition.col;

        // first, we check the moves parallel to the main diagonal, here, we move the coordinates next to an edge
        if(row > col) {
            row -= col;
            col = 0;
        } else {
            col -= row;
            row = 0;
        }

        // here, we move the piece until it reaches another edge
        while(row < 8 && col < 8) {
            if(row == queenPosition.row && col == queenPosition.col) {
                row++;
                col++;
                continue;
            }
            moves.push(Square.at(row, col));
            row++;
            col++;
        }

        row = queenPosition.row;
        col = queenPosition.col;


        // then, we check the moves parallel to the second diagonal
        if(row > 7 - col) {
            row -= col;
            col = 7;
        } else {
            col += row;
            row = 0;
        }

        // and we move the piece until it reaches another edge
        while(row < 8 && col >= 0) {
            if(row == queenPosition.row && col == queenPosition.col) {
                row++;
                col--;
                continue;
            }
            moves.push(Square.at(row, col));
            row++;
            col--;
        }
        return moves;

    }
}
