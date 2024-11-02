import { getCountryDataList } from 'countries-list';
import InputForm from 'components/input-form';
import styles from 'components/contact-information/styles.module.css';
import inputStyles from 'components/input-form/styles.module.css';

export default () => (
  <div className={styles.root}>
    <span className='text-black-90 font-bold mb-2'>Contact Information</span>

    <InputForm
      id='first-last-name'
      label='First & Last name'
      placeholder='Enter first & last name'
    />

    <InputForm
      id='email-address'
      type='email'
      label='Email Address'
      placeholder='Enter email address'
    />

    <div className={styles['country-postal-code-container']}>
      <InputForm id='country' label='Country' placeholder='Country'>
        <select className={`${inputStyles.input} w-full`}>
          {getCountryDataList().map(({ iso2, name }) => (
            <option key={iso2} value={iso2}>
              {name}
            </option>
          ))}
        </select>
      </InputForm>
      <InputForm id='postal-code' type='number' label='Postal Code' placeholder='00270' />
    </div>

    <button className={styles['continue-button']}>Continue</button>
  </div>
);
