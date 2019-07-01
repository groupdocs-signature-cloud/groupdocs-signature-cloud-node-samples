"use strict";
class Signature_Node_Text_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\one-page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.SignTextOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Text;
		opts.text = 'GroupDocs.Signature Cloud';

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 100;
		opts.height = 100;
		opts.locationMeasureType = groupdocs_signature_cloud_1.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = groupdocs_signature_cloud_1.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.stretch = groupdocs_signature_cloud_1.SignTextOptions.StretchEnum.None;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = groupdocs_signature_cloud_1.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = groupdocs_signature_cloud_1.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new groupdocs_signature_cloud_1.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = groupdocs_signature_cloud_1.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		opts.font = new groupdocs_signature_cloud_1.SignatureFont();
		opts.font.fontFamily = "Arial";
		opts.font.fontSize = 12;
		opts.font.bold = true;
		opts.font.italic = false;
		opts.font.underline = false;

		opts.foreColor = new groupdocs_signature_cloud_1.Color();
		opts.foreColor.web = "BlueViolet";

		opts.borderColor = new groupdocs_signature_cloud_1.Color();
		opts.borderColor.web = "DarkOrange";

		opts.backgroundColor = new groupdocs_signature_cloud_1.Color();
		opts.backgroundColor.web = "DarkOrange";
		opts.borderVisiblity = true;
		opts.borderDashStyle = groupdocs_signature_cloud_1.SignTextOptions.BorderDashStyleEnum.Dash;

		opts.page = 1;
		opts.allPages = false;

		var ps = new groupdocs_signature_cloud_1.PagesSetup();
		ps.evenPages = false;
		ps.firstPage = true;
		ps.lastPage = false;
		ps.oddPages = false;
		ps.pageNumbers = [1];
		opts.pagesSetup = ps;

		var settings = new groupdocs_signature_cloud_1.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];

		settings.saveOptions = new groupdocs_signature_cloud_1.SaveOptions();
		settings.saveOptions.outputFilePath = "Signaturedocs\\signedText_one-page.docx";

		var request = new groupdocs_signature_cloud_1.CreateSignaturesRequest(settings);
		signApi.createSignatures(request)
			.then(function (response) {
				console.log("Expected response type is SignResult: FilePath = " + response.fileInfo.filePath);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Signature_Node_Text_Signature;