//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getMaterialsDocument: MaterialsDocument;
  getMaterialsList: MaterialsConnection;
  getCasesDocument: CasesDocument;
  getCasesList: CasesConnection;
  getModulesDocument: ModulesDocument;
  getModulesList: ModulesConnection;
  getExercisesDocument: ExercisesDocument;
  getExercisesList: ExercisesConnection;
  getResourcesDocument: ResourcesDocument;
  getResourcesList: ResourcesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetMaterialsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetMaterialsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetCasesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetCasesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetModulesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetModulesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetExercisesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetExercisesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetResourcesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetResourcesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = MaterialsDocument | CasesDocument | ModulesDocument | ExercisesDocument | ResourcesDocument;

export type MaterialsObjectives = {
  __typename?: 'MaterialsObjectives';
  objective?: Maybe<Scalars['String']>;
  explanation?: Maybe<Scalars['String']>;
};

export type MaterialsComponentsModuleFilenameDocument = ModulesDocument;

export type MaterialsComponentsModule = {
  __typename?: 'MaterialsComponentsModule';
  title?: Maybe<Scalars['String']>;
  filename?: Maybe<MaterialsComponentsModuleFilenameDocument>;
};

export type MaterialsComponentsCaseFilenameDocument = CasesDocument;

export type MaterialsComponentsCase = {
  __typename?: 'MaterialsComponentsCase';
  title?: Maybe<Scalars['String']>;
  filename?: Maybe<MaterialsComponentsCaseFilenameDocument>;
};

export type MaterialsComponentsExerciseFilenameDocument = ExercisesDocument;

export type MaterialsComponentsExercise = {
  __typename?: 'MaterialsComponentsExercise';
  title?: Maybe<Scalars['String']>;
  filename?: Maybe<MaterialsComponentsExerciseFilenameDocument>;
};

export type MaterialsComponents = MaterialsComponentsModule | MaterialsComponentsCase | MaterialsComponentsExercise;

export type Materials = {
  __typename?: 'Materials';
  title?: Maybe<Scalars['String']>;
  linktitle?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  objectives?: Maybe<Array<Maybe<MaterialsObjectives>>>;
  body?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<MaterialsComponents>>>;
};

export type MaterialsDocument = Node & Document & {
  __typename?: 'MaterialsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Materials;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type MaterialsConnectionEdges = {
  __typename?: 'MaterialsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MaterialsDocument>;
};

export type MaterialsConnection = Connection & {
  __typename?: 'MaterialsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<MaterialsConnectionEdges>>>;
};

export type CasesSources = {
  __typename?: 'CasesSources';
  source_name?: Maybe<Scalars['String']>;
  source_url?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
};

export type Cases = {
  __typename?: 'Cases';
  style?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  reporter?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  public?: Maybe<Scalars['Boolean']>;
  sources?: Maybe<Array<Maybe<CasesSources>>>;
  body?: Maybe<Scalars['String']>;
};

export type CasesDocument = Node & Document & {
  __typename?: 'CasesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Cases;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type CasesConnectionEdges = {
  __typename?: 'CasesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<CasesDocument>;
};

export type CasesConnection = Connection & {
  __typename?: 'CasesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<CasesConnectionEdges>>>;
};

export type Modules = {
  __typename?: 'Modules';
  title?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  body?: Maybe<Scalars['String']>;
};

export type ModulesDocument = Node & Document & {
  __typename?: 'ModulesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Modules;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type ModulesConnectionEdges = {
  __typename?: 'ModulesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ModulesDocument>;
};

export type ModulesConnection = Connection & {
  __typename?: 'ModulesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<ModulesConnectionEdges>>>;
};

export type Exercises = {
  __typename?: 'Exercises';
  title?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  body?: Maybe<Scalars['String']>;
};

export type ExercisesDocument = Node & Document & {
  __typename?: 'ExercisesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Exercises;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type ExercisesConnectionEdges = {
  __typename?: 'ExercisesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ExercisesDocument>;
};

export type ExercisesConnection = Connection & {
  __typename?: 'ExercisesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<ExercisesConnectionEdges>>>;
};

