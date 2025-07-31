import { SiEsotericsoftware } from "react-icons/si";
import "./App.css";
import { IoIosCode, IoMdCheckmarkCircleOutline } from "react-icons/io";
import softwareEnginer from "./images/Engenharia de Software Futurista.png";
import { IoCode } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { AiOutlineTeam, AiOutlineThunderbolt } from "react-icons/ai";
import { LuDatabase } from "react-icons/lu";
import { FiSmartphone, FiTarget } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiSuitcaseFill } from "react-icons/ri";
import { GoMortarBoard } from "react-icons/go";
function App() {
  return (
    <>
      <header>
        <span className="title">
          <SiEsotericsoftware />
          <p>Engenharia de Software</p>
        </span>
        <nav>
          <a href="">Introdução</a>
          <a href="">Habilidades</a>
          <a href="">Oportunidades</a>
          <a href="">Ferramentas</a>
        </nav>
      </header>
      <section className="hero">
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
          <div className="text">
            <h1>O que é Engenharia de Software?</h1>
            <p>
              A Engenharia de Software é uma disciplina que aplica princípios de
              engenharia ao desenvolvimento de software. Como engenheiro de
              software, você será responsável por projetar, desenvolver, testar
              e manter sistemas de software complexos.
            </p>
          </div>
          <div className="list">
            <div className="listitem">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Desenvolvimento de Sistemas</h3>
                <p>Criação de aplicações web, mobile e desktop</p>
              </div>
            </div>
            <div className="listitem">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Arquitetura de Software</h3>
                <p>Design de soluções escaláveis e eficientes</p>
              </div>
            </div>
            <div className="listitem">
              <IoMdCheckmarkCircleOutline />
              <div className="listitemtext">
                <h3>Resolução de Problemas</h3>
                <p>Análise e solução de desafios tecnológicos complexos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={softwareEnginer} alt="" />
        </div>
      </section>

      <section className="skillsSection">
        <div className="sectionTitle">
          <h1>Habilidades necessárias</h1>
          <p>
            Para se tornar um engenheiro de software de sucesso, você precisa
            desenvolver tanto habilidades técnicas quanto soft skills.
          </p>
        </div>

        <div className="gridCard">
          <div className="card">
            <IoCode color="var(--purple-600)" />
            <div className="textCard">
              <h1>Programação</h1>
              <p>Domínio de linguagens como Python, JavaScript, Java, C++</p>
            </div>
          </div>
          <div className="card">
            <MdLightbulbOutline color="#c37b28" />
            <div className="textCard">
              <h1>Pensamento Lógico</h1>
              <p>
                Capacidade de resolver problemas complexos de forma estruturada
              </p>
            </div>
          </div>
          <div className="card">
            <AiOutlineTeam color="#10b981" />
            <div className="textCard">
              <h1>Trabalho em Equipe</h1>
              <p>Colaboração efetiva em projetos multidisciplinares</p>
            </div>
          </div>
          <div className="card">
            <LuDatabase color="#5b21b6" />
            <div className="textCard">
              <h1>Banco de dados</h1>
              <p>Conhecimento em SQL, NoSQL e modelagem de dados</p>
            </div>
          </div>
          <div className="card">
            <AiOutlineThunderbolt color="#ea580c" />
            <div className="textCard">
              <h1>Adaptibilidade</h1>
              <p>Capacidade de aprender novas tecnologias rapidamente</p>
            </div>
          </div>
          <div className="card">
            <FiTarget color="red" />
            <div className="textCard">
              <h1>Atenção aos Detalhes</h1>
              <p>Precisão na escrita de código e identificação de bugs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="oportunity">
        <div className="sectionTitle">
          <h1>Oportunidades de Carreira</h1>
          <p>
            O mercado de engenharia de software oferece diversas oportunidades
            em diferentes setores e níveis de experiência.
          </p>
        </div>

        <div className="tablesCont">
          <div className="atuacao">
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
            <div className="salarioCont">
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

      <section className="ferramentasCont">
          <div className="sectionTitle">
            <h1>Ferramentas e Tecnologias</h1>
            <p>Conheça as principais ferramentas e tecnologias utilizadas por engenheiros de software no mercado atual.</p>
          </div>

          <div className="gridFerramentas">
            <div className="cardFerramenta">
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
            <div className="cardFerramenta">
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
             <div className="cardFerramenta">
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
             <div className="cardFerramenta">
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
        <div className="container">
          <h1>Se interessou por está área?</h1>

          <p>A engenharia de software oferece um futuro promissor com oportunidades ilimitadas. Comece sua jornada hoje mesmo!</p>

          <div className="buttons">
          <button className="vagas"><RiSuitcaseFill /> Ver vagas</button>
          <button className="university"><GoMortarBoard /> Universidades Recomendadas </button>
          </div>
        </div>
      </section>

      <footer>
        <h1>Engenharia de Software</h1>
        <span>Todos os direitos reservados. Feito por kauã lima</span>
      </footer>
    </>
  );
}

export default App;
