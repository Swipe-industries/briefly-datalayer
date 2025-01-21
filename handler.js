const serverless = require("serverless-http");
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const newsFeeds = require('./rssFeeds');
const Parser = require('rss-parser');


dotenv.config();
const app = express();
const parser = new Parser();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/getnews/:genre", async (req, res) => {
  const genre  = req.params.genre;

  if (!genre) {
    return res.status(400).json({ error: "Genre is required" });
  }

  try {
    let allNews = [];
    const feeds = newsFeeds[genre];    
    console.log(feeds);
    
    
    
    for (const feedUrl of feeds) {
      try {
        const feed = await parser.parseURL(feedUrl);
        allNews = [...allNews, ...feed.items.map(item => ({
          title: item.title,
          description: item.contentSnippet || item.description,
          link: item.link,
          pubDate: item.pubDate,
          source: feed.title || 'Unknown Source'
        }))];
      } catch (feedError) {
        console.error(`Error fetching feed ${feedUrl}:`, feedError);
        // Continue with other feeds even if one fails
        continue;
      }
    }

    res.status(200).json({ genre, news: allNews });
    
    //drafting the prompt for news generation
    const prompt = `Generate a todays's latest news article for the ${genre} genre. The article should include the following elements:
    - A catchy headline
    - A brief description in 10 simple points
    - A conclusion
    - Date of the news
    `;

  } catch (error) {
    console.error("Error generating news:", error.message);
    return res.status(500).json({
      error: "Failed to generate news. Please try again later.",
    });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

exports.handler = serverless(app);
