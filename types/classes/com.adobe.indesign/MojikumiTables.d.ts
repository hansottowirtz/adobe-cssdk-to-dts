/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MojikumiTables extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new mojikumi table.
			 * @param {string} nameParam The name of the new mojikumi 
			 * table.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MojikumiTable (Optional)
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public add(nameParam: string, withPropertiesParam: any): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns any MojikumiTable in the collection.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public anyItem(): Adobe.Indesign.MojikumiTable;
			/**
			 * Displays the number of elements in the MojikumiTable.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MojikumiTable in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MojikumiTable in the collection.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public firstItem(): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public item(indexParam: any): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the MojikumiTables within the specified range.
			 * @param {any} fromParam The MojikumiTable, index, or name at 
			 * the beginning of the range. Can accept: MojikumiTable, Long 
			 * Integer or String.
			 * @param {any} toParam The MojikumiTable, index, or name at 
			 * the end of the range. Can accept: MojikumiTable, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MojikumiTable in the collection.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public lastItem(): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the middle MojikumiTable in the collection.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public middleItem(): Adobe.Indesign.MojikumiTable;
			/**
			 * Returns the MojikumiTable whose index follows the specified 
			 * MojikumiTable in the collection.
			 * @param {MojikumiTable} objParam The MojikumiTable whose 
			 * index comes before the desired MojikumiTable. 
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public nextItem(objParam: MojikumiTable): Adobe.Indesign.MojikumiTable;
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
			 * Returns the MojikumiTable with the index previous to the 
			 * specified index.
			 * @param {MojikumiTable} objParam The index of the 
			 * MojikumiTable that follows the desired MojikumiTable.
			 * @returns {Adobe.Indesign.MojikumiTable}
			 */
			public previousItem(objParam: MojikumiTable): Adobe.Indesign.MojikumiTable;
		}
	}
}