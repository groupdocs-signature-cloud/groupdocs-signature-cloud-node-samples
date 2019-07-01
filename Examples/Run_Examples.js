"use strict";
global.groupdocs_signature_cloud_1 = require("groupdocs-signature-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-signature-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Signature Cloud API Examples
//// ***********************************************************
//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX";
global.appKey = "XXXXXXXXXXXXXXX";
global.myStorage = "XXXXX";

// construct SignApi
global.signApi = groupdocs_signature_cloud_1.SignApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = groupdocs_signature_cloud_1.InfoApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = groupdocs_signature_cloud_1.StorageApi.fromKeys(appSid, appKey);

// construct FolderApi
global.folderApi = groupdocs_signature_cloud_1.FolderApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = groupdocs_signature_cloud_1.FileApi.fromKeys(appSid, appKey);

// Uploading sample test files from local to storage under folder 'Signaturedocs'
//console.log("Executing Upload Test Files...");
//require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

//// ***********************************************************
///// ***** WORKING WITH STORAGE *****
//// ***********************************************************

// Is Storage Exist
//require('./Working_With_Storage/Signature_Node_Storage_Exist').Run();

// Get Get Disc Usage
//require('./Working_With_Storage/Signature_Node_Get_Disc_Usage').Run();

// Get File Versions
//require('./Working_With_Storage/Signature_Node_Get_File_Versions').Run();

// Is Object Exists
//require('./Working_With_Storage/Signature_Node_Object_Exists').Run();


//// ***********************************************************
//// ***** WORKING WITH FOLDER *****
//// ***********************************************************

// Create Folder
//require('./Working_With_Folder/Signature_Node_Create_Folder').Run();

// Copy Folder
//require('./Working_With_Folder/Signature_Node_Copy_Folder').Run();

// Move Folder
//require('./Working_With_Folder/Signature_Node_Move_Folder').Run();

// Delete Folder
//require('./Working_With_Folder/Signature_Node_Delete_Folder').Run();

// Get Files List
//require('./Working_With_Folder/Signature_Node_Get_Files_List').Run();


//// ***********************************************************
//// ***** WORKING WITH FILES *****
//// ***********************************************************

// Upload File
//require('./Working_With_Files/Signature_Node_Upload_File').Run();

// Copy File
//require('./Working_With_Files/Signature_Node_Copy_File').Run();

// Move File
//require('./Working_With_Files/Signature_Node_Move_File').Run();

// Delete File
//require('./Working_With_Files/Signature_Node_Delete_File').Run();

// Download_File
//require('./Working_With_Files/Signature_Node_Download_File').Run();


//// ***********************************************************
//// ***** WORKING WITH SUPPORTED FORMATS *****
//// ***********************************************************

// Get All Supported Formats
//require('./Supported_File_Formats/Signature_Node_Get_All_Supported_Formats').Run();

// Get All Supported Barcodes
//require('./Supported_Barcodes/Signature_Node_Get_Supported_Barcodes').Run();

// Get All Supported QRCodes
//require('./Supported_QRCodes/Signature_Node_Get_Supported_QRCodes').Run();


//// ***********************************************************
//// ***** WORKING WITH DOCUMENT INFORMATION *****
//// ***********************************************************

// Get document information/metadata.
//require('./Document_Information/Signature_Node_DocumentInfo_File').Run();


//// ***********************************************************
//// ***** WORKING WITH DOCUMENT SIGNING *****
//// ***********************************************************

// Sign document with Barcode signature.
//require('./Signing_Documents/Signature_Node_Barcode_Signature').Run();

// Sign document with Digital signature.
//require('./Signing_Documents/Signature_Node_Digital_Signature').Run();

// Sign document with Image signature.
//require('./Signing_Documents/Signature_Node_Image_Signature').Run();

// Sign document with QRCode signature.
//require('./Signing_Documents/Signature_Node_QRCode_Signature').Run();

// Sign document with Stamp signature.
//require('./Signing_Documents/Signature_Node_Stamp_Signature').Run();

// Sign document with Text signature.
//require('./Signing_Documents/Signature_Node_Text_Signature').Run();

// Sign document with multiple/collection of signatures.
//require('./Signing_Documents/Signature_Node_Collection_Signature').Run();


//// ***********************************************************
//// ***** WORKING WITH SEARCH SIGNATURES *****
//// ***********************************************************

// Search Barcode signature.
//require('./Search_Signatures/Signature_Node_Search_Barcode_Signature').Run();

// Search Digital signature.
//require('./Search_Signatures/Signature_Node_Search_Digital_Signature').Run();

// Search QRCode signature.
//require('./Search_Signatures/Signature_Node_Search_QRCode_Signature').Run();

// Search multiple/collection of signatures.
//require('./Search_Signatures/Signature_Node_Search_Collection_Signature').Run();


//// ***********************************************************
//// ***** WORKING WITH VERIFY SIGNATURES *****
//// ***********************************************************

// Verify Barcode signature.
//require('./Verify_Signatures/Signature_Node_Verify_Barcode_Signature').Run();

// Verify Digital signature.
//require('./Verify_Signatures/Signature_Node_Verify_Digital_Signature').Run();

// Verify QRCode signature.
//require('./Verify_Signatures/Signature_Node_Verify_QRCode_Signature').Run();

// Verify Text signature.
//require('./Verify_Signatures/Signature_Node_Verify_Text_Signature').Run();

// Verify multiple/collection of signatures.
//require('./Verify_Signatures/Signature_Node_Verify_Collection_Signature').Run();
