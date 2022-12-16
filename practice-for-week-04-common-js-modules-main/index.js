const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');
const {message1,message2,message3} = require('./messages/index.js');


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(message1);
giveMessageToMrsPotato(message2);
giveMessageToMrsPotato(message3);
