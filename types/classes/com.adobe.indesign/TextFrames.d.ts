/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextFrames extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TextFrame
			 * @param {Layer} layerParam The layer on which to create the 
			 * TextFrame. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the TextFrame relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TextFrame (Optional)
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.TextFrame;
			/**
			 * Returns any TextFrame in the collection.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public anyItem(): Adobe.Indesign.TextFrame;
			/**
			 * Displays the number of elements in the TextFrame.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TextFrame in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TextFrame in the collection.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public firstItem(): Adobe.Indesign.TextFrame;
			/**
			 * Returns the TextFrame with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public item(indexParam: any): Adobe.Indesign.TextFrame;
			/**
			 * Returns the TextFrame with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public itemByID(idParam: number): Adobe.Indesign.TextFrame;
			/**
			 * Returns the TextFrame with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TextFrame;
			/**
			 * Returns the TextFrames within the specified range.
			 * @param {any} fromParam The TextFrame, index, or name at the 
			 * beginning of the range. Can accept: TextFrame, Long Integer 
			 * or String.
			 * @param {any} toParam The TextFrame, index, or name at the 
			 * end of the range. Can accept: TextFrame, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TextFrame in the collection.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public lastItem(): Adobe.Indesign.TextFrame;
			/**
			 * Returns the middle TextFrame in the collection.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public middleItem(): Adobe.Indesign.TextFrame;
			/**
			 * Returns the TextFrame whose index follows the specified 
			 * TextFrame in the collection.
			 * @param {TextFrame} objParam The TextFrame whose index comes 
			 * before the desired TextFrame. 
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public nextItem(objParam: TextFrame): Adobe.Indesign.TextFrame;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the TextFrame with the index previous to the 
			 * specified index.
			 * @param {TextFrame} objParam The index of the TextFrame that 
			 * follows the desired TextFrame.
			 * @returns {Adobe.Indesign.TextFrame}
			 */
			public previousItem(objParam: TextFrame): Adobe.Indesign.TextFrame;
		}
	}
}