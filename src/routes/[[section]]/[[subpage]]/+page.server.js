import { error } from '@sveltejs/kit';
import { subpages } from '$lib/stores.ts';
export function load({ params }) {
    console.log(params)
	

	/*if (!post) throw error(404); */

	return params;
}
