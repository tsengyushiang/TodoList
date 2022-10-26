// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const tags = [
  {
    text: "open",
    id: "open",
    color: "#e0d7dc",
  },
  {
    text: "running",
    id: "running",
    color: "#09e81f",
  },
  {
    text: "ready",
    id: "ready",
    color: "#e8e809",
  },
  {
    text: "close",
    id: "close",
    color: "#88948b",
  },
];

export default function handler(req, res) {
  res.status(200).json(tags);
}
