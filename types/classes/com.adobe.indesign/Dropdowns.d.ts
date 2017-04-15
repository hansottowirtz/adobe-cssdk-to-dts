/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Dropdowns extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Dropdown.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Dropdown (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Dropdown;
			/** Returns any Dropdown in the collection. */
			public anyItem(): Adobe.Indesign.Dropdown;
			/** Displays the number of elements in the Dropdown. */
			public count(): number;
			/** Returns every Dropdown in the collection. */
			public everyItem(): any;
			/** Returns the first Dropdown in the collection. */
			public firstItem(): Adobe.Indesign.Dropdown;
			/**
			 * Returns the Dropdown with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Dropdown;
			/**
			 * Returns the Dropdown with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Dropdown;
			/**
			 * Returns the Dropdowns within the specified range.
			 * @param {any} fromParam - The Dropdown, index, or name at the 
			 * beginning of the range. Can accept: Dropdown, Long Integer 
			 * or String.
			 * @param {any} toParam - The Dropdown, index, or name at the 
			 * end of the range. Can accept: Dropdown, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Dropdown in the collection. */
			public lastItem(): Adobe.Indesign.Dropdown;
			/** Returns the middle Dropdown in the collection. */
			public middleItem(): Adobe.Indesign.Dropdown;
			/**
			 * Returns the Dropdown whose index follows the specified 
			 * Dropdown in the collection.
			 * @param {Dropdown} objParam - The Dropdown whose index comes 
			 * before the desired Dropdown. 
			 */
			public nextItem(objParam: Dropdown): Adobe.Indesign.Dropdown;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the Dropdown with the index previous to the 
			 * specified index.
			 * @param {Dropdown} objParam - The index of the Dropdown that 
			 * follows the desired Dropdown.
			 */
			public previousItem(objParam: Dropdown): Adobe.Indesign.Dropdown;
		}
	}
}