import Board from "../engine/board";
import Square from "../engine/square";
import Player from "../engine/player";

export default class PiecesMoves {

    public static rookMoves(board: Board, rookPosition: Square): Square[] {

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

    public static bishopMoves(board: Board, bishopPosition: Square): Square[] {
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

    public static pawnMoves(player: Player, board: Board, pawnPosition: Square): Square[] {
        let moves: Square[] = [];

        let row: number = pawnPosition.row;
        let col: number = pawnPosition.col;

        if (player === Player.WHITE && board.getPiece(Square.at(row + 1, col)) === undefined)
            moves.push(Square.at(row + 1, col));

        if(player === Player.WHITE && row === 1 && board.getPiece(Square.at(row + 1, col)) === undefined && board.getPiece(Square.at(row + 2, col)) === undefined)
            moves.push(Square.at(row + 2, col));

        if (player === Player.BLACK && board.getPiece(Square.at(row - 1, col)) === undefined)
            moves.push(Square.at(row - 1, col));

        if(player === Player.BLACK && row === 6 && board.getPiece(Square.at(row - 1, col)) === undefined && board.getPiece(Square.at(row - 2, col)) === undefined)
            moves.push(Square.at(row - 2, col));

        return moves;
    }

    public static knightMoves(board: Board, knightPosition: Square): Square[] {
        let row: number = knightPosition.row;
        let col: number = knightPosition.col;

        let moves:Square[] = [];

        let dx: number[] = [-1, -2, -2, -1, 1, 2, 2, 1];
        let dy: number[] = [-2, -1, 1, 2, 2, 1, -1, -2];

        for(let i: number = 0; i < 8; i++) {
            if (row + dx[i] >= 0 && row + dy[i] >= 0 && row + dx[i] < 8 && col + dy[i] < 8) {
                moves.push(Square.at(row + dx[i], col + dy[i]));
            }
        }

        return moves;
    }

    public static kingMoves(board: Board, kingPosition: Square): Square[] {
        let moves:Square[] = [];

        let row: number = kingPosition.row;
        let col: number = kingPosition.col;

        let dx: number[] = [1, 0, -1, 0, 1, 1, -1, -1];
        let dy: number[] = [0, -1, 0, 1, -1, 1, -1, 1];

        for(let i: number = 0; i < 8; i++) {
            if (row + dx[i] >= 0 && row + dy[i] >= 0 && row + dx[i] < 8 && col + dy[i] < 8) {
                moves.push(Square.at(row + dx[i], col + dy[i]));
            }
        }

        return moves;
    }

}

