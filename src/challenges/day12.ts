import { Challenge } from '../util/challenge'

export class Day12 implements Challenge {

    private static parseLinks(input: string[]): any {
        const links = {};
        input.forEach(line => {
            const ids = line.replace(/<-> /g, "")
                            .replace(/,/g, "")
                            .split(" ")
                            .map(id => parseInt(id));

            const addIfDoesNotContain = (obj, id, value) => {
                if (!(id in obj)) {
                    obj[id] = value;
                }
            }

            addIfDoesNotContain(links, ids[0], {});
            for (let i = 1; i < ids.length; i++) {
                addIfDoesNotContain(links[ids[0]], ids[i], true);
                addIfDoesNotContain(links, ids[i], { });
                addIfDoesNotContain(links[ids[1]], ids[0], true);
            }
        });

        return links;
    }

    private static collect(id: number, count: number, links: any, groups: any, groupKey: number): number {
        if (id in groups || !(id in links)) {
            return count;
        }
        groups[id] = groupKey;

        for (let linkId in links[id]) {
            if (links[id].hasOwnProperty(linkId)) {
                count = Day12.collect(parseInt(linkId), count, links, groups, groupKey);
            }
        }

        return count + 1;
    }

    private static countUniqueValues(obj: any) {
        const uniqueValues = {};
        let count = 0;
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && !(obj[key] in uniqueValues)) {
                uniqueValues[obj[key]] = true;
                count++;
            }
        }
        return count;
    }

    public a(input: string[]): number {
        const links = Day12.parseLinks(input);
        return Day12.collect(0, 0, links, {}, 0);
    }

    public b(input: string[]): number {
        const links = Day12.parseLinks(input);
        const groups = {};
        for (let id in links) {
            if (links.hasOwnProperty(id)) {
                Day12.collect(parseInt(id), 0, links, groups, parseInt(id));
            }
        }

        return Day12.countUniqueValues(groups);
    }

}