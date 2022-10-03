type individual = {
  _kind: string,
  val: number,
  unit: string
};

export interface ChartDatatype {
  ts: individual;
  v0: individual;
  v1: individual;
  v2: individual;
}
