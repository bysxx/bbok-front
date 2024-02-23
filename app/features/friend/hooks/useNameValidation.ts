import { containsWhiteSpace } from '@libs/checkValue';
import { useEffect, useState } from 'react';

const useNameValidation = (name: string) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (containsWhiteSpace(name)) {
      setErrorMessage('공백을 제거해 입력해주세요');
    }
    if (name.length >= 12 || name.length === 0) {
      setErrorMessage('한글 또는 영문,숫자의 조합으로 12자 이내');
    }
  }, [name]);

  return {
    errorMessage,
  };
};
export default useNameValidation;
