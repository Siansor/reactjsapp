var React.require('react');
var ListItem.require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"text111"}, {"id":2, "text":"text222"}, {"id":3, "text":"text333"}]

var Lis = React.createClass({
  render: function() {
    var ListItems = ingredients.map(function(item) {
        return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{ListItems}</ul> )
  }
});

module.exports = List;
