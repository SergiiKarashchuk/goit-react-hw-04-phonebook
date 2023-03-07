import { useState } from 'react';
import { useReactLocalStorage } from '../reactjs-localstorage';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Message from 'components/Message';
import {
  Container,
  Section,
  SectionsContainer,
  Title,
  SectionTitle,
} from './App.styled';

function App() {
  const [contacts, setContacts] = useReactLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (savedContacts) {
  //     this.setState({ contacts: savedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const currentContacts = this.state.contacts;

  //   if (currentContacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(currentContacts));
  //   }
  // }

  const addContact = ({ name, number }) => {
    const contact = { id: nanoid(4), name, number };
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section className="contacts">
          <SectionTitle>Contacts</SectionTitle>
          {contacts.length !== 0 ? (
            <>
              <Filter value={filter} onChange={filterContacts} />
              <ContactList
                contacts={filteredContacts}
                onDeleteButton={deleteContact}
              />
            </>
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
    </Container>
  );
}

export default App;
