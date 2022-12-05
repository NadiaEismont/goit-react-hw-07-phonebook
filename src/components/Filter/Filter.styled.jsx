import styled from '@emotion/styled';
export const LabelFilter = styled.label`
  font-size: 25px;
  justify-content: space-between;

  &.prefix {
    max-width: 100px;
    padding-left: 16px;
  }
  &.suffix {
    max-width: fit-content;
    padding-right: 16px;
    right: 0;
  }
`;
export const InputFilter = styled.input`
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 300;
  :hover {
    border: 1px solid rgba(20, 20, 20, 0.8);
  }
`;
