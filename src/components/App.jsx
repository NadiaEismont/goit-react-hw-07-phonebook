import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <NotificationContainer />
    </Layout>
  );
}
