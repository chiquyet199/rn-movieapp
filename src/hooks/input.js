import {useState} from 'react';

const useInput = (initValue = '', onChange = null) => {
  const [value, setValue] = useState(initValue);

  const clear = () => {
    setValue('');
  };

  const bind = {
    value,
    onChange: e => {
      setValue(e.nativeEvent.text);
      onChange && onChange(e.nativeEvent.text);
    },
  };

  return [value, bind, clear];
};

export default useInput;
