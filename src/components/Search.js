import React, { Component } from 'react';

const Search = React.createClass({
	handleChange: function() {
		this.props.onUserInput(
			this.refs.searchTextInput.value
		);
	},
	render: function() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search all translation"
					value={this.props.searchText}
					ref="searchTextInput"
					onChange={this.handleChange}
				/>
			</form>
		);
	}
});

export default Search;
