/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScaleModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Scales the page to fit the paper. Note: Valid only when tile 
			 * is false.
			 * @type {Adobe.Indesign.ScaleModes}
			 * @readonly
			 */
			public static readonly SCALE_TO_FIT: Adobe.Indesign.ScaleModes;
			/**
			 * Scales the page width and height.
			 * @type {Adobe.Indesign.ScaleModes}
			 * @readonly
			 */
			public static readonly SCALE_WIDTH_HEIGHT: Adobe.Indesign.ScaleModes;
			/**
			 * Alias for SCALE_TO_FIT. Scales the page to fit the paper. 
			 * Note: Valid only when tile is false.
			 * @type {Adobe.Indesign.ScaleModes}
			 * @readonly
			 */
			public static readonly scaleToFit: Adobe.Indesign.ScaleModes;
			/**
			 * Alias for SCALE_WIDTH_HEIGHT. Scales the page width and 
			 * height.
			 * @type {Adobe.Indesign.ScaleModes}
			 * @readonly
			 */
			public static readonly scaleWidthHeight: Adobe.Indesign.ScaleModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}