import ImageLoader from 'lib:ImageLoader';
import './style.scss';

export default function ProductTile(props) {
  return (
    <a class="product-tile" href={`/product/#${props.item.id}`}>
      <div className="image">
        <ImageLoader src={props.item.image} alt={props.item.title} />
      </div>
      <div className="name">{props.item.title}</div>
    </a>
  );
}
