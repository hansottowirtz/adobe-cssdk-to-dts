/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NewDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 * @readonly
			 */
			public static readonly BITMAP: Adobe.Photoshop.NewDocumentMode;
			/**
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Photoshop.NewDocumentMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Photoshop.NewDocumentMode;
			/**
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Photoshop.NewDocumentMode;
			/**
			 * @type {Adobe.Photoshop.NewDocumentMode}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Photoshop.NewDocumentMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}