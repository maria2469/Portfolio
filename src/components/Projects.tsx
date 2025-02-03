const Projects = () => {
    return (
        <section id="projects" className="my-16">
            <h2 className="text-4xl font-bold text-purple-300 mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* First Aid App */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/Firstaid.png"
                        alt="First Aid App"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">First Aid App</h3>
                    <p className="mt-2 text-gray-400">
                        An app designed to provide both Image and text support to get first-aid instructions with AI integration and location services.
                    </p>
                    <a
                        href="https://github.com/maria2469/App-life-aid"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>

                {/* MakaTalk App */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/Makatalk.png"
                        alt="MakaTalk App"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">MakaTalk</h3>
                    <p className="mt-2 text-gray-400">
                        An AI-powered sign language interpreter with webcam-based sign validation. Allows users to learn sign language with gifs, pictures, and AI integration.
                    </p>
                    <a
                        href="https://github.com/kevin-v96/makoton-ai-tutor"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>

                {/* Carbon Hub */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/CarbonHub.png"
                        alt="Carbon Hub"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">Carbon Hub</h3>
                    <p className="mt-2 text-gray-400">
                        A responsive website designed to track and reduce carbon emissions. Allows user to use a carbon calculator to help in carbon trading.
                    </p>
                    <a
                        href="https://github.com/Vishal-Rauniyar/CarbonHub"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>

                {/* AI Tutor */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/Aistudy.png"
                        alt="AI Tutor"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">AI Tutor</h3>
                    <p className="mt-2 text-gray-400">
                        An AI-powered tutor built with Next.js to help students learn more effectively using API integration.
                    </p>
                    <a
                        href="https://github.com/maria2469/AI-TUTOR"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>

                {/* Pantry App */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/Pantry.png"
                        alt="Pantry App"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">Pantry App</h3>
                    <p className="mt-2 text-gray-400">
                        A web app to manage pantry items with Firebase for data storage, allowing users to add/remove items.
                    </p>
                    <a
                        href="https://github.com/maria2469/pantry"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>

                {/* Currency Converter */}
                <div className="bg-purple-800 p-6 rounded-xl shadow-md">
                    <img
                        src="/images/Currency Converter.png"
                        alt="Currency Converter"
                        className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-2xl font-semibold text-white mt-4">Currency Converter</h3>
                    <p className="mt-2 text-gray-400">
                        A currency converter app that uses APIs for accurate exchange rates and conversions.
                    </p>
                    <a
                        href="https://github.com/maria2469/currency-converter"
                        className="text-white bg-purple-600 mt-4 block hover:bg-purple-700 inline-block border-2 border-purple-300 rounded-lg px-4 py-2"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
