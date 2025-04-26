import Head from 'next/head';

export default function Home() {
  return (
      <>
        <Head>
          <title>Wir sind bald zurück!</title>
          <meta name="description" content="Unser Shop zieht um und ist bald wieder da." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
              id="background"
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{ backgroundImage: `url('/BilderBuchBlumeTitel.jpg')` }}
          ></div>
          <div className="relative sm:mx-auto sm:w-full sm:max-w-md z-10 m-10">
            <div className="text-zinc-700 bg-stone-200 shadow-lg transform shadow-xl py-8 px-4 rounded-xl border border-stone-400">
              <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
                <h1 className="text-center text-3xl font-extrabold">
                  Wir sind bald zurück!
                </h1>
                <p className="m-6 text-center text-sm">
                  Unser Shop zieht gerade um und ist in Kürze wieder für dich da.
                  In der Zwischenzeit findest du uns hier:
                </p>
              </div>
                  <a
                      href="https://www.etsy.com/de/shop/Bilderbuchblume"
                      className="w-full flex items-center justify-center px-4 py-2 hover:text-rose-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Besuche unseren Etsy Shop
                  </a>

                  <a
                      href="https://www.instagram.com/bilderbuchblume/"
                      className="w-full flex items-center justify-center px-4 py-2 hover:text-rose-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Folge uns auf Instagram
                  </a>
            </div>
          </div>
        </main>
        <footer className="flex gap-[24px] flex-wrap items-center justify-center p-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bilderbuchblume</p>
        </footer>
      </>
  );
}