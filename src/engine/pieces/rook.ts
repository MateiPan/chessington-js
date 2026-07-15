import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import PiecesMoves from "../../utils/PiecesMoves";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        return PiecesMoves.rookMoves(board, board.findPiece(this));
    }
}
