
export interface Group {
    type: string;
    name: string;
}

export interface Resident {
    _id: string;
    id: number;
    name: string;
    city_id: number;
    groups: Group[];
}

export type HierarchyNodeType = HierarchyNode | string[] | Resident[];

export interface HierarchyNode {
    [key: string]: HierarchyNodeType;
}
