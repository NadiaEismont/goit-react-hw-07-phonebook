import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter, InputFilter } from './Filter.styled';
import { changingFilter, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const selectedQuery = useSelector(getFilter);
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        value={selectedQuery}
        onChange={e => {
          dispatch(changingFilter(e.currentTarget.value));
        }}
      />
    </LabelFilter>
  );
};

export default Filter;
