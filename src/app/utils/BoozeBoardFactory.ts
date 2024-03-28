import { BoozeTile } from 'src/app/models/BoozeTile';

export class BoozeBoardFactory {
    static createBoard(dimension: {
        width: number;
        height: number;
    }): BoozeTile[] {
        const drinkTile = Math.floor(
            Math.random() * dimension.width * dimension.height
        );
        const board: BoozeTile[] = [];
        for (let i = 0; i < dimension.width; i++) {
            for (let j = 0; j < dimension.height; j++) {
                board.push({
                    id: i * dimension.width + j,
                    drink: i * dimension.width + j === drinkTile,
                    isSpun: false,
                });
            }
        }

        return board;
    }
}
