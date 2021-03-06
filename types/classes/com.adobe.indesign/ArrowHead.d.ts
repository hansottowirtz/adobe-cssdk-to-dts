/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArrowHead extends Adobe.Csawlib.CSEnumBase {
			/**
			 * A vertical bar bisected by the stroke, which meets the 
			 * stroke at a right angle and is the same weight as the 
			 * stroke. The bar's length is 4.5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly BAR_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for BAR_ARROW_HEAD. A vertical bar bisected by the 
			 * stroke, which meets the stroke at a right angle and is the 
			 * same weight as the stroke. The bar's length is 4.5 times the 
			 * stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly barArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * A solid arrow head whose pierced end bows sharply toward the 
			 * point and whose point describes a 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly BARBED_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for BARBED_ARROW_HEAD. A solid arrow head whose 
			 * pierced end bows sharply toward the point and whose point 
			 * describes a 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly barbedArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * A hollow circle whose outline is the same weight as the 
			 * stroke. The circle's diameter is 5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly CIRCLE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * A solid circle whose diameter is 5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly CIRCLE_SOLID_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for CIRCLE_ARROW_HEAD. A hollow circle whose outline 
			 * is the same weight as the stroke. The circle's diameter is 5 
			 * times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly circleArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for CIRCLE_SOLID_ARROW_HEAD. A solid circle whose 
			 * diameter is 5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly circleSolidArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * A solid arrow head whose pierced end concaves toward the 
			 * point and whose point describes a 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly CURVED_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for CURVED_ARROW_HEAD. A solid arrow head whose 
			 * pierced end concaves toward the point and whose point 
			 * describes a 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly curvedArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. None.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ArrowHead;
			/**
			 * None.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ArrowHead;
			/**
			 * An arrow head formed by two slanting lines whose 
			 * intersection forms a 45-degree angle and whose stroke weight 
			 * is the same as the path's stroke.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly SIMPLE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * An arrow head formed by two slanting lines whose 
			 * intersection forms a 90-degree angle and whose stroke weight 
			 * is the same as the path's stroke.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly SIMPLE_WIDE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for SIMPLE_ARROW_HEAD. An arrow head formed by two 
			 * slanting lines whose intersection forms a 45-degree angle 
			 * and whose stroke weight is the same as the path's stroke.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly simpleArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for SIMPLE_WIDE_ARROW_HEAD. An arrow head formed by 
			 * two slanting lines whose intersection forms a 90-degree 
			 * angle and whose stroke weight is the same as the path's 
			 * stroke.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly simpleWideArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * A hollow square set perpendicular to the path, whose outline 
			 * is the same weight as the stroke. The length of one side of 
			 * the square is 5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly SQUARE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * A solid square set perpendicular to the end of the path. The 
			 * length of one side of the square is 5 times the stroke 
			 * width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly SQUARE_SOLID_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for SQUARE_ARROW_HEAD. A hollow square set 
			 * perpendicular to the path, whose outline is the same weight 
			 * as the stroke. The length of one side of the square is 5 
			 * times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly squareArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for SQUARE_SOLID_ARROW_HEAD. A solid square set 
			 * perpendicular to the end of the path. The length of one side 
			 * of the square is 5 times the stroke width.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly squareSolidArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * A solid triangle arrow head whose point describes a 
			 * 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly TRIANGLE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * A solid triangle arrow head whose point describes a 
			 * 90-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly TRIANGLE_WIDE_ARROW_HEAD: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for TRIANGLE_ARROW_HEAD. A solid triangle arrow head 
			 * whose point describes a 45-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly triangleArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * Alias for TRIANGLE_WIDE_ARROW_HEAD. A solid triangle arrow 
			 * head whose point describes a 90-degree angle.
			 * @type {Adobe.Indesign.ArrowHead}
			 * @readonly
			 */
			public static readonly triangleWideArrowHead: Adobe.Indesign.ArrowHead;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}