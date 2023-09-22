import React, { useEffect } from "react";
import { getStraightPath } from "reactflow";

const ArrowLine = ({ fromX, fromY, toX, toY, connectionLineStyle }) => {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path style={connectionLineStyle} fill="none" d={edgePath} />
      <circle
        cx={toX}
        cy={toY}
        fill="black"
        r={3}
        stroke="black"
        strokeWidth={3}
      />
    </g>
  );
};

export default ArrowLine;
