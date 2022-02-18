import { blocks } from './index';
import { sampleData } from './sample';

export default function handler(req, res) {
    const { slug } = req.query
    const block = blocks.find(block => block.slug === slug)
    res.status(200).json({ block });
}