export function RepositoryItem({ repository, description, link }) {
  return (
    <li>
      <strong>{repository ?? "Default"}</strong>
      <p>{description ?? "Forms in React"}</p>
      <a href={link ?? "#"} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
