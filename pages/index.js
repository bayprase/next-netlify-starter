import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome To WEB-API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! WEB-API" />
        <p className="description">
          You can take data from here for frontend examples.
        </p>
      </main>

      <Footer />
    </div>
  )
}
