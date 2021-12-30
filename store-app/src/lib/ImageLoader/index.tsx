import './style.css';

interface IProps {
  src: string;
  alt: string;
}

const ImageLoader = (props: IProps) => (
  <img class="image-loader" src={props.src} alt={props.alt} />
);

export default ImageLoader;
