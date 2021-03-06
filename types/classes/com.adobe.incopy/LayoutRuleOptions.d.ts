/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LayoutRuleOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use guide slicing to resize objects on the page as it 
			 * resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly GUIDE_BASED: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for GUIDE_BASED. Use guide slicing to resize objects 
			 * on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly guideBased: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Reposition and resize objects on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly OBJECT_BASED: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for OBJECT_BASED. Reposition and resize objects on the 
			 * page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly objectBased: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for OFF. No layout rule on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly off: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * No layout rule on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly OFF: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Use existing layout rule setting on the page. Used for 
			 * creating alternate layouts.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly PRESERVE_EXISTING: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for PRESERVE_EXISTING. Use existing layout rule 
			 * setting on the page. Used for creating alternate layouts.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly preserveExisting: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for RECENTER. Recenter objects on the page as it 
			 * resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly recenter: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Recenter objects on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly RECENTER: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for SCALE. Scale objects on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly scale: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Scale objects on the page as it resizes.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly SCALE: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Use layout rule from the page's applied master page.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly USE_MASTER: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Alias for USE_MASTER. Use layout rule from the page's 
			 * applied master page.
			 * @type {Adobe.Incopy.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly useMaster: Adobe.Incopy.LayoutRuleOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}