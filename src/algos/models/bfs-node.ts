import { NodeModel } from "src/DS/models/node";

export class BFSNodeWithEdges<T> {
    originNode: NodeModel<T>;
    linkedNode: NodeModel<T>;
    itrCount: number;
    edgeVal: number;
    foundDestination: boolean;
}