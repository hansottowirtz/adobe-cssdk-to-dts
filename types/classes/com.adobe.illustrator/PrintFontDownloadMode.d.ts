/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintFontDownloadMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Download complete. */
			public static readonly DOWNLOADCOMPLETE: Adobe.Illustrator.PrintFontDownloadMode;
			/** Download none. */
			public static readonly DOWNLOADNONE: Adobe.Illustrator.PrintFontDownloadMode;
			/** Download subset. */
			public static readonly DOWNLOADSUBSET: Adobe.Illustrator.PrintFontDownloadMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}