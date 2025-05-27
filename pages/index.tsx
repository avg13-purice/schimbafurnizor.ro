export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plătești prea mult la energie sau gaze?
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
    </div>
  )
}
