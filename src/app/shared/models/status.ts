export class Status {

    public static readonly AKTIV = 'aktywny';
    public static readonly INAKTIV = 'nieaktywny';
    public static readonly SOLD = 'sprzedany';
  
    static getAllStatus(): Status[] {
      return [
        Status.AKTIV,
        Status.INAKTIV,
        Status.SOLD
      ];
    }
  }
  