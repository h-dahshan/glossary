/**
 * - a componnet shouldn't be forced to depend on interfaces they do not use.
 */

// BAD - no use of some props
type UserProps = {
  name: string;
  email: string;
  isAdmin: boolean;
};

// GOOD - only focus on component's scope
type GreetingProps = Pick<UserProps, "name">;
// BAD - const Greeting = ({ name }: UserProps) => {
const Greeting = ({ name }: GreetingProps) => {
  return <h1>Welcome {name}</h1>;
};
