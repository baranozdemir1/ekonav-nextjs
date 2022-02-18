import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API;

export const getBlocks = async () => {
  const query = gql
    `
    query MyQuery {
      blocks {
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
    `;

  const result = await request(graphqlAPI, query);

  return result.blocks;
};

export const getBlockDetails  = async (slug) => {
  const query = gql
    `
    query GetBlockDetails($slug: String!) { 
      block(where: { slug: $slug }){
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
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.block;
};
