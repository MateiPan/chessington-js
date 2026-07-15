import Board from "../engine/board";
import Square from "../engine/square";

export default class PiecesMoves {

    public static rookMoves(board: Board, piecePosition: Square) {

        let row: number = piecePosition.row;
        let col: number = piecePosition.col;
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
            if(piecePosition.col !== j)
                moves.push(Square.at(piecePosition.row, j));

        // Iterate and add all the squares between the top and bottom boundary
        for (let i: number = bottomBoundary + 1; i < topBoundary; i++)
            if(piecePosition.row !== i)
                moves.push(Square.at(i, piecePosition.col));

        return moves;
    }

}

