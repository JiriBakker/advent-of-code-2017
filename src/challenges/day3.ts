import { Challenge } from '../util/challenge'

class Ring {
    public constructor(number, min, max) {
        this.number = number;
        this.min = min;
        this.max = max;
    }
    public number: number;
    public min: number;
    public max: number;

    public length() : number {
        return this.max - this.min + 1;
    }
}

class GridItem {
    public constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
    public x: number;
    public y: number;
    public value: number;

    public distanceToCenter() : number {
        return Math.abs(this.x) + Math.abs(this.y);
    }
}

enum Direction {
    LEFT,
    RIGHT,
    UP,
    DOWN
}

export class Day3 implements Challenge {
    
    public a(input: string[]): number {
        const nr = parseInt(input[0]);

        const getRing = (nr) => {
            let ringMin = 1;
            let ringMax = 1;
            let ringNumber = 0;
            while (ringMax < nr) {
                ringNumber++;
                ringMin = ringMax + 1;
                ringMax = Math.abs(Math.pow(((ringNumber * 2) + 1), 2));
            }
            return new Ring(ringNumber, ringMin, ringMax);
        }

        const getOffsetFromMiddle = (ring, nr) => {
            if (ring.number === 0) {
                return 0;
            }

            const sideLength = ring.length() / 4;
            const positionInRing = nr - ring.min + 1;
            const positionInSide = positionInRing % sideLength;
            return Math.abs(Math.round(sideLength / 2) - positionInSide);
        }
       
        const ring = getRing(nr);
        const offset = getOffsetFromMiddle(ring, nr);

        return offset + ring.number;
    }
    
    public b(input: string[]): number {
        const nrToFind = parseInt(input[0]);

        const grid: any = {}
        const getGridKey = (x, y) => {
            return `${x}_${y}`;
        }
        const pushToGrid = (x, y, value) => {
            grid[getGridKey(x, y)] = new GridItem(x, y, value);
        }
        const isGridCellEmpty = (x, y) => {
            return !(getGridKey(x, y) in grid)
        }
        const getAdjacentSum = (x, y) => {
            let sum = 0;
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    if (!isGridCellEmpty(x + dx, y + dy)) {
                        sum += grid[getGridKey(x + dx, y + dy)].value;
                    }
                }
            }
            return sum;
        }

        pushToGrid(0, 0, 1);

        let direction = Direction.RIGHT;
        let currentSum = 1;
        let x = 1;
        let y = 0;
        while (currentSum < nrToFind) {
            currentSum = getAdjacentSum(x, y);
            pushToGrid(x, y, currentSum);
            if (direction == Direction.RIGHT) {
                if (isGridCellEmpty(x, y - 1)) {
                    direction = Direction.UP;
                    y--;
                }
                else {
                    x++;
                }
            }
            else if (direction == Direction.UP) {
                if (isGridCellEmpty(x - 1, y)) {
                    direction = Direction.LEFT;
                    x--;
                }
                else {
                    y--;
                }
            }
            else if (direction == Direction.LEFT) {
                if (isGridCellEmpty(x, y + 1)) {
                    direction = Direction.DOWN;
                    y++;
                }
                else {
                    x--;
                }
            }
            else if (direction == Direction.DOWN) {
                if (isGridCellEmpty(x + 1, y)) {
                    direction = Direction.RIGHT;
                    x++;
                }
                else {
                    y++;
                }
            }
        }

        return currentSum;
    }

}
