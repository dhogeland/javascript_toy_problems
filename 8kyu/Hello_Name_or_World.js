function hello(name) {
  if (name && name.length) {
    name = name.toLowerCase().split('');
    name[0] = name[0].toUpperCase();
    name = name.join('');
  }
  return name && name.length ? 'Hello, ' + name + '!': 'Hello, World!';
}
