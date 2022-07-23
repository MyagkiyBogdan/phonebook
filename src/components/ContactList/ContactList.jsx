import styles from './ContactList.module.css';
import ContactListItem from './ContactListItem/ContactListItem';
import { Reorder, AnimatePresence } from 'framer-motion';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useState } from 'react';
import { useEffect } from 'react';
import _ from 'lodash';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useGetContactsQuery();

  const makeFilteredMarkup = () => {
    const lowerCaseFilter = filter.toLocaleLowerCase();
    const filteredArray =
      data &&
      [...data].filter(contact =>
        contact.name.toLocaleLowerCase().includes(lowerCaseFilter)
      );
    return filteredArray;
  };
  // This part of the code is used because the backend does not accept the endpoint to send the full state object. So we cant save Reorder on server, but with this it will work in browser before reloading and refetching.
  const filteredArray = makeFilteredMarkup();
  const [reorderedData, setReorderedData] = useState(filteredArray);
  const isArrayEqual = function (x, y) {
    return _(x).differenceWith(y, _.isEqual).isEmpty();
  };

  useEffect(() => {
    setReorderedData(prevState => {
      if (
        isArrayEqual(prevState, filteredArray) &&
        prevState.length === filteredArray.length
      ) {
        return prevState;
      } else {
        return filteredArray;
      }
    });
  }, [filteredArray]);
  // end of this part

  if (filteredArray.length === 0) {
    return <p className={styles.emptyFilter}>No contact with this name</p>;
  }
  return (
    <Reorder.Group
      className={styles.list}
      axis="y"
      values={reorderedData}
      onReorder={setReorderedData}
    >
      <AnimatePresence>
        {reorderedData.map(item => (
          <Reorder.Item key={item.id} className={styles.item} value={item}>
            <ContactListItem
              id={item.id}
              name={item.name}
              number={item.number}
            />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default ContactList;
