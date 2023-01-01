// Your code here
class ValidationError extends Error{
  constructor(...params){
    super(...params)
    if (Error.captureStackTrace){
      Error.captureStackTrace(this,ValidationError);
    }
    this.name = 'ValidationError';
    this.message = this.message || `Invalid input` ; 
  }
}

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
