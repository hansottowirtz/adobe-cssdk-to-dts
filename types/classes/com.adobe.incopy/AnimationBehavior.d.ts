/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AnimationBehavior extends Adobe.Incopy.Behavior {
			/** The animation page item. */
			public readonly animatedPageItem: Adobe.Incopy.PageItem;
			/**
			 * If true, will automatically play the animation in reverse on 
			 * roll off of the rollover event.
			 */
			public readonly autoReverseOnRollOff: boolean;
			/** The event which triggers the behavior. */
			public readonly behaviorEvent: Adobe.Incopy.BehaviorEvents;
			/** If true, the behavior is enabled. */
			public readonly enableBehavior: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the AnimationBehavior. */
			public readonly id: number;
			/**
			 * The index of the AnimationBehavior within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the AnimationBehavior. */
			public readonly name: string;
			/** The playback mode. */
			public readonly operation: Adobe.Incopy.AnimationPlayOperations;
			/** The parent of the AnimationBehavior (a Button). */
			public readonly parent: Adobe.Incopy.Button;
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
			public addEventListenerAnimationBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerAnimationBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}