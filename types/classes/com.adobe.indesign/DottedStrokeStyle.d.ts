/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** StrokeStyle */
		class DottedStrokeStyle extends Adobe.Indesign.StrokeStyle {
			/** The length of gaps between dots. Define up to five values. */
			public dotArray: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the DottedStrokeStyle. */
			public readonly id: number;
			/**
			 * The index of the DottedStrokeStyle within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the DottedStrokeStyle. */
			public name: string;
			/**
			 * The parent of the DottedStrokeStyle (a Document or 
			 * Application).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The corner adjustment applied to the DottedStrokeStyle. */
			public strokeCornerAdjustment: Adobe.Indesign.StrokeCornerAdjustment;
			/** The stroke style type. */
			public readonly strokeStyleType: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDottedStrokeStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the DottedStrokeStyle. */
			public duplicate(): Adobe.Indesign.StrokeStyle;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Deletes the stroke style.
			 * @param {any} replacingWithParam - The stroke style to apply 
			 * in place of the deleted style. . Can accept: StrokeStyle or 
			 * String. (Optional)
			 */
			public remove(replacingWithParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDottedStrokeStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}