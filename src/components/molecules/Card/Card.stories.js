import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
};

export const Note = () => <Card cardType="note" />;
export const Secondary = () => <Card cardType="twitter" />;
export const Article = () => <Card cardType="article" />;
