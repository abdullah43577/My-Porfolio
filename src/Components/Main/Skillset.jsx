import skills from './skills';

export default function Skillsets() {
  const mySkills = skills.map((skill) => {
    return (
      <div key={skill.id} className="skill bg-glass text-veryDarkBlue">
        <img src={skill.img} alt={skill.alt} className="max-w-[40px]" />
        <span className="mt-2">{skill.skillSet}</span>
      </div>
    );
  });
  return (
    <section id="skill-set" className="p-8">
      <h2 className="text-center text-3xl font-bold text-darkBlue">Tools Used</h2>

      <div className="grid-ctn">{mySkills}</div>
    </section>
  );
}
