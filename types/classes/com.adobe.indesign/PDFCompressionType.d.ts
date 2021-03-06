/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFCompressionType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses no compression.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly COMPRESS_NONE: Adobe.Indesign.PDFCompressionType;
			/**
			 * Compress all objects.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly COMPRESS_OBJECTS: Adobe.Indesign.PDFCompressionType;
			/**
			 * Compresses only objects related to PDF structure.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly COMPRESS_STRUCTURE: Adobe.Indesign.PDFCompressionType;
			/**
			 * Alias for COMPRESS_NONE. Uses no compression.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly compressNone: Adobe.Indesign.PDFCompressionType;
			/**
			 * Alias for COMPRESS_OBJECTS. Compress all objects.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly compressObjects: Adobe.Indesign.PDFCompressionType;
			/**
			 * Alias for COMPRESS_STRUCTURE. Compresses only objects 
			 * related to PDF structure.
			 * @type {Adobe.Indesign.PDFCompressionType}
			 * @readonly
			 */
			public static readonly compressStructure: Adobe.Indesign.PDFCompressionType;
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