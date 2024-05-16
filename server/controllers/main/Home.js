const { HomeModel, ProductModel } = require('../../Models/main')

exports.GetProducts = async (request, response) => {

	const products = await ProductModel.GetVisibleProducts() || [];

	response.json({
		status: 200,
		data: products
	})
}

// MARK: - Private Methods --------------------------------------------------------------------------

function PrepareProduct(product) {
	return {
		id: product.product_id,
		title: product.product_title,
		image: product.product_logo_image,
		price: product.product_price,
		discount: product.product_discount,
		customersAmount: product.product_customers_amount,
		currency: "$"
	}
}

function PrepareAdverts(adverts) {
	return adverts.map(advert => {
		return {
			id: advert.product_id,
			title: advert.advert_title,
			subtitle: advert.advert_subtitle,
			image: advert.advert_image
		}
	})
}

function PrepareCarouselImages(images) {
	return images.map(image => {
		return {
			id: image.product_id,
			title: image.product_title,
			image: image.product_logo_image,
			description: image.product_description
		}
	})
}