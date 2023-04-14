export default function GitHubStats() {
  return (
    <section id="git" className="w-full p-8">
      <h2 className="my-8 text-center text-4xl font-bold text-darkBlue">Github Stats</h2>

      <div id="githubstats" className="mx-auto max-w-[1000px]">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=abdullah43577&show_icons=true&locale=en&layout=compact" alt="github stat" className="mx-auto" />
        <img src="https://github-readme-stats.vercel.app/api?username=abdullah43577&show_icons=true&locale=en" alt="github stat" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=abdullah43577&" alt="github stat" />
      </div>
    </section>
  );
}
