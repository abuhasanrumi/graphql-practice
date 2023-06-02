exports.Query = {
    products: (parent, { filter }, { products, reviews }) => {
        let filteredProducts = products

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
                    reviews.forEach((review) => {
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
    product: (parent, { id }, { products }) => {
        return products.find(product => product.id === id)
    },
    categories: (parent, args, { categories }) => {
        return categories
    },
    category: (parent, { id }, { categories }) => {
        return categories.find(category => category.id === id)
    }
}