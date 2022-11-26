function saturdayFun(at="roller-skate"){
    return "This Saturday, I want to "+ at + "!"
}
function mondayWork(at="go to the office"){
    return 'This Monday, I will '+ at + "."
}
function wrapAdjective(ab="special"){
    return function (at="*"){
    return "You are "+ ab + at + ab + "!"
    }
}