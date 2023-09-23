export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
  Hex: { input: unknown; output: unknown; }
  Json: { input: unknown; output: unknown; }
  Long: { input: unknown; output: unknown; }
  RGBAHue: { input: unknown; output: unknown; }
  RGBATransparency: { input: unknown; output: unknown; }
  RichTextAST: { input: unknown; output: unknown; }
};

export type Aggregate = {
  readonly count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  readonly createdBy: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The file name */
  readonly fileName: Scalars['String']['output'];
  /** The file handle */
  readonly handle: Scalars['String']['output'];
  /** The height of the file */
  readonly height: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID']['output'];
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** The mime type of the file */
  readonly mimeType: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** The file size */
  readonly size: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String']['output'];
  /** The file width */
  readonly width: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: ReadonlyArray<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: ReadonlyArray<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AssetCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly fileName: Scalars['String']['input'];
  readonly handle: Scalars['String']['input'];
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly fileName: Scalars['String']['input'];
  readonly handle: Scalars['String']['input'];
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export const AssetOrderByInput = {
  CreatedAtAsc: 'createdAt_ASC',
  CreatedAtDesc: 'createdAt_DESC',
  FileNameAsc: 'fileName_ASC',
  FileNameDesc: 'fileName_DESC',
  HandleAsc: 'handle_ASC',
  HandleDesc: 'handle_DESC',
  HeightAsc: 'height_ASC',
  HeightDesc: 'height_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  MimeTypeAsc: 'mimeType_ASC',
  MimeTypeDesc: 'mimeType_DESC',
  PublishedAtAsc: 'publishedAt_ASC',
  PublishedAtDesc: 'publishedAt_DESC',
  SizeAsc: 'size_ASC',
  SizeDesc: 'size_DESC',
  UpdatedAtAsc: 'updatedAt_ASC',
  UpdatedAtDesc: 'updatedAt_DESC',
  WidthAsc: 'width_ASC',
  WidthDesc: 'width_DESC'
} as const;

export type AssetOrderByInput = typeof AssetOrderByInput[keyof typeof AssetOrderByInput];
/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly document?: InputMaybe<DocumentTransformationInput>;
  readonly image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly handle?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly handle?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly data: AssetUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AssetUpdateManyInput;
  /** Document search */
  readonly where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  readonly delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  readonly update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AssetUpdateInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AssetUpsertInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly handle_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  readonly height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  readonly height_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  readonly height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  readonly size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  readonly size_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  readonly size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
  readonly width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  readonly width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  readonly width_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  readonly width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly css: Scalars['String']['output'];
  readonly hex: Scalars['Hex']['output'];
  readonly rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: InputMaybe<Scalars['Hex']['input']>;
  readonly rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  readonly before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  readonly end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  readonly start?: InputMaybe<Scalars['Boolean']['input']>;
};

export const DocumentFileTypes = {
  Doc: 'doc',
  Docx: 'docx',
  Html: 'html',
  Jpg: 'jpg',
  Odp: 'odp',
  Ods: 'ods',
  Odt: 'odt',
  Pdf: 'pdf',
  Png: 'png',
  Ppt: 'ppt',
  Pptx: 'pptx',
  Svg: 'svg',
  Txt: 'txt',
  Webp: 'webp',
  Xls: 'xls',
  Xlsx: 'xlsx'
} as const;

export type DocumentFileTypes = typeof DocumentFileTypes[keyof typeof DocumentFileTypes];
export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  readonly format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  readonly createdAt: Scalars['DateTime']['output'];
  readonly data: Maybe<Scalars['Json']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly revision: Scalars['Int']['output'];
  readonly stage: Stage;
};

export const ImageFit = {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip: 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop: 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max: 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale: 'scale'
} as const;

export type ImageFit = typeof ImageFit[keyof typeof ImageFit];
export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: InputMaybe<ImageResizeInput>;
};

export type Item = Node & {
  readonly body: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  readonly createdBy: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Item>;
  /** List of Item versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** System stage field */
  readonly stage: Stage;
  readonly title: Scalars['String']['output'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<User>;
};


export type ItemCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


export type ItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: ReadonlyArray<Stage>;
};


export type ItemHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type ItemPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


export type ItemScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type ItemUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};

