import React from "react";
import leaf from "../../src/components/navbar/leaf.png";
const Profil = () => {
  return (
    <main className="ml-60 pt-20 max-h-screen overflow-auto">
      <div className="px-3 py-3">
        <div className="max-w-4xl mx-auto flex justify-center">
          <section className="w-10/12 px-6 flex flex-col bg-white rounded-r-3xl">
            <div className="flex justify-between items-center  border-b-2 mb-8">
              <div className="flex space-x-4 items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={leaf}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    alt="Admin Avatar"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">Eco Actor Admin</h3>
                  <p className="text-light text-gray-400">
                    admin@ecoactorwebsite.com
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <section>
              <h1 className="font-bold text-2xl">
                We are looking for talented individuals!
              </h1>
              <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                <p>Hi Eco Fans</p>
                <p>
                  We are in need of individuals passionate about environmental
                  sustainability and willing to contribute to our cause. As the
                  admin of our eco actor website, your role is crucial in
                  managing and facilitating the interaction between actors and
                  users.
                </p>
                <footer className="mt-12">
                  <p>Thanks & Regards,</p>
                  <p>The Eco Actor Admin</p>
                </footer>
              </article>
              <ul className="flex space-x-4 mt-12">
                {/* Insert action icons */}
              </ul>
            </section>
            <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
              <textarea
                className="w-full bg-gray-50 p-2 rounded-xl"
                placeholder="Type message here..."
                rows="3"
              ></textarea>
              <div className="flex items-center justify-between p-2">
                <button className="h-6 w-6 text-gray-400">
                  {/* Insert attachment icon */}
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl">
                  Send
                </button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profil;
