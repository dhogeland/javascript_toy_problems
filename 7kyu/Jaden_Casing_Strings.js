String.prototype.toJadenCase = function () {
 var split = this.split(" ");
 for (var index in split) {
   split[index] = split[index].split("");
   split[index][0] = split[index][0].toUpperCase();
   split[index] = split[index].join("");
 } return split.join(" ");
};
