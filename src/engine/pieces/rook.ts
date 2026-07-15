import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        let rookPosition: Square = board.findPiece(this);

        let moves: Square[] = [];

        // Adds the possible moves that can be made on a certain row
        for (let i: number = 0; i < 8; i++)
            if(rookPosition.col !== i)
                moves.push(Square.at(rookPosition.row, i));

        // Adds the possible moves that can be made on a certain column
        for (let j: number = 0; j < 8; j++)
            if(rookPosition.row !== j)
                moves.push(Square.at(j, rookPosition.col));

        return moves;
    }
}
