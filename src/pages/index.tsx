import React from "react";
import TodoList from "../components/TodoList";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div>
      <UserList/>
      <hr/>
      <TodoList/>
    </div>
  )
}

export default Home
