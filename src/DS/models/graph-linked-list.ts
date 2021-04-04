import { NodeModel } from "./node";

export class GraphLinkedListModel<T> {
    node: NodeModel<T>;
    connectedNodes: NodeModel<T>[];
    connectionWeightage?: number;
}