export type ItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type ItemConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ItemEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ItemCreateInput = {
  readonly body?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemCreateManyInlineInput = {
  /** Connect multiple existing Item documents */
  readonly connect?: InputMaybe<ReadonlyArray<ItemWhereUniqueInput>>;
  /** Create and connect multiple existing Item documents */
  readonly create?: InputMaybe<ReadonlyArray<ItemCreateInput>>;
};

export type ItemCreateOneInlineInput = {
  /** Connect one existing Item document */
  readonly connect?: InputMaybe<ItemWhereUniqueInput>;
  /** Create and connect one Item document */
  readonly create?: InputMaybe<ItemCreateInput>;
};

/** An edge in a connection. */
export type ItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: Item;
};

/** Identifies documents */
export type ItemManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly body_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly body_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly body_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ItemWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ItemWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ItemWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export const ItemOrderByInput = {
  BodyAsc: 'body_ASC',
  BodyDesc: 'body_DESC',
  CreatedAtAsc: 'createdAt_ASC',
  CreatedAtDesc: 'createdAt_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  PublishedAtAsc: 'publishedAt_ASC',
  PublishedAtDesc: 'publishedAt_DESC',
  TitleAsc: 'title_ASC',
  TitleDesc: 'title_DESC',
  UpdatedAtAsc: 'updatedAt_ASC',
  UpdatedAtDesc: 'updatedAt_DESC'
} as const;

export type ItemOrderByInput = typeof ItemOrderByInput[keyof typeof ItemOrderByInput];
export type ItemUpdateInput = {
  readonly body?: InputMaybe<Scalars['String']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type ItemUpdateManyInlineInput = {
  /** Connect multiple existing Item documents */
  readonly connect?: InputMaybe<ReadonlyArray<ItemConnectInput>>;
  /** Create and connect multiple Item documents */
  readonly create?: InputMaybe<ReadonlyArray<ItemCreateInput>>;
  /** Delete multiple Item documents */
  readonly delete?: InputMaybe<ReadonlyArray<ItemWhereUniqueInput>>;
  /** Disconnect multiple Item documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Item documents */
  readonly set?: InputMaybe<ReadonlyArray<ItemWhereUniqueInput>>;
  /** Update multiple Item documents */
  readonly update?: InputMaybe<ReadonlyArray<ItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Item documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ItemUpsertWithNestedWhereUniqueInput>>;
};

export type ItemUpdateManyInput = {
  readonly body?: InputMaybe<Scalars['String']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type ItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ItemUpdateManyInput;
  /** Document search */
  readonly where: ItemWhereInput;
};

export type ItemUpdateOneInlineInput = {
  /** Connect existing Item document */
  readonly connect?: InputMaybe<ItemWhereUniqueInput>;
  /** Create and connect one Item document */
  readonly create?: InputMaybe<ItemCreateInput>;
  /** Delete currently connected Item document */
  readonly delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Item document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Item document */
  readonly update?: InputMaybe<ItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Item document */
  readonly upsert?: InputMaybe<ItemUpsertWithNestedWhereUniqueInput>;
};

export type ItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ItemUpdateInput;
  /** Unique document search */
  readonly where: ItemWhereUniqueInput;
};

export type ItemUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ItemCreateInput;
  /** Update document if it exists */
  readonly update: ItemUpdateInput;
};

export type ItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ItemUpsertInput;
  /** Unique document search */
  readonly where: ItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly body?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly body_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly body_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly body_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly body_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly body_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly body_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly body_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<ItemWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<ItemWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<ItemWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ItemWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ItemWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ItemWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ItemWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<ItemWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Item record uniquely */
export type ItemWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export const Locale = {
  /** System locale */
  En: 'en'
} as const;

