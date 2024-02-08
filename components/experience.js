import styles from "@/app/page.module.css";
import ExperienceCard from "@/components/experienceCard";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2>Experience</h2>
      <div className={styles.cardContainer}>
        <ExperienceCard
          title="Data Reporter"
          company="The Daily Tar Heel"
          date="Sep 2023 – Dec 2023"
          items={[
            "Source for data and create data visualisations for newsworthy stories in Flourish and Datawrapper",
          ]}
        />

        <ExperienceCard
          title="Data Engineer Intern"
          company="Rimm Sustainability"
          date="May 2023 – Aug 2023"
          items={[
            "Increased amount of data collected by 24% by implementing strategic code logic improvements when revamping and deploying a web scraping pipeline using Selenium, FastAPI, Docker, and Google Cloud Platform",
            "Supported delivery of reliable data for business stakeholders and improvements in infrastructure robustness by developing an end-to-end ELT data pipeline using Dagster, dbt, and Great Expectations",
            "Collaborated with cross-functional teams to understand their business requirements and produce effective data cleaning solutions using Google Colab and pandas",
          ]}
        />

        <ExperienceCard
          title="CS1010S Teaching Assistant and Tutorial IC"
          company="National University of Singapore"
          date="Aug 2022 – May 2023"
          items={[
            "Conducted tutorials and consultations with personal materials on programming fundamentals in Python for classes of 10–12 students to develop foundational programming skills, with above-average student feedback",
            "Liaised with tutors to enforce speed and accuracy in awarding of students' tutorial participation points",
            "Developed and implemented a cleaner system with Google Sheets to expedite tutors' workflow for logging student absentees, substitute tutors, and other administrative details",
          ]}
        />

        <ExperienceCard
          title="Creative, E-commerce & Marketing Intern"
          company="Bizlink Centre Singapore Limited"
          date="Feb 2021 – Jun 2021"
          items={[
            "Enhanced company's presence on two online sales platforms, Lazada and Shopify, by executing SEO strategies, updating sales catalogues, and providing quality customer service",
            "Managed Instagram, Facebook, and email marketing channels by optimising posting schedule for engagement and responding to potential customers' queries to increase conversion rate",
            "Designed 44 graphics and accompanying copy suitable for a range of marketing channels to promote products",
            "Facilitated the procurement and delivery of products from international suppliers for sale to the public and major listed companies",
          ]}
        />
      </div>
    </section>
  );
}
