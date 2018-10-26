const isStopWord = (word) => {
    if (word.length === 0) return true;

    let test = word.toLowerCase();
    
    switch(test[0]){
        case "a":
            switch(test.length){
                case 1:
                    return "a" === test;
                case 2:
                    return ["am", "an", "as", "at"].includes(test);
                case 3:
                    return ["and", "all", "any", "are"].includes(test);
                case 5:
                    return ["after", "again", "about", "above"].includes(test);
                case 7:
                    return "against" === test;
                default:
                    return false;
            }
        case "b":
            return ["be", "because", "been", "before", "being", "below", "between", "both", "but", "by"].includes(test);
        case "c":
            return ["could", "can"].includes(test);
        case "d":
            return ["did", "do", "does", "doing", "down", "during"].includes(test);
        case "e":
            return ["each",].includes(test);
        case "f":
            return ["few", "for", "from", "further"].includes(test);
        case "h":
            switch(test.length){
                case 2:
                    return "he" === test;
                case 3:
                    return ["had", "has", "her", "him", "his", "how"].includes(test);
                case 4:
                    return ["he'd", "he's", "hers"].includes(test);
                case 5:
                    return ["here", "how's", "have", "he'll"];
                case 6:
                    return ["having", "here's"].includes(test);
                case 7:
                    return ["herself", "himself",  ].includes(test);
                default:
                    return false;
            }
        case "i":
            return ["i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it", "it's", "its", "itself"].includes(test);
        case "l":
            return ["let","let's"].includes(test);
        case "m":
            return ["me", "more", "most", "my", "myself"].includes(test);
        case "n":
            return ["nor"].includes(test);
        case "o":
            return ["of", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own"].includes(test);
        case "s":
            return ["same", "she", "she'd", "she'll", "she's", "should", "so", "some", "such", "than"].includes(test);
        case "t":
            switch(test.length){
                case 2:
                    return test === "to";
                case 3:
                    return ["the", "too"].includes(test);
                case 4:
                    return ["then", "they", "that", "their", "them", "this"].includes(test);
                case 5:
                    return ["these", "there"].includes(test);
                case 6:
                    return ["that's", "theirs", "they'd"].includes(test);
                case 7:
                    return ["there's", "they'll", "they're", "those", "they've", "through"].includes(test);
                case 10:
                    return "themselves" === test;
                default: 
                    return false;
            } 
        case "u":
            return ["under", "until", "up"].includes(test);
        case "v":
            return ["very"].includes(test);
        case "w":
            switch(test.length){
                case 2:
                    return test === "we";
                case 3:
                    return ["was", "who", "why"].includes(test);
                case 4:
                    return ["we'd", "were", "when", "what", "with", "whom"].includes(test);
                case 5:
                    return ["which", "we'll", "we're", "we've", "while", "would", "where", "who's", "why's"].includes(test);
                case 6:
                    return ["what's", "when's", ].includes(test);
                case 7:
                    return ["where's", ];
                default:
                    return false;
            }
        case "y":
            return ["you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"].includes(test);
        default:
            return false;
    }
};

export default isStopWord;