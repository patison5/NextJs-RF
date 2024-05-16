const { db } = require('../../database/');

exports.GetHomeCarouselImages = async () => {
	const query = `SELECT * FROM rf_home_carousel`;
	return new Promise((resolve, reject) => {
		db.connection.query(query, (error, results) => {
			if (error) reject(error);
			resolve(results)
		});
	})
}

exports.GetHomeAdverts = async () => {
	const query = `SELECT * FROM rf_home_adverts LIMIT 2`;
	return new Promise((resolve, reject) => {
		db.connection.query(query, (error, results) => {
			if (error) reject(error);
			resolve(results)
		});
	})
}