exports.Query = {
    hello: () => {
        return "World!"
    },
    products: () => {
        return products
    },
    product: (parent, args, context) => {
        const productId = args.id
        const product = products.find(product => product.id === productId)

        if (!product) return null
        return product
    },
    categories: () => {
        return categories
    },
    category: (parent, args, context) => {
        const categoryId = args.id
        const category = categories.find(category => category.id === categoryId)

        if (!category) return null
        return category
    },
}