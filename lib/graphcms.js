async function fetchAPI (query, variables = {}) {

    const res = await fetch(process.env.NEXT_PUBLIC_GRAPH_CMS_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_PROD_AUTH_TOKEN}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    if (json.errors) {
        console.log(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getAllBlock() {
    const data = await fetchAPI(
        `
        query {
            blocks(orderBy: createdAt_DESC) {
                id
                blockName
                coordinates
                slug
                createdAt
                totalClassNum
                updatedAt
                blockImage {
                    url
                }
            }
        }
        `
    )
    return data.blocks
}

export async function getBlockBySlug(slug) {
    const data = await fetchAPI(
        `
        query getBlockBySlug($slug: String!) {
            block(where: { slug: $slug }) {
                id
                blockName
                coordinates
                slug
                createdAt
                totalClassNum
                updatedAt
                blockImage {
                    url
                }
            }
        }
        `,
        { slug }
    )
    return data.block
}

export async function getAllBlockWithSlug() {
    const data = await fetchAPI(
        `
        {
            blocks {
                slug
            }
        }
        `
    )
    return data.blocks
}
