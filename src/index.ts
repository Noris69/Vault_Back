import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BanKBNuJTREwxAUVwesmexkDJuMJ5atv9qBmdVAV5NiR'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'BgRpJNdfYdfLBFb1BZDQRK1bfqPqAotv3X88EUuC92BG'
);
