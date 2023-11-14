export interface IToken<TPayload> {
  secretKey: string;
  payload: TPayload;
}
