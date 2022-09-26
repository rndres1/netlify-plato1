const fs = require("fs");
const {parse, stringify, toJSON, fromJSON} = require('flatted');


let v1 = {result: true}

fs.readFile("./moderation_response_8598_.json", "utf8", (err, jsonString) => 
    {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
        console.log("File read succesfully. Size of data: " + jsonString.length);
        

    // ============== COPY HERE ==============

        var verdict;
        jobj = parse(jsonString);
        cat = jobj.data.results[0].categories;
        cat_bool = [];
        for(var i in cat)
            cat_bool.push(cat[i]);
        console.log(cat_bool);
        verdict = cat_bool.reduce((a, b) => a || b, false)
        if (!verdict)   
            console.log("verdict is: can return this text");    
        else
            console.log("verdict is: blocked this text");
            
    // ============== END COPY ==============
     
    }
);

console.log(v1)

        /*         c_scores = jobj.data.results[0].category_scores;
        console.log(c_scores)
        s_score = 0;
        for(var i in c_scores)
           s_score += c_scores[i];
        
        mscore = s_score / 7;
        console.log("The mean score is " + mscore);
 */
