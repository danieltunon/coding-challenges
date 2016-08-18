function factorization(n, factors) {
  factors = factors || {};
  if ( n === 1 ) {
    return factors;
  }
  for ( var i = 2; i < n; i++ ) {
    if ( n % i === 0 ) {
      (factors[i] && factors[i]++) || (factors[i] = 1);
      return factorization( n%i, factors);
    }
  }
}

console.log(factorization(6));
