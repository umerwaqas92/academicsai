// basic, $9.99/month, desc, featueList
export const PrcingList=[

    {
        "planeName":"Basic Plan",
        "title":"$0.0/month",
        "selected":false,
        "description":"Perfect for individuals and small businesses, the Basic Plan offers essential features to enhance your content creation process.",
        "featureList":[
            "10,000 Word",
            "10,000 Word",
            "10,000 Word"]

    },
    {
        "planeName":"Premium Plan",
        "title":"$0.0/month",
        "selected":true,
        "description":"Perfect for individuals and small businesses, the Basic Plan offers essential features to enhance your content creation process.",
        "featureList":[
            "10,000 Word",
            "10,000 Word",
            "10,000 Word"]

    },
    // {
    //     "planeName":"Enterprise Plan",
    //     "title":"$29.99/month",
    //     "selected":false,
    //     "description":"Perfect for individuals and small businesses, the Basic Plan offers essential features to enhance your content creation process.",
    //     "featureList":[
    //         "10,000 Word",
    //         "10,000 Word",
    //         "10,000 Word"],

    // }
            
    
]


export const ExampleOutFeedback=[
    {
        "sentance":"This is a sample sentence from essay.",
        "feedback":"This feedback is for the sample sentence."
    },
    {
        "sentance":"This is a sample sentence from essay.",
        "feedback":"This feedback is for the sample sentence."
    },
    
];

export const ExampleOutputJSON={
    "outputdata":{
        "score": 88,
      
        "WordList": [
            {   "type":"replace",
                "word": "Moments",
                "suggestWord": "Moment",
                "description": "\"moments\" should be singular. Consider replacing \"moments\" with \"moment\"."
            },
            
            {   "type":"remove",
                "word": "Moments",
                "suggestWord": "Moment",
                "description": "moments should be removed."
            },
    
        ]
    }
}



