/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The type of image to use as a low-resolution preview in the 
		 * destination application.
		 */
		class Preview extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** 8-bit TIFF. */
			public static readonly EIGHTBITTIFF: Adobe.Photoshop.Preview;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 8-bit. */
			public static readonly MACOSEIGHTBIT: Adobe.Photoshop.Preview;
			/** JPEG. */
			public static readonly MACOSJPEG: Adobe.Photoshop.Preview;
			/** Monochrome. */
			public static readonly MACOSMONOCHROME: Adobe.Photoshop.Preview;
			/** Monochrome TIFF. */
			public static readonly MONOCHROMETIFF: Adobe.Photoshop.Preview;
			/** Does not use a preview. */
			public static readonly NONE: Adobe.Photoshop.Preview;
			/** Constructor */
			public constructor();
		}
	}
}