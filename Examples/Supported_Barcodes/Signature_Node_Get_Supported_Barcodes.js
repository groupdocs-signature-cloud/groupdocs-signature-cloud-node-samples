"use strict";
class Signature_Node_Get_Supported_Barcodes {
	static Run() {
		// retrieve supported Barcodes
		infoApi.getSupportedBarcodes()
			.then(function (response) {
				console.log("Supported BarCodes:");
				response.barcodeTypes.forEach(function (format) {
					console.log(format.name + "\n");
				});
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Get_Supported_Barcodes;
