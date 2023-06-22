import * as React from 'react';
// import PropTypes from 'prop-types';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  // callback handler. gets introduced as an event handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) => {
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch} />
  </div>
};

const List = ({ list }) => (
  <ul>
    {/* Rest Operator. Separates an object from some of its properties */}
    {list.map(( { objectID, ...item }) => (
      // Spread operator. Spreads all key/value pairs of an object to another object. (Item below)
      <Item key={objectID} {...item} />
    ))}
  </ul>
);

const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span><a href={url}>{title}</a></span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);


// App.propTypes = {
//   anyProp: PropTypes.any,
//   booleanProp: PropTypes.bool,
//   numberProp: PropTypes.number,
//   stringProp: PropTypes.string,
//   functionProp: PropTypes.func,
//   arrayProp: PropTypes.array,
//   objectPerop: PropTypes.object,
//   symbolProp: PropTypes.symbol,
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
//   nodeProp: PropTypes.node,
//   elementProp: PropTypes.element
// };

export default App;