import styles from "../../styles/Carrossel.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Carrossel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    draggable: false,
  };
  const navTo = (link) => {
    const aURL = document.createElement("a");
    aURL.href = link;
    aURL.target = "_blank";
    aURL.click();
  };
  const renderImages = () => {
    return images.map((image) => (
      <div className={styles.habilidade} key={image.nome}>
        <Image
          onClick={() => navTo(image.link)}
          src={image.imagem}
          className={styles.imagemCarrossel}
          width="142"
          height="142"
          alt={`${image.nome} Logo`}
        />
        <h1>{image.nome}</h1>
      </div>
    ));
  };
  return (
    <div>
      <Slider {...settings} className={styles.carrossel} lazyLoad="progressive">
        {renderImages()}
      </Slider>
    </div>
  );
}
