function validateURL(userURL){
    //regex taken from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    let valid = userURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(valid == null) {
        return false;
    }
    else {
        return true;
    }
}
export {validateURL}