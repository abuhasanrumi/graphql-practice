exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products

        if (filter) {
            const { onSale, aveRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if ([1, 2, 3, 4, 5].includes(aveRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0
                    let numberOfReviews = 0
                    db.reviews.forEach((review) => {
                        if (review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    const aveProductRating = sumRating / numberOfReviews
                    return aveProductRating >= aveRating
                })
            }
        }

        return filteredProducts
    },
    product: (parent, { id }, { db }) => {
        return db.products.find(product => product.id === id)
    },
    categories: (parent, args, { db }) => {
        return db.categories
    },
    category: (parent, { id }, { db }) => {
        return db.categories.find(category => category.id === id)
    }
}