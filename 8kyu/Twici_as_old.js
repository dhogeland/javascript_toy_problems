function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld == 2 * sonYearsOld) return 0;
  if (sonYearsOld == 0) return dadYearsOld;
  if (dadYearsOld > sonYearsOld) return Math.abs(dadYearsOld - (2 * sonYearsOld));
}
