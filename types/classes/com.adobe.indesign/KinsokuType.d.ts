/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KinsokuType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The kinsoku prioritize adjustment amount.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT: Adobe.Indesign.KinsokuType;
			/**
			 * Attempts to move characters to the previous line; if the 
			 * push-in is not possible, pushes characters to the next line.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly KINSOKU_PUSH_IN_FIRST: Adobe.Indesign.KinsokuType;
			/**
			 * Attempts to move characters to the next line; if the 
			 * push-out is not possible, pushes characters to the previous 
			 * line.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly KINSOKU_PUSH_OUT_FIRST: Adobe.Indesign.KinsokuType;
			/**
			 * Always moves characters to the next line. Does not attempt a 
			 * push-in.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly KINSOKU_PUSH_OUT_ONLY: Adobe.Indesign.KinsokuType;
			/**
			 * Alias for KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT. The kinsoku 
			 * prioritize adjustment amount.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly kinsokuPrioritizeAdjustmentAmount: Adobe.Indesign.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_IN_FIRST. Attempts to move characters 
			 * to the previous line; if the push-in is not possible, pushes 
			 * characters to the next line.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly kinsokuPushInFirst: Adobe.Indesign.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_OUT_FIRST. Attempts to move 
			 * characters to the next line; if the push-out is not 
			 * possible, pushes characters to the previous line.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly kinsokuPushOutFirst: Adobe.Indesign.KinsokuType;
			/**
			 * Alias for KINSOKU_PUSH_OUT_ONLY. Always moves characters to 
			 * the next line. Does not attempt a push-in.
			 * @type {Adobe.Indesign.KinsokuType}
			 * @readonly
			 */
			public static readonly kinsokuPushOutOnly: Adobe.Indesign.KinsokuType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}