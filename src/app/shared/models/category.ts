export class Category {
    public static readonly ALL = 'Wszystko';
    public static readonly TANIEC = 'Taniec';
    public static readonly AKCESORIA = 'Akcesoria';
    public static readonly IMPREZY = 'Imprezy';
  
    static getAllCategories(): Category[] {
      return [
        Category.ALL,
        Category.TANIEC,
        Category.AKCESORIA,
        Category.IMPREZY
      ];
    }
  }
  