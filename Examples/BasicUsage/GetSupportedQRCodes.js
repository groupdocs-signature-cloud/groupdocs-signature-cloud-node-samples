"use strict";

class GetSupportedQRCodes {
	static async Run() {
		let response = await infoApi.getSupportedQRCodes();
		console.log("QRCode types count: " + response.qRCodeTypes.length);
	}
}
module.exports = GetSupportedQRCodes;
