import Image from "next/image";
import "../../styles/galleryItem.scss";

export default function GalleryItem({ name, image }) {
  return (
    <a href="" className="gallery-item">
      <Image className="gallery-item-image" src={image} alt="pokemon" width={20} height={20} />
    </a>
  );
}
