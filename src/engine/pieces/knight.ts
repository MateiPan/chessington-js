import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import PiecesMoves from "../../utils/PiecesMoves";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {

        // let knightPosition: Square = board.findPiece(this);
        //
        // let row: number = knightPosition.row;
        // let col: number = knightPosition.col;
        //
        // let moves:Square[] = [];
        //
        // let dx: number[] = [-1, -2, -2, -1, 1, 2, 2, 1];
        // let dy: number[] = [-2, -1, 1, 2, 2, 1, -1, -2];
        //
        // for(let i: number = 0; i < 8; i++) {
        //     if (row + dx[i] >= 0 && row + dy[i] >= 0 && row + dx[i] < 8 && col + dy[i] < 8) {
        //         moves.push(Square.at(row + dx[i], col + dy[i]));
        //     }
        // }
        //
        // return moves;

        return PiecesMoves.knightMoves(board, board.findPiece(this));

    }
}
