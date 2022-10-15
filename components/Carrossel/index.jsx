import styles from "../../styles/Carrossel.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classNames from "classnames";
export default function Carrossel({ images }) {
  const settings = {
    interval: 1000,
    slide: true,
    indicators: false,
    controls: false,
  };
  const navTo = (link) => {
    const aURL = document.createElement("a");
    aURL.href = link;
    aURL.target = "_blank";
    aURL.click();
  };
  const renderImages = () => {
    return images.map((image) => (
      <Carousel.Item
        interval={1000}
        key={image.nome}
        className={classNames(styles.habilidade, "Item")}
      >
        <Image
          onClick={() => navTo(image.link)}
          src={image.imagem}
          className={styles.img}
          width="142px"
          height="142px"
          alt={`${image.nome} Logo`}
        />
        <h1 className={styles.h1}>{image.nome}</h1>
      </Carousel.Item>
    ));
  };
  return (
    <div className={styles.carousel_container}>
      <Carousel {...settings} className={styles.carousel}>
        {images.map((image) => (
          <Carousel.Item
            interval={1000}
            key={image.nome}
            className={classNames(styles.habilidade, "w-100")}
          >
            <div className={classNames(styles.div_carousel_item)}>
              <Image
                onClick={() => navTo(image.link)}
                src={image.imagem}
                className={styles.img}
                width="142px"
                height="142px"
                alt={`${image.nome} Logo`}
              />
              <h1 className={styles.h1}>{image.nome}</h1>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
