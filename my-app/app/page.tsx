export default function Home() {
  return (
    <main className="min-h-screen bg-[#071322] text-white">
      
      {/* HERO SECTION */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          LIMITLESS
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-slate-300">
          Sports Complex LLC
        </p>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          Indoor batting cages and cheer gym built for athletes,
          teams, training, and community growth.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <button className="rounded-full bg-white px-8 py-4 font-bold text-[#071322] hover:bg-slate-300">
            Book Training
          </button>

          <button className="rounded-full border border-white px-8 py-4 font-bold hover:bg-white hover:text-[#071322]">
            Learn More
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          
          <h2 className="text-center text-4xl font-black">
            Our Programs
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-3xl font-bold">
                Batting Cages
              </h3>

              <p className="mt-4 text-slate-300">
                Indoor baseball and softball batting cages for
                private training, team rentals, and athlete
                development.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-3xl font-bold">
                Cheer Gym
              </h3>

              <p className="mt-4 text-slate-300">
                Tumbling, stunting, choreography, jumps,
                conditioning, and competitive cheer training.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white/5 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          
          <h2 className="text-4xl font-black">
            About Limitless
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Limitless Sports Complex LLC was created to give
            athletes a professional, safe, and inspiring place
            to train year-round. Our mission is to build a
            community-centered sports facility focused on growth,
            discipline, teamwork, and opportunity.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          
          <h2 className="text-4xl font-black">
            Contact Us
          </h2>

          <p className="mt-6 text-slate-300">
            El Paso, Texas
          </p>

          <p className="mt-2 text-slate-300">
            Add business phone number
          </p>

          <p className="mt-2 text-slate-300">
            Add business email
          </p>

        </div>
      </section>

    </main>
  );
}