export const LandingPageLinks=[
    {
        title: "Chat",
        link: "/chat"
        
    },
    {
        title: "Use Cases",
        link: "#use-cases"
    },
   
    {
        title: "Pricing",
        link: "#pricing"
    }

]

// title,price,desc,featuresList,notFeaturesList,buttonText,note
// 0 for monthly and 1 for yearly

export const PricingList=[
    {
        title: "Free",
        price: ["0.0","0.0"],
        desc:[ "2,000 words per month", "2,000 words per year"],
        active: false,
        featuresList: [
            "1GB of storage",
            "Unlimited public projects",
            "Community access",
            "Unlimited private projects",
            "Dedicated support"],
        notFeaturesList: ["Private projects", "Free app updates", "Monthly status reports"],
        buttonText: "Start my free trial",
        note:[ "No credit card required", "No credit card required"],
        
        },
        {
            title: "Pro",
            price: ["432","432"],
            desc: ["Billed $432/month","Billed $432/year"],
            active: true,
            featuresList: [
                "1GB of storage",
                "Unlimited public projects",
                "Community access",
                "Unlimited private projects",
                "Dedicated support"],
            notFeaturesList: ["Private projects", "Free app updates", "Monthly status reports"],
            buttonText: "Get Started",
            note: ["2,000 words per month", "2,000 words per year"],

        },
        {
            title: "Enterprise",
            price: ["",""],
            desc:[ "Automate Any Workflow","Automate Any Workflow"],
            active: false,
            featuresList: [
                "1GB of storage",
                "Unlimited public projects",
                "Community access",
                "Unlimited private projects",
                "Dedicated support"],
            notFeaturesList: ["Private projects", "Free app updates", "Monthly status reports"],
            buttonText: "Request a Demo",
            note: ["",""]
        }

    ]
