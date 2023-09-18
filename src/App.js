import "./App.css";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, initialEdges, nodeTypes } from "./reactflow-config";

import { useCallback, useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [backgroundProps, setBackground] = useState("dots");

  const addNode = () => {
    console.log(nodes.length);
    console.log(nodes);
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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={addNode} color="inherit">
            +
          </Button>
        </Toolbar>
      </AppBar>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        snapToGrid
        snapGrid={[5, 5]}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default App;
