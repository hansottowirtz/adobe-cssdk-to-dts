/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorOutputModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sends full-color versions of the specified pages to the 
			 * printer. Note: Available only for PostScript printers.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_CMYK: Adobe.Indesign.ColorOutputModes;
			/**
			 * Sends grayscale versions of the specified pages to the 
			 * printer.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_GRAY: Adobe.Indesign.ColorOutputModes;
			/**
			 * Sends a full-color version of the specified pages to the 
			 * printer, preserving all color values in the original 
			 * document. Note: Cannot simulate overprint when using this 
			 * option.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_LEAVE_UNCHANGED: Adobe.Indesign.ColorOutputModes;
			/**
			 * Sends full-color versions of the specified pages to the 
			 * printer.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly COMPOSITE_RGB: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_CMYK. Sends full-color versions of the 
			 * specified pages to the printer. Note: Available only for 
			 * PostScript printers.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeCmyk: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_GRAY. Sends grayscale versions of the 
			 * specified pages to the printer.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeGray: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_LEAVE_UNCHANGED. Sends a full-color 
			 * version of the specified pages to the printer, preserving 
			 * all color values in the original document. Note: Cannot 
			 * simulate overprint when using this option.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeLeaveUnchanged: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for COMPOSITE_RGB. Sends full-color versions of the 
			 * specified pages to the printer.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly compositeRgb: Adobe.Indesign.ColorOutputModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Allows the printer to create color separations. Note: Valid 
			 * only with a PostScript raster image processing (RIP) device.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly INRIP_SEPARATIONS: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for INRIP_SEPARATIONS. Allows the printer to create 
			 * color separations. Note: Valid only with a PostScript raster 
			 * image processing (RIP) device.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly inripSeparations: Adobe.Indesign.ColorOutputModes;
			/**
			 * Alias for SEPARATIONS. Sends PostScript information for each 
			 * of the required separations to the printer. Note: Available 
			 * only for PostScript printers.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly separations: Adobe.Indesign.ColorOutputModes;
			/**
			 * Sends PostScript information for each of the required 
			 * separations to the printer. Note: Available only for 
			 * PostScript printers.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 * @readonly
			 */
			public static readonly SEPARATIONS: Adobe.Indesign.ColorOutputModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}