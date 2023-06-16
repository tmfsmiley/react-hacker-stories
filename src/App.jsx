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

  // callback handler. gets introduced as an event handler
  const handleSearch = (event) => {
    // this is where it was introduced
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      {/* event handler is passed as function in props to this component */}
      <Search onSearch={handleSearch} />

      <hr />

      <List list={stories} />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);

    // calls back to place it was introduced
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search:
        <input id="search" type="text" onChange={handleChange} />
      </label>
      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  )
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </span>
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