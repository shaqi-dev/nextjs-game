import styled from '@emotion/styled';
import { LabelProps } from './RangeInput.props';

export const Label = styled.label<LabelProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #423f45;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: 21px;
  -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 23px;
    height: 23px;
    background: #104987;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 21px;
    background: #ffd748;
    border-radius: 10px;
    cursor: pointer;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #fce281;
  }

  &:focus {
    outline: none;
  }
`;

export const DataList = styled.datalist`
  display: flex;
  justify-content: space-between;
  height: auto;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #4f4b61;
`;
