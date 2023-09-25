import React, { memo, useEffect, useState } from "react";
import { Handle, NodeProps, Position, useUpdateNodeInternals } from "reactflow";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import CustomNode from "./CustomNode";
import ResizeRotateNode from "./ResizableNode";
import useOutsideClick from "../../hooks/clickOutside";

const style = {
  backgroundColor: "grey",
  padding: "10px",
};

const NoteNode = ({ data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [isSelected, SetSelected] = useState(false);
  const [resizable, setResizable] = useState(false);

  const handleOutsideClick = () => {
    setResizable(false);
    SetSelected(false);
  };

  const refOutside = useOutsideClick(handleOutsideClick);

  const handleClick = () => {
    setResizable(true);
    SetSelected(true);
  };

  useEffect(() => {}, []);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
      if (isSelected) {
        event.stopPropagation();
        console.log("deletion");
      }
    }
  });
  return (
    <ResizeRotateNode
      handleClickOutside={isSelected ? refOutside : () => {}}
      onClick={handleClick}
      isResizable={resizable}
    >
      <CustomNode style={{ height: "100%" }}>
        <div>
          <p>{`aaaaaaaaaaa \n aaaaaaaaa \n aaaaaaaa`} </p>
        </div>
      </CustomNode>
    </ResizeRotateNode>
  );
};

export default memo(NoteNode);
