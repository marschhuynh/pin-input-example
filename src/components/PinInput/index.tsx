import { useEffect, useId, useState } from 'react';
import { DEFAULT_PATTERN } from './const';
import { HiddenInput, NumberItem, PinInputWrapper, PinWrapper } from './styled';
import { regexValidate } from './utils';

const NumberBox = (props: { value: string, isSecretMode?: boolean, isActive?: boolean }) => {
  const { value, isSecretMode = false, isActive } = props;
  return <NumberItem className={['number-item', isActive && 'active'].filter(Boolean).join(' ')}>
    {isSecretMode ? (value ? '*' : undefined) : value}
  </NumberItem>
}

type PinInputProps = {
  defaultValue?: string;
  onSubmit?: (value: string) => void;
  codeLength?: number;
  isSecretMode?: boolean
  pattern?: string
};


export const PinInput = ({ isSecretMode, codeLength = 4, onSubmit, defaultValue, pattern = DEFAULT_PATTERN }: PinInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const [inputValueArray, setInputValueArray] = useState<string[]>([]);
  const inputId = useId()

  useEffect(() => {
    setInputValueArray(inputValue.split(""));
    if (inputValue.length === codeLength) {
      onSubmit?.(inputValue);
    }
  }, [codeLength, inputValue, onSubmit]);

  const handleChange = (e: any) => {
    const value = e.target.value
    const lastChar = value[value.length - 1]
    if (value.length > codeLength) return

    if (!(regexValidate(pattern, lastChar) || !lastChar)) return
    setInputValue(value);

  };

  return (
    <PinInputWrapper className={codeLength === inputValue.length ? 'valid' : ''}>
      <HiddenInput autoFocus id={inputId} onChange={handleChange} value={inputValue} />
      <PinWrapper htmlFor={inputId}>
        {Array(codeLength).fill('0').map((value, index) => {
          return (
            <NumberBox key={index}
              isSecretMode={isSecretMode}
              value={inputValueArray[index]}
              isActive={index === inputValue.length}
            />
          )
        })}
      </PinWrapper>
    </PinInputWrapper>
  );
};