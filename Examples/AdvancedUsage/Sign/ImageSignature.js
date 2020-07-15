"use strict";

class ImageSignature {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";

		let opts = new signature_cloud.SignImageOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Image;
		opts.imageFilePath = "signaturedocs/signature.jpg";

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 200;
		opts.height = 100;
		opts.locationMeasureType = signature_cloud.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = signature_cloud.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = signature_cloud.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = signature_cloud.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new signature_cloud.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = signature_cloud.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		opts.page = 1;
		opts.allPages = false;

		let ps = new signature_cloud.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		opts.pagesSetup = ps;

		let settings = new signature_cloud.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		settings.saveOptions = new signature_cloud.SaveOptions();
		settings.saveOptions.outputFilePath = "signaturedocs/signedImage_one-page.docx";

		let request = new signature_cloud.CreateSignaturesRequest(settings);
		let response = await signApi.createSignatures(request);
		console.log("Expected response type is SignResult: DownloadUrl = " + response.downloadUrl);
	}
}
module.exports = ImageSignature;