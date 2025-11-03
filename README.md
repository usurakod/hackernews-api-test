# hackernews-api-test
Acceptance test for the Hacker new apis

1. How to Run in Postman
🧭 Step-by-Step
Open Postman → Import → Upload File
Choose HackerNews_TopStories_Acceptance_Test.postman_collection.json
No environment setup is needed for this one.
Select the request “GET Top Stories”.
Click Send ▶️
Go to the “Tests” tab output or open the Postman Console (View → Show Postman Console) to see logs and results.

Expected Output
Status code is 200
Response time < 2000ms
Response is a non-empty array
Each element is a positive integer

2. Open Postman → Import → Upload JSON file
Import HackerNews_Current_Top_Story.postman_collection.json.
Create a new Environment called HackerNewsEnv.
Add one variable:topStoryId (leave value empty).
Select the environment in the top-right dropdown.
Open the Collection Runner and click Run.

Expected Output
Step 1:
Retrieves the list of top story IDs and saves the first one as topStoryId.
Step 2:
Uses the saved topStoryId to call /v0/item/<id>.json
and logs details like title, author, and URL to the Postman Console.
(Open via View → Show Postman Console).

3. Open Postman → Import → Upload JSON file
Choose HackerNews_TopStory_Comment_Flow.postman_collection.json
Create a new Environment named “HackerNewsEnv”.
Add two empty variables:
topStoryId
firstCommentId
Select this environment in the dropdown (top-right corner).
Run the collection in the Collection Runner (▶ Run icon).

Expected Output:
First request saves topStoryId
Second request saves firstCommentId
Third request prints the author and text of the first comment in Postman Console
(View → Show Postman Console)
