/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StoryWindow extends Adobe.Indesign.Window {
			/**
			 * Dispatched after the StoryWindow becomes active. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched when the value of a property changes on this 
			 * StoryWindow. This event bubbles. This event is not 
			 * cancelable.
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched when a StoryWindow is closing. Since the close 
			 * has been committed, it can no longer be canceled. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after a StoryWindow is opened. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Dispatched before a StoryWindow is closed. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the StoryWindow becomes inactive. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * The bounds of the window (specified in pixels) in the form 
			 * [top, left, bottom, right].
			 */
			public bounds: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the StoryWindow within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the StoryWindow. */
			public readonly name: string;
			/** The parent of the StoryWindow (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 */
			public selection: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerStoryWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Brings the object to the front. */
			public bringToFront(): void;
			/** Closes the StoryWindow. */
			public close(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Maximizes the window. */
			public maximize(): void;
			/** Minimizes the window. */
			public minimize(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerStoryWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Restores the window. */
			public restore(): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam - The objects to select. 
			 * Can accept: Object, Array of Objects, NothingEnum enumerator 
			 * or SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam - The 
			 * selection status of the StoryWindow in relation to 
			 * previously selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}