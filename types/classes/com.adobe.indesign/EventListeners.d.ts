/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EventListeners extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new EventListener (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public add(eventTypeParam: string, handlerParam: any, capturesParam: boolean, withPropertiesParam: any): Adobe.Indesign.EventListener;
			/**
			 * Returns any EventListener in the collection.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public anyItem(): Adobe.Indesign.EventListener;
			/**
			 * Displays the number of elements in the EventListener.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every EventListener in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first EventListener in the collection.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public firstItem(): Adobe.Indesign.EventListener;
			/**
			 * Returns the EventListener with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public item(indexParam: any): Adobe.Indesign.EventListener;
			/**
			 * Returns the EventListener with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public itemByID(idParam: number): Adobe.Indesign.EventListener;
			/**
			 * Returns the EventListener with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.EventListener;
			/**
			 * Returns the EventListeners within the specified range.
			 * @param {any} fromParam The EventListener, index, or name at 
			 * the beginning of the range. Can accept: EventListener, Long 
			 * Integer or String.
			 * @param {any} toParam The EventListener, index, or name at 
			 * the end of the range. Can accept: EventListener, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last EventListener in the collection.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public lastItem(): Adobe.Indesign.EventListener;
			/**
			 * Returns the middle EventListener in the collection.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public middleItem(): Adobe.Indesign.EventListener;
			/**
			 * Returns the EventListener whose index follows the specified 
			 * EventListener in the collection.
			 * @param {EventListener} objParam The EventListener whose 
			 * index comes before the desired EventListener. 
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public nextItem(objParam: EventListener): Adobe.Indesign.EventListener;
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
			 * Returns the EventListener with the index previous to the 
			 * specified index.
			 * @param {EventListener} objParam The index of the 
			 * EventListener that follows the desired EventListener.
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public previousItem(objParam: EventListener): Adobe.Indesign.EventListener;
		}
	}
}