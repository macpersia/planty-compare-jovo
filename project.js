// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa'
    },
    googleAction: {
       nlu: 'dialogflow',
       dialogflow: {
          projectId: 'plantycompare',
          keyFile: './plantycompare-gc-serviceaccount-key.json'
       }
    },
   //  endpoint: '${JOVO_WEBHOOK_URL}'
   //  endpoint: 'https://planty-compare-functionapp.azurewebsites.net/api/PlantyCompareHttpTrigger?code=YTGRH6zYvR8739rcGLr6qPpu0NT6NbYQ3i0ta3kn1LNoHnPqNcrmhw=='
   endpoint: 'https://us-central1-plantycompare.cloudfunctions.net/fulfillment'
};
