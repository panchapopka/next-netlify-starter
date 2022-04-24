import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chemistpim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Chemistpim coming soon" />
        <p className="">
          </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
