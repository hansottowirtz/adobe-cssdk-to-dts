/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EventListener extends Adobe.Csawlib.CSHostObject {
			/** The name of the event. */
			public readonly eventType: string;
			/**
			 * The handler to invoke when the event occurs. Can return: 
			 * File or JavaScript Function.
			 */
			public readonly handler: any;
			/** The unique ID of the EventListener. */
			public readonly id: number;
			/**
			 * The index of the EventListener within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The name of the EventListener; this is an alias to the 
			 * EventListener's label property.
			 */
			public name: string;
			/**
			 * The parent of the EventListener (a Object, UIDBasedObject, 
			 * CellStyleGroup, CellStyle, TableStyleGroup, Article, 
			 * ConditionSet, HiddenText, Condition, MotionPreset, 
			 * AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, 
			 * NumberingList, Snippet, Dialog, Swatch, Color, Tint, 
			 * Gradient, MixedInkGroup, MixedInk, Behavior, 
			 * SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, 
			 * GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, 
			 * ViewZoomBehavior, GotoStateBehavior, 
			 * GotoPreviousStateBehavior, GotoNextStateBehavior, 
			 * OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, 
			 * MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, 
			 * GotoNextViewBehavior, GotoPreviousPageBehavior, 
			 * GotoNextPageBehavior, GotoLastPageBehavior, 
			 * GotoFirstPageBehavior, PreflightProfileRule, 
			 * PreflightRuleInstance, PreflightProfile, 
			 * CrossReferenceFormat, HyperlinkURLDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkPageDestination, 
			 * HyperlinkTextDestination, ParagraphDestination, 
			 * HyperlinkTextSource, CrossReferenceSource, 
			 * HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, 
			 * PageReference, CrossReference, Index, TOCStyle, 
			 * FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, 
			 * NamedGrid, CompositeFontEntry, CompositeFont, 
			 * CharacterStyleGroup, ParagraphStyleGroup, 
			 * TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, 
			 * Note, TableStyle, TextPath, Asset, Link, Section, 
			 * MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, 
			 * Language, PageItem, HtmlItem, FormField, SignatureField, 
			 * TextBox, RadioButton, ListBox, ComboBox, CheckBox, 
			 * MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, 
			 * SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, 
			 * MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, 
			 * Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, 
			 * IDBasedObject, ArticleChild, ArticleMember, DialogRow, 
			 * DialogColumn, Widget, BorderPanel, MeasurementEditbox, 
			 * MeasurementCombobox, RealCombobox, AngleEditbox, 
			 * PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, 
			 * EnablingGroup, IntegerCombobox, IntegerEditbox, 
			 * RadiobuttonControl, RadiobuttonGroup, CheckboxControl, 
			 * Dropdown, StaticText, TextEditbox, BackgroundTask, State, 
			 * RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, 
			 * XMLElement, Table, Cell, IdleTask, StrokeStyle, 
			 * StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, 
			 * GraphicLayer, NonIDBasedObject, TableStyleMapping, 
			 * CharStyleMapping, CellStyleMapping, ParaStyleMapping, 
			 * TimingTarget, TimingGroup, TimingList, OpacityGradientStop, 
			 * DataMergeField, DataMergeImagePlaceholder, 
			 * DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, 
			 * Window, StoryWindow, LayoutWindow, NavigationPoint, 
			 * PreflightProcess, PreflightRule, BuildingBlock, 
			 * DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, 
			 * MenuElement, MenuSeparator, MenuItem, Submenu, Menu, 
			 * StyleExportTagMap, TextVariable, XMLRuleMatchData, 
			 * ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, 
			 * PrinterPreset, Row, Column, Change, RootObject, Document, 
			 * Application, Book, Library, Preference, ContentPlacerObject, 
			 * LinkedPageItemOption, LinkedStoryOption, 
			 * HTMLExportPreference, EPubExportPreference, 
			 * ConditionalTextPreference, TimingSetting, AnimationSetting, 
			 * XFLExportPreference, SWFExportPreference, 
			 * AlignDistributePreference, GrabberPreference, 
			 * ObjectStyleContentEffectsCategorySettings, 
			 * ObjectStyleFillEffectsCategorySettings, 
			 * ObjectStyleStrokeEffectsCategorySettings, 
			 * ObjectStyleObjectEffectsCategorySettings, 
			 * ChapterNumberPreference, NumberingRestartPolicy, Bullet, 
			 * DataMerge, DataMergeOption, DataMergePreference, 
			 * JPEGExportPreference, TrackChangesPreference, 
			 * NotePreference, TransformPreference, ClipboardPreference, 
			 * GeneralPreference, WatermarkPreference, ButtonPreference, 
			 * PNGExportPreference, PreflightBookOption, PreflightOption, 
			 * XMLViewPreference, DisplayPerformancePreference, 
			 * IndexOptions, LinkMetadata, MetadataPreference, 
			 * ExcelImportPreference, TaggedTextImportPreference, 
			 * TaggedTextExportPreference, WordRTFImportPreference, 
			 * TextExportPreference, TextImportPreference, 
			 * FindChangeContentTransparencySetting, 
			 * FindChangeFillTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeTransparencySetting, GradientFeatherSetting, 
			 * FindChangeGradientFeatherSetting, DirectionalFeatherSetting, 
			 * FindChangeDirectionalFeatherSetting, 
			 * ContentTransparencySetting, SatinSetting, 
			 * FindChangeSatinSetting, BevelAndEmbossSetting, 
			 * FindChangeBevelAndEmbossSetting, InnerGlowSetting, 
			 * FindChangeInnerGlowSetting, OuterGlowSetting, 
			 * FindChangeOuterGlowSetting, InnerShadowSetting, 
			 * FindChangeInnerShadowSetting, FeatherSetting, 
			 * FindChangeFeatherSetting, DropShadowSetting, 
			 * FindChangeDropShadowSetting, BlendingSetting, 
			 * FindChangeBlendingSetting, FillTransparencySetting, 
			 * StrokeTransparencySetting, TransparencySetting, 
			 * TransparencyPreference, FlattenerPreference, 
			 * GalleyPreference, GridPrintingPreference, CjkGridPreference, 
			 * StoryGridDataInformation, LayoutGridDataInformation, 
			 * GridDataInformation, CaptionMetadataVariablePreference, 
			 * CustomTextVariablePreference, MatchParagraphStylePreference, 
			 * MatchCharacterStylePreference, FileNameVariablePreference, 
			 * DateVariablePreference, ChapterNumberVariablePreference, 
			 * PageNumberVariablePreference, FootnoteOption, 
			 * BaselineFrameGridOption, AnchoredObjectSetting, 
			 * AnchoredObjectDefault, ExportForWebPreference, 
			 * XMLPreference, XMLExportPreference, XMLImportPreference, 
			 * InCopyExportOption, LinkingPreference, 
			 * ChangeTransliteratePreference, ChangeObjectPreference, 
			 * ChangeGlyphPreference, ChangeGrepPreference, 
			 * ChangeTextPreference, FindTransliteratePreference, 
			 * FindObjectPreference, FindGlyphPreference, 
			 * FindGrepPreference, FindTextPreference, 
			 * FindChangeTransliterateOption, FindChangeObjectOption, 
			 * FindChangeGlyphOption, FindChangeGrepOption, 
			 * FindChangeTextOption, ColorSetting, ScriptArg, 
			 * ScriptPreference, PlaceGun, LayoutAdjustmentPreference, 
			 * StrokeFillProxySetting, ImportedPageAttribute, 
			 * EPSImportPreference, SmartGuidePreference, 
			 * AutoCorrectPreference, SpellPreference, PolygonPreference, 
			 * DictionaryPreference, FontLockingPreference, 
			 * MojikumiUiPreference, ContourOption, TextWrapPreference, 
			 * TextEditingPreference, FrameFittingOption, 
			 * ObjectExportOption, PageItemDefault, TaggedPDFPreference, 
			 * InteractivePDFExportPreference, PDFAttribute, 
			 * PDFPlacePreference, PDFExportPreference, IMEPreference, 
			 * GraphicLayerOption, ClippingPathSettings, ImageIOPreference, 
			 * ImagePreference, ToolBox, EPSExportPreference, 
			 * PrintBookletPrintPreference, PrintBookletOption, 
			 * PrintPreference, ViewPreference, PasteboardPreference, 
			 * MarginPreference, GuidePreference, GridPreference, 
			 * DocumentPreference, TextDefault, TextPreference, 
			 * TextFramePreference, StoryPreference, PathPoint, Path, 
			 * GradientStop, AutoCorrectTable, UserDictionary, 
			 * HyphenationException, Font, TransformationMatrix, 
			 * PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, 
			 * TextStyleRange, Paragraph, TextColumn, Line, Word, 
			 * Character, NestedGrepStyle or NestedLineStyle).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
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
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the EventListener. */
			public remove(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}