/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any XMLItem in the collection.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public anyItem(): Adobe.Incopy.XMLItem;
			/**
			 * Displays the number of elements in the XMLItem.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLItem in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLItem in the collection.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public firstItem(): Adobe.Incopy.XMLItem;
			/**
			 * Returns the XMLItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public item(indexParam: any): Adobe.Incopy.XMLItem;
			/**
			 * Returns the XMLItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLItem;
			/**
			 * Returns the XMLItems within the specified range.
			 * @param {any} fromParam The XMLItem, index, or name at the 
			 * beginning of the range. Can accept: XMLItem, Long Integer or 
			 * String.
			 * @param {any} toParam The XMLItem, index, or name at the end 
			 * of the range. Can accept: XMLItem, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLItem in the collection.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public lastItem(): Adobe.Incopy.XMLItem;
			/**
			 * Returns the middle XMLItem in the collection.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public middleItem(): Adobe.Incopy.XMLItem;
			/**
			 * Returns the XMLItem whose index follows the specified 
			 * XMLItem in the collection.
			 * @param {XMLItem} objParam The XMLItem whose index comes 
			 * before the desired XMLItem. 
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public nextItem(objParam: XMLItem): Adobe.Incopy.XMLItem;
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
			 * Returns the XMLItem with the index previous to the specified 
			 * index.
			 * @param {XMLItem} objParam The index of the XMLItem that 
			 * follows the desired XMLItem.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public previousItem(objParam: XMLItem): Adobe.Incopy.XMLItem;
		}
	}
}