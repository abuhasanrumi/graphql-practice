exports.Product = {
    category: (parent, args, { categories }) => {
        return categories.find((category) => category.id == parent.categoryId)
    },
    review: (parent, args, { reviews }) => {
        return reviews.filter((review) => review.productId == parent.id)
    }
}