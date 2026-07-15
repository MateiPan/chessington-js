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
        if (this.player === Player.WHITE) {
            return Array(Square.at(squarePosition.row + 1, squarePosition.col));
        }

        if (this.player === Player.BLACK) {
            return Array(Square.at(squarePosition.row - 1, squarePosition.col));
        }

        else
            return Array();
    }
}
