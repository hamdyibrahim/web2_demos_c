"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return (
      <div>
        <h1>Secured Page</h1>
        <p>This page is only accessible by logged in users</p>
        <p>Go away, you must sign in to access this page</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Secured Page</h1>
      <p>This page is only accessible by logged in users</p>
      <p>Welcome back {user.displayName}</p>
    </div>
  );
}
