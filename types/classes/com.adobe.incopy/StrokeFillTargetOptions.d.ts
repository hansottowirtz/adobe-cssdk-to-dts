/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeFillTargetOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Formatting affects the container.
			 * @type {Adobe.Incopy.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly FORMATTING_AFFECTS_CONTAINER: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Formatting affects the text.
			 * @type {Adobe.Incopy.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly FORMATTING_AFFECTS_TEXT: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_CONTAINER. Formatting affects 
			 * the container.
			 * @type {Adobe.Incopy.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly formattingAffectsContainer: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_TEXT. Formatting affects the 
			 * text.
			 * @type {Adobe.Incopy.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly formattingAffectsText: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}