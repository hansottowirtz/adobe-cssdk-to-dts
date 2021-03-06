/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Columns extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Column.
			 * @param {LocationOptions} atParam The Column's location 
			 * relative to the reference object or within the table.  
			 * (Optional)
			 * @param {any} referenceParam The reference object. Note: The 
			 * reference object must be within the table. Required only 
			 * when the at value contains before or after. Can accept: Row, 
			 * Column, Cell or Table. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Column (Optional)
			 * @returns {any}
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): any;
			/**
			 * Returns any Column in the collection.
			 * @returns {Adobe.Indesign.Column}
			 */
			public anyItem(): Adobe.Indesign.Column;
			/**
			 * Displays the number of elements in the Column.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Column in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Column in the collection.
			 * @returns {Adobe.Indesign.Column}
			 */
			public firstItem(): Adobe.Indesign.Column;
			/**
			 * Returns the Column with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Column}
			 */
			public item(indexParam: any): Adobe.Indesign.Column;
			/**
			 * Returns the Column with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Column}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Column;
			/**
			 * Returns the Columns within the specified range.
			 * @param {any} fromParam The Column, index, or name at the 
			 * beginning of the range. Can accept: Column, Long Integer or 
			 * String.
			 * @param {any} toParam The Column, index, or name at the end 
			 * of the range. Can accept: Column, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Column in the collection.
			 * @returns {Adobe.Indesign.Column}
			 */
			public lastItem(): Adobe.Indesign.Column;
			/**
			 * Returns the middle Column in the collection.
			 * @returns {Adobe.Indesign.Column}
			 */
			public middleItem(): Adobe.Indesign.Column;
			/**
			 * Returns the Column whose index follows the specified Column 
			 * in the collection.
			 * @param {Column} objParam The Column whose index comes before 
			 * the desired Column. 
			 * @returns {Adobe.Indesign.Column}
			 */
			public nextItem(objParam: Column): Adobe.Indesign.Column;
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
			 * Returns the Column with the index previous to the specified 
			 * index.
			 * @param {Column} objParam The index of the Column that 
			 * follows the desired Column.
			 * @returns {Adobe.Indesign.Column}
			 */
			public previousItem(objParam: Column): Adobe.Indesign.Column;
		}
	}
}