export type Resources = {
  __typename?: 'Resources';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ResourcesDocument = Node & Document & {
  __typename?: 'ResourcesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Resources;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type ResourcesConnectionEdges = {
  __typename?: 'ResourcesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ResourcesDocument>;
};

export type ResourcesConnection = Connection & {
  __typename?: 'ResourcesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<ResourcesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateMaterialsDocument: MaterialsDocument;
  createMaterialsDocument: MaterialsDocument;
  updateCasesDocument: CasesDocument;
  createCasesDocument: CasesDocument;
  updateModulesDocument: ModulesDocument;
  createModulesDocument: ModulesDocument;
  updateExercisesDocument: ExercisesDocument;
  createExercisesDocument: ExercisesDocument;
  updateResourcesDocument: ResourcesDocument;
  createResourcesDocument: ResourcesDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateMaterialsDocumentArgs = {
  relativePath: Scalars['String'];
  params: MaterialsMutation;
};


export type MutationCreateMaterialsDocumentArgs = {
  relativePath: Scalars['String'];
  params: MaterialsMutation;
};


export type MutationUpdateCasesDocumentArgs = {
  relativePath: Scalars['String'];
  params: CasesMutation;
};


export type MutationCreateCasesDocumentArgs = {
  relativePath: Scalars['String'];
  params: CasesMutation;
};


export type MutationUpdateModulesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ModulesMutation;
};


export type MutationCreateModulesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ModulesMutation;
};


export type MutationUpdateExercisesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ExercisesMutation;
};


export type MutationCreateExercisesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ExercisesMutation;
};


export type MutationUpdateResourcesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ResourcesMutation;
};


export type MutationCreateResourcesDocumentArgs = {
  relativePath: Scalars['String'];
  params: ResourcesMutation;
};

export type DocumentMutation = {
  materials?: InputMaybe<MaterialsMutation>;
  cases?: InputMaybe<CasesMutation>;
  modules?: InputMaybe<ModulesMutation>;
  exercises?: InputMaybe<ExercisesMutation>;
  resources?: InputMaybe<ResourcesMutation>;
};

export type MaterialsObjectivesMutation = {
  objective?: InputMaybe<Scalars['String']>;
  explanation?: InputMaybe<Scalars['String']>;
};

export type MaterialsComponentsModuleMutation = {
  title?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
};

export type MaterialsComponentsCaseMutation = {
  title?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
};

export type MaterialsComponentsExerciseMutation = {
  title?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
};

export type MaterialsComponentsMutation = {
  module?: InputMaybe<MaterialsComponentsModuleMutation>;
  case?: InputMaybe<MaterialsComponentsCaseMutation>;
  exercise?: InputMaybe<MaterialsComponentsExerciseMutation>;
};

export type MaterialsMutation = {
  title?: InputMaybe<Scalars['String']>;
  linktitle?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
  objectives?: InputMaybe<Array<InputMaybe<MaterialsObjectivesMutation>>>;
  body?: InputMaybe<Scalars['String']>;
  components?: InputMaybe<Array<InputMaybe<MaterialsComponentsMutation>>>;
};

export type CasesSourcesMutation = {
  source_name?: InputMaybe<Scalars['String']>;
  source_url?: InputMaybe<Scalars['String']>;
  license?: InputMaybe<Scalars['String']>;
  attribution?: InputMaybe<Scalars['String']>;
};

export type CasesMutation = {
  style?: InputMaybe<Scalars['String']>;
  short?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public?: InputMaybe<Scalars['Boolean']>;
  sources?: InputMaybe<Array<InputMaybe<CasesSourcesMutation>>>;
  body?: InputMaybe<Scalars['String']>;
};

export type ModulesMutation = {
  title?: InputMaybe<Scalars['String']>;
  short?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body?: InputMaybe<Scalars['String']>;
};

export type ExercisesMutation = {
  title?: InputMaybe<Scalars['String']>;
  short?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body?: InputMaybe<Scalars['String']>;
};

