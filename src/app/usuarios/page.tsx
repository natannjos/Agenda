"use client";
// linter ignore file
// @

import axios from "axios";
import { useState, useEffect } from "react";

const UsersListPage = () => {
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    axios
      .get<[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <h1>Lista de Usuários</h1>
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-2xl border">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de Criação </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.email}</th>
                {/* now to localedatestring */}
                <th>{new Date(Date.now()).toLocaleDateString()}</th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UsersListPage;
