import Head from 'next/head'
import Layout from '../src/components/layout/layout'
import List from '../src/components/user/list'

export const getStaticProps = async () => {
  const [users_data_response] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
  ])

  const [usersData] = await Promise.all([users_data_response.json()])
  // console.log(usersData)

  return {
    props: {
      dataUser: usersData,
    },
  }
}

function Beranda({ dataUser }) {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <List listuser={dataUser} />
      </div>
    </Layout>
  )
}

export default Beranda
