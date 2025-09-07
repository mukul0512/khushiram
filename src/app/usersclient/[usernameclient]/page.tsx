"use client";

import { use } from "react";

const SingleProfileClient = (props: {
  params: Promise<{ usernameclient: string }>;
}) => {
  console.log(props);
  const user = use(props.params);
  console.log(user);

  return (
    <>
      <div className="commonHeading" style={{ marginTop: "20px" }}>
        <h2>Dynamic route segment</h2>
        <p>Username: {user?.usernameclient}</p>
      </div>
    </>
  );
};

export default SingleProfileClient;
