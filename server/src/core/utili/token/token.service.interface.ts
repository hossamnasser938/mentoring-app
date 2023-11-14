export interface ITokenService<T> {
  generateToken(payload: T, secretKey: string, expiresIn?: number): string;
  verifyToken(secretKey: string, token: string): T | null;
}
