/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sounds extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Sound
			 * @param {Layer} layerParam The layer on which to create the 
			 * Sound. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the Sound relative to the reference object or within 
			 * the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Sound (Optional)
			 * @returns {Adobe.Indesign.Sound}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Sound;
			/**
			 * Returns any Sound in the collection.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public anyItem(): Adobe.Indesign.Sound;
			/**
			 * Displays the number of elements in the Sound.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Sound in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Sound in the collection.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public firstItem(): Adobe.Indesign.Sound;
			/**
			 * Returns the Sound with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public item(indexParam: any): Adobe.Indesign.Sound;
			/**
			 * Returns the Sound with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Sound;
			/**
			 * Returns the Sound with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Sound;
			/**
			 * Returns the Sounds within the specified range.
			 * @param {any} fromParam The Sound, index, or name at the 
			 * beginning of the range. Can accept: Sound, Long Integer or 
			 * String.
			 * @param {any} toParam The Sound, index, or name at the end of 
			 * the range. Can accept: Sound, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Sound in the collection.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public lastItem(): Adobe.Indesign.Sound;
			/**
			 * Returns the middle Sound in the collection.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public middleItem(): Adobe.Indesign.Sound;
			/**
			 * Returns the Sound whose index follows the specified Sound in 
			 * the collection.
			 * @param {Sound} objParam The Sound whose index comes before 
			 * the desired Sound. 
			 * @returns {Adobe.Indesign.Sound}
			 */
			public nextItem(objParam: Sound): Adobe.Indesign.Sound;
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
			 * Returns the Sound with the index previous to the specified 
			 * index.
			 * @param {Sound} objParam The index of the Sound that follows 
			 * the desired Sound.
			 * @returns {Adobe.Indesign.Sound}
			 */
			public previousItem(objParam: Sound): Adobe.Indesign.Sound;
		}
	}
}