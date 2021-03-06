/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OpenOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Default based on the file type or extension.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.OpenOptions;
			/**
			 * Alias for DEFAULT_VALUE. Default based on the file type or 
			 * extension.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.OpenOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Open a copy of the document.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly OPEN_COPY: Adobe.Incopy.OpenOptions;
			/**
			 * Open the document itself.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly OPEN_ORIGINAL: Adobe.Incopy.OpenOptions;
			/**
			 * Alias for OPEN_COPY. Open a copy of the document.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly openCopy: Adobe.Incopy.OpenOptions;
			/**
			 * Alias for OPEN_ORIGINAL. Open the document itself.
			 * @type {Adobe.Incopy.OpenOptions}
			 * @readonly
			 */
			public static readonly openOriginal: Adobe.Incopy.OpenOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}