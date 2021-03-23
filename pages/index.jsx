import React from "react";

const Index = ({ users }) => {
  return JSON.stringify(users, null, 2);
};

export const getServerSideProps = async () => {
  const users = ["Manu", "Abdallah"];
  return {
    props: {
      users,
    },
  };
};

export default Index;
