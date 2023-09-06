import { error } from '@sveltejs/kit';
import { subpageUrls, projects } from '$lib/stores.ts';
export function load({ params }) {
    console.log(params)
	
	if (params.section != null && !subpageUrls.includes(params.section)){
		throw error(404);
	}
	
	if (params["section"] == "projects" && params["subpage"] != null && projects[params["subpage"]] == null){
		throw error(404);
	}
	/*if (!post) throw error(404); */

	return params;
}
