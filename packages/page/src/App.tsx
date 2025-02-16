import { useTheme } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar/Navbar";
import Avatar from "./components/Avatar/Avatar";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

export const App = () => {
  const { isDarkMode } = useTheme();

  return (
      <div
        className={`min-h-80 h-full flex flex-col items-center pt-20 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        <Navbar />
        <Avatar name="John Doe" />
        <Card
          title="Título do Card"
          description="Descrição do projeto"
          subTitle="Subtítulo"
          tools={["Sketch"]}
          methodologies={["Duplo Diamante", "Scrum"]}
          database={["Firebase"]}
        />
        <h2
          className={`text-center text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-[--dark-color]"
          }`}
        >
          Projetos
        </h2>
        <Card
          title="Nome do projeto"
          description="Descrição sobre o projeto"
          variant="project"
        />

        <div>
          <Button name="Ver todos os projetos" />
        </div>

        <Card
          title="Últimas postagens"
          variant="post"
          posts={[
            { date: "DD/MM/yyyy", title: "Uma postagem interessante" },
            { date: "DD/MM/yyyy", title: "Outra postagem super interessante" },
            { date: "DD/MM/yyyy", title: "Uma postagem interessante" },
            { date: "DD/MM/yyyy", title: "Outra postagem super interessante" },
            { date: "DD/MM/yyyy", title: "Outra postagem super interessante" },
          ]}
        />
      <Footer />
      </div>
  );
};
