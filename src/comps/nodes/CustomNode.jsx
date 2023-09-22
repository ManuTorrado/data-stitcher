import { Handle, Position, useStore } from "reactflow";
import { NodeResizer, NodeResizeControl } from "reactflow";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IconButton } from "@mui/material";

import user from "../../user.png";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = {
  zIndex: 1,
};

const CustomNode = ({ id }) => {
  const [dragSelect, setDragSelected] = useState(false);

  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(true);
  const disableHover = () => setHover(false);
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  // const label = isTarget ? "Drop here" : "Drag to connect";

  return (
    <div className="customNode">
      <div
        className="customNodeBody"
        style={{
          borderStyle: isTarget ? "dashed" : "solid",
          backgroundColor: isTarget ? "#ffcce3" : "white",
        }}
      >
        {/* If handles are conditionally rendered and not present initially, you need to update the node internals https://reactflow.dev/docs/api/hooks/use-update-node-internals/ */}
        {/* In this case we don't need to use useUpdateNodeInternals, since !isConnecting is true at the beginning and all handles are rendered initially. */}
        {!isConnecting && (
          <Handle
            className="customHandle"
            position={Position.Right}
            type="source"
            style={sourceStyle}
          />
        )}

        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
        />
      </div>
    </div>
  );
};

export default CustomNode;
