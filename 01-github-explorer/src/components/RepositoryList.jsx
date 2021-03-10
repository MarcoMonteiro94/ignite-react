import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const repository = {
    repository: "unform2",
    description: "Forms in Reacts",
    link: "https://github.com/unform/unform",
  };

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem {...repository} />
        <RepositoryItem {...repository} />
        <RepositoryItem {...repository} />
        <RepositoryItem {...repository} />
      </ul>
    </section>
  );
}
