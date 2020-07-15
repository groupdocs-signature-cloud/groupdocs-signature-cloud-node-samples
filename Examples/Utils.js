"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new signature_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			let file = fs.readFileSync(resourcesFolder + filePath);
			let uploadRequest = new signature_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("signaturedocs/one-page.docx");
		await this.UploadTestFile("signaturedocs/sample2.pdf");
		await this.UploadTestFile("signaturedocs/signature.jpg");
		await this.UploadTestFile("signaturedocs/temp.pfx");
	}	
}

module.exports = Utils;
