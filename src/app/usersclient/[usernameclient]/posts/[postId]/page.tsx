"use client";

import { use } from "react";

const SingleProfilePostClient = (props: {
  params: Promise<{ usernameclient: string; postId: string }>;
}) => {
  console.log(props);
  const user = use(props.params);
  console.log(user);

  return (
    <>
      <div className="commonHeading" style={{ marginTop: "20px" }}>
        <h2>Dynamic route segment</h2>
        <p>Username: {user?.usernameclient}</p>
        <p>Post ID: {user?.postId}</p>
      </div>
    </>
  );
};

export default SingleProfilePostClient;
