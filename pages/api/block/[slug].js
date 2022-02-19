import { getBlockDetails } from '../../../services';

export default async function handler(req, res) {
    const slug = req.query.slug
    const blocks = await getBlockDetails(slug)
    res.status(200).json({ blocks });
}
