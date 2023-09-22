import React, { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const style = {
  padding: 10,
  background: "transparent",
  border: "none",
};

const UnbordedNode = ({ data }) => {
  const [isSelected, SetSelected] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    SetSelected(true);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
      if (isSelected) {
        console.log("deletion");
      }
    }
  });
  return (
    <div onClick={handleClick} style={style}>
      <Handle type="source" position={Position.Bottom} id="left" />
      {data?.label}
      <Handle type="source" position={Position.Bottom} id="right" />
    </div>
  );
};

export default memo(UnbordedNode);
