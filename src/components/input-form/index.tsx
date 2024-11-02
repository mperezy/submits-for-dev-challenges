import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import styles from 'components/input-form/styles.module.css';

type Props = {
  id: string;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  children?: ReactNode;
};

export default ({ id, label, placeholder, type = 'text', children }: Props) => (
  <div className={styles.root}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    {children ? children : <input className={styles.input} {...{ id, type, placeholder }} />}
  </div>
);
