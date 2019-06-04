// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
    },
    googleAction: {
       nlu: 'dialogflow',
       dialogflow: {
          projectId: "plantycompare",
          keyFile: "./plantycompare-gc-serviceaccount-key.json"
       }
    },
    endpoint: '${JOVO_WEBHOOK_URL}',
};
