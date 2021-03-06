/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompositeFontEntries extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CompositeFontEntry.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CompositeFontEntry (Optional)
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns any CompositeFontEntry in the collection.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public anyItem(): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Displays the number of elements in the CompositeFontEntry.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CompositeFontEntry in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CompositeFontEntry in the collection.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public firstItem(): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the CompositeFontEntry with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public item(indexParam: any): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the CompositeFontEntry with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the CompositeFontEntry with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the CompositeFontEntries within the specified range.
			 * @param {any} fromParam The CompositeFontEntry, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CompositeFontEntry, Long Integer or String.
			 * @param {any} toParam The CompositeFontEntry, index, or name 
			 * at the end of the range. Can accept: CompositeFontEntry, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CompositeFontEntry in the collection.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public lastItem(): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the middle CompositeFontEntry in the collection.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public middleItem(): Adobe.Indesign.CompositeFontEntry;
			/**
			 * Returns the CompositeFontEntry whose index follows the 
			 * specified CompositeFontEntry in the collection.
			 * @param {CompositeFontEntry} objParam The CompositeFontEntry 
			 * whose index comes before the desired CompositeFontEntry. 
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public nextItem(objParam: CompositeFontEntry): Adobe.Indesign.CompositeFontEntry;
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
			 * Returns the CompositeFontEntry with the index previous to 
			 * the specified index.
			 * @param {CompositeFontEntry} objParam The index of the 
			 * CompositeFontEntry that follows the desired 
			 * CompositeFontEntry.
			 * @returns {Adobe.Indesign.CompositeFontEntry}
			 */
			public previousItem(objParam: CompositeFontEntry): Adobe.Indesign.CompositeFontEntry;
		}
	}
}