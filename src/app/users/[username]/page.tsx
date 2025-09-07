const SingleProfile = async (props: { params: Promise<{ username: string }> }) => {
  console.log(props);
  const user = await props.params;
  console.log(user);

  return (
    <>
      <div className="commonHeading" style={{ marginTop: "20px" }}>
        <h2>Dynamic route segment</h2>
        <p>Username: {user.username}</p>
      </div>
    </>
  );
};

export default SingleProfile;
