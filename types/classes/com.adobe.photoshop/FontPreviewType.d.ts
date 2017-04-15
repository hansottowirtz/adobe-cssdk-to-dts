/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class FontPreviewType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Large type. */
			public static readonly LARGE: Adobe.Photoshop.FontPreviewType;
			/** Medium type. */
			public static readonly MEDIUM: Adobe.Photoshop.FontPreviewType;
			/** No preview. */
			public static readonly NONE: Adobe.Photoshop.FontPreviewType;
			/** Small type. */
			public static readonly SMALL: Adobe.Photoshop.FontPreviewType;
			/** Constructor */
			public constructor();
		}
	}
}