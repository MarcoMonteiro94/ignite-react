import { Repository } from "./RepositoryList";

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name ?? "Default"}</strong>
      <p>{repository.description ?? "Forms in React"}</p>
      <a href={repository.html_url ?? "#"} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
