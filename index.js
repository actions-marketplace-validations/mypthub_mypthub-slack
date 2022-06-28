const core = require('@actions/core');
const github = require('@actions/github');

// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-225626939681-3519833902868-7ny9lZcSYGxBgrKqRGsNPJ8m", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

const defaultMsg = {
	// "channel": "#gh-deploy",
	"attachments": [
		{
			"color": "#8AB4F8",
			"blocks": [
				{
					"type": "context",
					"elements": [
						{
							"type": "image",
							"image_url": "https://slack-imgs.com/?c=1&o1=wi32.he32.si&url=https://avatars.githubusercontent.com/u/9919?v&#x3D;4",
							"alt_text": "github logo"
						},
						{
							"type": "mrkdwn",
							"text": "*Mark* triggered a deploy"
						}
					]
				},
				{
					"type": "divider"
				},
				{
					"type": "section",
					"fields": [
						{
							"type": "plain_text",
							"text": "Branch",
							"emoji": true
						},
						{
							"type": "plain_text",
							"text": "Project",
							"emoji": true
						},
						{
							"type": "plain_text",
							"text": "Branch",
							"emoji": true
						},
						{
							"type": "plain_text",
							"text": "*this is plain_text HAS BEEN UPDATE AGAIND*",
							"emoji": true
						}
					]
				}
			]
		}
	]
}

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

    // Call the chat.postMessage method using the built-in WebClient
    const result = await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: "xoxb-225626939681-3519833902868-7ny9lZcSYGxBgrKqRGsNPJ8m",
      channel: '#gh-deploy',
      attachments: defaultMsg.attachments,
      username: "gh-mpth-bot",
      icon_emoji: ":ghost:",
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);


} catch (error) {
  core.setFailed(error.message);
}

// Post a message to a channel your app is in using ID and message text
async function publishMessage(id, text) {
  try {

  }
  catch (error) {
    console.error(error);
  }
}

publishMessage("C12345", "Hello world :tada:");
