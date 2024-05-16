const { db } = require('../../database/');


exports.GetVisibleProducts = async () => {
	const query = `SELECT 
        * 
    FROM 
        rf_products 
    WHERE 
        product_is_visible = TRUE`;
	return new Promise((resolve, reject) => {
		const connection = db.GetConnection("Market");
		connection.query({ sql: query }, (error, results) => {
			if (error) return reject(error);
			resolve(results);
		});
	})
}
