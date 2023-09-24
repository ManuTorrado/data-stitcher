import "./App.css";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  MarkerType,
} from "reactflow";

import CustomNode from "./comps/nodes/CustomNode";
import ArrowLine from "./comps/lines/ArrowLine";
import { MdCable } from "react-icons/md";
import { CiFloppyDisk } from "react-icons/ci";

import "reactflow/dist/style.css";

import {
  initialNodes,
  initialEdges,
  nodeTypes,
  edgeTypes,
} from "./reactflow-config";

import { useCallback, useContext, useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import { FlowContext } from "./App";

const connectionLineStyle = {
  strokeWidth: 1,
  stroke: "grey",
};

const defaultEdgeOptions = {
  style: { strokeWidth: 1, stroke: "grey" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "grey",
  },
};

const Main = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { cableSelected, setCableSelected } = useContext(FlowContext);
  const [backgroundProps, setBackground] = useState("dots");

  const addNode = () => {
    setNodes([
      ...nodes,
      {
        id: (nodes.length + 1).toString(),
        position: { x: 0, y: 0 },
        style: { background: "rgba(255, 0, 0, 0)" },
      },
    ]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setCableSelected(!cableSelected);
            }}
          >
            <MdCable />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CiFloppyDisk />
          </IconButton>

          <Button onClick={addNode} color="inherit">
            +
          </Button>
          <Button></Button>
        </Toolbar>
      </AppBar>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        snapToGrid
        snapGrid={[5, 5]}
        connectionLineStyle={connectionLineStyle}
        connectionLineComponent={ArrowLine}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Main;
