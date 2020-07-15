"use strict";

global.signature_cloud = require("groupdocs-signature-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-signature-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Signature Cloud API Examples
//// ***********************************************************

//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXX-XXXX-XXXX-XXXX";
global.appKey = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new signature_cloud.Configuration(appSid, appKey);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct SignApi
global.signApi = signature_cloud.SignApi.fromConfig(config);

// construct InfoApi
global.infoApi = signature_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = signature_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = signature_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Basic usage Examples

    await require('./BasicUsage/GetSupportedFormats').Run();    
    await require('./BasicUsage/GetDocumentInformation').Run();
    await require('./BasicUsage/GetSupportedBarcodes').Run();
    await require('./BasicUsage/GetSupportedQRCodes').Run();


    // Advanced usage Examples

    await require('./AdvancedUsage/Sign/BarcodeSignature').Run();
    // await require('./AdvancedUsage/Sign/CollectionSignature').Run();
    // await require('./AdvancedUsage/Sign/DigitalSignature').Run();
    // await require('./AdvancedUsage/Sign/ImageSignature').Run();
    // await require('./AdvancedUsage/Sign/QRCodeSignature').Run();
    // await require('./AdvancedUsage/Sign/StampSignature').Run();
    // await require('./AdvancedUsage/Sign/TextSignature').Run();

    await require('./AdvancedUsage/Search/SearchBarcode').Run();
    // await require('./AdvancedUsage/Search/SearchCollection').Run();
    // await require('./AdvancedUsage/Search/SearchDigital').Run();
    // await require('./AdvancedUsage/Search/SearchQRCode').Run();

    await require('./AdvancedUsage/Verify/VerifyBarcode').Run();
    //await require('./AdvancedUsage/Verify/VerifyCollection').Run();
    //await require('./AdvancedUsage/Verify/VerifyDigital').Run();
    //await require('./AdvancedUsage/Verify/VerifyQRCode').Run();
    //await require('./AdvancedUsage/Verify/VerifyText').Run();

    await require('./AdvancedUsage/Update/UpdateBarcode').Run();
    //await require('./AdvancedUsage/Update/UpdateQRCode').Run();

    await require('./AdvancedUsage/Delete/DeleteBarcode').Run();
    //await require('./AdvancedUsage/Delete/DeleteQRCode').Run();    

}

examples();