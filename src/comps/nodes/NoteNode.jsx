import React, { memo, useEffect, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import CustomNode from "./CustomNode";
import ResizeRotateNode from "./ResizableNode";

const style = {
  backgroundColor: "grey",
  padding: "10px",
};

const NoteNode = ({ data }) => {
  const [isSelected, SetSelected] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    SetSelected(true);
  };

  useEffect(() => {});

  document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
      if (isSelected) {
        console.log("deletion");
      }
    }
  });
  return (
    <ResizeRotateNode>
      <CustomNode style={{ height: "100%" }}>
        <div>
          <p>{`aaaaaaaaaaa \n aaaaaaaaa \n aaaaaaaa`} </p>
        </div>
      </CustomNode>
    </ResizeRotateNode>
  );
};

export default memo(NoteNode);
