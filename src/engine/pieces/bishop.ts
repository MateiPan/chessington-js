import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board):Square[] {

        let moves: Square[] = [];

        let bishopPosition: Square = board.findPiece(this);

        let row: number = bishopPosition.row;
        let col: number = bishopPosition.col;

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
            if(row == bishopPosition.row && col == bishopPosition.col) {
                row++;
                col++;
                continue;
            }
            moves.push(Square.at(row, col));
            row++;
            col++;
        }

        row = bishopPosition.row;
        col = bishopPosition.col;


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
            if(row == bishopPosition.row && col == bishopPosition.col) {
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
