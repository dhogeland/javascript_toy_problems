function isTotal3() {
	var simpleVariable = 1;
  var variableInFunction;

	for (var index = 0; index < 1; index++)
		var variableInLoop = 1;

	(function defineAVariable() {
		variableInFunction = 1;
	})();

	var result = simpleVariable + variableInLoop + variableInFunction;

	return result;
}
