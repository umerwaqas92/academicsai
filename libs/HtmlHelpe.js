"use client";
export function GetStyleFormate(inputEassy,feedback,selectedSentance)    {
    try {
        let styledText = inputEassy??"";
        styledText=styledText?.replace(/\n/g, "<br />")
        
        const selectedSentanceIndex=feedback?.findIndex((item)=>item?.sentence?.trim()==selectedSentance?.trim())

        // console.log("selectedSentanceIndex",selectedSentanceIndex)


    
        // console.log("styledText GetStyleFormate",styledText)
    
       
        feedback.forEach(_feedback => {
        const _selectedSentance=_feedback?.sentence
        const selectedSentanceIndex=feedback?.findIndex((item)=>item?.sentence?.trim()==_selectedSentance?.trim())


        // console.log("_feedback",_feedback?.sentence.trim())

           

            
        styledText = styledText?.replace(_feedback?.sentence.trim(), `<a href="#${_feedback?.sentence.trim()}"   class="cursor-pointer bg-orange-500 space-x-1 bg-opacity-15 hover:bg-opacity-55"  
        
        >${_feedback?.sentence.trim()}</a> <div id='${selectedSentanceIndex+"_selected"}'> </div>`);

        // styledText+=``



    
    
    
    });

    if(selectedSentance){
        // set bg 
        const selectedSentanceIndex=feedback?.findIndex((item)=>item?.sentence?.trim()==selectedSentance?.trim())

        styledText = styledText?.replace(`<a href="#${selectedSentance.trim()}"   class="cursor-pointer bg-orange-500 space-x-1 bg-opacity-15 hover:bg-opacity-55"  
        
        >${selectedSentance}</a>`, `<a href="#${selectedSentance}"   class="cursor-pointer bg-orange-400 space-x-1  bg-opacity-20 "  
        
        >${selectedSentance}</a>`);
    }

    styledText+=`<div id='footerText'> </div>`

    
    // console.log("styledText",styledText)
    const renderedText = <div dangerouslySetInnerHTML={{ __html: styledText }} />;
    return renderedText
    } catch (error) {
        console.log(error)
        // console.log("inputEassy",inputEassy)

        
    }
}