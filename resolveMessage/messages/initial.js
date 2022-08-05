/**
 *
 * @param {*} githubContext
 * @returns
 */
export default function(githubContext) {
	return {
		"attachments": [
			{
				"color": "#8AB4F8",
				"blocks": [
					{
						"type": "context",
						"elements": [
							{
								"type": "mrkdwn",
								"text": `*${githubContext.sender.login}* triggered a deploy`,
							}
						]
					},
					// BUILD STATUS
					// {
					// 	"type": "context",
					// 	"elements": [
					// 		{
					// 			"type": "mrkdwn",
					// 			"text": "<http://someurl|Build> succeeded"
					// 		}
					// 	]
					// },
					{
						"type": "divider"
					},
					{
						"type": "section",
						"fields": [
							{
								"type": "mrkdwn",
								"text": "*Environment*"
							},
							{
								"type": "mrkdwn",
								"text": "*Repo*"
							},
							{
								"type": "mrkdwn",
								"text": "staging"
							},
							{
								"type": "mrkdwn",
								"text": `<> `
								// "text": "<http://someurl|web>"
							},
							{
								"type": "mrkdwn",
								"text": "*Branch*"
							},
							{
								"type": "mrkdwn",
								"text": "*Commit*"
							},
							{
								"type": "mrkdwn",
								"text": "release/ekans"
							},
							{
								"type": "mrkdwn",
								"text": `<${githubContext.head_commit.url}> ${githubContext.head_commit.id}`,
							}
						]
					},
					{
						"type": "divider"
					}
				]
			}
		],
	};
};
