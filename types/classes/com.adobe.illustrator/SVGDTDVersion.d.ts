/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The version of the SVG DTD. */
		class SVGDTDVersion extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** SVG 1.0. */
			public static readonly SVG1_0: Adobe.Illustrator.SVGDTDVersion;
			/** SVG 1.1. */
			public static readonly SVG1_1: Adobe.Illustrator.SVGDTDVersion;
			/** SVG Basic 1.1. */
			public static readonly SVGBASIC1_1: Adobe.Illustrator.SVGDTDVersion;
			/** SVG Tiny 1.1. */
			public static readonly SVGTINY1_1: Adobe.Illustrator.SVGDTDVersion;
			/** SVG Tiny 1.1 Plus. */
			public static readonly SVGTINY1_1PLUS: Adobe.Illustrator.SVGDTDVersion;
			/** SVG Tiny 1.2. */
			public static readonly SVGTINY1_2: Adobe.Illustrator.SVGDTDVersion;
			/** Constructor */
			public constructor();
		}
	}
}