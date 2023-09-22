import React, { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";

const style = {
  backgroundColor: "grey",
  padding: "10px",
};

const NoteNode = ({ data }) => {
  const [isSelected, SetSelected] = useState(false);
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(true);
  const disableHover = () => setHover(false);

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
    <div
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={disableHover}
      onClick={handleClick}
    >
      <Handle type="source" position={Position.Bottom} id="left" />
      {data?.label}
      <Handle type="target" position={Position.Bottom} id="right" />
      {hover && <BsFillArrowDownRightCircleFill size={8} />}
    </div>
  );
};

export default memo(NoteNode);
