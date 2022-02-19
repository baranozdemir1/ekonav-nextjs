import { getBlocks } from "../../services";

export default async function handler(req, res) {
  const blocks = await getBlocks();
  res.status(200).json({ blocks });
}
