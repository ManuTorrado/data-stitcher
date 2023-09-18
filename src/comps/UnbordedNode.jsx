import React, { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const style = {
  padding: 10,
  background: "transparent",
  border: "none",
};

const UnbordedNode = ({ data }) => {
  return (
    <div style={style}>
      <Handle type="source" position={Position.Bottom} id="left" />
      {data?.label}
      <Handle type="source" position={Position.Bottom} id="right" />
    </div>
  );
};

export default memo(UnbordedNode);
