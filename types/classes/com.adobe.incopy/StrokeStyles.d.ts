/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any StrokeStyle in the collection.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public anyItem(): Adobe.Incopy.StrokeStyle;
			/**
			 * Displays the number of elements in the StrokeStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every StrokeStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first StrokeStyle in the collection.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public firstItem(): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the StrokeStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the StrokeStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the StrokeStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the StrokeStyles within the specified range.
			 * @param {any} fromParam The StrokeStyle, index, or name at 
			 * the beginning of the range. Can accept: StrokeStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The StrokeStyle, index, or name at the 
			 * end of the range. Can accept: StrokeStyle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last StrokeStyle in the collection.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public lastItem(): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the middle StrokeStyle in the collection.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public middleItem(): Adobe.Incopy.StrokeStyle;
			/**
			 * Returns the StrokeStyle whose index follows the specified 
			 * StrokeStyle in the collection.
			 * @param {StrokeStyle} objParam The StrokeStyle whose index 
			 * comes before the desired StrokeStyle. 
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public nextItem(objParam: StrokeStyle): Adobe.Incopy.StrokeStyle;
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
			 * Returns the StrokeStyle with the index previous to the 
			 * specified index.
			 * @param {StrokeStyle} objParam The index of the StrokeStyle 
			 * that follows the desired StrokeStyle.
			 * @returns {Adobe.Incopy.StrokeStyle}
			 */
			public previousItem(objParam: StrokeStyle): Adobe.Incopy.StrokeStyle;
		}
	}
}