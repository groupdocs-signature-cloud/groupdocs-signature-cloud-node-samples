"use strict";

class GetSupportedBarcodes {
	static async Run() {
		let response = await infoApi.getSupportedBarcodes();
		console.log("Barcode types count: " + response.barcodeTypes.length);
	}
}
module.exports = GetSupportedBarcodes;
