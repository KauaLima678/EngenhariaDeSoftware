import { SiEsotericsoftware } from "react-icons/si";
import "./App.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import softwareEnginer from "./images/Engenharia de Software Futurista.png";
import { IoCloseSharp, IoCode } from "react-icons/io5";
import { FaBars, FaBrain, FaChartLine, FaTools } from "react-icons/fa";
import { MdLightbulbOutline, MdOutlinePlayCircle } from "react-icons/md";
import { AiOutlineTeam, AiOutlineThunderbolt } from "react-icons/ai";
import { LuDatabase } from "react-icons/lu";
import { FiSmartphone, FiTarget } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiSuitcaseFill } from "react-icons/ri";
import { GoMortarBoard } from "react-icons/go";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // quando rolar a página, muda o estado
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".textReveal", {
      duration: 2000,
      distance: "50px",
      origin: "left",
      easing: "ease",
      interval: 300,
      reset: false,
    });

    sr.reveal(".listReveal", {
      duration: 2000,
      distance: "50px",
      origin: "left",
      easing: "ease",
      interval: 400,
      reset: false,
    });

    sr.reveal(".imageReveal", {
      duration: 2000,
      distance: "50px",
      origin: "right",
      easing: "ease",
      interval: 400,
      reset: false,
    });

    sr.reveal(".titleReveal", {
      duration: 2000,
      distance: "50px",
      origin: "bottom",
      easing: "ease",
      interval: 400,
      reset: false,
    });

    sr.reveal(".cardReveal", {
      duration: 2000,
      distance: "50px",
      origin: "bottom",
      easing: "ease",
      interval: 300,
      reset: false,
    });

    sr.reveal(".tableOne", {
      duration: 2000,
      distance: "50px",
      origin: "left",
      easing: "ease",
      interval: 400,
      reset: false,
      delay: 200,
    });

    sr.reveal(".tableTwo", {
      duration: 2000,
      distance: "50px",
      origin: "right",
      easing: "ease",
      interval: 400,
      reset: false,
      delay: 200,
    });

    sr.reveal(".ferramentaReveal", {
      duration: 2000,
      distance: "50px",
      origin: "left",
      easing: "ease",
      interval: 300,
      reset: false,
    });

    sr.reveal(".finalReveal", {
      duration: 2000,
      distance: "50px",
      scale: "0.9",
      opacity: "0",
      easing: "ease",
      interval: 300,
      reset: false,
    });
  }, []);

  const [menuLateral, setMenuLateral] = useState(false);
  const [fechandoMenu, setFechandoMenu] = useState(false);

  const abrirMenu = () => {
    setMenuLateral(true);
    setFechandoMenu(false);
  };

  const fecharMenu = () => {
    setFechandoMenu(true);
    setTimeout(() => {
      setMenuLateral(false);
    }, 500); // espera a animação de fechamento
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <span className="title">
          <SiEsotericsoftware />
          <p>Engenharia de Software</p>
        </span>
        <nav>
          <a href="#hero">Introdução</a>
          <a href="#skills">Habilidades</a>
          <a href="#oportunitys">Oportunidades</a>
          <a href="#ferramentas">Ferramentas</a>
        </nav>
        <div className="bars">
          <FaBars onClick={abrirMenu} />
        </div>

        {menuLateral && (
  <div className="overlayMenu" onClick={fecharMenu}>
    <div
      className={`menuLateral ${fechandoMenu ? 'menuLateralClose' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border"></div>
      <div className="head">
        <span className="title">
          <SiEsotericsoftware className="simble" />
        </span>
        <IoCloseSharp onClick={fecharMenu} />
      </div>
      <nav className="navLateral">
        <a href="#hero" onClick={fecharMenu} className="linkLateral">
          <MdOutlinePlayCircle /> Introdução
        </a>
        <a href="#skills" onClick={fecharMenu} className="linkLateral">
          <FaBrain /> Habilidades
        </a>
        <a href="#oportunitys" onClick={fecharMenu} className="linkLateral">
          <FaChartLine /> Oportunidades
        </a>
        <a href="#ferramentas" onClick={fecharMenu} className="linkLateral">
          <FaTools /> Ferramentas
        </a>
      </nav>
    </div>
  </div>
)}

      </header>
      <section className="hero" id="hero">
        <div className="content">
          <h1>Engenharia de Software</h1>
          <p>
            Descubra uma das profissões mais promissoras da era digital. Como
            engenheiro de software, você será responsável por criar soluções
            tecnológicas que transformam o mundo.
          </p>
        </div>
      </section>

      <section className="EngSoft">
        <div className="infoCont">
          <div className="text textReveal">
            <h1>O que é Engenharia de Software?</h1>
            <p>
              A Engenharia de Software é uma disciplina que aplica princípios de
              engenharia ao desenvolvimento de software. Como engenheiro de
              software, você será responsável por projetar, desenvolver, testar
              e manter sistemas de software complexos.
            </p>
          </div>
          <div className="list">
            <div className="listitem listReveal">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Desenvolvimento de Sistemas</h3>
                <p>Criação de aplicações web, mobile e desktop</p>
              </div>
            </div>
            <div className="listitem listReveal">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Arquitetura de Software</h3>
                <p>Design de soluções escaláveis e eficientes</p>
              </div>
            </div>
            <div className="listitem listReveal">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Resolução de Problemas</h3>
                <p>Análise e solução de desafios tecnológicos complexos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image imageReveal">
          <img src={softwareEnginer} alt="" />
        </div>
      </section>

      <section className="skillsSection" id="skills">
        <div className="sectionTitle titleReveal">
          <h1>Habilidades necessárias</h1>
          <p>
            Para se tornar um engenheiro de software de sucesso, você precisa
            desenvolver tanto habilidades técnicas quanto soft skills.
          </p>
        </div>

        <div className="gridCard">
          <div className="card cardReveal">
            <IoCode color="var(--purple-600)" />
            <div className="textCard">
              <h1>Programação</h1>
              <p>Domínio de linguagens como Python, JavaScript, Java, C++</p>
            </div>
          </div>
          <div className="card cardReveal">
            <MdLightbulbOutline color="#c37b28" />
            <div className="textCard">
              <h1>Pensamento Lógico</h1>
              <p>
                Capacidade de resolver problemas complexos de forma estruturada
              </p>
            </div>
          </div>
          <div className="card cardReveal">
            <AiOutlineTeam color="#10b981" />
            <div className="textCard">
              <h1>Trabalho em Equipe</h1>
              <p>Colaboração efetiva em projetos multidisciplinares</p>
            </div>
          </div>
          <div className="card cardReveal">
            <LuDatabase color="#5b21b6" />
            <div className="textCard">
              <h1>Banco de dados</h1>
              <p>Conhecimento em SQL, NoSQL e modelagem de dados</p>
            </div>
          </div>
          <div className="card cardReveal">
            <AiOutlineThunderbolt color="#ea580c" />
            <div className="textCard">
              <h1>Adaptibilidade</h1>
              <p>Capacidade de aprender novas tecnologias rapidamente</p>
            </div>
          </div>
          <div className="card cardReveal">
            <FiTarget color="red" />
            <div className="textCard">
              <h1>Atenção aos Detalhes</h1>
              <p>Precisão na escrita de código e identificação de bugs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="oportunity" id="oportunitys">
        <div className="sectionTitle titleReveal">
          <h1>Oportunidades de Carreira</h1>
          <p>
            O mercado de engenharia de software oferece diversas oportunidades
            em diferentes setores e níveis de experiência.
          </p>
        </div>

        <div className="tablesCont">
          <div className="atuacao tableOne">
            <h1>Áreas de Atuação</h1>
            <div className="cardAtuacao">
              <div className="item">
                <TbWorld color="#9333ea" />
                <div className="itemtext">
                  <h3>Desenvolvimento de Sistemas</h3>
                  <p>Criação de aplicações web, mobile e desktop</p>
                </div>
              </div>
            </div>
            <div className="cardAtuacao">
              <div className="item">
                <FiSmartphone color="#059669" />
                <div className="itemtext">
                  <h3>Desenvolvimento Mobile</h3>
                  <p>Apps para iOS, Android e multiplataforma</p>
                </div>
              </div>
            </div>
            <div className="cardAtuacao">
              <div className="item">
                <LuDatabase color="#5b21b6" />
                <div className="itemtext">
                  <h3>Data Science & IA</h3>
                  <p>Machine Learning, análise de dados e IA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="salario">
            <div className="salarioCont tableTwo">
              <h1>Pespectivas Salariais</h1>
              <div className="cardsSalario">
                <div className="salarioCard">
                  <h3>Júnior (0-2 anos)</h3>
                  <h1>R$ 3.000 - R$ 6.000</h1>
                  <span>Salário mensal médio</span>
                  <FaArrowTrendUp />
                </div>
                <div className="salarioCard">
                  <h3>Pleno (2-5 anos)</h3>
                  <h1>R$ 6.000 - R$ 12.000</h1>
                  <span>Salário mensal médio</span>
                  <FaArrowTrendUp />
                </div>
                <div className="salarioCard">
                  <h3>Sênior (5+ anos)</h3>
                  <h1>R$ 12.000 - R$ 25.000+</h1>
                  <span>Salário mensal médio</span>
                  <FaArrowTrendUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ferramentasCont" id="ferramentas">
        <div className="sectionTitle titleReveal">
          <h1>Ferramentas e Tecnologias</h1>
          <p>
            Conheça as principais ferramentas e tecnologias utilizadas por
            engenheiros de software no mercado atual.
          </p>
        </div>

        <div className="gridFerramentas">
          <div className="cardFerramenta ferramentaReveal">
            <h3>Linguagens</h3>
            <div className="spans">
              <span>JavaScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>TypeScript</span>
              <span>Go</span>
              <span>C#</span>
            </div>
          </div>
          <div className="cardFerramenta ferramentaReveal">
            <h3>FrameWorks</h3>
            <div className="spans">
              <span>React</span>
              <span>Next.js</span>
              <span>Vue.js</span>
              <span>Angular</span>
              <span>Django</span>
              <span>Spring</span>
            </div>
          </div>
          <div className="cardFerramenta ferramentaReveal">
            <h3>Banco de dados</h3>
            <div className="spans">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Redis</span>
              <span>SQLite</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="cardFerramenta ferramentaReveal">
            <h3>DevOps & Cloud</h3>
            <div className="spans">
              <span>Docker</span>
              <span>AWS</span>
              <span>Git</span>
              <span>Kubernetes</span>
              <span>Azure</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="container finalReveal">
          <h1>Se interessou por está área?</h1>

          <p>
            A engenharia de software oferece um futuro promissor com
            oportunidades ilimitadas. Comece sua jornada hoje mesmo!
          </p>

          <div className="buttons">
            <a href="https://www.google.com/search?q=vagas+engenheiro+de+software&oq=Vagas+Eng&gs_lcrp=EgZjaHJvbWUqBwgJEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDkwMTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&jbr=sep:0" className="vagas button">
              <RiSuitcaseFill /> Ver vagas
            </a>
            <button className="university">
              <GoMortarBoard /> Universidades Recomendadas{" "}
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo">
          <SiEsotericsoftware color="#5b21b6" />
          <h1>Engenharia de Software</h1>
        </div>
        <div className="text">
          <p>Transformando ideias em soluções tecnológicas inovadoras</p>
          <span>
            &copy; 2025 Landing Page sobre Engenharia de Software. Todos os
            direitos reservados. Desenvolvido por Kauã Lima
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
