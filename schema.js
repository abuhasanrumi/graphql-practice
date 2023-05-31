const { gql } = require('apollo-server')

exports.typeDefs = gql`
    type Query {
        products: [Product!]!,
        product(id: ID!): Product,
        categories: [Category!]!,
        category(id: ID!): Category,
        reviews: [Review!]!
    }

    type Product {
        id: String!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category
        review: [Review!]!
    }

    type Category {
        id: String!
        name: String!
        products: [Product!]!
    }

    type Review {
        id: ID!,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: ID!,
    }
`;