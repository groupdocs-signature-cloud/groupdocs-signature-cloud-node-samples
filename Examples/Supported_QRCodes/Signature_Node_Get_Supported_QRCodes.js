"use strict";
class Signature_Node_Get_Supported_QRCodes {
	static Run() {
		// retrieve supported Barcodes
		infoApi.getSupportedQRCodes()
			.then(function (response) {
				console.log("Supported QRCodes:");
				response.qRCodeTypes.forEach(function (format) {
					console.log(format.name + "\n");
				});
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Get_Supported_QRCodes;
