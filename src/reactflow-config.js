import UnbordedNode from "./comps/UnbordedNode";
import user from "./user.png";

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
    type: "unborded",
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
];
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "straight" },
];

export const nodeTypes = {
  unborded: UnbordedNode,
};
