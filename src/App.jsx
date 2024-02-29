import conf from "./conf/conf"

function App() {
  return (
    <>
      <h1>EchoBlog: Amplify Your Voice</h1>
      <h3>Url: {conf.appwriteURL}</h3>
      <h3>Project id: {conf.appwriteProjectId}</h3>
      <h3>Database id: {conf.appwriteDatabaseId}</h3>
      <h3>Collection id: {conf.appwriteCollectionId}</h3>
      <h3>Bucket id: {conf.appwriteBucketId}</h3>
    </>
  )
}

export default App
