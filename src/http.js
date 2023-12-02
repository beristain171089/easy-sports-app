const Client = require("superagent");

const baseUrl = 'http://192.168.1.96:8081';

process.env.API_URL = baseUrl;

class Request {

	get(url, data) {
		const result = Client.get(baseUrl + url)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json")
			.set("easy_sports_key", "5fcae9a7be1dfa53da44c353492bc73d")
			.query(data)
			.then((res) => {
				return res.body;
			})
			.catch((err) => {
				return { error: true, message: err.message };
			});

		return result;
	};

	post(url, data) {
		const result = Client.post(baseUrl + url)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json")
			.set("easy_sports_key", "5fcae9a7be1dfa53da44c353492bc73d")
			.send(data)
			.then((res) => {
				return res.body;
			})
			.catch((err) => {
				return { error: true, message: err.message };
			});
		return result;
	};

	post(url, data) {
		const result = Client.put(baseUrl + url)
			.set("Accept", "application/json")
			.set("Content-Type", "application/json")
			.set("easy_sports_key", "5fcae9a7be1dfa53da44c353492bc73d")
			.send(data)
			.then((res) => {
				return res.body;
			})
			.catch((err) => {
				return { error: true, message: err.message };
			});
		return result;
	};

	postFile(url, formData) {
		const result = fetch(baseUrl + url, {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
				'easy_sports_key': '5fcae9a7be1dfa53da44c353492bc73d',
			},
		})
			.then(function (response) {
				return response.json();
			})
			.catch((err) => {
				return { error: true, message: err.message };
			});

		return result;
	};
};

export { baseUrl };

export default Request;
