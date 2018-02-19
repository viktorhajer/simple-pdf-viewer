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

/**
 * Representation of the settings of the search
 */
export class SimpleSearchOptions {
  public static readonly DEFAULT_OPTIONS = new SimpleSearchOptions();
  constructor(public caseSensitive: boolean = false, public highlightAll: boolean = true, public phraseSearch: boolean = true){};
}

/**
 * Representation of the PDF bookmark
 */
export class SimplePDFBookmark {

  public static readonly EMPTY_BOOKMARK = new SimplePDFBookmark(1, 0.75, 0, 0, 0);
  public static readonly PARAMETER_SEPARATOR: string = '#';
  private static readonly PARAMETER_PAGE: string = 'page';
  private static readonly PARAMETER_ZOOM: string = 'zoom';
  private static readonly PARAMETER_ROTATION: string = 'rotation';
  private static readonly PARAMETER_X: string = 'x';
  private static readonly PARAMETER_Y: string = 'y';

  constructor(public page: number = 1, public zoom: number = 1,
    public rotation: number = 0, public x: number = 0, public y: number = 0) {
  }

  /**
   * Build destination object to navigation
   */
  toDestination(): object {
    return {pageNumber: this.page, destArray : [null, {name: 'XYZ'}, this.x, this.y, this.zoom]};
  }

  /**
   * Build query string to URL
   */
  toQueryString(): string {
    return `${SimplePDFBookmark.PARAMETER_SEPARATOR}` +
      `${SimplePDFBookmark.PARAMETER_PAGE}=${this.page}${SimplePDFBookmark.PARAMETER_SEPARATOR}` +
      `${SimplePDFBookmark.PARAMETER_ZOOM}=${this.zoom}${SimplePDFBookmark.PARAMETER_SEPARATOR}` +
      `${SimplePDFBookmark.PARAMETER_ROTATION}=${this.rotation}${SimplePDFBookmark.PARAMETER_SEPARATOR}` +
      `${SimplePDFBookmark.PARAMETER_X}=${this.x}${SimplePDFBookmark.PARAMETER_SEPARATOR}` +
      `${SimplePDFBookmark.PARAMETER_Y}=${this.y}`;
  }

  /**
   * Build bookmark obeject from src url
   */
  public static buildSimplePDFBookmark(src: string): SimplePDFBookmark {
    if (src && typeof src === 'string' && src.trim().length > 0) {
      var parts = src.split(SimplePDFBookmark.PARAMETER_SEPARATOR);

      console.log(parts);

      if (parts.length > 0) {
        const bookmark = new SimplePDFBookmark();
        parts.forEach(part => {
          const parameters = part.split("=");
          const paramert_name = parameters[0];
          if (parameters.length === 2 && bookmark.hasOwnProperty(paramert_name)) {
            let paramert_value = 0;
            if (paramert_name === SimplePDFBookmark.PARAMETER_ZOOM) {
              paramert_value = parseFloat(`${parameters[1]}`);
            } else {
              paramert_value = parseInt(`${parameters[1]}`, 10);
            }
            paramert_value = Number.isNaN(paramert_value) ? 0 : paramert_value;
            bookmark[paramert_name] = paramert_value;
          }
        });
        return bookmark;
      }
    }
    return SimplePDFBookmark.EMPTY_BOOKMARK;
  }
}
