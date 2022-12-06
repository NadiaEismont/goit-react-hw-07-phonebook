import { deleteContact } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getFilter, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(deleteContact(id));
  };
  const { items: contacts, isLoading, error } = useSelector(getContacts);

  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts && contacts.length > 0 && (
        <ul>
          {getVisibleContacts().map(contact => (
            <li key={contact.id}>
              <LabelList type="text" name="name">
                {contact.name} :
              </LabelList>
              <LabelListNumber
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              >
                {contact.number}
              </LabelListNumber>
              <ButtonDelete
                type="button"
                key={contact.id}
                onClick={() => onClick(contact.id)}
              >
                Delete
              </ButtonDelete>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
