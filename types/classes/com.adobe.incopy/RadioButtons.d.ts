/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RadioButtons extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new RadioButton
			 * @param {Layer} layerParam The layer on which to create the 
			 * RadioButton. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the RadioButton relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RadioButton (Optional)
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.RadioButton;
			/**
			 * Returns any RadioButton in the collection.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public anyItem(): Adobe.Incopy.RadioButton;
			/**
			 * Displays the number of elements in the RadioButton.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every RadioButton in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first RadioButton in the collection.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public firstItem(): Adobe.Incopy.RadioButton;
			/**
			 * Returns the RadioButton with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public item(indexParam: any): Adobe.Incopy.RadioButton;
			/**
			 * Returns the RadioButton with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public itemByID(idParam: number): Adobe.Incopy.RadioButton;
			/**
			 * Returns the RadioButton with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.RadioButton;
			/**
			 * Returns the RadioButtons within the specified range.
			 * @param {any} fromParam The RadioButton, index, or name at 
			 * the beginning of the range. Can accept: RadioButton, Long 
			 * Integer or String.
			 * @param {any} toParam The RadioButton, index, or name at the 
			 * end of the range. Can accept: RadioButton, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last RadioButton in the collection.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public lastItem(): Adobe.Incopy.RadioButton;
			/**
			 * Returns the middle RadioButton in the collection.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public middleItem(): Adobe.Incopy.RadioButton;
			/**
			 * Returns the RadioButton whose index follows the specified 
			 * RadioButton in the collection.
			 * @param {RadioButton} objParam The RadioButton whose index 
			 * comes before the desired RadioButton. 
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public nextItem(objParam: RadioButton): Adobe.Incopy.RadioButton;
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
			 * Returns the RadioButton with the index previous to the 
			 * specified index.
			 * @param {RadioButton} objParam The index of the RadioButton 
			 * that follows the desired RadioButton.
			 * @returns {Adobe.Incopy.RadioButton}
			 */
			public previousItem(objParam: RadioButton): Adobe.Incopy.RadioButton;
		}
	}
}