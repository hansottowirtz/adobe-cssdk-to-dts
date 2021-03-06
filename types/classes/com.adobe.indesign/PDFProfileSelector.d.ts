/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFProfileSelector extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the document's CMYK profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Uses the monitor's color profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly USE_MONITOR_PROFILE: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Uses no profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly USE_NO_PROFILE: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Alias for USE_DOCUMENT. Uses the document's CMYK profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Alias for USE_MONITOR_PROFILE. Uses the monitor's color 
			 * profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly useMonitorProfile: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Alias for USE_NO_PROFILE. Uses no profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly useNoProfile: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Alias for WORKING. Uses the working CMYK profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly working: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Uses the working CMYK profile.
			 * @type {Adobe.Indesign.PDFProfileSelector}
			 * @readonly
			 */
			public static readonly WORKING: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}