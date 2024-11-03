import formatNumber from 'utils/format-number';
import styles from 'components/device-shop-checkout/cart/styles.module.css';

type Props = CartItem & {
  handleRemoveItem: (itemId: number) => void;
};

export default ({ handleRemoveItem, ...item }: Props) => (
  <div className={styles['item-root']}>
    <div className={styles['item-image']}>
      <img src={item.imageUrl} alt={item.name} />
    </div>

    <div className='flex flex-col w-[80%] h-24 justify-between'>
      <div className={styles['item-header']}>
        <div className='flex flex-col w-full'>
          <span className='text-black-90 font-bold'>{item.name}</span>
          <span className='text-black-60 font-medium'>{item.color}</span>
        </div>

        <span className='text-black-90 font-bold'>${formatNumber(item.price)}</span>
      </div>

      <div className={styles['item-bottom']}>
        <span className='text-black-60 w-5 h-5'>x 1</span>
        <button className={styles['item-clear-button']} onClick={() => handleRemoveItem(item.id)}>
          <img src='/images/device-shop-checkout/close-icon.svg' alt='Close icon' />
        </button>
      </div>
    </div>
  </div>
);
