import { useState } from 'react';
import { Inter } from 'next/font/google';
import cx from 'classnames';
import Cart from 'components/device-shop-checkout/cart';
import ContactInformation from 'components/device-shop-checkout/contact-information';
import data from 'constants/device-shop-checkout';
import styles from 'styles/device-shop-checkout.module.css';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default () => {
  const [items, setItems] = useState<CartItem[]>(
    data.map((item, index) => ({ ...item, id: index })),
  );

  const removeItem = (itemId: number) => setItems((prev) => prev.filter(({ id }) => id !== itemId));

  return (
    <div className={cx(InterFont.className, styles.root)}>
      <img src='/images/device-shop-checkout/background-image@2x.png' alt='Background Image' />

      <div className='flex w-full absolute top-0 justify-center'>
        <div className={styles['checkout-container']}>
          <div className='flex flex-col gap-y-8 items-center w-full px-10'>
            <div className={styles['checkout-header']}>
              <h2 className='text-xl font-extrabold'>Checkout</h2>
              <div className={styles['items-badge']}>{items.length} ITEMS</div>
            </div>

            <div className='flex flex-col-reverse md:flex-row w-full rounded-xl overflow-hidden'>
              {/* Cart */}
              <Cart items={items} handleRemoveItem={removeItem} />

              {/* Contact Information */}
              <ContactInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
