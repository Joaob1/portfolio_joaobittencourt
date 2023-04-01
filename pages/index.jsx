import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import classnames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import habilidades from "../assets/habilidades/index";
import Carrossel from "../components/Carrossel";
import CarrosselProjetos from "../components/CarrosselProjetos";
import SendEmail from "../components/SendEmail/SendEmail";
import devWebIcon from "../assets/devweb.png";
import emailIcon from "../assets/icon_email.png";
import celIcon from "../assets/icon_celular.png";
import discordIcon from "../assets/icon_discord.png";

export default function Home() {
  const [habilidadesFront, setHabilidadesFront] = useState([]);
  const [habilidadesBack, setHabilidadesBack] = useState([]);
  useEffect(() => {
    const localHabilidadesFront = [...habilidadesFront];
    const localHabilidadesBack = [...habilidadesBack];
    habilidades.forEach((item) => {
      if (item.stack === "front") {
        localHabilidadesFront.push(item);
      } else {
        localHabilidadesBack.push(item);
      }
    });
    setHabilidadesFront(localHabilidadesFront);
    setHabilidadesBack(localHabilidadesBack);
  }, []);
  const navCV = () => {
    const aURL = document.createElement("a");
    aURL.href =
      "https://drive.google.com/file/d/17HKkx_vtEKZNxMelPekyOaJ9zj0sLZfh/view?usp=sharing";
    aURL.target = "_blank";
    aURL.click();
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Portfolio - João Bittencourt</title>
        </Head>
        <header className={styles.header}>
          <h4 className={styles.header_name}>
            João <span className={styles.txtGradientOrange}>Bittencourt</span>
          </h4>
          <nav className={styles.navlinks}>
            <span className={styles.txtGradientOrange}>
              <Link href="#sobre">Sobre</Link>
            </span>
            <span className={styles.txtGradientOrange}>
              <Link href="#habilidades">Habilidades</Link>
            </span>
            <span className={styles.txtGradientOrange}>
              <Link href="#projetos">Projetos</Link>
            </span>
            <span className={styles.txtGradientOrange}>
              <Link href="#contato">Contato</Link>
            </span>
          </nav>
        </header>
        <main className={styles.content_main}>
          <aside className={styles.infos}>
            <div
              className={classnames(
                styles.popup,
                styles.backgroundGradientOrange
              )}
            >
              Olá, me chamo
            </div>
            <h1 className={styles.nameh1}>João Bittencourt</h1>
            <span className={styles.profissao}>DESENVOLVEDOR FULL-STACK</span>
            <div className={styles.social}>
              <div className={styles.icon_social}>
                <a
                  href="https://www.linkedin.com/in/j-bittencourt1/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image src={linkedin} alt="Linkedin" />
                </a>
              </div>
              <div className={styles.icon_social}>
                <a
                  href="https://github.com/Joaob1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image src={github} alt="Github" />
                </a>
              </div>
              <div className={styles.icon_social}>
                <a
                  href="https://wa.me/5571987685750?text=Ol%C3%A1+Jo%C3%A3o+Bittencourt%2C+estou+entrando+em+contato+por+meio+do+seu+portf%C3%B3lio+web%21"
                  rel="noreferrer"
                  target="blank"
                >
                  <Image src={whatsapp} alt="Whatsapp" />
                </a>
              </div>
            </div>
            <button
              onClick={navCV}
              className={classnames(
                styles.backgroundGradientOrange,
                styles.downloadCV
              )}
            >
              Currículo
            </button>
          </aside>
          <div
            className={classnames(
              styles.devweb_icon,
              styles.backgroundGradientOrange
            )}
          >
            <Image
              className={styles.devweb_image}
              src={devWebIcon}
              alt="Dev Web Icon"
            />
          </div>
        </main>
        <section className={styles.sobre} id="sobre">
          <div className={styles.section_title}>
            <div className={styles.circle_gradient}></div>
            <h1 className={styles.sobre_title}>Sobre mim</h1>
          </div>
          <div className={styles.sobre_content}>
            <div className={styles.profile_image}></div>
            <p className={styles.sobre_p}>
              Olá, me chamo João Bittencourt, tenho 26 anos e moro em Salvador -
              BA.
              <br /> <br />
              Sempre fui adepto à área de tecnologia e no ano de 2022 decidi
              ingressar na área de desenvolvimento de software.
              <br />
              Comecei no curso de Desenvolvimento Fullstack da{" "}
              <a
                href="https://cubos.academy/"
                className={styles.txtGradientOrange}
                target="_blank"
                rel="noreferrer"
              >
                Cubos Academy
              </a>{" "}
              e me apaixonei pela área. <br /> <br />
              Atualmente trabalho na{" "}
              <a
                href="https://cubos.academy/"
                rel="noreferrer"
                target="_blank"
                className={styles.txtGradientOrange}
              >
                Cubos Academy
              </a>{" "}
              Como monitor Full-stack e na{" "}
              <a
                href="https://mobtex.com/"
                rel="noreferrer"
                target="_blank"
                className={styles.txtGradientOrange}
              >
                Mobtex
              </a>{" "}
              Como Desenvolvedor de Software Front-end.
              <br /> <br />
              Abaixo segue as tecnologias em que eu tenho conhecimento:
            </p>
          </div>
        </section>
        <section className={styles.habilidades} id="habilidades">
          <div className={styles.section_title}>
            <div className={styles.circle_gradient}></div>
            <div className={styles.habilidades_title}>Habilidades</div>
          </div>
          <div className={styles.frontend}>
            <h1 className={styles.stack_title}>Front-end</h1>
            <div>
              <Carrossel images={habilidadesFront} />
            </div>
          </div>
          <div className={styles.backend}>
            <h1 className={styles.stack_title}>Back-end</h1>
            <Carrossel images={habilidadesBack} />
          </div>
        </section>
        <section className={styles.projetos} id="projetos">
          <div className={styles.section_title}>
            <div className={styles.circle_gradient}></div>
            <div className={styles.projetos_title}>Projetos</div>
          </div>
          <CarrosselProjetos />
        </section>
        <section className={styles.contato} id="contato">
          <div className={styles.section_title}>
            <div className={styles.circle_gradient}></div>
            <div className={styles.contato_title}>Contato</div>
          </div>
          <div className={styles.container_contato}>
            <aside className={styles.send_email}>
              <SendEmail />
            </aside>
            <aside
              className={classnames(
                styles.contato_infos,
                styles.backgroundGradientOrange
              )}
            >
              <h1 className={styles.h1_infos}>-Informações de contato-</h1>
              <span className={styles.span_infos}>
                <Image
                  className={styles.icon_infos}
                  src={emailIcon}
                  alt="Email Icon"
                />
                <p>Email: j.bittencourt1@outlook.com</p>
              </span>
              <span className={styles.span_infos}>
                <Image
                  className={styles.icon_infos}
                  src={celIcon}
                  alt="Phone Icon"
                />
                <p>Telefone: +55 (71) 9 8768-5750</p>
              </span>
              <div className={styles.span_infos}>
                <Image
                  className={styles.icon_infos}
                  src={discordIcon}
                  alt="Discord Icon"
                />
                <p className={styles.p_infos}>Discord: J.bitten#3645</p>
              </div>
            </aside>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <p>Todos os direitos reservados a João Bittencourt®</p>
      </footer>
    </>
  );
}
