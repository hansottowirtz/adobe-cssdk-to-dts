/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SearchStrategies extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Searches forward from the start of the current page. */
			public static readonly FIRST_ON_PAGE: Adobe.Indesign.SearchStrategies;
			/**
			 * Alias for FIRST_ON_PAGE. Searches forward from the start of 
			 * the current page.
			 */
			public static readonly firstOnPage: Adobe.Indesign.SearchStrategies;
			/** Search backward from the end of the current page. */
			public static readonly LAST_ON_PAGE: Adobe.Indesign.SearchStrategies;
			/**
			 * Alias for LAST_ON_PAGE. Search backward from the end of the 
			 * current page.
			 */
			public static readonly lastOnPage: Adobe.Indesign.SearchStrategies;
			/** Constructor */
			public constructor();
		}
	}
}