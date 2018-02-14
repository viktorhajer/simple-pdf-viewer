/**
 * Enum for searching state
 */
export enum SimpleSearchState {
  FOUND,
  NOT_FOUND,
  WRAPPED,
  PENDING
}

/**
 * PDF Document basic information representation
 */
export class SimpleDocumentInfo {
  constructor(public key: string, public value: string){};
}

/**
 * Representation of the Outline nodes
 */
export class SimpleOutlineNode {
  constructor(public title: string, public dest: any, public items: SimpleOutlineNode[]){};
}

/**
 * Representation of the loading progress
 */
export class SimpleProgressData {
  constructor(public loaded: number, public total: number){};
}
