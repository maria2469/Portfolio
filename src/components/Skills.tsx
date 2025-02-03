const Skills = () => {
    return (
        <section id="skills" className="my-16 text-center">
            <h2 className="text-4xl font-bold text-purple-300 mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="skill-item">
                    <img src="/images/Html.png" alt="HTML" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">HTML</p>
                </div>
                <div className="skill-item">
                    <img src="/images/Css.png" alt="CSS" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">CSS</p>
                </div>
                <div className="skill-item">
                    <img src="/images/Javascript.jpg" alt="JavaScript" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">JavaScript</p>
                </div>
                <div className="skill-item">
                    <img src="/images/React.png" alt="React" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">React</p>
                </div>
                <div className="skill-item">
                    <img src="/images/tailwind.png" alt="Tailwind" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">Tailwind</p>
                </div>
                <div className="skill-item">
                    <img src="/images/Typescript.png" alt="JavaScript" className="mx-auto mb-4 h-16" />
                    <p className="text-lg text-gray-300">TypeScript</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
