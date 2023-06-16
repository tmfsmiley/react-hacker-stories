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

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      {/* Instance of List component */}
      <List list={stories} />
    </div>
  );
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

const Search = () => {
  const handleChange = event => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:
        <input id="search" type="text" onChange={handleChange} />
      </label>
    </div>
  )
};

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