/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpaceUnitType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * em unit.
			 * @type {Adobe.Indesign.SpaceUnitType}
			 * @readonly
			 */
			public static readonly CSS_EM: Adobe.Indesign.SpaceUnitType;
			/**
			 * pixel unit.
			 * @type {Adobe.Indesign.SpaceUnitType}
			 * @readonly
			 */
			public static readonly CSS_PIXEL: Adobe.Indesign.SpaceUnitType;
			/**
			 * Alias for CSS_EM.
			 *  em unit.
			 * @type {Adobe.Indesign.SpaceUnitType}
			 * @readonly
			 */
			public static readonly cssEm: Adobe.Indesign.SpaceUnitType;
			/**
			 * Alias for CSS_PIXEL.
			 *  pixel unit.
			 * @type {Adobe.Indesign.SpaceUnitType}
			 * @readonly
			 */
			public static readonly cssPixel: Adobe.Indesign.SpaceUnitType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}