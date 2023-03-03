/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Query
// ====================================================

export interface Query_Viewer {
  __typename: "User";
  /**
   * The name of the user
   */
  name: string;
  /**
   * The id of the user
   */
  id: number;
}

export interface Query {
  /**
   * Get the currently authenticated user
   */
  Viewer: Query_Viewer | null;
}
