import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        let squarePosition: Square = board.findPiece(this);
        let moves: Square[] = [];

        let row: number = squarePosition.row;
        let col: number = squarePosition.col;

        if (this.player === Player.WHITE && board.getPiece(Square.at(row + 1, col)) === undefined)
            moves.push(Square.at(squarePosition.row + 1, squarePosition.col));

        if(this.player === Player.WHITE && squarePosition.row === 1 && board.getPiece(Square.at(row + 1, col)) === undefined && board.getPiece(Square.at(row + 2, col)) === undefined)
            moves.push(Square.at(squarePosition.row + 2, squarePosition.col));

        if (this.player === Player.BLACK && board.getPiece(Square.at(row - 1, col)) === undefined)
            moves.push(Square.at(squarePosition.row - 1, squarePosition.col));

        if(this.player === Player.BLACK && squarePosition.row === 6 && board.getPiece(Square.at(row - 1, col)) === undefined && board.getPiece(Square.at(row - 2, col)) === undefined)
            moves.push(Square.at(squarePosition.row - 2, squarePosition.col));

        return moves;
    }
}
