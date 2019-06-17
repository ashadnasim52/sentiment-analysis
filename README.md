# sentiment-analysis

![sentiment analysis](/images/sentimental.gif)

Sentiment Analysis api for feelin app

## DESCRIPTION

![sentiment analysis](/images/sentimenatalAnalysis.png)

This project is for sentiment analysis of post/blog submitted by user and then analysising the post and giving it rating . If all goes right then the post/blog submitted by the user will store in mongoDB database otherwise it will show the user to remove abussive words and then resubmit it .

### To start run

    nodemon server.js

### Frontend

Go to http://127.0.0.1:8800/sentimental
it will throw you a basic form write your post and submit it

This project also uses socket.io show it will show the realtime update of the score and words.

All you can submit your post.

If all goes write (means post is good ) then it will stored in database and give us the response saved. Otherwise it will show the harmful words

### Backend

All the logic of sentiment analysis is carrying on formController.js

## LIMITATIONS

### Maybe

one language is supported at a time.
If add our own language then we need to define every Words and its score

### TODO

improved the logic of sentiment analysis in if block
