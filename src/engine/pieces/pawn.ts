import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import PiecesMoves from "../../utils/PiecesMoves";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        return PiecesMoves.pawnMoves(this.player, board, board.findPiece(this));
    }
}
