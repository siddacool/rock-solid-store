import ImageLoader from 'lib:ImageLoader';
import './style.scss';

export default function Item(props) {
  return (
    <a class="item" href={`/product/#${props.item.id}`}>
      <div className="image">
        <ImageLoader src={props.item.image} alt={props.item.title} />
      </div>
      <div className="name">{props.item.title}</div>
    </a>
  );
}
