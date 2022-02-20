import { getBlockBySlug } from '../../../lib/graphcms'

export default async function handler(req, res) {
    const slug = req.query.slug
    const blocks = await getBlockBySlug(slug)
    res.status(200).json({ blocks });
}
