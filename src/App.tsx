import React from "react";
import Radio from "./Form/Radio";

export interface IPergunta {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
}

interface IRespostas {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}

const perguntas: IPergunta[] = [
  {
    pergunta: "Qual método é utilizado para criar componentes em React?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo do React?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um Custom hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
  {
    pergunta:
      "O que deve ser atribuido a um componente criado a partir de um map?",
    options: ["id", "key", "value"],
    resposta: "key",
    id: "p5",
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState<IRespostas>({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState<string | null>(null);

  function handleChange({ target }: any) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id as keyof typeof respostas] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  function handleReset() {
    setRespostas({
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
    });
    setResultado(null);
    setSlide(0);
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      style={{
        width: "600px",
        height: "200px",
        marginInline: "auto",
        marginTop: "4rem",
      }}
    >
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id as keyof typeof respostas]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <>
          <p>{resultado}</p>
          <button onClick={handleReset} className="button">
            Tentar Novamente
          </button>
        </>
      ) : (
        <button onClick={handleClick} className="button">
          Próxima
        </button>
      )}
    </form>
  );
};

export default App;
