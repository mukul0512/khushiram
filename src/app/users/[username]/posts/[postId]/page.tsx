const SingleProfilePost = async (props: {
  params: Promise<{ username: string; postId: string }>;
}) => {
  console.log(props);
  const user = await props.params;
  console.log(user);

  return (
    <>
      <div className="commonHeading" style={{ marginTop: "20px" }}>
        <h2>Server Side Dynamic route segment</h2>
        <p>Username: {user?.username}</p>
        <p>Post ID: {user?.postId}</p>
      </div>
    </>
  );
};

export default SingleProfilePost;
