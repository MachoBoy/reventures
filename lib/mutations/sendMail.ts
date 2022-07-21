const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

async function fetchAPI(query: any, { variables }: any = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function sendMail(
  subject: string,
  body: any,
  mutationId = 'contact'
) {
  const fromAddress = 'reventuresad@reventures.co.kr';
  const toAddress = 'reventuresad@reventures.co.kr';
  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  return data?.sendEmail;
}
