/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class CustomTextVariablePreference extends Adobe.Incopy.Preference {
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 */
			public contents: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the CustomTextVariablePreference (a 
			 * TextVariable).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerCustomTextVariablePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerCustomTextVariablePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}