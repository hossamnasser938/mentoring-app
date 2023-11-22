export const IOC_TYPES = {
  MentorModel: Symbol.for('MentorModel'),
  IMentorDAO: Symbol.for('IMentorDAO'),
  MentorServie: Symbol.for('MentorServie'),
  // user
  UserModel: Symbol.for('UserModel'),
  IUserDAO: Symbol.for('IUserDAO'),
  UserService: Symbol.for('UserService'),
  // projectIdeas
  ProjectIdeasModel: Symbol.for('ProjectIdeasModel'),
  ProjectIdeasServie: Symbol.for('ProjectIdeasServie'),
  IProjectIdeasDAO: Symbol.for('IProjectIdeasDAO'),
  //Utilities
  IPasswordHasher: Symbol.for('IPasswordHasher'),
  ITokenService: Symbol.for('ITokenService'),
  ITokenMentor: Symbol.for('ITokenMentor'),

  //middleware

  IAuthMiddleware: Symbol.for('IAuthMiddleware'),
};
