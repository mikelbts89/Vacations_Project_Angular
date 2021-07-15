export class Vacation {
  public constructor(
    public id?: number,
    public description?: string,
    public destination?: string,
    public image?: string,
    public start_date?: string,
    public end_date?: string,
    public price?: number
  ) {
  }
}
