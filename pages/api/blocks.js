import { getAllBlock } from '../../lib/graphcms'

export default async function handler(req, res) {
  const blocks = await getAllBlock();
  res.status(200).json({ blocks });
}
