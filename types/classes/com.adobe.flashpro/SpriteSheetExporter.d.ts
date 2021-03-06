/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Stand alone object used to generate sprite sheets from 
		 * symbol and bitmap instances
		 */
		class SpriteSheetExporter extends Adobe.Csawlib.CSHostObject {
			/**
			 * What algorithm to use to pack the sprite sheet.  Valid 
			 * values are:
			 * "basic"
			 * "maxRects"
			 * @type {any}
			 */
			public algorithm: any;
			/**
			 * If the frames can be rotated when packed
			 * @type {boolean}
			 */
			public allowRotate: boolean;
			/**
			 * If the frames can be trimmed of extra whitespace when packed
			 * @type {boolean}
			 */
			public allowTrimming: boolean;
			/**
			 * name of the applicaction ex: "Adobe Flash CS6"
			 * 
			 * This is meant to be used by the sprite sheet generator 
			 * plugins
			 * @type {string}
			 * @readonly
			 */
			public readonly app: string;
			/**
			 * If the exporter should attempt to size the sheet by itself
			 * @type {boolean}
			 */
			public autoSize: boolean;
			/**
			 * How much padding around the entire bitmap should be applied
			 * @type {number}
			 */
			public borderPadding: number;
			/**
			 * if the framework specified by layoutFormat supports border 
			 * padding
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canBorderPad: boolean;
			/**
			 * if the framework specified by layoutFormat rotated frames
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canRotate: boolean;
			/**
			 * if the framework specified by layoutFormat supports shape 
			 * padding
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canShapePad: boolean;
			/**
			 * if the framework specified by layoutFormat supports stacking 
			 * duplicate
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canStackDuplicateFrames: boolean;
			/**
			 * if the framework specified by layoutFormat supports trimming
			 * @type {boolean}
			 * @readonly
			 */
			public readonly canTrim_: boolean;
			/**
			 * a string that describes the format of the image file, 
			 * current values are:
			 * 
			 * GBA8888
			 * GB888x
			 * GB8
			 * 
			 * This is meant to be used by the sprite sheet generator 
			 * plugins
			 * @type {string}
			 * @readonly
			 */
			public readonly format: string;
			/**
			 * The name of the image file of the sprite sheet.
			 * 
			 * This is meant to be used by the sprite sheet generator 
			 * plugins.
			 * @type {string}
			 * @readonly
			 */
			public readonly image: string;
			/**
			 * A name that identified the format of the sprite sheet 
			 * metadata.  Valid values are based on what is in the "Sprite 
			 * Sheet Plugin" directory
			 * @type {string}
			 */
			public layoutFormat: string;
			/**
			 * if all the frames can't fit in the sprite sheet with the 
			 * given settings
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overflowed: boolean;
			/**
			 * How much padding around individual frames should be applied 
			 * when laying out the sprite sheet
			 * @type {number}
			 */
			public shapePadding: number;
			/**
			 * The height of the sheet, is read-only if autoSize is true
			 * @type {number}
			 */
			public sheetHeight: number;
			/**
			 * The width of the sheet, is read-only if autoSize is true
			 * @type {number}
			 */
			public sheetWidth: number;
			/**
			 * If the final sprite sheet can use the same space for frames 
			 * that are the same
			 * @type {boolean}
			 */
			public stackDuplicateFrames: boolean;
			/**
			 * the version string of the application ex: "12.0.0.247"
			 * 
			 * This is meant to be used by the sprite sheet plugin 
			 * generators
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * Adds a bitmap or bitmapItem to the sprite sheet
			 * @param {any} bitmap The BitmapItem or Bitmap to include in 
			 * the sprite sheet
			 * @returns {void}
			 */
			public addBitmap(bitmap: any): void;
			/**
			 * Adds a symbol to be used to generate the sprite sheet
			 * @param {any} _symbol A SymbolItem or a SymbolInstance
			 * @param {string} name name to use for a symbol instance
			 * @param {number} beginFrame beginning frame of the symbol to 
			 * include in the sprite sheet (inclusive)
			 * @param {number} endFrame ending frame of the symbol to 
			 * included in the sprite sheet (inclusive)
			 * @returns {boolean}
			 */
			public addSymbol(_symbol: any, name: string, beginFrame: number, endFrame: number): boolean;
			/**
			 * Initializes the SpriteSheetExporter to create a new sprite 
			 * sheet.  Not necessary if you create the exporter from new.  
			 * Is necessary if reusing the same exporter to make multiple 
			 * sprite sheets.
			 * @returns {void}
			 */
			public beginExport(): void;
			/**
			 * Changes the frames of the symbol used in the sprite sheet
			 * @param {any} _symbol A SymbolItem or SymbolInstance that has 
			 * alread been added to the exporter
			 * @param {number} beginFrame The begining frame of the frame 
			 * range to include in the sprite sheet
			 * @param {number} endFrame The end frame of the frame range to 
			 * include the sprite sheet
			 * @returns {boolean}
			 */
			public changeSymbol(_symbol: any, beginFrame: number, endFrame: number): boolean;
			/**
			 * Exports the sprite sheet into a an image file and a meta 
			 * data file based on the path parameter.  The return string is 
			 * the meta data generated by the sprite sheet plugin or 
			 * nothing if an error occurred
			 * @param {string} path A file path with no extension to be 
			 * used as the base name of the exporter files
			 * @param {any} imageFormat Either a string or an object that 
			 * describes the type of image format to generate.  If a string 
			 * valid values are either "png" or "jpg", the exporter will 
			 * use whatever values where last used.  If an object it needs 
			 * at least a string property "format" which is either "png" or 
			 * "jpg".  Optionally the object may include "backgroundColor" 
			 * a valid color value (alpha may be included), "quality" (for 
			 * jpg only) an integer from 1 to 100, and "bitDepth" (for png 
			 * only) either 8, 24 or 32.
			 * @param {boolean} writeMetaData Whether or not to write the 
			 * meta data file with the image file.  The default value is 
			 * true
			 * @returns {string}
			 */
			public exportSpriteSheet(path: string, imageFormat: any, writeMetaData: boolean): string;
			/**
			 * Removes a bitmap from a sprite sheet
			 * @param {any} bitmap A BitmapItem or Bitmap that has already 
			 * been added to the sprite sheet to remove
			 * @returns {void}
			 */
			public removeBitmap(bitmap: any): void;
			/**
			 * Removes a symbol from the sprite sheet
			 * @param {any} _symbol A SymbolItem or SymbolInstance that has 
			 * been previously added to the exporter
			 * @returns {boolean}
			 */
			public removeSymbol(_symbol: any): boolean;
		}
	}
}