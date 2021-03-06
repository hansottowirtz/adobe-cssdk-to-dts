/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Notes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new note.
			 * @param {LocationOptions} atParam The location relative to 
			 * the reference object or within the containing object. 
			 * (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter specifies before or after. 
			 * Can accept: Note or InsertionPoint. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Note (Optional)
			 * @returns {Adobe.Incopy.Note}
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.Note;
			/**
			 * Returns any Note in the collection.
			 * @returns {Adobe.Incopy.Note}
			 */
			public anyItem(): Adobe.Incopy.Note;
			/**
			 * Displays the number of elements in the Note.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Note in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Note in the collection.
			 * @returns {Adobe.Incopy.Note}
			 */
			public firstItem(): Adobe.Incopy.Note;
			/**
			 * Returns the Note with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Note}
			 */
			public item(indexParam: any): Adobe.Incopy.Note;
			/**
			 * Returns the Note with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Note}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Note;
			/**
			 * Returns the Note with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Note}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Note;
			/**
			 * Returns the Notes within the specified range.
			 * @param {any} fromParam The Note, index, or name at the 
			 * beginning of the range. Can accept: Note, Long Integer or 
			 * String.
			 * @param {any} toParam The Note, index, or name at the end of 
			 * the range. Can accept: Note, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Note in the collection.
			 * @returns {Adobe.Incopy.Note}
			 */
			public lastItem(): Adobe.Incopy.Note;
			/**
			 * Returns the middle Note in the collection.
			 * @returns {Adobe.Incopy.Note}
			 */
			public middleItem(): Adobe.Incopy.Note;
			/**
			 * Returns the Note whose index follows the specified Note in 
			 * the collection.
			 * @param {Note} objParam The Note whose index comes before the 
			 * desired Note. 
			 * @returns {Adobe.Incopy.Note}
			 */
			public nextItem(objParam: Note): Adobe.Incopy.Note;
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
			 * Returns the Note with the index previous to the specified 
			 * index.
			 * @param {Note} objParam The index of the Note that follows 
			 * the desired Note.
			 * @returns {Adobe.Incopy.Note}
			 */
			public previousItem(objParam: Note): Adobe.Incopy.Note;
		}
	}
}