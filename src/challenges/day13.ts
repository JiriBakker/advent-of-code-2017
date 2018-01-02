import { Challenge } from '../util/challenge'

export class Day13 implements Challenge {

    private static parseLayers(input: string[]) {
        const layers = {};
        let nrOfLayers = 0;
        input.forEach(line => {
            const layer = line.replace(/:/g, "").split(" ");
            const layerNr = parseInt(layer[0]);
            const depth = parseInt(layer[1]);
            layers[layerNr] = depth;
            nrOfLayers = Math.max(nrOfLayers, layerNr);
        });

        return {
            layers: layers,
            nrOfLayers: nrOfLayers
        };
    }

    private static computeSeverity(layers: any, nrOfLayers: number, startTime: number) {
        let severity = -1;
        for (let time = 0; time <= nrOfLayers; time++) {
            if (!(time in layers)) {
                continue;
            }

            const depth = layers[time];
            const loopTime = (depth * 2) - 2;
            const scannerPos = (time + startTime) % loopTime;
            if (scannerPos == 0) {
                if (severity == -1) {
                    severity = 0;
                }
                severity += time * depth;
            }
        }

        return severity;
    }

    public a(input: string[]): number {
        const parsedLayers = Day13.parseLayers(input);
        return Day13.computeSeverity(parsedLayers.layers, parsedLayers.nrOfLayers, 0);
    }

    public b(input: string[]): number {
        const maxTries = 10000000;
        const parsedLayers = Day13.parseLayers(input);

        for (let startTime = 0; startTime < maxTries; startTime++) {
            const severity = Day13.computeSeverity(parsedLayers.layers, parsedLayers.nrOfLayers, startTime);
            if (severity < 0) {
                return startTime;
            }
        }

        throw Error(`Unable to pass through firewall safely (maxTries: ${maxTries})`)
    }

}