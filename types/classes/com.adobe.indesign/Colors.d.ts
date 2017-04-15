/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Colors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Color.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Color (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Color;
			/** Returns any Color in the collection. */
			public anyItem(): Adobe.Indesign.Color;
			/** Displays the number of elements in the Color. */
			public count(): number;
			/** Returns every Color in the collection. */
			public everyItem(): any;
			/** Returns the first Color in the collection. */
			public firstItem(): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Color;
			/**
			 * Returns the Color with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Returns the Colors within the specified range.
			 * @param {any} fromParam - The Color, index, or name at the 
			 * beginning of the range. Can accept: Color, Long Integer or 
			 * String.
			 * @param {any} toParam - The Color, index, or name at the end 
			 * of the range. Can accept: Color, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Color in the collection. */
			public lastItem(): Adobe.Indesign.Color;
			/** Returns the middle Color in the collection. */
			public middleItem(): Adobe.Indesign.Color;
			/**
			 * Returns the Color whose index follows the specified Color in 
			 * the collection.
			 * @param {Color} objParam - The Color whose index comes before 
			 * the desired Color. 
			 */
			public nextItem(objParam: Color): Adobe.Indesign.Color;
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
			 * Returns the Color with the index previous to the specified 
			 * index.
			 * @param {Color} objParam - The index of the Color that 
			 * follows the desired Color.
			 */
			public previousItem(objParam: Color): Adobe.Indesign.Color;
		}
	}
}