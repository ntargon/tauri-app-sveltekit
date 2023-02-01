export const ssr = false;
export const prerender = true;
export const csr = true;

import type { LayoutLoad } from '../$types';

export const load = (async () => {
}) satisfies LayoutLoad;
