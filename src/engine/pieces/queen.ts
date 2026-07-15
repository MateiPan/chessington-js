import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import PiecesMoves from "../../utils/PiecesMoves";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {

        let bishopLikeMoves: Square[] = PiecesMoves.bishopMoves(board, board.findPiece(this));
        let rookLikeMoves: Square[] = PiecesMoves.rookMoves(board, board.findPiece(this));
        return rookLikeMoves.concat(bishopLikeMoves);

    }
}
