import styles from './ContactListItem.module.css';
import Modal from 'components/Modal';
import { useState } from 'react';
import { ReactComponent as DelBtn } from 'icons/del.svg';
import { ReactComponent as ChangeBtn } from 'icons/change.svg';

import { useDeleteContactMutation } from 'redux/contactsApi';
import Spiner from 'components/Spiner';

interface IContactListItemProps {
  id: string;
  name: string;
  number: string;
}

const ContactListItem = ({ id, name, number }: IContactListItemProps) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <p className={styles.text}>
        <span className={styles.text__name}>{name}:</span> {number}
      </p>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.contactsBtn}
          onClick={toggleModal}
          type="button"
        >
          <ChangeBtn className={styles.contactsBtnIcon} />
        </button>
        <button
          className={styles.contactsBtn}
          onClick={() => deleteContact(id)}
          type="button"
        >
          {isLoading ? (
            <div className={styles.wrapper}>
              <Spiner width={16} height={16} color="white" />
            </div>
          ) : (
            <>
              <DelBtn className={styles.contactsBtnIcon} />
            </>
          )}
        </button>
      </div>
      {showModal && (
        <Modal id={id} name={name} number={number} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default ContactListItem;
