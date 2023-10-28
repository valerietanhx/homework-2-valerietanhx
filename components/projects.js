import styles from "@/app/page.module.css";
import ProjectCard from "@/components/projectCard";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.cardContainer}>
        <ProjectCard
          title="Copydf"
          liveSiteLink="https://valerietanhx.github.io/copydf/"
          githubRepoLink="https://github.com/valerietanhx/copydf"
          date="Sep 2023"
          items={[
            "Conceptualised and developed a web application to format text easily when copying and pasting from PDFs",
            "Built using React and Material UI",
          ]}
        />

        <ProjectCard
          title="The Sights and Spaces of MoMa"
          liveSiteLink="https://the-sights-and-spaces-of-moma.streamlit.app/"
          githubRepoLink="https://github.com/valerietanhx/moma-data-viz"
          date="Jun 2023 – Jul 2023"
          items={[
            "Directed exploratory analysis and visualisation of data on the Museum of Modern Art's artists and artworks",
            "Built using aiohttp, pandas, Plotly, HoloViews, and Streamlit with one other developer",
          ]}
        />

        <ProjectCard
          title="Queendom Sentiment Analysis"
          liveSiteLink=""
          githubRepoLink="https://github.com/valerietanhx/queendom-sentiment-analysis"
          date="May 2022 – Jun 2022"
          items={[
            "Scraped, cleaned, and analysed the sentiments of Reddit comments about the shows Queendom and Queendom 2",
            "Built using Reddit API (PRAW and Pushshift), pandas, NLTK, matplotlib, scikit-learn, and wordcloud",
          ]}
        />
      </div>
    </section>
  );
}
