/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LanguagesWithVendors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any LanguageWithVendors in the collection. */
			public anyItem(): Adobe.Indesign.LanguageWithVendors;
			/** Displays the number of elements in the LanguageWithVendors. */
			public count(): number;
			/** Returns every LanguageWithVendors in the collection. */
			public everyItem(): any;
			/** Returns the first LanguageWithVendors in the collection. */
			public firstItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguagesWithVendors within the specified range.
			 * @param {any} fromParam - The LanguageWithVendors, index, or 
			 * name at the beginning of the range. Can accept: 
			 * LanguageWithVendors, Long Integer or String.
			 * @param {any} toParam - The LanguageWithVendors, index, or 
			 * name at the end of the range. Can accept: 
			 * LanguageWithVendors, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last LanguageWithVendors in the collection. */
			public lastItem(): Adobe.Indesign.LanguageWithVendors;
			/** Returns the middle LanguageWithVendors in the collection. */
			public middleItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors whose index follows the 
			 * specified LanguageWithVendors in the collection.
			 * @param {LanguageWithVendors} objParam - The 
			 * LanguageWithVendors whose index comes before the desired 
			 * LanguageWithVendors. 
			 */
			public nextItem(objParam: LanguageWithVendors): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the LanguageWithVendors with the index previous to 
			 * the specified index.
			 * @param {LanguageWithVendors} objParam - The index of the 
			 * LanguageWithVendors that follows the desired 
			 * LanguageWithVendors.
			 */
			public previousItem(objParam: LanguageWithVendors): Adobe.Indesign.LanguageWithVendors;
		}
	}
}