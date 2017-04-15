/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AdjustmentReference extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** A percentage of the whole. */
			public static readonly ABSOLUTE: Adobe.Photoshop.AdjustmentReference;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** A percentage of the existing color amount. */
			public static readonly RELATIVE: Adobe.Photoshop.AdjustmentReference;
			/** Constructor */
			public constructor();
		}
	}
}