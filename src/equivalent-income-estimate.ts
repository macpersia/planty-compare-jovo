import {Jovo, JovoRequest} from "jovo-core";
import requestPromise = require('request-promise');

const HELP_MESSAGE = 
    "You can ask, how much would you need to make in a given city to maintain a comparable lifestyle,"
    + " or, you can say exit... What can I help you with?";

const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

export const handleEquivalentIncomeEstimate = async (jovo: Jovo) => {

    // TODO: Parameterize targetCurrency too
    const targetCurrency = jovo.$inputs
        //["targetCurrency"].value;
        // ["baseIncome"].value.currency.value;
        ["currency"].value;

    const incomeAmount = await getEquivalentIncome(jovo.$request!);
    return jovo.tell(
        `You'd need to earn ${incomeAmount} ${targetCurrency}s, to maintain a comparable lifestyle.`);
}

const getEquivalentIncome = async (request: JovoRequest): Promise<number> => {
    const requestInputs = request.getInputs();
    const targetCity = requestInputs["targetCity"].value;
    
    const baseCity = requestInputs["baseCity"].value;
    // const baseIncomeFields = requestInputs["baseIncome"].value;
    // const baseIncomeAmount = parseInt(baseIncomeFields["amount"].value, 10);
    // const baseCurrency = baseIncomeFields["currency"].value;
    const baseIncomeAmount = parseInt(requestInputs["baseIncomeAmount"].value, 10);    
    const baseCurrency = requestInputs["currency"].value;

    // TODO: Parameterize targetCurrency too
    const targetCurrency = baseCurrency;
    // const targetCurrency = requestInputs["targetCurrency"].value;

    const estimateUrl = 
        // "http://localhost:8081/api/equivalent-income?"
        `http://pc.planty-ideas.net:8080/api/equivalent-income?`
        + `targetCity=${targetCity}&targetCurrency=${targetCurrency}`
        + `&baseCity=${baseCity}&baseIncomeAmount=${baseIncomeAmount}&baseCurrency=${baseCurrency}`;
    const response = await requestPromise({
        uri: estimateUrl,
        method: 'GET'
    }, (err, res, body) => {
        if (err)
            console.error('>>>> inside get equivalent income request.get', err);
    });

    const incomeAmount = parseFloat(response);
    return Math.round(incomeAmount / 100) * 100;
}
