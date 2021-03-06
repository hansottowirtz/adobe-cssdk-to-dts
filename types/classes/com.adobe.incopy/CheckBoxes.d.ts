/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CheckBoxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CheckBox
			 * @param {Layer} layerParam The layer on which to create the 
			 * CheckBox. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the CheckBox relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CheckBox (Optional)
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.CheckBox;
			/**
			 * Returns any CheckBox in the collection.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public anyItem(): Adobe.Incopy.CheckBox;
			/**
			 * Displays the number of elements in the CheckBox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CheckBox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CheckBox in the collection.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public firstItem(): Adobe.Incopy.CheckBox;
			/**
			 * Returns the CheckBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public item(indexParam: any): Adobe.Incopy.CheckBox;
			/**
			 * Returns the CheckBox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public itemByID(idParam: number): Adobe.Incopy.CheckBox;
			/**
			 * Returns the CheckBox with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.CheckBox;
			/**
			 * Returns the CheckBoxes within the specified range.
			 * @param {any} fromParam The CheckBox, index, or name at the 
			 * beginning of the range. Can accept: CheckBox, Long Integer 
			 * or String.
			 * @param {any} toParam The CheckBox, index, or name at the end 
			 * of the range. Can accept: CheckBox, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CheckBox in the collection.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public lastItem(): Adobe.Incopy.CheckBox;
			/**
			 * Returns the middle CheckBox in the collection.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public middleItem(): Adobe.Incopy.CheckBox;
			/**
			 * Returns the CheckBox whose index follows the specified 
			 * CheckBox in the collection.
			 * @param {CheckBox} objParam The CheckBox whose index comes 
			 * before the desired CheckBox. 
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public nextItem(objParam: CheckBox): Adobe.Incopy.CheckBox;
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
			 * Returns the CheckBox with the index previous to the 
			 * specified index.
			 * @param {CheckBox} objParam The index of the CheckBox that 
			 * follows the desired CheckBox.
			 * @returns {Adobe.Incopy.CheckBox}
			 */
			public previousItem(objParam: CheckBox): Adobe.Incopy.CheckBox;
		}
	}
}