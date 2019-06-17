# sentiment-analysis

![sentiment analysis](./images/sentiment.gif)

Sentiment Analysis api for feelin app

## DESCRIPTION

![sentiment analysis](./images/sentimenatalAnalysis)

This project is for sentiment analysis of post/blog submitted by user and then analysising the post and giving it rating . If all goes right then the post/blog submitted by the user will store in mongoDB database otherwise it will show the user to remove abussive words and then resubmit it .

### To start run

    nodemon server.js

### Frontend

Go to http://127.0.0.1:8800/api/form/submit
it will throw you a basic form write your post and submit it

If all goes write (means post is good ) then it will stored in database and give us the response saved. Otherwise it will show the harmful words

### Backend

All the logic of sentiment analysis is carrying on formController.js

## LIMITATIONS

### Maybe

one language is supported at a time.
If add our own language then we need to define every Words and its score

### TODO

improved the logic of sentiment analysis in if block
