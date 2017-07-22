import React from 'react';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const boldHero = `${bulma.hero} ${bulma['is-bold']}`;
const mainHero = `${boldHero} ${bulma['is-small']} ${bulma['is-primary']}`;
const infoHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-info']}`;
const lightHero = `${boldHero} ${bulma['is-medium']} ${bulma['is-light']}`;

const ContactUsCTA = () => {
  return (
    <div>
      
    </div>
  );
};

export default ContactUsCTA;
