exports.Category = {
    products: (parent, { filter }, { db }) => {
        const categoryProducts = db.products.filter((product) => product.categoryId === parent.id)
        let filteredCategoryProducts = categoryProducts

        if (filter) {
            const { onSale, aveRating } = filter
            if (onSale) {
                filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                    return product.onSale
                })
            }
            if ([1, 2, 3, 4, 5].includes(aveRating)) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
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

        return filteredCategoryProducts
    }
}