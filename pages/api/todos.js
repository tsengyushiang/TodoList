// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const todos = [
  {
    text: "新增Todo項目",
    tagIds: ["open"],
  },
  {
    text: "刪除Todo項目",
    tagIds: ["open"],
  },
  {
    text: "- 選擇項目\n- 更改項目",
    tagIds: ["close"],
  },
  {
    text: "篩選Todo項目",
    tagIds: ["ready"],
  },
  {
    text: "查詢Todo項目",
    tagIds: ["running"],
  },
];

export default function handler(req, res) {
  res.status(200).json(todos);
}
