/*
	
	This is a very basic library to interface with the translation_moderation endpoint on the webapp.
	
	Info:
	Translation Moderation API full documented here https://docs.google.com/document/d/14rKRD9ZBcqfO8ERzH6gI0_k1TSqUYGubwN9KRRalmQY
	
	Available endpoints:

	load_content: Get buzzes from the translated_campaigns table in the web app database that meet the criteria specified by the request parameters.
	request_translation : Submit a translation candidate to the translation service
	queue_translation : Mark an item of content on the web site as a candidate for translation
	unqueue_translation : Remove an item of content on the web site as a candidate for translation
	get_jobs : Retrieve the individual translation jobs that are associated with a translation for review purposes
	revise : Submit one or more translation jobs back to the translator for revision
	approve : Mark a translation order as approved at the translator, blocking any further requests for revision
	publish : Publish a translated draft
	queue : Queue a translated draft to be published in 30 minutes and promoted to the default homepage flow for the translated language of the draft.
	front (queue?) : Publish a translated draft and promote to the default homepage flow for the translated language of the draft.
	delete : Discard a translated draft. All this does it remove it from the interface by changing its status. It does not actually delete anything.
	pull_translation : Re-import the translation order of a translated draft. This resource was created for development use in the case of errors in the import process.
	full_reset : Reset any item that is either in translation or a translate draft. The item is put back to a status of candidate, and any existing translation is discarded This resource was created for development use in the case of errors in the workflow.

*/

import request from 'superagent';

export default {

	root: '/proxy/http://dev.buzzfeed.com/buzzfeed/translation_moderation',

	loadContent(params, callback) {

		let obj = Object.assign({
			action: 'load_content',
			page: 1,
			language: 'en'
		}, params);

		request
		.get(this.root)
		.query(obj)
		.end(function(error, response) {
			if (error && error.status === 401) {
				// todo
				// show error message
				console.log(error.message, ' - please log in');
				return false;
			}
			if (typeof callback === "function") {
				let data = JSON.parse(response.xhr.responseText);
				callback(data);
			}
			
		})
	}


}