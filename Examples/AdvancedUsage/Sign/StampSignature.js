"use strict";

class StampSignature {
	static async Run() {
		let fileInfo = new signature_cloud.FileInfo();
		fileInfo.filePath = "signaturedocs/one-page.docx";

		let opts = new signature_cloud.SignStampOptions();
		opts.signatureType = signature_cloud.OptionsBase.SignatureTypeEnum.Stamp;
		opts.imageFilePath = "signaturedocs/signature.jpg";

		// set signature position on a page
		opts.left = 100;
		opts.top = 100;
		opts.width = 300;
		opts.height = 200;
		opts.locationMeasureType = signature_cloud.SignTextOptions.LocationMeasureTypeEnum.Pixels;
		opts.sizeMeasureType = signature_cloud.SignTextOptions.SizeMeasureTypeEnum.Pixels;
		opts.rotationAngle = 0;
		opts.horizontalAlignment = signature_cloud.SignTextOptions.HorizontalAlignmentEnum.None;
		opts.verticalAlignment = signature_cloud.SignTextOptions.VerticalAlignmentEnum.None;

		opts.margin = new signature_cloud.Padding();
		opts.margin.all = 5;
		opts.marginMeasureType = signature_cloud.SignTextOptions.MarginMeasureTypeEnum.Pixels;

		// set signature appearance
		opts.backgroundColor = new signature_cloud.Color();
		opts.backgroundColor.web = "CornflowerBlue";
		opts.backgroundColorCropType = signature_cloud.SignStampOptions.BackgroundColorCropTypeEnum.InnerArea;
		opts.backgroundImageCropType = signature_cloud.SignStampOptions.BackgroundImageCropTypeEnum.MiddleArea;

		let outline = new signature_cloud.StampLine();
		outline.text = "GroupDocs";

		outline.font = new signature_cloud.SignatureFont();
		outline.font.fontFamily = "Arial";
		outline.font.fontSize = 12;
		outline.font.bold = true;
		outline.font.italic = true;
		outline.font.underline = true;
		outline.textBottomIntent = 5;

		outline.textColor = new signature_cloud.Color();
		outline.textColor.web = "Gold";
		outline.textRepeatType = signature_cloud.StampLine.TextRepeatTypeEnum.FullTextRepeat;

		outline.backgroundColor = new signature_cloud.Color();
		outline.backgroundColor.web = "BlueViolet";
		outline.height = 20;

		outline.innerBorder = new signature_cloud.BorderLine();
		outline.innerBorder.color = new signature_cloud.Color();
		outline.innerBorder.color.web = "DarkOrange";
		outline.innerBorder.style = signature_cloud.BorderLine.StyleEnum.LongDash;
		outline.innerBorder.transparency = 0.5;
		outline.innerBorder.weight = 1.2;

		outline.outerBorder = new signature_cloud.BorderLine();
		outline.outerBorder.color = new signature_cloud.Color();
		outline.outerBorder.color.web = "DarkOrange";
		outline.outerBorder.style = signature_cloud.BorderLine.StyleEnum.LongDashDot;
		outline.outerBorder.transparency = 0.7;
		outline.outerBorder.weight = 1.4;
		outline.visible = true;
		opts.outerLines = [outline];

		let innerline = new signature_cloud.StampLine();
		innerline.text = "GroupDocs.Signature Cloud";

		innerline.font = new signature_cloud.SignatureFont();
		innerline.font.fontFamily = "Times New Roman";
		innerline.font.fontSize = 20;
		innerline.font.bold = true;
		innerline.font.italic = true;
		innerline.font.underline = true;
		innerline.textBottomIntent = 3;

		innerline.textColor = new signature_cloud.Color();
		innerline.textColor.web = "Gold";
		innerline.textRepeatType = signature_cloud.StampLine.TextRepeatTypeEnum.None;

		innerline.backgroundColor = new signature_cloud.Color();
		innerline.backgroundColor.web = "CornflowerBlue";
		innerline.height = 30;

		innerline.innerBorder = new signature_cloud.BorderLine();
		innerline.innerBorder.color = new signature_cloud.Color();
		innerline.innerBorder.color.web = "OliveDrab";
		innerline.innerBorder.style = signature_cloud.BorderLine.StyleEnum.LongDash;
		innerline.innerBorder.transparency = 0.5;
		innerline.innerBorder.weight = 1.2;

		innerline.outerBorder = new signature_cloud.BorderLine();
		innerline.outerBorder.color = new signature_cloud.Color();
		innerline.outerBorder.color.web = "GhostWhite";
		innerline.outerBorder.style = signature_cloud.BorderLine.StyleEnum.LongDashDot;
		innerline.outerBorder.transparency = 0.4;
		innerline.outerBorder.weight = 1.4;
		innerline.visible = true;
		opts.innerLines = [innerline];

		opts.page = 1;

		let settings = new signature_cloud.SignSettings();
		settings.fileInfo = fileInfo;
		settings.options = [opts];
		settings.saveOptions = new signature_cloud.SaveOptions();
		settings.saveOptions.outputFilePath = "signaturedocs/signedStamp_One_page.docx";

		let request = new signature_cloud.CreateSignaturesRequest(settings);
		let response = await signApi.createSignatures(request);
		console.log("Expected response type is SignResult: DownloadUrl = " + response.downloadUrl);
	}
}
module.exports = StampSignature;