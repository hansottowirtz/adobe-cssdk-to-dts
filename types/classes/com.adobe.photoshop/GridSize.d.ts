/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GridSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Large grid squares. */
			public static readonly LARGE: Adobe.Photoshop.GridSize;
			/** Medium grid squares. */
			public static readonly MEDIUM: Adobe.Photoshop.GridSize;
			/** No grid is displayed. */
			public static readonly NONE: Adobe.Photoshop.GridSize;
			/** Small grid squares. */
			public static readonly SMALL: Adobe.Photoshop.GridSize;
			/** Constructor */
			public constructor();
		}
	}
}