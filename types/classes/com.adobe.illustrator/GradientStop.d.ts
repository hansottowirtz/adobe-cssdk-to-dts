/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GradientStop extends IllustratorHostObject {
			/** The color linked to this gradient stop. */
			public color: Color;
			/** Midpoint key value in percent. ( 13.0 - 87.0 ) */
			public midPoint: number;
			/**
			 * The opacity (between 0.0 and 100.0) value for the gradient 
			 * stop. ( 0.0 - 100.0 )
			 */
			public opacity: number;
			/** Location of color in the blend (in percent) ( 0.0 - 100.0 ) */
			public rampPoint: number;
			/** delete the object */
			public remove(): void;
		}
	}
}