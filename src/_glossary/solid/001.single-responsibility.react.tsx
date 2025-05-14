/**
 * - a component should have only one reason to change
 */

import { useState, useEffect } from "react";

type User = {
  name: string;
};

// BAD - the component do 2 things can be separated
const _UserProfile = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const promise = fetch("/api/user")
      .then((res) => res.json() as Promise<User>)
      .then((data) => setUser(data));
  }, []);

  return <div>{user ? user.name : "Loading..."}</div>;
};

// GOOD - concerns are separated now
// useUser.ts - fetches data
const useUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json() as Promise<User>)
      .then((data) => setUser(data));
  }, []);

  return user;
};
// UserProfile.tsx - renders data
const UserProfile = () => {
  const user = useUser();
  return <div>{user ? user.name : "Loading..."}</div>;
};
