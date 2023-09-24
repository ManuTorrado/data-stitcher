import { Handle, Position, useStore, useUpdateNodeInternals } from "reactflow";
import { NodeResizer, NodeResizeControl } from "reactflow";

import user from "../../user.png";
import { useContext, useEffect } from "react";
import { FlowContext } from "../../App";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = {
  zIndex: 1,
};

const CustomNode = ({ id }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const { cableSelected, setCableSelected } = useContext(FlowContext);

  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;

  useEffect(() => {
    updateNodeInternals(id);
  }, [cableSelected]);

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
            isConnectable={cableSelected}
          />
        )}

        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
          isConnectable={cableSelected}
        />
      </div>
    </div>
  );
};

export default CustomNode;
