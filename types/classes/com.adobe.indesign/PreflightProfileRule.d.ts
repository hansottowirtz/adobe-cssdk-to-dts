/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProfileRule extends Adobe.Csawlib.CSHostObject {
			/**
			 * The description of the PreflightProfileRule.
			 * @type {string}
			 * @readonly
			 */
			public readonly description: string;
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
			 * Indicates whether or not the preflight rule is disabled, set 
			 * for error, warning, or information level feedback.
			 * @type {Adobe.Indesign.PreflightRuleFlag}
			 */
			public flag: Adobe.Indesign.PreflightRuleFlag;
			/**
			 * The rule ID for this rule.
			 * @type {string}
			 * @readonly
			 */
			public readonly id: string;
			/**
			 * The index of the PreflightProfileRule within its containing 
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
			 * The name of the PreflightProfileRule.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the PreflightProfileRule (a PreflightProfile).
			 * @type {Adobe.Indesign.PreflightProfile}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.PreflightProfile;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of prefight rule data objects.
			 * @type {Adobe.Indesign.RuleDataObjects}
			 * @readonly
			 */
			public readonly ruleDataObjects: Adobe.Indesign.RuleDataObjects;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPreflightProfileRule(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the PreflightProfileRule.
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
			public removeEventListenerPreflightProfileRule(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}