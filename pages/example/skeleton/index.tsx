import SkeletonContainer from "containers/example/skeleton";

const ExampleSkeletonPage = () => <SkeletonContainer />;

export default ExampleSkeletonPage;

// export async function getServerSideProps({ req, res }: any) {
//   //   console.log("REQ", req);
//   //   console.log("RES", res);
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=100, stale-while-revalidate=59"
//   );

//   return {
//     props: {
//       time: new Date().toISOString(),
//     },
//   };
// }
