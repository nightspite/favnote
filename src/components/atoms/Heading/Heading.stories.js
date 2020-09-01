import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Hello nightspite</Heading>;
export const Big = () => <Heading big>Hello nightspite</Heading>;
