const apiKey = process.env.LIMRUN_API_KEY?.trim();
if (!apiKey) {
  console.error('Set LIMRUN_API_KEY before building the sample apps.');
  process.exit(1);
}

// Builds and tests must use the same account, even if another CLI key is set.
process.env.LIM_API_KEY = apiKey;
await import('lim/bin/run.js');
