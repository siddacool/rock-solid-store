import './style.css';

export default function ImageLoader(props) {
  return <img class="image-loader" src={props.src} alt={props.alt} />;
}
