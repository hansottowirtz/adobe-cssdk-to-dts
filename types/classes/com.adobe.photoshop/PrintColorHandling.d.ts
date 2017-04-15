/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PrintColorHandling extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Photoshop manages color conversions. */
			public static readonly PHOTOSHOPMANAGED: Adobe.Photoshop.PrintColorHandling;
			/** Printer manages color conversions. */
			public static readonly PRINTERMANAGED: Adobe.Photoshop.PrintColorHandling;
			/** Print each channel separately without color conversions. */
			public static readonly SEPARATIONS: Adobe.Photoshop.PrintColorHandling;
			/** Constructor */
			public constructor();
		}
	}
}