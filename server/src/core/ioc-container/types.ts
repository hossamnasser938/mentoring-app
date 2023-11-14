export const IOC_TYPES = {
  MentorModel: Symbol.for('MentorModel'),
  IMentorDAO: Symbol.for('IMentorDAO'),
  MentorServie: Symbol.for('MentorServie'),
  // user
  UserModel: Symbol.for('UserModel'),
  IUserDAO: Symbol.for('IUserDAO'),
  UserService: Symbol.for('UserService'),

  //Utilities
  BcryptPassword: Symbol.for('BcryptPassword'),
  ITokenService: Symbol.for('ITokenService'),
  GenericTokenService: Symbol.for('GenericTokenService'),
};
