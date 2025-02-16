import { useTheme } from "../../contexts/ThemeContext";
import ProjetcIcon from "../../assets/icons/projetos.svg";
import Button from "../Button/Button";

interface CardProps {
  title: string;
  description?: string;
  subTitle?: string;
  tools?: string[];
  methodologies?: string[];
  database?: string[];
  posts?: { date: string; title: string }[];
  variant?: "default" | "project" | "post";
}

const Card = ({
  title,
  description,
  subTitle,
  tools = [],
  methodologies = [],
  database = [],
  posts = [],
  variant = "default",
}: CardProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 w-[288px] h-[353px] mx-5 my-5 border-2 rounded-lg transition-colors ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 border-black text-black"
      }`}
    >
      {variant === "post" ? (
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
          <ul className="mt-4 space-y-2">
            {posts.map((post, index) => (
              <li key={index} className="text-sm border-b pb-2">
                {post.date} - {post.title}
              </li>
            ))}
          </ul>
          <div className="mt-4 w-full flex justify-center">
          <Button name="Ver todas as postagens" />

          </div>
        </div>
      ) : variant === "project" ? (
        <div className="flex flex-col items-center">
          <div className="h-full sd:h-full bg-gray-300 rounded-md">
            <img
              src={ProjetcIcon}
              alt="Ícone do projeto"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h2 className="text-xl font-bold text-center mt-4">{title}</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">{description}</p>
          <div className="self-start mt-4">
            <Button name="Ver mais" />
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">{description}</p>
          <div className="mt-4">
            <h4 className="font-bold">{subTitle}</h4>
            {tools.length > 0 && (
              <div>
                <h3 className="font-semibold">Ferramentas</h3>
                {tools.map((tool, index) => (
                  <p key={index} className="ml-2 text-gray-600 dark:text-gray-400">{tool}</p>
                ))}
              </div>
            )}
            {methodologies.length > 0 && (
              <div>
                <h3 className="font-semibold">Metodologias</h3>
                {methodologies.map((methodology, index) => (
                  <p key={index} className="ml-2 text-gray-600 dark:text-gray-400">{methodology}</p>
                ))}
              </div>
            )}
            {database.length > 0 && (
              <div>
                <h3 className="font-semibold">Banco de dados</h3>
                {database.map((db, index) => (
                  <p key={index} className="ml-2 dark:text-gray-400">{db}</p>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
