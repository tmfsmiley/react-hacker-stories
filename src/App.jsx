import * as React from 'react';
// import PropTypes from 'prop-types';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

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

  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'React'
  );

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

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const InputWithLabel = ({
  id,
  value,
  type='text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <>
    <label htmlFor={id}>{children}&nbsp;
      <input
        id={id}
        type={type}
        value={value}
        // this is shorthand for 'autoFocus={true}'. everything set to true can be written like this
        autoFocus={isFocused}
        onChange={onInputChange}
      />
    </label>
  </>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span><a href={item.url}>{item.title}</a></span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);


// App.propTypes = {
//   anyProp: PropTypes.any,
//   booleanProp: PropTypes.bool,
//   numberProp: PropTypes.number,
//   stringProp: PropTypes.string,
//   functionProp: PropTypes.func,
//   arrayProp: PropTypes.array,
//   objectProp: PropTypes.object,
//   symbolProp: PropTypes.symbol,
//   children: PropTypes.any,
//   onClickOut: PropTypes.func,
//   nodeProp: PropTypes.node,
//   elementProp: PropTypes.element
// };

export default App;