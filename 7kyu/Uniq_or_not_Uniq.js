const testit = (a,b) => [...new Set(a), ...new Set(b)].sort((c,d) => c - d);
