"use strict";
class Signature_Node_Stamp_Signature {
	static Run() {
		var fileInfo = new groupdocs_signature_cloud_1.FileInfo();
		fileInfo.filePath = "Signaturedocs\\one-page.docx";
		fileInfo.password = null;
		fileInfo.versionId = null;
		fileInfo.storageName = myStorage;

		var opts = new groupdocs_signature_cloud_1.SignStampOptions();
		opts.documentType = groupdocs_signature_cloud_1.OptionsBase.DocumentTypeEnum.WordProcessing;
		opts.signatureType = groupdocs_signature_cloud_1.OptionsBase.SignatureTypeEnum.Stamp;
		opts.imageGuid = "Signaturedocs\\signature.jpg";

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 300;
		opts.height = 200;
		opts.locationMeasureType = groupdocs_signature_cloud_1.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = groupdocs_signature_cloud_1.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = groupdocs_signature_cloud_1.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = groupdocs_signature_cloud_1.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new groupdocs_signature_cloud_1.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = groupdocs_signature_cloud_1.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		opts.backgroundColor = new groupdocs_signature_cloud_1.Color();
		opts.backgroundColor.web = "CornflowerBlue";
		opts.backgroundColorCropType = groupdocs_signature_cloud_1.SignStampOptions.BackgroundColorCropTypeEnum.InnerArea;
		opts.backgroundImageCropType = groupdocs_signature_cloud_1.SignStampOptions.BackgroundImageCropTypeEnum.MiddleArea;
		opts.opacity = 0.8;

		var outline = new groupdocs_signature_cloud_1.StampLine();
		outline.text = "GroupDocs";

		outline.font = new groupdocs_signature_cloud_1.SignatureFont();
		outline.font.fontFamily = "Arial";
		outline.font.fontSize = 12;
		outline.font.bold = true;
		outline.font.italic = true;
		outline.font.underline = true;
		outline.textBottomIntent = 5;

		outline.textColor = new groupdocs_signature_cloud_1.Color();
		outline.textColor.web = "Gold";
		outline.textRepeatType = groupdocs_signature_cloud_1.StampLine.TextRepeatTypeEnum.FullTextRepeat;

		outline.backgroundColor = new groupdocs_signature_cloud_1.Color();
		outline.backgroundColor.web = "BlueViolet";
		outline.height = 20;

		outline.innerBorder = new groupdocs_signature_cloud_1.BorderLine();
		outline.innerBorder.color = new groupdocs_signature_cloud_1.Color();
		outline.innerBorder.color.web = "DarkOrange";
		outline.innerBorder.style = groupdocs_signature_cloud_1.BorderLine.StyleEnum.LongDash;
		outline.innerBorder.transparency = 0.5;
		outline.innerBorder.weight = 1.2;

		outline.outerBorder = new groupdocs_signature_cloud_1.BorderLine();
		outline.outerBorder.color = new groupdocs_signature_cloud_1.Color();
		outline.outerBorder.color.web = "DarkOrange";
		outline.outerBorder.style = groupdocs_signature_cloud_1.BorderLine.StyleEnum.LongDashDot;
		outline.outerBorder.transparency = 0.7;
		outline.outerBorder.weight = 1.4;
		outline.visible = true;
		opts.outerLines = [outline];

		var innerline = new groupdocs_signature_cloud_1.StampLine();
		innerline.text = "GroupDocs.Signature Cloud";

		innerline.font = new groupdocs_signature_cloud_1.SignatureFont();
		innerline.font.fontFamily = "Times New Roman";
		innerline.font.fontSize = 20;
		innerline.font.bold = true;
		innerline.font.italic = true;
		innerline.font.underline = true;
		innerline.textBottomIntent = 3;

		innerline.textColor = new groupdocs_signature_cloud_1.Color();
		innerline.textColor.web = "Gold";
		innerline.textRepeatType = groupdocs_signature_cloud_1.StampLine.TextRepeatTypeEnum.None;

		innerline.backgroundColor = new groupdocs_signature_cloud_1.Color();
		innerline.backgroundColor.web = "CornflowerBlue";
		innerline.height = 30;

		innerline.innerBorder = new groupdocs_signature_cloud_1.BorderLine();
		innerline.innerBorder.color = new groupdocs_signature_cloud_1.Color();
		innerline.innerBorder.color.web = "OliveDrab";
		innerline.innerBorder.style = groupdocs_signature_cloud_1.BorderLine.StyleEnum.LongDash;
		innerline.innerBorder.transparency = 0.5;
		innerline.innerBorder.weight = 1.2;

		innerline.outerBorder = new groupdocs_signature_cloud_1.BorderLine();
		innerline.outerBorder.color = new groupdocs_signature_cloud_1.Color();
		innerline.outerBorder.color.web = "GhostWhite";
		innerline.outerBorder.style = groupdocs_signature_cloud_1.BorderLine.StyleEnum.LongDashDot;
		innerline.outerBorder.transparency = 0.4;
		innerline.outerBorder.weight = 1.4;
		innerline.visible = true;
		opts.innerLines = [innerline];

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
		settings.saveOptions.outputFilePath = "Signaturedocs\\signedStamp_One_page.docx";

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
module.exports = Signature_Node_Stamp_Signature;