const { gql } = require('apollo-server')

exports.typeDefs = gql`
    type Query {
        products(filter: ProductsFilterInput): [Product!]!,
        product(id: ID!): Product,
        categories: [Category!]!,
        category(id: ID!): Category,
        reviews: [Review!]!
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
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
        reviews: [Review!]!
    }

    type Category {
        id: String!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: ID!,
    }
 
    input ProductsFilterInput {
        onSale: Boolean,
        aveRating: Int
    }

    input AddCategoryInput {
        name: String!
    }
`;