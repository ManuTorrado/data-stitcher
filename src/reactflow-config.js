import UnbordedNode from "./comps/nodes/UnbordedNode";
import NoteNode from "./comps/nodes/NoteNode";
import user from "./user.png";
import ArrowLine from "./comps/lines/ArrowLine";
import FloatingEdge from "./comps/FloatingEdge";
import CustomNode from "./comps/nodes/CustomNode";

export const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: (
        <div>
          <img width="32px" src={user} />
        </div>
      ),
    },
    type: "complete",
    style: {
      background: "rgba(255, 0, 0, 0)",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    style: { background: "rgba(255, 0, 0, 0)" },
  },
  {
    id: "3",
    position: { x: 0, y: 100 },
    data: { label: "amsdkqjkwelqjewlq" },
    type: "complete",
  },
];
export const initialEdges = [];

export const nodeTypes = {
  unborded: UnbordedNode,
  note: NoteNode,
  complete: CustomNode,
};

export const edgeTypes = {
  floating: FloatingEdge,
};