export type ResourcesMutation = {
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type MaterialsPartsFragment = { __typename?: 'Materials', title?: string | null, linktitle?: string | null, published?: boolean | null, type?: string | null, weight?: number | null, body?: string | null, objectives?: Array<{ __typename: 'MaterialsObjectives', objective?: string | null, explanation?: string | null } | null> | null, components?: Array<{ __typename: 'MaterialsComponentsModule', title?: string | null, filename?: { __typename?: 'ModulesDocument', id: string } | null } | { __typename: 'MaterialsComponentsCase', title?: string | null, filename?: { __typename?: 'CasesDocument', id: string } | null } | { __typename: 'MaterialsComponentsExercise', title?: string | null, filename?: { __typename?: 'ExercisesDocument', id: string } | null } | null> | null };

export type CasesPartsFragment = { __typename?: 'Cases', style?: string | null, short?: string | null, reporter?: string | null, tags?: Array<string | null> | null, public?: boolean | null, body?: string | null, sources?: Array<{ __typename: 'CasesSources', source_name?: string | null, source_url?: string | null, license?: string | null, attribution?: string | null } | null> | null };

export type ModulesPartsFragment = { __typename?: 'Modules', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null };

export type ExercisesPartsFragment = { __typename?: 'Exercises', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null };

export type ResourcesPartsFragment = { __typename?: 'Resources', title?: string | null, date?: string | null, summary?: string | null, body?: string | null };

export type GetMaterialsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetMaterialsDocumentQuery = { __typename?: 'Query', getMaterialsDocument: { __typename?: 'MaterialsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Materials', title?: string | null, linktitle?: string | null, published?: boolean | null, type?: string | null, weight?: number | null, body?: string | null, objectives?: Array<{ __typename: 'MaterialsObjectives', objective?: string | null, explanation?: string | null } | null> | null, components?: Array<{ __typename: 'MaterialsComponentsModule', title?: string | null, filename?: { __typename?: 'ModulesDocument', id: string } | null } | { __typename: 'MaterialsComponentsCase', title?: string | null, filename?: { __typename?: 'CasesDocument', id: string } | null } | { __typename: 'MaterialsComponentsExercise', title?: string | null, filename?: { __typename?: 'ExercisesDocument', id: string } | null } | null> | null } } };

export type GetMaterialsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialsListQuery = { __typename?: 'Query', getMaterialsList: { __typename?: 'MaterialsConnection', totalCount: number, edges?: Array<{ __typename?: 'MaterialsConnectionEdges', node?: { __typename?: 'MaterialsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Materials', title?: string | null, linktitle?: string | null, published?: boolean | null, type?: string | null, weight?: number | null, body?: string | null, objectives?: Array<{ __typename: 'MaterialsObjectives', objective?: string | null, explanation?: string | null } | null> | null, components?: Array<{ __typename: 'MaterialsComponentsModule', title?: string | null, filename?: { __typename?: 'ModulesDocument', id: string } | null } | { __typename: 'MaterialsComponentsCase', title?: string | null, filename?: { __typename?: 'CasesDocument', id: string } | null } | { __typename: 'MaterialsComponentsExercise', title?: string | null, filename?: { __typename?: 'ExercisesDocument', id: string } | null } | null> | null } } | null } | null> | null } };

export type GetCasesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetCasesDocumentQuery = { __typename?: 'Query', getCasesDocument: { __typename?: 'CasesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Cases', style?: string | null, short?: string | null, reporter?: string | null, tags?: Array<string | null> | null, public?: boolean | null, body?: string | null, sources?: Array<{ __typename: 'CasesSources', source_name?: string | null, source_url?: string | null, license?: string | null, attribution?: string | null } | null> | null } } };

export type GetCasesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCasesListQuery = { __typename?: 'Query', getCasesList: { __typename?: 'CasesConnection', totalCount: number, edges?: Array<{ __typename?: 'CasesConnectionEdges', node?: { __typename?: 'CasesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Cases', style?: string | null, short?: string | null, reporter?: string | null, tags?: Array<string | null> | null, public?: boolean | null, body?: string | null, sources?: Array<{ __typename: 'CasesSources', source_name?: string | null, source_url?: string | null, license?: string | null, attribution?: string | null } | null> | null } } | null } | null> | null } };

export type GetModulesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetModulesDocumentQuery = { __typename?: 'Query', getModulesDocument: { __typename?: 'ModulesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Modules', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null } } };

export type GetModulesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModulesListQuery = { __typename?: 'Query', getModulesList: { __typename?: 'ModulesConnection', totalCount: number, edges?: Array<{ __typename?: 'ModulesConnectionEdges', node?: { __typename?: 'ModulesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Modules', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null } } | null } | null> | null } };

