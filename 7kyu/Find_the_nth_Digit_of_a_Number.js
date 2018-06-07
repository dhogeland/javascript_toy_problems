var findDigit = function(num, nth){
    num = (Math.abs(num) + '0').split('').reverse();
    if (nth <= 0) return -1;
    if (nth >= num.length) return 0;
    return +num[nth];
}
