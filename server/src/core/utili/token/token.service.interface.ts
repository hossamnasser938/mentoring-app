export interface ITokenService<T> {
  generateToken(payload: T, secretKey: string, expiresIn?: number): string;
  verifyToken(token: string, secretKey: string): any | null;
}
