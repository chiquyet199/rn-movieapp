import React from 'react';
import {Input} from 'react-native-elements';
import useInput from '../hooks/input';

const SearchForm = props => {
  const [searchText, bindNewTodo] = useInput('');
  const onSubmit = () => {
    props.onSubmit(searchText);
  };
  return (
    <Input
      placeholder="Search movie..."
      {...bindNewTodo}
      rightIcon={{name: 'checkcircle', type: 'antdesign', onPress: onSubmit}}
    />
  );
};

export default SearchForm;
