/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Behavior */
		class GotoPageBehavior extends Adobe.Indesign.Behavior {
			/**
			 * The event which triggers the behavior.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 */
			public behaviorEvent: Adobe.Indesign.BehaviorEvents;
			/**
			 * If true, the behavior is enabled.
			 * @type {boolean}
			 */
			public enableBehavior: boolean;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The unique ID of the GotoPageBehavior.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the GotoPageBehavior within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the GotoPageBehavior.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The page number to go to expressed as an index where 1 is 
			 * the first page.
			 * @type {number}
			 */
			public pageNumber: number;
			/**
			 * The parent of the GotoPageBehavior (a Button).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The zoom setting.
			 * @type {Adobe.Indesign.GoToZoomOptions}
			 */
			public zoomSetting: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerGotoPageBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the GotoPageBehavior.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerGotoPageBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}