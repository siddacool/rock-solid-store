import ImageLoader from 'lib:ImageLoader';
import type { IProduct } from 'src/types';
import './style.scss';

interface IProps {
  item: IProduct;
}

const ProductTile = (props: IProps) => {
  return (
    <a class="product-tile" href={`/product/#${props.item.id}`}>
      <div className="image">
        <ImageLoader src={props.item.image} alt={props.item.title} />
      </div>
      <div className="name">{props.item.title}</div>
    </a>
  );
};

export default ProductTile;