export type GetExercisesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetExercisesDocumentQuery = { __typename?: 'Query', getExercisesDocument: { __typename?: 'ExercisesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Exercises', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null } } };

export type GetExercisesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExercisesListQuery = { __typename?: 'Query', getExercisesList: { __typename?: 'ExercisesConnection', totalCount: number, edges?: Array<{ __typename?: 'ExercisesConnectionEdges', node?: { __typename?: 'ExercisesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Exercises', title?: string | null, short?: string | null, tags?: Array<string | null> | null, body?: string | null } } | null } | null> | null } };

export type GetResourcesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetResourcesDocumentQuery = { __typename?: 'Query', getResourcesDocument: { __typename?: 'ResourcesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Resources', title?: string | null, date?: string | null, summary?: string | null, body?: string | null } } };

export type GetResourcesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResourcesListQuery = { __typename?: 'Query', getResourcesList: { __typename?: 'ResourcesConnection', totalCount: number, edges?: Array<{ __typename?: 'ResourcesConnectionEdges', node?: { __typename?: 'ResourcesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Resources', title?: string | null, date?: string | null, summary?: string | null, body?: string | null } } | null } | null> | null } };

export const MaterialsPartsFragmentDoc = gql`
    fragment MaterialsParts on Materials {
  title
  linktitle
  published
  type
  weight
  objectives {
    __typename
    objective
    explanation
  }
  body
  components {
    __typename
    ... on MaterialsComponentsModule {
      title
      filename {
        ... on Document {
          id
        }
      }
    }
    ... on MaterialsComponentsCase {
      title
      filename {
        ... on Document {
          id
        }
      }
    }
    ... on MaterialsComponentsExercise {
      title
      filename {
        ... on Document {
          id
        }
      }
    }
  }
}
    `;
export const CasesPartsFragmentDoc = gql`
    fragment CasesParts on Cases {
  style
  short
  reporter
  tags
  public
  sources {
    __typename
    source_name
    source_url
    license
    attribution
  }
  body
}
    `;
export const ModulesPartsFragmentDoc = gql`
    fragment ModulesParts on Modules {
  title
  short
  tags
  body
}
    `;
export const ExercisesPartsFragmentDoc = gql`
    fragment ExercisesParts on Exercises {
  title
  short
  tags
  body
}
    `;
export const ResourcesPartsFragmentDoc = gql`
    fragment ResourcesParts on Resources {
  title
  date
  summary
  body
}
    `;
export const GetMaterialsDocumentDocument = gql`
    query getMaterialsDocument($relativePath: String!) {
  getMaterialsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...MaterialsParts
    }
  }
}
    ${MaterialsPartsFragmentDoc}`;
export const GetMaterialsListDocument = gql`
    query getMaterialsList {
  getMaterialsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...MaterialsParts
        }
      }
    }
  }
}
    ${MaterialsPartsFragmentDoc}`;
export const GetCasesDocumentDocument = gql`
    query getCasesDocument($relativePath: String!) {
  getCasesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...CasesParts
    }
  }
}
    ${CasesPartsFragmentDoc}`;
export const GetCasesListDocument = gql`
    query getCasesList {
  getCasesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...CasesParts
        }
      }
    }
  }
}
    ${CasesPartsFragmentDoc}`;
export const GetModulesDocumentDocument = gql`
    query getModulesDocument($relativePath: String!) {
  getModulesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...ModulesParts
    }
  }
}
    ${ModulesPartsFragmentDoc}`;
export const GetModulesListDocument = gql`
    query getModulesList {
  getModulesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...ModulesParts
        }
      }
    }
  }
}
    ${ModulesPartsFragmentDoc}`;
export const GetExercisesDocumentDocument = gql`
    query getExercisesDocument($relativePath: String!) {
  getExercisesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...ExercisesParts
    }
  }
}
    ${ExercisesPartsFragmentDoc}`;
export const GetExercisesListDocument = gql`
    query getExercisesList {
  getExercisesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...ExercisesParts
        }
      }
    }
  }
}
    ${ExercisesPartsFragmentDoc}`;
