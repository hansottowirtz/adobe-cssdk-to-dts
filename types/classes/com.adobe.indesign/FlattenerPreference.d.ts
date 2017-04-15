/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlattenerPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, ensures that the boundaries between vector and 
			 * rasterized artwork fall along object paths.
			 */
			public clipComplexRegions: boolean;
			/**
			 * If true, converts all strokes to outlines and ensures that 
			 * stroke widths remain constant during flattening. Note: Can 
			 * cause thin strokes to appear slightly thicker than their 
			 * original width. Affects all strokes, not only strokes 
			 * involved in the transparency.
			 */
			public convertAllStrokesToOutlines: boolean;
			/**
			 * If true, converts all text to outlines and discards all type 
			 * glyph information on spreads with transparency; ensures that 
			 * the width of text strokes remains constant during 
			 * flattening. Note: Can cause small fonts to appear slightly 
			 * thicker when viewed in Acrobat or printed on low-quality 
			 * desktop printers, but does not affect type quality when 
			 * printed on high-resolution printers or imagesetters.
			 */
			public convertAllTextToOutlines: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The resolution for gradients rasterized as a result of 
			 * flattening and for drop shadow and feathers when printed or 
			 * exported. (Range: 0 to 1200) Note: Resolutions higher than 
			 * 300 ppi increase file size and printing time but generally 
			 * do not improve the image quality.
			 */
			public gradientAndMeshResolution: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The resolution for vector objects rasterized as a result of 
			 * flattening. (Range: 1 to 9600) For information, see raster 
			 * vector balance.
			 */
			public lineArtAndTextResolution: number;
			/** The parent of the FlattenerPreference (a Spread). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The amount of vector artwork to rasterize during flattening, 
			 * specified as an enumerator or as a percentage in the range 0 
			 * to 100. Can return: FlattenerLevel enumerator or Real (0 - 
			 * 100).
			 */
			public rasterVectorBalance: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFlattenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerFlattenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}