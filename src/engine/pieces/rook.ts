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

        let row: number = rookPosition.row;
        let col: number = rookPosition.col;
        let moves: Square[] = [];

        // the rook can only move from the left boundary to the right boundary
        // and from the bottom boundary to the top boundary
        let leftBoundary: number = -1;
        let rightBoundary: number = 8;
        let topBoundary: number = 8;
        let bottomBoundary: number = -1;

        // we check the places below the rook, to see if there are any pieces there
        for (let i: number = row - 1; i >= 0; i--)
            if (board.getPiece(Square.at(i, col)) !== undefined) {
                bottomBoundary = i;
                break;
            }

        // we check the places above the rook, to see if there are any pieces there
        for (let i: number = row + 1; i < 8; i++)
            if (board.getPiece(Square.at(i, col)) !== undefined) {
                topBoundary = i;
                break;
            }

        // we check the places left of the rook, to see if there are any pieces there
        for (let j: number = col - 1; j >= 0; j--)
            if (board.getPiece(Square.at(row, j)) !== undefined) {
                leftBoundary = j;
                break;
            }

        // we check the places right of the rook, to see if there are any pieces there
        for (let j: number = col + 1; j < 8; j++)
            if (board.getPiece(Square.at(row, j)) !== undefined) {
                rightBoundary = j;
                break;
            }

        // Iterate and add all the squares between the left and right boundary
        for (let j: number = leftBoundary + 1; j < rightBoundary; j++)
            if(rookPosition.col !== j)
                moves.push(Square.at(rookPosition.row, j));

        // Iterate and add all the squares between the top and bottom boundary
        for (let i: number = bottomBoundary + 1; i < topBoundary; i++)
            if(rookPosition.row !== i)
                moves.push(Square.at(i, rookPosition.col));

        return moves;
    }
}
