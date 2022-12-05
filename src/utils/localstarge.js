export const saveContacts = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
export const parseContacts = () => {
  return JSON.parse(localStorage.getItem('contacts'));
};
