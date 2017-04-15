/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class TextPanelette extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public keyValuePairs: any[];
			/** This is not a Property Description. */
			public name: string;
			/** This is not a Property Description. */
			public thumbnails: any[];
			/** This is not a Property Description. */
			public titleMarkup: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args - 
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}