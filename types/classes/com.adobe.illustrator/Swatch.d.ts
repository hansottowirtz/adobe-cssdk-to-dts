/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Swatch extends IllustratorHostObject {
			/** The color information of the swatch. */
			public color: Color;
			/** The swatch's name. */
			public name: string;
			/** delete the object */
			public remove(): void;
		}
	}
}