/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class NumberingRestartPolicy extends Adobe.Incopy.Preference {
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The lower numbering level for a numbered list.
			 * @type {number}
			 */
			public numberingLowerLevel: number;
			/**
			 * The numbering restart policy to use.
			 * @type {Adobe.Incopy.RestartPolicy}
			 */
			public numberingPolicy: Adobe.Incopy.RestartPolicy;
			/**
			 * The upper numbering level for a numbered list.
			 * @type {number}
			 */
			public numberingUpperLevel: number;
			/**
			 * The parent of the NumberingRestartPolicy (a TextDefault, 
			 * ParagraphStyle, Text, InsertionPoint, TextStyleRange, 
			 * Paragraph, TextColumn, Line, Word, Character, Story, 
			 * XmlStory, FindTextPreference, ChangeTextPreference, 
			 * FindGrepPreference or ChangeGrepPreference).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerNumberingRestartPolicy(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerNumberingRestartPolicy(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}