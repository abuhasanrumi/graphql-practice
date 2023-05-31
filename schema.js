const { gql } = require('apollo-server')

exports.typeDefs = gql`
    type Query {
        hello: String,
        products: [Product!]!,
        product(id: ID!): Product,
        categories: [Category!]!,
        category(id: ID!): Category
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
    }

    type Category {
        id: String!
        name: String!
        products: [Product!]!
    }
`;