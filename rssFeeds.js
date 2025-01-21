// rssFeeds.js
const newsFeeds = {
    technology: [
      'https://feeds.feedburner.com/TechCrunch',
      'https://www.wired.com/feed/rss',
      'https://www.theverge.com/rss/index.xml',
      'https://feeds.arstechnica.com/arstechnica/index'
    ],
    business: [
      'https://feeds.feedburner.com/entrepreneur/latest',
      'https://www.forbes.com/innovation/feed',
      'https://www.business-standard.com/rss/technology-108.rss',
      'https://www.cnbc.com/id/19746125/device/rss/rss.xml'
    ],
    sports: [
      'https://www.espn.com/espn/rss/news',
      'https://www.sports-reference.com/blog/feed/',
      'https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU',
      'http://feeds.sport24.co.za/articles/Sport/Featured/TopStories/rss'
    ],
    entertainment: [
      'https://www.timeout.com/london/rss',
      'https://www.entertainment-focus.com/feed/',
      'https://variety.com/feed/',
      'https://deadline.com/feed/'
    ],
    science: [
      'https://www.sciencedaily.com/rss/all.xml',
      'https://feeds.nature.com/nature/rss/current',
      'https://www.livescience.com/feeds/all',
      'https://scitechdaily.com/feed/'
    ],
    world: [
      'https://feeds.bbci.co.uk/news/world/rss.xml',
      'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
      'https://www.reuters.com/feeds/worldnews',
      'http://feeds.washingtonpost.com/rss/world'
    ],
    health: [
      'https://www.medicalnewstoday.com/feeders/rss',
      'https://rss.medicalnewstoday.com/health-news.xml',
      'https://www.webmd.com/rss/rss-public',
      'https://www.healthline.com/rss/all'
    ]
  };
  

  module.exports = newsFeeds;