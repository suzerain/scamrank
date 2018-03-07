# Twitter Filter Dobbs

Ranks responses to posts on Twitter that look like cryptocurrency scams (as of early 2018).

Basic idea is to build a "scam confidence" score based on various inputs, and display tweet responses in order of that score. Inputs considered:

- Levenshtein match of responder full name to original post full name
- Similarity value of profile images
- Result of scanning text for crypto-related keywords
- Looking at frequency and timing of retweets and follow-up replies (if possible)

The above feed into a confidence score, with weightings that can be combined to arrive at a value from 1-100. Number above a certain threshold indicates likelihood of scam post.


## Notes

Started with [React Webpack Starter](https://github.com/temilaj/react-webpack-starter)


## LICENSE

#### [MIT](./License)