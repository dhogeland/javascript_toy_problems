function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  this.name = name;
  this.password = password;
  return (this.name == 'Santa Claus' && this.password == 'Ho Ho Ho!');
};
