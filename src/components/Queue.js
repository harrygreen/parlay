import React, { Component } from 'react';

import data from '../mockdata/posts_json';

const TranslatorItems = React.createClass({
	render() {

		let items = [];
		let itemsObj = data.content;
		itemsObj.forEach(function(item){
			items.push(<TranslatorItem item={item} />);
		});

		return (
			<div>
				{items}
			</div>
		)
	}
});

const TranslatorItem = React.createClass({
	render() {
		return (
			<div>
				<h3>{this.props.item.name}</h3>
				<button>Assign Translation</button>
				<button>Remove from Queue</button>
			</div>
		)
	}
});

const Queue = React.createClass({
  render() {
    return (
      <div>
       	Queue
       	<TranslatorItems  />
      </div>
    );
  }
});

export default Queue;