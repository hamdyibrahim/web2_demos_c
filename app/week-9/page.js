"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Week 9 - Authentication using Firebase
      </h1>
      <p> Some Content</p>
      <p>
        {user ? (
          <button className="bg-slate-400 border-2" onClick={firebaseSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="bg-slate-400 border-2" onClick={gitHubSignIn}>
            Sign In
          </button>
        )}
      </p>

      {user && (
        <p>
          Welcome, {user.displayName}, Your email is {user.email} and your image
          is <img src={user.photoURL} alt={user.displayName} />
        </p>
      )}
    </div>
  );
}
