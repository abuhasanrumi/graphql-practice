exports.Query = {
    products: (parent, args, { products }) => {
        return products
    },
    product: (parent, { args }, { products }) => {
        const productId = args.id
        const product = products.find(product => product.id === productId)

        if (!product) return null
        return product
    },
    categories: (parent, args, { categories }) => {
        return categories
    },
    category: (parent, args, { categories }) => {
        const categoryId = args.id
        const category = categories.find(category => category.id === categoryId)

        if (!category) return null
        return category
    },
}