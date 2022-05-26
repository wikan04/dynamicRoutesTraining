import Head from 'next/head'
import Layout from '../../src/components/layout/layout'
import HalDetail from '../../src/components/user/detail'

export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  const [detail_response] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/' + id),
  ])

  const [detail] = await Promise.all([detail_response.json()])

  //   console.log(detail)

  return {
    props: {
      detail: detail,
    },
  }
}

function DetailUserPage({ detail }) {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <HalDetail detailData={detail} />
    </Layout>
  )
}

export default DetailUserPage
