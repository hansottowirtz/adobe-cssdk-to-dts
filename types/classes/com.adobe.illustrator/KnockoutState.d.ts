/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class KnockoutState extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Knockout off. */
			public static readonly DISABLED: Adobe.Illustrator.KnockoutState;
			/** Knockout off. */
			public static readonly ENABLED: Adobe.Illustrator.KnockoutState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Knockout state inherited from group? */
			public static readonly INHERITED: Adobe.Illustrator.KnockoutState;
			/** Unknown/uninitialized knockout state. */
			public static readonly Unknown: Adobe.Illustrator.KnockoutState;
			/** Constructor */
			public constructor();
		}
	}
}