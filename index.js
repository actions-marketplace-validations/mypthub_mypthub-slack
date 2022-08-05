const core = require('@actions/core');
const github = require('@actions/github');

// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
const { default: resolveMessage } = require('./resolveMessage');

const OAUTH_TOKEN = core.getInput('slack-token');

// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const app = new WebClient(OAUTH_TOKEN, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

async function publishMessage() {
	try {
		// `who-to-greet` input defined in action metadata file
		// const nameToGreet = core.getInput('who-to-greet');
		// const time = (new Date()).toTimeString();
		// core.setOutput("time", time);
		// Get the JSON webhook payload for the event that triggered the workflow
		const payload = JSON.stringify(github.context, undefined, 2)
		console.log(`The github action: ${payload}`);

		const context = github.context.payload;
		// const msgVariant = core.getInput('variant');
		const msgVariant = 'initial';
	} catch (error) {
		core.setFailed(error.message);
	}

  try {
		const result = await app.chat.postMessage({
			token: OAUTH_TOKEN,
			channel: '#gh-deploy',
			attachments: resolveMessage(context, msgVariant).attachments,
			username: "gh-mpth-bot",
			// attachments: defaultMsg.attachments,
			// You could also use a blocks[] array to send richer content
		});
    // console.log('msg', result);
		core.setOutput("msg", result);
  }
  catch (error) {
    console.error('error sending msg', error);
  }
}

publishMessage();
