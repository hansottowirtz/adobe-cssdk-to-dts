/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The figure style type. */
		class FigureStyleType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Default figure style. */
			public static readonly DEFAULTFIGURESTYLE: Adobe.Illustrator.FigureStyleType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Proportional lining style. */
			public static readonly PROPORTIONAL: Adobe.Illustrator.FigureStyleType;
			/** Proportional oldstyle. */
			public static readonly PROPORTIONALOLDSTYLE: Adobe.Illustrator.FigureStyleType;
			/** Tabular lining style. */
			public static readonly TABULAR: Adobe.Illustrator.FigureStyleType;
			/** Tabular oldstyle. */
			public static readonly TABULAROLDSTYLE: Adobe.Illustrator.FigureStyleType;
			/** Constructor */
			public constructor();
		}
	}
}