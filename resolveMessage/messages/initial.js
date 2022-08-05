/**
 *
 * @param {*} githubContext
 * @returns
 */
export default function initial(githubContext) {
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
								"text": `*${githubContext.actor}* triggered a deploy`,
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
								"text": "*Workflow*"
							},
							{
								"type": "mrkdwn",
								"text": "*Repo / Actions*"
							},
							{
								"type": "mrkdwn",
								"text": `${githubContext.workflow}`
							},
							{
								"type": "mrkdwn",
								"text": `<${githubContext.payload.repository.clone_url}/actions|${githubContext.payload.repository.name}/actions>`,
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
								"text": `${githubContext.ref.split('/').pop()}`
							},
							{
								"type": "mrkdwn",
								"text": `<${githubContext.payload.head_commit.url}|${githubContext.payload.head_commit.id.substring(0,6)}>`,
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
