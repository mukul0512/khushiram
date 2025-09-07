const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParam = await searchParams;
  console.log(searchParam);
  const { category, page, sort } = searchParam;
  console.log(category, page, sort);

  return (
    <>
      <div className="commonHeading" style={{ marginTop: "20px" }}>
        <h3>Products Page</h3>
        <p>Search Params</p>
        <p>Category: {category}</p>
        <p>Page: {page}</p>
        <p>Sort: {sort}</p>
      </div>
    </>
  );
};

export default Products;
