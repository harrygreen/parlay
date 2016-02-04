import React from 'react';
import { switchEditionParent } from '../actions/GlobalActions';

const EditionSwitcher = React.createClass({

	propTypes: {
		dispatch: React.PropTypes.func.isRequired
	},

	getAvailableOptions() {
		// grab all options
		let allOptions = this.getAllEditions();

		// filter out unavailable options to logged in user
		// todo

		return allOptions;
	},

	// todo
	// grab this from endpoint
	// this is printed from the Perl template
	getAllEditions() {
		return {
		   "de": {
		      "abbr": "de",
		      "name": "German",
		      "acl": [
		         "team_germany"
		      ],
		      "categories": [
		         "119"
		      ]
		   },
		   "en": {
		      "abbr": "en",
		      "name": "English",
		      "acl": [
		         "gengo_english_queue"
		      ],
		      "categories": []
		   },
		   "es": {
		      "abbr": "es",
		      "name": "Spanish (Spain)",
		      "acl": [
		         "team_spain"
		      ],
		      "categories": [
		         "137"
		      ]
		   },
		   "es-la": {
		      "abbr": "es-la",
		      "name": "Spanish (Latin America)",
		      "acl": [
		         "team_spain",
		         "team_espanol",
		         "team_mexico"
		      ],
		      "categories": [
		         "130",
		         "95",
		         "89"
		      ]
		   },
		   "fr": {
		      "abbr": "fr",
		      "name": "French",
		      "acl": [
		         "team_france"
		      ],
		      "categories": [
		         "90",
		         "129",
		         "96"
		      ]
		   },
		   "ja": {
		      "abbr": "ja",
		      "name": "Japanese",
		      "acl": [
		         "team_japan"
		      ],
		      "categories": [
		         "142",
		         "135"
		      ]
		   },
		   "pt-br": {
		      "abbr": "pt-br",
		      "name": "Portuguese (Brasil)",
		      "acl": [
		         "team_brasil"
		      ],
		      "categories": [
		         "97",
		         "91"
		      ]
		   },
		   "ru": {
		      "abbr": "ru",
		      "name": "Russian",
		      "acl": [
		         "team_russia"
		      ],
		      "categories": [
		         "138"
		      ]
		   }
		}
	},

	handleChange(e) {
	 	this.props.dispatch(switchEditionParent(e.target.value));
    },

	render() {

		let options = this.getAvailableOptions();

		return (
			<select className='select' defaultValue={this.props.edition} onChange={this.handleChange}>
				{Object.keys(options).map(function(key, i) {
					return <option value={key} key={key}>{options[key].name}</option>
				})}
			</select>
		)
	}
})


export default EditionSwitcher;