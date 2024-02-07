type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  console.log(params);
  return (
    <div>
      <h1>{params.slug ? "Detail product page" : "product Page"}</h1>
      {params.slug && (
        <>
          <h2>category : {params.slug[0]}</h2>
          <h2>gender : {params.slug[1]}</h2>
          <h2>merek : {params.slug[2]}</h2>
        </>
      )}
    </div>
  );
}
