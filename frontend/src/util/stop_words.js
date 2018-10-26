const isStopWord = (word) => {
    if (word.length === 0) return false;

    let test = word.toLowerCase();
    
    switch(test[0]){
        case "a":
            return ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at"].includes(test);
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
            return ["had", "has", "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's"].includes(test);
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
            return ["that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too"].includes(test);
        case "u":
            return ["under", "until", "up"].includes(test);
        case "v":
            return ["very"].includes(test);
        case "w":
            return ["was", "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "would"].includes(test);
        case "y":
            return ["you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"].includes(test);
        default:
            return false;
    }
};

export default isStopWord;