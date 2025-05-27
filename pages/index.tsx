import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>schimbafurnizor.ro</title>
        <meta
          name="description"
          content="Verifică dacă plătești prea mult la energie și schimbă furnizorul simplu."
        />
      </Head>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-xl text-center bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plătești prea mult la energie?
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Încarcă o factură și îți arătăm dacă poți economisi bani prin schimbarea furnizorului.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Emailul tău"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Intră pe lista de așteptare
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
