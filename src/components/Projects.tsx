import Project from "./Project";
import members_only_thumbnail from "../assets/project_thumbnails/members_only.gif";
import inventory_app_thumbnail from "../assets/project_thumbnails/inventory_application.gif";
import shopping_cart_thumbnail from "../assets/project_thumbnails/shopping_cart.gif";
import memory_card_thumbnail from "../assets/project_thumbnails/memory_card.gif";
import cv_application_thumbnail from "../assets/project_thumbnails/cv_application.png";
import battleship_thumbnail from "../assets/project_thumbnails/battleship.png";
import calculator_thumbnail from "../assets/project_thumbnails/calculator.png";
import tic_tac_toe_thumbnail from "../assets/project_thumbnails/tic_tac_toe.png";
import weather_app_thumbnail from "../assets/project_thumbnails/weather_app.png";

const Projects = () => {
  const links: string[] = ["Github Repo", "Live"];
  const tags: string[] = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];

  return (
    <div className="flex flex-col gap-4">
      <h2
        className="text-sm uppercase tracking-widest text-zinc-500"
        id="projects"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <Project
          title="Members Only"
          imageUrl={members_only_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Inventory App"
          imageUrl={inventory_app_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Shopping Cart"
          imageUrl={shopping_cart_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Memory Card"
          imageUrl={memory_card_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="CV Application"
          imageUrl={cv_application_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Battleship"
          imageUrl={battleship_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Calculator"
          imageUrl={calculator_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Weather App"
          imageUrl={weather_app_thumbnail}
          links={links}
          tags={tags}
        />
        <Project
          title="Tic-Tac-Toe"
          imageUrl={tic_tac_toe_thumbnail}
          links={links}
          tags={tags}
        />
      </div>
    </div>
  );
};

export default Projects;
