export const IOC_TYPES = {
  MentorModel: Symbol.for('MentorModel'),
  IMentorDAO: Symbol.for('IMentorDAO'),
  MentorServie: Symbol.for('MentorServie'),
  // user
  UserModel: Symbol.for('UserModel'),
  IUserDAO: Symbol.for('IUserDAO'),
  UserService: Symbol.for('UserService'),
  //Utilities
  IPasswordHasher: Symbol.for('IPasswordHasher'),
  ITokenService: Symbol.for('ITokenService'),

  //middleware

  AuthMiddleware: Symbol.for('AuthMiddleware'),
};
