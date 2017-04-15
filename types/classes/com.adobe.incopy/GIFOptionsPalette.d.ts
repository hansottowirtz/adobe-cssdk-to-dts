/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GIFOptionsPalette extends Adobe.Csawlib.CSEnumBase {
			/** Uses the adaptive (no dither) palette. */
			public static readonly ADAPTIVE_PALETTE: Adobe.Incopy.GIFOptionsPalette;
			/**
			 * Alias for ADAPTIVE_PALETTE. Uses the adaptive (no dither) 
			 * palette.
			 */
			public static readonly adaptivePalette: Adobe.Incopy.GIFOptionsPalette;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the Macintosh palette. */
			public static readonly MACINTOSH_PALETTE: Adobe.Incopy.GIFOptionsPalette;
			/** Alias for MACINTOSH_PALETTE. Uses the Macintosh palette. */
			public static readonly macintoshPalette: Adobe.Incopy.GIFOptionsPalette;
			/** Uses the Web palette. */
			public static readonly WEB_PALETTE: Adobe.Incopy.GIFOptionsPalette;
			/** Alias for WEB_PALETTE. Uses the Web palette. */
			public static readonly webPalette: Adobe.Incopy.GIFOptionsPalette;
			/** Uses the Windows palette. */
			public static readonly WINDOWS_PALETTE: Adobe.Incopy.GIFOptionsPalette;
			/** Alias for WINDOWS_PALETTE. Uses the Windows palette. */
			public static readonly windowsPalette: Adobe.Incopy.GIFOptionsPalette;
			/** Constructor */
			public constructor();
		}
	}
}