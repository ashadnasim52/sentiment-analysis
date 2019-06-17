const path = require('path');
const Sentiment = require('sentiment');

const newLang = require('../../helper/newLanguage');
const Post = require('../../model/Post');


//HERE SERVING HTML FILE
exports.handleSubmit = (req, res) => {
    res.render('form', {
        msg: 'somethingto test'
    })
}

//HERE GETTING ALL THE ENTERED WORDS
//NOW NEED TO DO SENTIMENTAL ANALYSIS HERE
exports.AfterSubmit = (req, res) => {

    console.log(req.body.texts);

    const post = req.body.texts;

    //checking post or not submitted
    if (post.length > 0) {
        const sentiment = new Sentiment()

        // sentiment.registerLanguage('in', newLang)
        // let result = sentiment.analyze(post, {
        //     language: 'in'
        // });

        const result = sentiment.analyze(post);
        console.log(result);
        const {
            score,
            comparative,
            tokens,
            words,
            positive,
            negative
        } = result;

        //*CHECKING TO SAVE OR NOT
        // TODO change logic  according to need

        //  (!(result.comparative > -.5 && result.comparative >= 0)) &&

        if ((result.negative.length > 3)) {

            //failed sentimental analysis

            // res.send(`it would be good if you remove this words OR YOUR POST WILL NOT BE APPROVED ${result.negative}`)
            res.render('sucess', {
                score,
                comparative,
                tokens,
                words,
                positive,
                negative,
                msg: 'Words are not above our quality standard'

            })
        } else {
            //passed sentimental analysis


            const newPost = new Post({
                content: post
            })
            newPost.save().then(() => {
                res.render('sucess', {
                    score,
                    comparative,
                    tokens,
                    words,
                    positive,
                    negative,
                    msg: 'Saved...'

                })

                //adding new words in new database
                let allWords = tokens;
                let remainingWords = words.concat(positive, negative);
                remainingWords.forEach(e => {
                    let i = allWords.indexOf(e);
                    if (i != -1) {
                        allWords.splice(i, 1)
                    }
                });
                // console.log('allWords', allWords);
                console.log('remainingWords', remainingWords);
                console.log(allWords);


            }).catch(err => console.error(err))

            // res.send('all good to save');

        }


    } else {
        //IT looks like there has been no words
        res.render('sucess', {
            msg: 'please type anything'
        })
    }



}