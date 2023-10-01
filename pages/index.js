import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DebitTab status tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="DebitTab Status Tracker" />
        <p className="description">
          All systems are currently up and running at <code>https:\/\/app.debittab.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