export type Locale = typeof Locale[keyof typeof Locale];
/** Representing a geolocation point with latitude and longitude */
export type Location = {
  readonly distance: Scalars['Float']['output'];
  readonly latitude: Scalars['Float']['output'];
  readonly longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  readonly latitude: Scalars['Float']['input'];
  readonly longitude: Scalars['Float']['input'];
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  readonly createAsset: Maybe<Asset>;
  /** Create one item */
  readonly createItem: Maybe<Item>;
  /** Create one scheduledRelease */
  readonly createScheduledRelease: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset: Maybe<Asset>;
  /** Delete one item from _all_ existing stages. Returns deleted document. */
  readonly deleteItem: Maybe<Item>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  readonly deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  readonly deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Item documents
   * @deprecated Please use the new paginated many mutation (deleteManyItemsConnection)
   */
  readonly deleteManyItems: BatchPayload;
  /** Delete many Item documents, return deleted documents */
  readonly deleteManyItemsConnection: ItemConnection;
  /** Delete and return scheduled operation */
  readonly deleteScheduledOperation: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  readonly deleteScheduledRelease: Maybe<ScheduledRelease>;
  /** Publish one asset */
  readonly publishAsset: Maybe<Asset>;
  /** Publish one item */
  readonly publishItem: Maybe<Item>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  readonly publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  readonly publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Item documents
   * @deprecated Please use the new paginated many mutation (publishManyItemsConnection)
   */
  readonly publishManyItems: BatchPayload;
  /** Publish many Item documents */
  readonly publishManyItemsConnection: ItemConnection;
  /** Schedule to publish one asset */
  readonly schedulePublishAsset: Maybe<Asset>;
  /** Schedule to publish one item */
  readonly schedulePublishItem: Maybe<Item>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAsset: Maybe<Asset>;
  /** Unpublish one item from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishItem: Maybe<Item>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset: Maybe<Asset>;
  /** Unpublish one item from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishItem: Maybe<Item>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  readonly unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Item documents
   * @deprecated Please use the new paginated many mutation (unpublishManyItemsConnection)
   */
  readonly unpublishManyItems: BatchPayload;
  /** Find many Item documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyItemsConnection: ItemConnection;
  /** Update one asset */
  readonly updateAsset: Maybe<Asset>;
  /** Update one item */
  readonly updateItem: Maybe<Item>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  readonly updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  readonly updateManyAssetsConnection: AssetConnection;
  /**
   * Update many items
   * @deprecated Please use the new paginated many mutation (updateManyItemsConnection)
   */
  readonly updateManyItems: BatchPayload;
  /** Update many Item documents */
  readonly updateManyItemsConnection: ItemConnection;
  /** Update one scheduledRelease */
  readonly updateScheduledRelease: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  readonly upsertAsset: Maybe<Asset>;
  /** Upsert one item */
  readonly upsertItem: Maybe<Item>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateItemArgs = {
  data: ItemCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteItemArgs = {
  where: ItemWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyItemsArgs = {
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationDeleteManyItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishItemArgs = {
  to?: ReadonlyArray<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: ReadonlyArray<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: ReadonlyArray<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyItemsArgs = {
  to?: ReadonlyArray<Stage>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationPublishManyItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: ReadonlyArray<Stage>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationSchedulePublishAssetArgs = {
  locales: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishItemArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: ReadonlyArray<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishItemArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: ItemWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishItemArgs = {
  from?: ReadonlyArray<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: ReadonlyArray<Stage>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: ReadonlyArray<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyItemsArgs = {
  from?: ReadonlyArray<Stage>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationUnpublishManyItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: ReadonlyArray<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateItemArgs = {
  data: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyItemsArgs = {
  data: ItemUpdateManyInput;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationUpdateManyItemsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: ItemUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertItemArgs = {
  upsert: ItemUpsertInput;
  where: ItemWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID']['output'];
  /** The Stage of an object */
  readonly stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  readonly pageSize: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  /** Retrieve a single asset */
  readonly asset: Maybe<Asset>;
  /** Retrieve document version */
  readonly assetVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve a single item */
  readonly item: Maybe<Item>;
  /** Retrieve document version */
  readonly itemVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple items */
  readonly items: ReadonlyArray<Item>;
  /** Retrieve multiple items using the Relay connection interface */
  readonly itemsConnection: ItemConnection;
  /** Fetches an object given its ID */
  readonly node: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  readonly scheduledOperation: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  readonly scheduledOperations: ReadonlyArray<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  readonly scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  readonly scheduledRelease: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  readonly scheduledReleases: ReadonlyArray<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  readonly scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  readonly user: Maybe<User>;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryItemArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ItemWhereUniqueInput;
};


export type QueryItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ItemWhereInput>;
};


export type QueryItemsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ItemOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ItemWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: ReadonlyArray<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly a: Scalars['RGBATransparency']['output'];
  readonly b: Scalars['RGBAHue']['output'];
  readonly g: Scalars['RGBAHue']['output'];
  readonly r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly a: Scalars['RGBATransparency']['input'];
  readonly b: Scalars['RGBAHue']['input'];
  readonly g: Scalars['RGBAHue']['input'];
  readonly r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  readonly html: Scalars['String']['output'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String']['output'];
  /** Returns AST representation */
  readonly raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  readonly affectedDocuments: ReadonlyArray<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  readonly createdBy: Maybe<User>;
  /** Operation description */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledOperation>;
  /** Operation error message */
  readonly errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  readonly id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  readonly rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  readonly release: Maybe<ScheduledRelease>;
  /** System stage field */
  readonly stage: Stage;
  /** operation Status */
  readonly status: ScheduledOperationStatus;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: ReadonlyArray<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Item;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  readonly rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export const ScheduledOperationOrderByInput = {
  CreatedAtAsc: 'createdAt_ASC',
  CreatedAtDesc: 'createdAt_DESC',
  DescriptionAsc: 'description_ASC',
  DescriptionDesc: 'description_DESC',
  ErrorMessageAsc: 'errorMessage_ASC',
  ErrorMessageDesc: 'errorMessage_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  PublishedAtAsc: 'publishedAt_ASC',
  PublishedAtDesc: 'publishedAt_DESC',
  StatusAsc: 'status_ASC',
  StatusDesc: 'status_DESC',
  UpdatedAtAsc: 'updatedAt_ASC',
  UpdatedAtDesc: 'updatedAt_DESC'
} as const;

export type ScheduledOperationOrderByInput = typeof ScheduledOperationOrderByInput[keyof typeof ScheduledOperationOrderByInput];
/** System Scheduled Operation Status */
export const ScheduledOperationStatus = {
  Canceled: 'CANCELED',
  Completed: 'COMPLETED',
  Failed: 'FAILED',
  InProgress: 'IN_PROGRESS',
  Pending: 'PENDING'
} as const;

export type ScheduledOperationStatus = typeof ScheduledOperationStatus[keyof typeof ScheduledOperationStatus];
export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  readonly rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  readonly createdBy: Maybe<User>;
  /** Release description */
  readonly description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledRelease>;
  /** Release error message */
  readonly errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  readonly id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  readonly isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  readonly isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  readonly operations: ReadonlyArray<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  readonly publishedBy: Maybe<User>;
  /** Release date and time */
  readonly releaseAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  readonly stage: Stage;
  /** Release Status */
  readonly status: ScheduledReleaseStatus;
  /** Release Title */
  readonly title: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  readonly updatedBy: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: ReadonlyArray<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export const ScheduledReleaseOrderByInput = {
  CreatedAtAsc: 'createdAt_ASC',
  CreatedAtDesc: 'createdAt_DESC',
  DescriptionAsc: 'description_ASC',
  DescriptionDesc: 'description_DESC',
  ErrorMessageAsc: 'errorMessage_ASC',
  ErrorMessageDesc: 'errorMessage_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  IsActiveAsc: 'isActive_ASC',
  IsActiveDesc: 'isActive_DESC',
  IsImplicitAsc: 'isImplicit_ASC',
  IsImplicitDesc: 'isImplicit_DESC',
  PublishedAtAsc: 'publishedAt_ASC',
  PublishedAtDesc: 'publishedAt_DESC',
  ReleaseAtAsc: 'releaseAt_ASC',
  ReleaseAtDesc: 'releaseAt_DESC',
  StatusAsc: 'status_ASC',
  StatusDesc: 'status_DESC',
  TitleAsc: 'title_ASC',
  TitleDesc: 'title_DESC',
  UpdatedAtAsc: 'updatedAt_ASC',
  UpdatedAtDesc: 'updatedAt_DESC'
} as const;

export type ScheduledReleaseOrderByInput = typeof ScheduledReleaseOrderByInput[keyof typeof ScheduledReleaseOrderByInput];
/** System Scheduled Release Status */
export const ScheduledReleaseStatus = {
  Completed: 'COMPLETED',
  Failed: 'FAILED',
  InProgress: 'IN_PROGRESS',
  Pending: 'PENDING'
} as const;

export type ScheduledReleaseStatus = typeof ScheduledReleaseStatus[keyof typeof ScheduledReleaseStatus];
export type ScheduledReleaseUpdateInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  readonly delete?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  readonly update?: InputMaybe<ReadonlyArray<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  readonly where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  readonly delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  readonly update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  readonly upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  readonly update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export const Stage = {
  /** The Draft is the default stage for all your content. */
  Draft: 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published: 'PUBLISHED'
} as const;

export type Stage = typeof Stage[keyof typeof Stage];
export const SystemDateTimeFieldVariation = {
  Base: 'BASE',
  Combined: 'COMBINED',
  Localization: 'LOCALIZATION'
} as const;

export type SystemDateTimeFieldVariation = typeof SystemDateTimeFieldVariation[keyof typeof SystemDateTimeFieldVariation];
export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<User>;
  /** The unique identifier */
  readonly id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: UserKind;
  /** The username */
  readonly name: Scalars['String']['output'];
  /** Profile Picture url */
  readonly picture: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: ReadonlyArray<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: User;
};

/** System User Kind */
export const UserKind = {
  Member: 'MEMBER',
  Pat: 'PAT',
  Public: 'PUBLIC',
  Webhook: 'WEBHOOK'
} as const;

export type UserKind = typeof UserKind[keyof typeof UserKind];
/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
};

export const UserOrderByInput = {
  CreatedAtAsc: 'createdAt_ASC',
  CreatedAtDesc: 'createdAt_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  IsActiveAsc: 'isActive_ASC',
  IsActiveDesc: 'isActive_DESC',
  KindAsc: 'kind_ASC',
  KindDesc: 'kind_DESC',
  NameAsc: 'name_ASC',
  NameDesc: 'name_DESC',
  PictureAsc: 'picture_ASC',
  PictureDesc: 'picture_DESC',
  PublishedAtAsc: 'publishedAt_ASC',
  PublishedAtDesc: 'publishedAt_DESC',
  UpdatedAtAsc: 'updatedAt_ASC',
  UpdatedAtDesc: 'updatedAt_DESC'
} as const;

export type UserOrderByInput = typeof UserOrderByInput[keyof typeof UserOrderByInput];
export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserConnectInput>>;
  /** Disconnect multiple User documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']['input']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readonly picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly revision: Scalars['Int']['output'];
  readonly stage: Stage;
};

export type VersionWhereInput = {
  readonly id: Scalars['ID']['input'];
  readonly revision: Scalars['Int']['input'];
  readonly stage: Stage;
};

export const _FilterKind = {
  And: 'AND',
  Not: 'NOT',
  Or: 'OR',
  Contains: 'contains',
  ContainsAll: 'contains_all',
  ContainsNone: 'contains_none',
  ContainsSome: 'contains_some',
  EndsWith: 'ends_with',
  Eq: 'eq',
  EqNot: 'eq_not',
  Gt: 'gt',
  Gte: 'gte',
  In: 'in',
  JsonPathExists: 'json_path_exists',
  JsonValueRecursive: 'json_value_recursive',
  Lt: 'lt',
  Lte: 'lte',
  NotContains: 'not_contains',
  NotEndsWith: 'not_ends_with',
  NotIn: 'not_in',
  NotStartsWith: 'not_starts_with',
  RelationalEvery: 'relational_every',
  RelationalNone: 'relational_none',
  RelationalSingle: 'relational_single',
  RelationalSome: 'relational_some',
  Search: 'search',
  StartsWith: 'starts_with',
  UnionEmpty: 'union_empty',
  UnionEvery: 'union_every',
  UnionNone: 'union_none',
  UnionSingle: 'union_single',
  UnionSome: 'union_some'
} as const;

export type _FilterKind = typeof _FilterKind[keyof typeof _FilterKind];
export const _MutationInputFieldKind = {
  Enum: 'enum',
  Relation: 'relation',
  RichText: 'richText',
  RichTextWithEmbeds: 'richTextWithEmbeds',
  Scalar: 'scalar',
  Union: 'union',
  Virtual: 'virtual'
} as const;

export type _MutationInputFieldKind = typeof _MutationInputFieldKind[keyof typeof _MutationInputFieldKind];
export const _MutationKind = {
  Create: 'create',
  Delete: 'delete',
  DeleteMany: 'deleteMany',
  Publish: 'publish',
  PublishMany: 'publishMany',
  SchedulePublish: 'schedulePublish',
  ScheduleUnpublish: 'scheduleUnpublish',
  Unpublish: 'unpublish',
  UnpublishMany: 'unpublishMany',
  Update: 'update',
  UpdateMany: 'updateMany',
  Upsert: 'upsert'
} as const;

export type _MutationKind = typeof _MutationKind[keyof typeof _MutationKind];
export const _OrderDirection = {
  Asc: 'asc',
  Desc: 'desc'
} as const;

export type _OrderDirection = typeof _OrderDirection[keyof typeof _OrderDirection];
export const _RelationInputCardinality = {
  Many: 'many',
  One: 'one'
} as const;

export type _RelationInputCardinality = typeof _RelationInputCardinality[keyof typeof _RelationInputCardinality];
export const _RelationInputKind = {
  Create: 'create',
  Update: 'update'
} as const;

export type _RelationInputKind = typeof _RelationInputKind[keyof typeof _RelationInputKind];
export const _RelationKind = {
  Regular: 'regular',
  Union: 'union'
} as const;

export type _RelationKind = typeof _RelationKind[keyof typeof _RelationKind];
export const _SystemDateTimeFieldVariation = {
  Base: 'base',
  Combined: 'combined',
  Localization: 'localization'
} as const;

export type _SystemDateTimeFieldVariation = typeof _SystemDateTimeFieldVariation[keyof typeof _SystemDateTimeFieldVariation];