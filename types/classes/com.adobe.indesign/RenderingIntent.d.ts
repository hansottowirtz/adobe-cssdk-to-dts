/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RenderingIntent extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Maintains color accuracy at the expense of preserving 
			 * relationships between colors; most suitable for previewing 
			 * how paper color affects printed colors.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly ABSOLUTE_COLORIMETRIC: Adobe.Indesign.RenderingIntent;
			/**
			 * Alias for ABSOLUTE_COLORIMETRIC. Maintains color accuracy at 
			 * the expense of preserving relationships between colors; most 
			 * suitable for previewing how paper color affects printed 
			 * colors.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly absoluteColorimetric: Adobe.Indesign.RenderingIntent;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PERCEPTUAL. Preserves the visual relationship 
			 * between colors at the expense of actual color values; most 
			 * suitable for photographic images with high percentages of 
			 * out-of-gamut colors.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly perceptual: Adobe.Indesign.RenderingIntent;
			/**
			 * Preserves the visual relationship between colors at the 
			 * expense of actual color values; most suitable for 
			 * photographic images with high percentages of out-of-gamut 
			 * colors.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly PERCEPTUAL: Adobe.Indesign.RenderingIntent;
			/**
			 * Compares the extreme highlight of the source color space to 
			 * that of the desination color space and shifts all colors 
			 * accordingly; out-of-gamut colors are shifted to the closest 
			 * reproducible color in the destination color space.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly RELATIVE_COLORIMETRIC: Adobe.Indesign.RenderingIntent;
			/**
			 * Alias for RELATIVE_COLORIMETRIC. Compares the extreme 
			 * highlight of the source color space to that of the 
			 * desination color space and shifts all colors accordingly; 
			 * out-of-gamut colors are shifted to the closest reproducible 
			 * color in the destination color space.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly relativeColorimetric: Adobe.Indesign.RenderingIntent;
			/**
			 * Alias for SATURATION. Produces vivid colors at the expense 
			 * of color accuracy; most suitable for business graphics such 
			 * as graphs or charts.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly saturation: Adobe.Indesign.RenderingIntent;
			/**
			 * Produces vivid colors at the expense of color accuracy; most 
			 * suitable for business graphics such as graphs or charts.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly SATURATION: Adobe.Indesign.RenderingIntent;
			/**
			 * Uses the current color settings.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly USE_COLOR_SETTINGS: Adobe.Indesign.RenderingIntent;
			/**
			 * Alias for USE_COLOR_SETTINGS. Uses the current color 
			 * settings.
			 * @type {Adobe.Indesign.RenderingIntent}
			 * @readonly
			 */
			public static readonly useColorSettings: Adobe.Indesign.RenderingIntent;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}