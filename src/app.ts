import {App} from 'jovo-framework';
import {Alexa} from 'jovo-platform-alexa';
import {JovoDebugger} from 'jovo-plugin-debugger';
import {FileDb} from 'jovo-db-filedb';
import {GoogleAssistant} from 'jovo-platform-googleassistant';
import { handleEquivalentIncomeEstimate } from './equivalent-income-estimate';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({

    "LAUNCH": (jovo) => jovo!.toIntent('HelloWorldIntent'),
    
    "HelloWorldIntent": (jovo) => jovo!.ask(
        'Hello World! What\'s your name?', 
        'Please tell me your name.'),

    "MyNameIsIntent": (jovo) => jovo!.tell(
        `Hey ${jovo!.$inputs.name.value}, nice to meet you!`),

    "EquivalentIncomeEstimateIntent": (jovo) => handleEquivalentIncomeEstimate(jovo!)
});

export {app};
