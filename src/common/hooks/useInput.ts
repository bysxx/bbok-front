import { useState } from 'react';

const useInput = <T>(initialValue: string, validator?: T) => {
  const [text, setText] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value: target } = e.target as HTMLInputElement;
    setText(target);
    if (typeof validator === 'function') {
      setIsValid(validator(target));
    }
  };

  const onClear = () => {
    setText('');
  };

  return { text, isValid, onChange, onClear };
};

export default useInput;
