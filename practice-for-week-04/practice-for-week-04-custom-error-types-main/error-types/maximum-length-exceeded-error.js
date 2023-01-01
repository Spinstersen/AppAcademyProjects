const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength,...params){
    super(...params);

    this.name = 'MaximumLengthExceededError';
    if (excessLength){
      this.message = `Maximum length exceeded by ${excessLength}`
    } else {
      this.message = `Maximum length exceeded`
    }
     
  }

}

/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
