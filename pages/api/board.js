// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const board = {
  tags: [[], ["open"], ["running"], ["ready"], ["close"]],
};
export default function handler(req, res) {
  res.status(200).json(board);
}
