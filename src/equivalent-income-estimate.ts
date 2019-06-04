import { Jovo, JovoRequest } from "jovo-core";

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

const getEquivalentIncome = (request: JovoRequest): Promise<number> => {
    var requestInputs = request.getInputs();
    var targetCity = requestInputs["targetCity"].value;
    
    // var targetCurrency = requestInputs["targetCurrency"].value;
    var targetCurrency = requestInputs["currency"].value;

    var baseCity = requestInputs["baseCity"].value;
    // var baseIncomeFields = requestInputs["baseIncome"].value;
    // var baseIncomeAmount = parseInt(baseIncomeFields["amount"].value, 10);
    // var baseCurrency = baseIncomeFields["currency"].value;
    var baseIncomeAmount = parseInt(requestInputs["baseIncomeAmount"].value, 10);    
    var baseCurrency = requestInputs["currency"].value;

    // TODO: Parameterize targetCurrency too
    var targetCurrency = baseCurrency;

    // var response = await client.GetAsync(
    //     // "http://localhost:5000/api/equivalent-income?"
    //     "http://pc.planty-ideas.net:8080/api/equivalent-income?"
    //     + $"targetCity={targetCity}&targetCurrency={targetCurrency}"
    //     + $"&baseCity={baseCity}&baseIncomeAmount={baseIncomeAmount}&baseCurrency={baseCurrency}");

    var incomeAmount = NaN; //Decimal.Parse(await response.Content.ReadAsStringAsync());
    return new Promise(resolve => Math.round(incomeAmount / 100) * 100);
}
