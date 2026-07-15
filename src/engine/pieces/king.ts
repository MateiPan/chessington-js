import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import PiecesMoves from "../../utils/PiecesMoves";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        // let moves:Square[] = [];
        //
        // let kingPosition: Square = board.findPiece(this);
        //
        // let row: number = kingPosition.row;
        // let col: number = kingPosition.col;
        //
        // let dx: number[] = [1, 0, -1, 0, 1, 1, -1, -1];
        // let dy: number[] = [0, -1, 0, 1, -1, 1, -1, 1];
        //
        // for(let i: number = 0; i < 8; i++) {
        //     if (row + dx[i] >= 0 && row + dy[i] >= 0 && row + dx[i] < 8 && col + dy[i] < 8) {
        //         moves.push(Square.at(row + dx[i], col + dy[i]));
        //     }
        // }

        return PiecesMoves.kingMoves(board, board.findPiece(this));
    }
}
