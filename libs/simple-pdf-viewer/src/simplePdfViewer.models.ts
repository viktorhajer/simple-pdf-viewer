import PDFTreeNode = PDF.PDFTreeNode;

export enum SimpleSearchState {
  FOUND,
  NOT_FOUND,
  WRAPPED,
  PENDING
}

export class SimpleDocumentInfo {
  constructor(public key: string, public value: string){};
}

export class SimpleOutlineNode implements PDFTreeNode {
  title: string;
  dest: any;
  items: SimpleOutlineNode[];
  bold: boolean;
  italic: boolean;
  color: number[];
}