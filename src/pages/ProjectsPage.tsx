import battleship_thumbnail from "../assets/project_thumbnails/battleship.png";
import blog_thumbnail from "../assets/project_thumbnails/blog.png";
import calculator_thumbnail from "../assets/project_thumbnails/calculator.png";
import cv_application_thumbnail from "../assets/project_thumbnails/cv_application.png";
import magic_eight_ball_thumbnail from "../assets/project_thumbnails/eight_ball.png";
import inventory_app_thumbnail from "../assets/project_thumbnails/inventory_application.png";
import members_only_thumbnail from "../assets/project_thumbnails/members_only.png";
import memory_card_thumbnail from "../assets/project_thumbnails/memory_card.png";
import shopping_cart_thumbnail from "../assets/project_thumbnails/shopping_cart.png";
import starsend_thumbnail from "../assets/project_thumbnails/starsend.png";
import tic_tac_toe_thumbnail from "../assets/project_thumbnails/tic_tac_toe.png";
import weather_app_thumbnail from "../assets/project_thumbnails/weather_app.png";
import wheres_waldo_thumbnail from "../assets/project_thumbnails/wheres_waldo.png";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <main className="mt-12 flex flex-col gap-4">
      <h1 className="text-sm uppercase tracking-widest text-zinc-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <Project
          title="Magic Eight Ball"
          imageUrl={magic_eight_ball_thumbnail}
          repo="https://github.com/ken-ux/magic-eight-ball"
          live="https://magic-8-ball-ken.netlify.app/"
          tags={["React", "TypeScript", "Three.js"]}
        />
        <Project
          title="StarSend Messenger"
          imageUrl={starsend_thumbnail}
          repo="https://github.com/ken-ux/messaging-app"
          tags={["React", "TypeScript", "Tailwind", "Go", "PostgreSQL"]}
        />
        <Project
          title="Where's Waldo"
          imageUrl={wheres_waldo_thumbnail}
          repo="https://github.com/ken-ux/wheres-waldo"
          live="https://wheres-waldo-ken.netlify.app/"
          tags={["React", "TypeScript", "Tailwind", "Go", "PostgreSQL"]}
        />
        <Project
          title="Blog"
          imageUrl={blog_thumbnail}
          repo="https://github.com/ken-ux/blog-frontend"
          live="https://blog-frontend-ken.netlify.app/"
          tags={["React", "TypeScript", "Tailwind"]}
        />
        <Project
          title="Members Only"
          imageUrl={members_only_thumbnail}
          repo="https://github.com/ken-ux/members-only"
          live="https://members-only-production-4f8b.up.railway.app/"
          tags={["Express.js", "Pug", "MongoDB", "Tailwind"]}
        />
        <Project
          title="Inventory App"
          imageUrl={inventory_app_thumbnail}
          repo="https://github.com/ken-ux/inventory-application"
          live="https://inventory-application-production-c0ab.up.railway.app/catalog"
          tags={["Express.js", "Pug", "MongoDB", "CSS"]}
        />
        <Project
          title="Shopping Cart"
          imageUrl={shopping_cart_thumbnail}
          repo="https://github.com/ken-ux/shopping-cart"
          live="https://ken-ux.github.io/shopping-cart/"
          tags={["React", "JavaScript", "CSS"]}
        />
        <Project
          title="Memory Card"
          imageUrl={memory_card_thumbnail}
          repo="https://github.com/ken-ux/memory-card"
          live="https://ken-ux.github.io/memory-card/"
          tags={["React", "JavaScript", "CSS"]}
        />
        <Project
          title="CV Application"
          imageUrl={cv_application_thumbnail}
          repo="https://github.com/ken-ux/cv-application"
          live="https://bejewelled-sunflower-6c7688.netlify.app/"
          tags={["React", "JavaScript", "CSS"]}
        />
        <Project
          title="Battleship"
          imageUrl={battleship_thumbnail}
          repo="https://github.com/ken-ux/battleship"
          live="https://ken-ux.github.io/battleship/"
          tags={["JavaScript", "CSS"]}
        />
        <Project
          title="Calculator"
          imageUrl={calculator_thumbnail}
          repo="https://github.com/ken-ux/calculator"
          live="https://ken-ux.github.io/calculator/"
          tags={["HTML", "JavaScript", "CSS"]}
        />
        <Project
          title="Weather App"
          imageUrl={weather_app_thumbnail}
          repo="https://github.com/ken-ux/weather-app"
          live="https://ken-ux.github.io/weather-app/"
          tags={["JavaScript", "CSS"]}
        />
        <Project
          title="Tic-Tac-Toe"
          imageUrl={tic_tac_toe_thumbnail}
          repo="https://github.com/ken-ux/tic-tac-toe"
          live="https://ken-ux.github.io/tic-tac-toe/"
          tags={["HTML", "JavaScript", "CSS"]}
        />
      </div>
    </main>
  );
};

export default ProjectsPage;
