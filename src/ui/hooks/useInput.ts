import { ChangeEvent, useState } from 'react';

type ReturnUseInputType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
};

const useInput = (initialValue: any): ReturnUseInputType => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return {
    value,
    onChange,
    setValue,
  };
};

export { useInput };
