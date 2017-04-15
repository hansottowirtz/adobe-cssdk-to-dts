/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TrapEndTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Shapes the end of the trap to keep it away from the 
			 * intersecting object.
			 */
			public static readonly MITER_TRAP_ENDS: Adobe.Indesign.TrapEndTypes;
			/**
			 * Alias for MITER_TRAP_ENDS. Shapes the end of the trap to 
			 * keep it away from the intersecting object.
			 */
			public static readonly miterTrapEnds: Adobe.Indesign.TrapEndTypes;
			/**
			 * Reshapes the trap generated by the lightest neutral density 
			 * object so that it wraps around the point where the three 
			 * objects intersect.
			 */
			public static readonly OVERLAP_TRAP_ENDS: Adobe.Indesign.TrapEndTypes;
			/**
			 * Alias for OVERLAP_TRAP_ENDS. Reshapes the trap generated by 
			 * the lightest neutral density object so that it wraps around 
			 * the point where the three objects intersect.
			 */
			public static readonly overlapTrapEnds: Adobe.Indesign.TrapEndTypes;
			/** Constructor */
			public constructor();
		}
	}
}