export const GetResourcesDocumentDocument = gql`
    query getResourcesDocument($relativePath: String!) {
  getResourcesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...ResourcesParts
    }
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const GetResourcesListDocument = gql`
    query getResourcesList {
  getResourcesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...ResourcesParts
        }
      }
    }
  }
}
    ${ResourcesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getMaterialsDocument(variables: GetMaterialsDocumentQueryVariables, options?: C): Promise<{data: GetMaterialsDocumentQuery, variables: GetMaterialsDocumentQueryVariables, query: string}> {
        return requester<{data: GetMaterialsDocumentQuery, variables: GetMaterialsDocumentQueryVariables, query: string}, GetMaterialsDocumentQueryVariables>(GetMaterialsDocumentDocument, variables, options);
      },
    getMaterialsList(variables?: GetMaterialsListQueryVariables, options?: C): Promise<{data: GetMaterialsListQuery, variables: GetMaterialsListQueryVariables, query: string}> {
        return requester<{data: GetMaterialsListQuery, variables: GetMaterialsListQueryVariables, query: string}, GetMaterialsListQueryVariables>(GetMaterialsListDocument, variables, options);
      },
    getCasesDocument(variables: GetCasesDocumentQueryVariables, options?: C): Promise<{data: GetCasesDocumentQuery, variables: GetCasesDocumentQueryVariables, query: string}> {
        return requester<{data: GetCasesDocumentQuery, variables: GetCasesDocumentQueryVariables, query: string}, GetCasesDocumentQueryVariables>(GetCasesDocumentDocument, variables, options);
      },
    getCasesList(variables?: GetCasesListQueryVariables, options?: C): Promise<{data: GetCasesListQuery, variables: GetCasesListQueryVariables, query: string}> {
        return requester<{data: GetCasesListQuery, variables: GetCasesListQueryVariables, query: string}, GetCasesListQueryVariables>(GetCasesListDocument, variables, options);
      },
    getModulesDocument(variables: GetModulesDocumentQueryVariables, options?: C): Promise<{data: GetModulesDocumentQuery, variables: GetModulesDocumentQueryVariables, query: string}> {
        return requester<{data: GetModulesDocumentQuery, variables: GetModulesDocumentQueryVariables, query: string}, GetModulesDocumentQueryVariables>(GetModulesDocumentDocument, variables, options);
      },
    getModulesList(variables?: GetModulesListQueryVariables, options?: C): Promise<{data: GetModulesListQuery, variables: GetModulesListQueryVariables, query: string}> {
        return requester<{data: GetModulesListQuery, variables: GetModulesListQueryVariables, query: string}, GetModulesListQueryVariables>(GetModulesListDocument, variables, options);
      },
    getExercisesDocument(variables: GetExercisesDocumentQueryVariables, options?: C): Promise<{data: GetExercisesDocumentQuery, variables: GetExercisesDocumentQueryVariables, query: string}> {
        return requester<{data: GetExercisesDocumentQuery, variables: GetExercisesDocumentQueryVariables, query: string}, GetExercisesDocumentQueryVariables>(GetExercisesDocumentDocument, variables, options);
      },
    getExercisesList(variables?: GetExercisesListQueryVariables, options?: C): Promise<{data: GetExercisesListQuery, variables: GetExercisesListQueryVariables, query: string}> {
        return requester<{data: GetExercisesListQuery, variables: GetExercisesListQueryVariables, query: string}, GetExercisesListQueryVariables>(GetExercisesListDocument, variables, options);
      },
    getResourcesDocument(variables: GetResourcesDocumentQueryVariables, options?: C): Promise<{data: GetResourcesDocumentQuery, variables: GetResourcesDocumentQueryVariables, query: string}> {
        return requester<{data: GetResourcesDocumentQuery, variables: GetResourcesDocumentQueryVariables, query: string}, GetResourcesDocumentQueryVariables>(GetResourcesDocumentDocument, variables, options);
      },
    getResourcesList(variables?: GetResourcesListQueryVariables, options?: C): Promise<{data: GetResourcesListQuery, variables: GetResourcesListQueryVariables, query: string}> {
        return requester<{data: GetResourcesListQuery, variables: GetResourcesListQueryVariables, query: string}, GetResourcesListQueryVariables>(GetResourcesListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

