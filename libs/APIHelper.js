export async function getWordList(essay){

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "essay":essay
         
       });
       
       let response = await fetch("/api/getreview", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let _data = await response.json()

       return _data?.outputdata

}


// get feedbacks api/getfeedbackreview
export async function getFeedbacks(essay){
    
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "essay":essay
         
       });
       
       let response = await fetch("/api/getfeedbackreview", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let _data = await response.json()

       return _data?.outputdata
}


// askai

export async function AskAI(inputData){
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   
  //  let bodyContent = JSON.stringify({ "question":"How to make this better?",
  //    "eassay":"Muhammad Ali Jinnah, revered as the Quaid-e-Azam (Great Leader) by the people of Pakistan, remains an iconic figure whose leadership, vision, and unwavering commitment paved the way for the creation of a sovereign nation. Born on December 25, 1876, in Karachi, then part of British India, Jinnah's life journey exemplifies resilience, determination, and statesmanship. Jinnah's early life was marked by his pursuit of education and his entry into the legal profession, where he quickly gained prominence for his intellect and advocacy skills. His political awakening occurred as he became increasingly disillusioned with the discriminatory policies of the British Raj, which marginalized the Muslim community in India. Jinnah's commitment to social justice and equality fueled his entry into politics, where he emerged as a formidable leader advocating for the rights of Muslims. Central to Jinnah's political philosophy was his belief in the importance of Muslim unity and the safeguarding of their rights within a united India. As the leader of the All India Muslim League, he tirelessly worked towards securing constitutional safeguards for Muslims to ensure their political representation and protection of their cultural and religious identity. His efforts culminated in the historic Lahore Resolution of 1940, which laid the groundwork for the creation of a separate homeland for Muslims in South Asia.",
   
  //        "feedback":[{
  //          "sentance":"This is a sample sentence from essay.",
  //          "feedback":"This feedback is for the sample sentence."
  //      },
  //      {
  //          "sentance":"This is a sample sentence from essay.",
  //          "feedback":"This feedback is for the sample sentence."
  //      }],
       
  //    "score": 88,
         
  //          "WordList": [
  //              {   "type":"replace",
  //                  "word": "Moments",
  //                  "suggestWord": "Moment",
  //                  "description": "\"moments\" should be singular. Consider replacing \"moments\" with \"moment\"."
  //              },
               
  //              {   "type":"remove",
  //                  "word": "Moments",
  //                  "suggestWord": "Moment",
  //                  "description": "moments should be removed."
  //              }
       
  //          ]
     
  //  });

  let bodyContent = JSON.stringify(inputData);
   
   let response = await fetch("/api/askai", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   let data = await response.text();
  //  console.log(data);
  return data
   
}