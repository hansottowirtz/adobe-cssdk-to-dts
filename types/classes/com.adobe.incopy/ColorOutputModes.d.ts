/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorOutputModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sends full-color versions of the specified pages to the 
			 * printer. Note: Available only for PostScript printers.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_CMYK: Adobe.Incopy.ColorOutputModes;
			/**
			 * Sends grayscale versions of the specified pages to the 
			 * printer.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_GRAY: Adobe.Incopy.ColorOutputModes;
			/**
			 * Sends a full-color version of the specified pages to the 
			 * printer, preserving all color values in the original 
			 * document. Note: Cannot simulate overprint when using this 
			 * option.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_LEAVE_UNCHANGED: Adobe.Incopy.ColorOutputModes;
			/**
			 * Sends full-color versions of the specified pages to the 
			 * printer.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_RGB: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_CMYK. Sends full-color versions of the 
			 * specified pages to the printer. Note: Available only for 
			 * PostScript printers.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeCmyk: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_GRAY. Sends grayscale versions of the 
			 * specified pages to the printer.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeGray: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_LEAVE_UNCHANGED. Sends a full-color 
			 * version of the specified pages to the printer, preserving 
			 * all color values in the original document. Note: Cannot 
			 * simulate overprint when using this option.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeLeaveUnchanged: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_RGB. Sends full-color versions of the 
			 * specified pages to the printer.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeRgb: Adobe.Incopy.ColorOutputModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Allows the printer to create color separations. Note: Valid 
			 * only with a PostScript raster image processing (RIP) device.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly INRIP_SEPARATIONS: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for INRIP_SEPARATIONS. Allows the printer to create 
			 * color separations. Note: Valid only with a PostScript raster 
			 * image processing (RIP) device.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly inripSeparations: Adobe.Incopy.ColorOutputModes;
			/**
			 * Alias for SEPARATIONS. Sends PostScript information for each 
			 * of the required separations to the printer. Note: Available 
			 * only for PostScript printers.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly separations: Adobe.Incopy.ColorOutputModes;
			/**
			 * Sends PostScript information for each of the required 
			 * separations to the printer. Note: Available only for 
			 * PostScript printers.
			 * @type {Adobe.Incopy.ColorOutputModes}
			 * @readonly
			 */
			public static readonly SEPARATIONS: Adobe.Incopy.ColorOutputModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}