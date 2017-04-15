/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Menu extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched before the Menu is displayed. This event does not 
			 * bubble. This event is not cancelable.
			 */
			public static readonly BEFORE_DISPLAY: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the Menu within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of menu elements. */
			public readonly menuElements: Adobe.Indesign.MenuElements;
			/** A collection of menu items. */
			public readonly menuItems: Adobe.Indesign.MenuItems;
			/** A collection of menu separators. */
			public readonly menuSeparators: Adobe.Indesign.MenuSeparators;
			/** The name of the Menu. */
			public readonly name: string;
			/** The parent of the Menu (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of submenus. */
			public readonly submenus: Adobe.Indesign.Submenus;
			/**
			 * The name of the Menu for display in the user interface. The 
			 * title includes any ampersand characters (&), which are used 
			 * to tell the Windows OS to underline the following character 
			 * in the name for use with the Alt key to navigate to a menu 
			 * item. Double ampersands are used to display an actual 
			 * ampersand character in the name. The Mac OS ignores and 
			 * removes the extra ampersand characters.
			 */
			public readonly title: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerMenu(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}