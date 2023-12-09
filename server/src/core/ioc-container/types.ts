export const IOC_TYPES = {
  MentorModel: Symbol.for('MentorModel'),
  IMentorDAO: Symbol.for('IMentorDAO'),
  MentorServie: Symbol.for('MentorServie'),
  // user
  UserModel: Symbol.for('UserModel'),
  IUserDAO: Symbol.for('IUserDAO'),
  UserService: Symbol.for('UserService'),
  // projectIdeas
  ProjectIdeaModel: Symbol.for('ProjectIdeaModel'),
  ProjectIdeaServie: Symbol.for('ProjectIdeaServie'),
  IProjectIdeaDAO: Symbol.for('IProjectIdeaDAO'),
  //Utilities
  IPasswordHasher: Symbol.for('IPasswordHasher'),
  ITokenService: Symbol.for('ITokenService'),
  ITokenMentor: Symbol.for('ITokenMentor'),

  //middleware

  IAuthMiddleware: Symbol.for('IAuthMiddleware'),
};
