function superbowlWin(array){
    const results = array.find(element => element.result === "W");
    return !!results ? results.year : undefined;
    }