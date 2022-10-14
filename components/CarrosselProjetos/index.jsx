import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/CarrosselProjetos.module.css";
import projetos from "../../assets/projetos";
import classNames from "classnames";
import setaEsquerda from "../../assets/projetos/seta-esquerda.png";
import setaDireita from "../../assets/projetos/seta-direita.png";
import { useState } from "react";
export default function CarrosselProjetos() {
  const [stateProjetos, setStateProjetos] = useState([...projetos]);
  const nextArrow = () => {
    const localProjetos = [...stateProjetos];
    localProjetos.push(localProjetos[0]);
    localProjetos.shift();
    setStateProjetos(localProjetos);
  };
  const prevArrow = () => {
    const localProjetos = [...stateProjetos];
    localProjetos.unshift(localProjetos[localProjetos.length - 1]);
    localProjetos.pop();
    setStateProjetos(localProjetos);
  };
  return (
    <div className={styles.container_carrossel}>
      <Image
        src={setaEsquerda}
        alt="left arrow"
        className={styles.left_arrow}
        onClick={prevArrow}
      />
      {stateProjetos.map((projeto, index) =>
        index <= 1 ? (
          <div className={styles.projeto} key={projeto.deploy}>
            <Image
              src={projeto.imagem}
              alt="project image"
              className={styles.image}
            />
            <h1 className={styles.name}>{projeto.nome}</h1>
            <div
              className={projeto.deploy ? styles.space_between : styles.center}
            >
              {projeto.deploy && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projeto.deploy}
                  className={classNames(
                    styles.deploy,
                    styles.txtGradientOrange
                  )}
                >
                  Deploy
                </a>
              )}
              <a
                target="_blank"
                rel="noreferrer"
                href={projeto.repositorio}
                className={classNames(
                  styles.repositorio,
                  styles.txtGradientOrange
                )}
              >
                Repositório
              </a>
            </div>
          </div>
        ) : (
          ""
        )
      )}
      <Image
        src={setaDireita}
        alt="right arrow"
        className={styles.right_arrow}
        onClick={nextArrow}
      />
    </div>
  );
}
