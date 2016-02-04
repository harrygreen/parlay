import React from 'react';

const FilterBar = React.createClass({

	getInitialState() {
	    return {
	    	trending: true,
	    };
	  },

	handleChange(e) {
		this.setState( { [e.target.value]: e.target.checked } );;
	},

	render() {
		return (
			<form>
				<input type="checkbox" className="checkbox" value="language" checked={this.state.language} id="language" name="checkboxes" onChange={this.handleChange} />
  				<label htmlFor="language">All Spanish Language</label>
  				Assigned to:
  				<input type="checkbox" className="checkbox" value="trending" checked={this.state.trending} id="trending" name="checkboxes" onChange={this.handleChange} />
  				<label htmlFor="trending">Show US Trending Suggestions</label>
  				<label>Sort by: </label>
				<select className='select'>
					<option>Newest</option>
					<option>Oldest</option>
					<option>Title</option>
				</select>
			</form>
		)
	}
});

export default FilterBar;