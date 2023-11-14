export interface IPasswordHasher {
  hashPassword(password: string, saltRound: number): string;
  comparePassword(password: string, hashPass: string): boolean;
}
