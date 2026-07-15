import Board from "../engine/board";
import Square from "../engine/square";

export default class PiecesMoves {

    public static rookMoves(board: Board, rookPosition: Square) {

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

    public static bishopMoves(board: Board, bishopPosition: Square) {
        let moves: Square[] = [];

        let row: number = bishopPosition.row;
        let col: number = bishopPosition.col;

        // first, we check the moves parallel to the main diagonal, here, we move the coordinates next to an edge
        if(row > col) {
            row -= col;
            col = 0;
        } else {
            col -= row;
            row = 0;
        }

        // here, we move the piece until it reaches another edge
        while(row < 8 && col < 8) {
            if(row == bishopPosition.row && col == bishopPosition.col) {
                row++;
                col++;
                continue;
            }
            moves.push(Square.at(row, col));
            row++;
            col++;
        }

        row = bishopPosition.row;
        col = bishopPosition.col;


        // then, we check the moves parallel to the second diagonal
        if(row > 7 - col) {
            row -= col;
            col = 7;
        } else {
            col += row;
            row = 0;
        }

        // and we move the piece until it reaches another edge
        while(row < 8 && col >= 0) {
            if(row == bishopPosition.row && col == bishopPosition.col) {
                row++;
                col--;
                continue;
            }
            moves.push(Square.at(row, col));
            row++;
            col--;
        }

        return moves;
    }

}

