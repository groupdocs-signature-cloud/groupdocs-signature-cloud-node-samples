"use strict";

class TextSignature {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";

		let opts = new signature_cloud.SignTextOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Text;
		opts.text = 'GroupDocs.Signature Cloud';

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 100;
		opts.height = 100;
		opts.locationMeasureType = signature_cloud.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = signature_cloud.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.stretch = signature_cloud.SignTextOptions.StretchEnum.None;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = signature_cloud.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = signature_cloud.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new signature_cloud.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = signature_cloud.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		opts.font = new signature_cloud.SignatureFont();
		opts.font.fontFamily = "Arial";
		opts.font.fontSize = 12;
		opts.font.bold = true;
		opts.font.italic = false;
		opts.font.underline = false;

		opts.foreColor = new signature_cloud.Color();
		opts.foreColor.web = "BlueViolet";

		opts.backgroundColor = new signature_cloud.Color();
		opts.backgroundColor.web = "DarkOrange";

		opts.page = 1;

		let settings = new signature_cloud.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		settings.saveOptions = new signature_cloud.SaveOptions();
		settings.saveOptions.outputFilePath = "signaturedocs/signedText_one-page.docx";

		let request = new signature_cloud.CreateSignaturesRequest(settings);
		let response = await signApi.createSignatures(request);
		console.log("Expected response type is SignResult: DownloadUrl = " + response.downloadUrl);
	}
}
module.exports = TextSignature;