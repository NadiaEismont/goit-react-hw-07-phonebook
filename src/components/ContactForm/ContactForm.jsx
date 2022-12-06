import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { NotificationManager } from 'react-notifications';
import { getContacts } from 'redux/selectors';
import {
  TagForm,
  TagInput,
  ButtonSubmit,
  LabelForm,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { items: contacts } = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name)) {
      return NotificationManager.warning(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <TagForm onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Name</LabelForm>
      <TagInput type="text" name="name" placeholder="Your name" />
      <LabelForm htmlFor="number">Number</LabelForm>
      <TagInput
        type="tel"
        name="number"
        placeholder="Your phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </TagForm>
  );
}
