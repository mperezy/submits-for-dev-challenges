import CartItem from 'components/cart/item';
import styles from 'components/cart/styles.module.css';
import formatNumber from 'utils/format-number';

type Props = {
  items: CartItem[];
  handleRemoveItem: (itemId: number) => void;
};

export default ({ items, handleRemoveItem }: Props) => {
  const subTotal = items.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
  const tax = subTotal * 0.24;

  return (
    <div className={styles.root}>
      <div className={styles['item-list']}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
        ))}
      </div>

      <div className={styles['checkout-container']}>
        <hr className='h-px my-1 bg-[#DBDEE3] border-0' />

        <div className={styles['coupon-container']}>
          <input className={styles['coupon-input']} type='text' placeholder='Enter coupon code' />
          <button className={styles['coupon-button']}>Apply Coupon</button>
        </div>

        <div className={styles['total-container']}>
          <div className={styles['price-calculation']}>
            <span className={styles['price-gray-label']}>Sub total</span>
            <span className={styles['price-gray-label']}>${formatNumber(subTotal)}</span>
          </div>

          <div className={styles['price-calculation']}>
            <span className={styles['price-gray-label']}>Tax</span>
            <span className={styles['price-gray-label']}>${formatNumber(tax)}</span>
          </div>

          <div className={styles['price-calculation']}>
            <span className={styles['price-black-label']}>Total</span>
            <span className={styles['price-black-label']}>${formatNumber(subTotal + tax)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
