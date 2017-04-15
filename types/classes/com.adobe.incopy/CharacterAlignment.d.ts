/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CharacterAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Aligns small characters in a line to the large character. */
			public static readonly ALIGN_BASELINE: Adobe.Incopy.CharacterAlignment;
			/**
			 * Aligns small characters in horizontal text to the bottom of 
			 * the em box of large characters. In vertical text, aligns 
			 * characters to the left of the em box.
			 */
			public static readonly ALIGN_EM_BOTTOM: Adobe.Incopy.CharacterAlignment;
			/**
			 * Aligns small characters to the center of the em box of large 
			 * characters.
			 */
			public static readonly ALIGN_EM_CENTER: Adobe.Incopy.CharacterAlignment;
			/**
			 * Aligns small characters in horizontal text to the top of the 
			 * em box of large characters. In vertical text, aligns 
			 * characters to the right of the em box.
			 */
			public static readonly ALIGN_EM_TOP: Adobe.Incopy.CharacterAlignment;
			/**
			 * Aligns small characters in horizontal text to the bottom of 
			 * the ICF of large characters. In vertical text, aligns 
			 * characters to the left of the ICF.
			 */
			public static readonly ALIGN_ICF_BOTTOM: Adobe.Incopy.CharacterAlignment;
			/**
			 * Aligns small characters in horizontal text to the top of the 
			 * ICF of large characters. In vertical text, aligns characters 
			 * to the right of the ICF.
			 */
			public static readonly ALIGN_ICF_TOP: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_BASELINE. Aligns small characters in a line 
			 * to the large character.
			 */
			public static readonly alignBaseline: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_EM_BOTTOM. Aligns small characters in 
			 * horizontal text to the bottom of the em box of large 
			 * characters. In vertical text, aligns characters to the left 
			 * of the em box.
			 */
			public static readonly alignEmBottom: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_EM_CENTER. Aligns small characters to the 
			 * center of the em box of large characters.
			 */
			public static readonly alignEmCenter: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_EM_TOP. Aligns small characters in 
			 * horizontal text to the top of the em box of large 
			 * characters. In vertical text, aligns characters to the right 
			 * of the em box.
			 */
			public static readonly alignEmTop: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_ICF_BOTTOM. Aligns small characters in 
			 * horizontal text to the bottom of the ICF of large 
			 * characters. In vertical text, aligns characters to the left 
			 * of the ICF.
			 */
			public static readonly alignIcfBottom: Adobe.Incopy.CharacterAlignment;
			/**
			 * Alias for ALIGN_ICF_TOP. Aligns small characters in 
			 * horizontal text to the top of the ICF of large characters. 
			 * In vertical text, aligns characters to the right of the ICF.
			 */
			public static readonly alignIcfTop: Adobe.Incopy.CharacterAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}