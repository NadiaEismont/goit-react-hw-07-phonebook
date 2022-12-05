import styled from '@emotion/styled';
export const TagForm = styled.form`
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 100%);
  border: 4px solid hsl(0, 0%, 90%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  transition: 0.2s all ease-in-out;
`;

export const TagInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 3px solid rgba(20, 20, 20, 0.6);

  min-width: 250px;
  padding-left: 5px;
  outline: none;
  color: rgba(0, 0, 0, 1);
  transition: 0.2s all ease-in-out;
  :hover {
    scale: 1.1;
  }
  :focus {
    border-bottom: 5px solid #6960ec;
  }
`;

export const ButtonSubmit = styled.button`
  border: 2px solid #6960ec;
  background: rgba(20, 20, 20, 0.6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;
  align-item: center;
  :hover {
    background: rgba(20, 20, 20, 0.8);
  }
`;

export const LabelForm = styled.label`
  font-size: 20px;
`;
