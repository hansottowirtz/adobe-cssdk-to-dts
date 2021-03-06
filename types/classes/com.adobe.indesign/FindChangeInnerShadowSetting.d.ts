/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** InnerShadowSetting */
		class FindChangeInnerShadowSetting extends Adobe.Indesign.InnerShadowSetting {
			/**
			 * The angle at which the inner shadow is thrown. (Range: -360 
			 * to 360). Can return: Real (-180 - 180) or NothingEnum 
			 * enumerator.
			 * @type {number}
			 */
			public angle: number;
			/**
			 * If true, the inner shadow effect is applied. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {boolean}
			 */
			public applied: boolean;
			/**
			 * The blending mode for the inner shadow effect. Can return: 
			 * BlendMode enumerator or NothingEnum enumerator.
			 * @type {Adobe.Indesign.BlendMode}
			 */
			public blendMode: Adobe.Indesign.BlendMode;
			/**
			 * The amount to choke the inner shadow (as a percentage of 
			 * shadow size). (Range: 0 to 100). Can return: Real (0 - 100) 
			 * or NothingEnum enumerator.
			 * @type {number}
			 */
			public chokeAmount: number;
			/**
			 * The distance between the FindChangeInnerShadowSetting and 
			 * the shadow. . Can return: Unit (0 - 1000 points) or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public distance: any;
			/**
			 * The color applied to the inner shadow, specified as a swatch 
			 * (color, gradient, tint, or mixed ink), or as an array of 
			 * color values. The color mode dictates the array values: for 
			 * RGB, specify three values, each in the range 0 to 255, in 
			 * the format [R,G,B]; for CMYK, specify four values, each as a 
			 * percentage and each in the range 0 to 100, in the format 
			 * [C,M,Y,K]; for LAB, specify three values in the format 
			 * [L,A,B], with L in the range 0 to 100 and A and B in the 
			 * range -128 to 127. . Can return: Swatch or NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public effectColor: Adobe.Indesign.Swatch;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The amount (as a percentage) of noise to add to the shadow. 
			 * (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum 
			 * enumerator.
			 * @type {number}
			 */
			public noise: number;
			/**
			 * The opacity (as a percentage) of the inner shadow. (Range: 0 
			 * to 100). Can return: Real (0 - 100) or NothingEnum 
			 * enumerator.
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * The parent of the FindChangeInnerShadowSetting (a 
			 * FindChangeTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeFillTransparencySetting or 
			 * FindChangeContentTransparencySetting).
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
			 * The size of the inner shadow. Can return: Unit (0 - 144 
			 * points) or NothingEnum enumerator.
			 * @type {any}
			 */
			public size: any;
			/**
			 * If true, the global light angle is used. Can return: Boolean 
			 * or NothingEnum enumerator.
			 * @type {boolean}
			 */
			public useGlobalLight: boolean;
			/**
			 * The horizontal offset of the shadow. Can return: Unit (-1000 
			 * - 1000 points) or NothingEnum enumerator.
			 * @type {any}
			 */
			public xOffset: any;
			/**
			 * The vertical offset of the shadow. Can return: Unit (-1000 - 
			 * 1000 points) or NothingEnum enumerator.
			 * @type {any}
			 */
			public yOffset: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFindChangeInnerShadowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeInnerShadowSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}