/**
 * - extend instead of inherit, 'resuing' abstract implementations
 * - this is how we think in react; components composition
 */

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function UserCard({ name, email }: { name: string; email: string }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{email}</p>
    </Card>
  );
}
