"use client";

import { HierarchyNode } from "@/interfaces/hierarchy";
import classNames from "classnames";
import { useState } from "react";
import css from "./CitizensList.module.scss";
import { City } from "@/interfaces/city";
import Tooltip from "@/UI/Tooltip";

interface CitizenLsitI {
  hierarchy: object;
  cities: City[];
}

const CitizenList = ({ hierarchy, cities }: CitizenLsitI) => {
  const [expandedNodes, setExpandedNodes] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleNode = (nodeKey: string) => {
    setExpandedNodes((prevExpandedNodes) => ({
      ...prevExpandedNodes,
      [nodeKey]: !prevExpandedNodes[nodeKey],
    }));
  };

  const renderNode = (node: HierarchyNode, nodeKey: string) => {
    if (nodeKey === "residents" && Array.isArray(node)) {
      return (
        <div className={css.residents} key={nodeKey}>
          {node.map((resident) => (
            <div key={resident._id}>
              <Tooltip
                text={
                  cities.find((el) => el.id === resident.id)
                    ? `${cities.find((el) => el.id === resident.id).name}, ${cities.find((el) => el.id === resident.id).data} жителей`
                    : "no data"
                }
              >
                {resident.name}
              </Tooltip>
            </div>
          ))}
        </div>
      );
    }

    if (typeof node === "object") {
      return (
        <div key={nodeKey}>
          <button
            onClick={() => toggleNode(nodeKey)}
            className={classNames(
              { [css.active]: expandedNodes[nodeKey] },
              css.control
            )}
          ></button>
          {nodeKey}
          {expandedNodes[nodeKey] && (
            <div style={{ marginLeft: "20px" }}>
              {Object.keys(node).map((subKey) =>
                renderNode(node[subKey], subKey)
              )}
            </div>
          )}
        </div>
      );
    } else {
      return <div key={nodeKey}>{node}</div>;
    }
  };
  return (
    <div className={css.container}>
      {Object.keys(hierarchy).map((key) => renderNode(hierarchy[key], key))}
    </div>
  );
};

export default CitizenList;
