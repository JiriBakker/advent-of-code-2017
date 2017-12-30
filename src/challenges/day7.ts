import { Challenge } from '../util/challenge'

class Subtree {
    public constructor(name: string, weight: number, children: Subtree[]) {
        this.name = name;
        this.weight = weight;
        this.totalWeight = weight;
        for (var index in children) {
            children[index].parent = this;
            this.totalWeight += children[index].totalWeight;
        }
        this.children = children;
        this.parent = null;
    }
    public name: string;
    public weight: number;
    public totalWeight: number;
    public children: Subtree[];
    public parent: Subtree;
}

export class Day7 implements Challenge {

    private static parseSubtrees(input: string[]): string[][] {
        const parseSubtree = line => 
            line.replace(/\(/g, "")
                .replace(/\)/g, "")
                .replace(/\-> /g, "")
                .replace(/,/g, "")
                .split(" ");
     
        return input.map(parseSubtree)
                    .reduce((map: any, subtree: string[]) => {
                        map[subtree[0]] = subtree;
                        return map;
                    }, {});
    }  

    private static constructSubtrees(input: string[]): string {
        const parsedSubtrees = Day7.parseSubtrees(input);
        
        const constructSubtree = (subtrees: any, subtreeName: string) => {
            if (subtreeName in subtrees) {
                return subtrees;
            }
            const parsedSubtree = parsedSubtrees[subtreeName];
            let children = [];
            for (let i = 2; i < parsedSubtree.length; i++) {
                constructSubtree(subtrees, parsedSubtree[i]);
                children.push(subtrees[parsedSubtree[i]]);
            }
            subtrees[subtreeName] = new Subtree(subtreeName, parseInt(parsedSubtrees[subtreeName][1]), children);
            return subtrees;
        }
                                
        return Object.keys(parsedSubtrees)
                     .reduce(constructSubtree, {});
    }

    private static findRoot(subtrees: any): string {
        if (subtrees.length > 0) {
            let curSubtree = subtrees[0];
            while (curSubtree.parent !== null) {
                curSubtree = curSubtree.parent;
            }
            return curSubtree;
        }
        for (var name in subtrees) {
            if (subtrees.hasOwnProperty(name) && subtrees[name].parent === null) {
                return name;
            }
        }

        throw new Error("Root not found");
    }

    public a(input: string[]): string {
        return Day7.findRoot(Day7.constructSubtrees(input));
    }

    public b(input: string[]): string {
        const subtrees = Day7.constructSubtrees(input);
        const root = subtrees[Day7.findRoot(subtrees)];

        const findUnbalancedWeight = (subtree: Subtree) => {
            if (subtree.children.length == 0) {
                return null;
            }
            if (subtree.children.length == 1) {
                return findUnbalancedWeight(subtree.children[0]);
            }

            const sortedChildren = subtree.children.sort((a, b) => a.totalWeight - b.totalWeight);
            if (sortedChildren[0].totalWeight !== sortedChildren[1].totalWeight) {
                const updatedWeight = findUnbalancedWeight(sortedChildren[0]);
                if (updatedWeight === null) {
                    return sortedChildren[0].weight + (sortedChildren[1].totalWeight - sortedChildren[0].totalWeight);
                }
                return updatedWeight;
            }
            else if (sortedChildren[sortedChildren.length - 2].totalWeight !== sortedChildren[sortedChildren.length - 1].totalWeight) {
                const updatedWeight = findUnbalancedWeight(sortedChildren[sortedChildren.length - 1]);
                if (updatedWeight === null) {
                    return sortedChildren[sortedChildren.length - 1].weight - (sortedChildren[sortedChildren.length - 1].totalWeight - sortedChildren[sortedChildren.length - 2].totalWeight)
                }
                return updatedWeight;
            }
            return null;
        }

        return findUnbalancedWeight(root);
    }

}