/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Graphics extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Graphic in the collection. */
			public anyItem(): Adobe.Incopy.Graphic;
			/** Displays the number of elements in the Graphic. */
			public count(): number;
			/** Returns every Graphic in the collection. */
			public everyItem(): any;
			/** Returns the first Graphic in the collection. */
			public firstItem(): Adobe.Incopy.Graphic;
			/**
			 * Returns the Graphic with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Graphic;
			/**
			 * Returns the Graphic with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Graphic;
			/**
			 * Returns the Graphic with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Graphic;
			/**
			 * Returns the Graphics within the specified range.
			 * @param {any} fromParam - The Graphic, index, or name at the 
			 * beginning of the range. Can accept: Graphic, Long Integer or 
			 * String.
			 * @param {any} toParam - The Graphic, index, or name at the 
			 * end of the range. Can accept: Graphic, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Graphic in the collection. */
			public lastItem(): Adobe.Incopy.Graphic;
			/** Returns the middle Graphic in the collection. */
			public middleItem(): Adobe.Incopy.Graphic;
			/**
			 * Returns the Graphic whose index follows the specified 
			 * Graphic in the collection.
			 * @param {Graphic} objParam - The Graphic whose index comes 
			 * before the desired Graphic. 
			 */
			public nextItem(objParam: Graphic): Adobe.Incopy.Graphic;
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
			 * Returns the Graphic with the index previous to the specified 
			 * index.
			 * @param {Graphic} objParam - The index of the Graphic that 
			 * follows the desired Graphic.
			 */
			public previousItem(objParam: Graphic): Adobe.Incopy.Graphic;
		}
	}
}