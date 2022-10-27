// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const todos = [
  {
    text: "新增Todo項目",
    tagIds: ["open"],
    id: "#0",
  },
  {
    text: "刪除Todo項目",
    tagIds: ["open"],
    id: "#1",
  },
  {
    text: "- 選擇項目\n- 更改項目",
    tagIds: ["close"],
    id: "#2",
  },
  {
    text: "篩選Todo項目",
    tagIds: ["ready"],
    id: "#3",
  },
  {
    text: "查詢Todo項目",
    tagIds: ["running"],
    id: "#4",
  },
];

export default function handler(req, res) {
  res.status(200).json(todos);
}
