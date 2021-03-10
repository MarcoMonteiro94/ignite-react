import React from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories &&
          repositories.map((repository) => {
            return (
              <RepositoryItem
                key={repository.id}
                repository={repository.name}
                description={repository.description}
                link={repository.html_url}
              />
            );
          })}
      </ul>
    </section>
  );
}
