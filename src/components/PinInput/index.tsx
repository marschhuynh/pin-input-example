import { useEffect, useState } from 'react';
import { HiddenInput, NumberItem, PinInputWrapper, PinWrapper } from './styled';

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
};

export const PinInput = ({ isSecretMode, codeLength = 4, onSubmit, defaultValue }: PinInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const [inputValueArray, setInputValueArray] = useState<string[]>([]);

  useEffect(() => {
    setInputValueArray(inputValue.split(""));
    if (inputValue.length === codeLength) {
      onSubmit?.(inputValue);
    }
  }, [codeLength, inputValue, onSubmit]);

  const handleChange = (e: any) => {
    if (e.target.value.length > codeLength) return
    setInputValue(e.target.value);
  };

  return (
    <PinInputWrapper>
      <HiddenInput id="code-input" onChange={handleChange} value={inputValue} />
      <PinWrapper htmlFor="code-input">
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