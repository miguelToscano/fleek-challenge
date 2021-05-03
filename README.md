Full Stack Engineer Assignment
The goal is to secure a public IPFS API with simpleAPI keys (simply by providing a custom
HTTP header) and build an app to manage the keys and view logs/metrics.
Estimated time: 4-8 hrs.
Specifications
● Install a local IPFS node. Ensure it is running and the default API port 5001 is not
accessible by your app directly (it should be accessible only by a proxy server - see
remaining steps) .
● Create a React application with simple email/username + password authentication that
lets you create new or disable existing API keys
● Create a proxy server that handles API Key authentication and forwards request to IPFS
API
● When requests are made to the proxy server , we should log them in a db with relation to
API key
● Disabling the API key should block the API request when using that key
● Display the requests in the application under each API key that was created
● Provide simple README doc, so we can properly build & run it
● Bonus: for logging metrics (request count, bytes transferred)
Written Questions
How would you improve this assignment for a production ready solution (e.g., security,
deployment)? Describe IPFS and compare it to other protocols e.g., HTTP?
Assessment
● Completion/functionality - 10 pts (are all the pieces working as described?)
● Code quality - 5 pts (structure, style, package selection, efficiency)
● Documentation - 5 pts (could be as comments or a quick readme)
● Written questions - 5 pts