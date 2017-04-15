/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/** Zooms to 100%. */
			public static readonly ACTUAL_SIZE: Adobe.Incopy.ZoomOptions;
			/** Alias for ACTUAL_SIZE. Zooms to 100%. */
			public static readonly actualSize: Adobe.Incopy.ZoomOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Centers the active page in the window. */
			public static readonly FIT_PAGE: Adobe.Incopy.ZoomOptions;
			/** Centers the active spread in the window. */
			public static readonly FIT_SPREAD: Adobe.Incopy.ZoomOptions;
			/** Alias for FIT_PAGE. Centers the active page in the window. */
			public static readonly fitPage: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for FIT_SPREAD. Centers the active spread in the 
			 * window.
			 */
			public static readonly fitSpread: Adobe.Incopy.ZoomOptions;
			/** Fits the entire pasteboard in the window. */
			public static readonly SHOW_PASTEBOARD: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for SHOW_PASTEBOARD. Fits the entire pasteboard in the 
			 * window.
			 */
			public static readonly showPasteboard: Adobe.Incopy.ZoomOptions;
			/** Magnifies the view to the next preset percentage. */
			public static readonly ZOOM_IN: Adobe.Incopy.ZoomOptions;
			/** Reduces the view to the next preset percentage. */
			public static readonly ZOOM_OUT: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomIn: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomOut: Adobe.Incopy.ZoomOptions;
			/** Constructor */
			public constructor();
		}
	}
}