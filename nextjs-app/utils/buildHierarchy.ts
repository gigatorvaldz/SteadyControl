import { HierarchyNode, Resident } from "@/interfaces/hierarchy";

export default function buildHierarchy(residents: Resident[]): HierarchyNode {
    const hierarchy: HierarchyNode = {};

    for (const resident of residents) {
        let currentLevel: HierarchyNode = hierarchy;

        for (const group of resident.groups) {
            if (!currentLevel[group.name]) {
                currentLevel[group.name] = {};
            }

            currentLevel = currentLevel[group.name] as HierarchyNode;
        }

        if (!currentLevel["residents"]) {
            currentLevel["residents"] = [];
        }

        (currentLevel["residents"] as Resident[]).push(resident);
    }

    return hierarchy;
}