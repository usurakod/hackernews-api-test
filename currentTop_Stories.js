/*
Using the Top Stories API to retrieve the current top story from the Items API

Step 1 — Get Top Story IDs

Request:
GET https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty */


// Save the first top story ID to environment variable
let topStories = pm.response.json();
pm.environment.set("topStoryId", topStories[0]);
pm.test("Top stories list fetched", function() {
    pm.expect(topStories.length).to.be.above(0);
});

/* Request 2: GET Current Top Story

URL:
https://hacker-news.firebaseio.com/v0/item/{{topStoryId}}.json?print=pretty */

let story = pm.response.json();

pm.test("Top story details are valid", function () {
    pm.expect(story).to.have.property("id");
    pm.expect(story).to.have.property("title");
    pm.expect(story).to.have.property("by");
    pm.expect(story).to.have.property("time");
});

console.log("Current Top Story:");
console.log("Title:", story.title);
console.log("Author:", story.by);
console.log("URL:", story.url);
