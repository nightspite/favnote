import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input placeholder="search" search />;
