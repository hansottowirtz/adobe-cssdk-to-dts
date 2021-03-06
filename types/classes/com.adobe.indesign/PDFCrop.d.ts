/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFCrop extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places only the area defined by the PDF author as placeable 
			 * artwork.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_ART: Adobe.Indesign.PDFCrop;
			/**
			 * Places only the area that represents clipped content.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_BLEED: Adobe.Indesign.PDFCrop;
			/**
			 * Places the page's bounding box using all layers.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_CONTENT_ALL_LAYERS: Adobe.Indesign.PDFCrop;
			/**
			 * Places the page's bounding box using visible layers only.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_CONTENT_VISIBLE_LAYERS: Adobe.Indesign.PDFCrop;
			/**
			 * Places the area that represents the physical paper size of 
			 * the original PDF document.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_MEDIA: Adobe.Indesign.PDFCrop;
			/**
			 * Places only the area displayed by Acrobat.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_PDF: Adobe.Indesign.PDFCrop;
			/**
			 * Places only the area that represents the final trim size of 
			 * the document.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly CROP_TRIM: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_ART. Places only the area defined by the PDF 
			 * author as placeable artwork.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropArt: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_BLEED. Places only the area that represents 
			 * clipped content.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropBleed: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_CONTENT_ALL_LAYERS. Places the page's 
			 * bounding box using all layers.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropContentAllLayers: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_CONTENT_VISIBLE_LAYERS. Places the page's 
			 * bounding box using visible layers only.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropContentVisibleLayers: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_MEDIA. Places the area that represents the 
			 * physical paper size of the original PDF document.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropMedia: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_PDF. Places only the area displayed by 
			 * Acrobat.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropPdf: Adobe.Indesign.PDFCrop;
			/**
			 * Alias for CROP_TRIM. Places only the area that represents 
			 * the final trim size of the document.
			 * @type {Adobe.Indesign.PDFCrop}
			 * @readonly
			 */
			public static readonly cropTrim: Adobe.Indesign.PDFCrop;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}