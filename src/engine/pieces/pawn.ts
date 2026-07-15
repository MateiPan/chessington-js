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
        if (this.player === Player.WHITE)
            moves.push(Square.at(squarePosition.row + 1, squarePosition.col));

        if(this.player === Player.WHITE && squarePosition.row === 1)
            moves.push(Square.at(squarePosition.row + 2, squarePosition.col));

        if (this.player === Player.BLACK)
            moves.push(Square.at(squarePosition.row - 1, squarePosition.col));

        if(this.player === Player.BLACK && squarePosition.row === 6)
            moves.push(Square.at(squarePosition.row - 2, squarePosition.col));

        return moves;
    }
}
