import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();

  return (
    <div>
      <h2>Users Page</h2>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100  shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`../users/${user.id}`}>
                <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
