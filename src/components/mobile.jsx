import React, { Component } from "react";

class Mobile extends Component {
  state = {
    websites: {
      salvex: {
        site: "https://asksalvex.com/",
        roles:
          "Health focused project that applied leadership abilities under group setting, understanding of algorithm design and application integration of a populated database of 3000+ entries.",
        description:
          "Salvex is a self-diagnosis tool which maps user committed symptoms to matched diseases based on a calculated probability and returns the resultant disease and its definition to the user. The symptoms offered for user commitment and the diseases returned are ranked by the order of the calculated probability to help guide user input and to satisfy the requirement of consistent results. Creating using React, Cloud Firestore, Firebase Cloud Functions and Puppeteer. Most challenging part was the algorithm design to determine probability of a diesease based off user symtpoms. We calculate the matched disease based on a reoccuring sum of the symptom occurrence in respect to the disease by dividing by the overall disease occurance. At the end of the calculation we multiply by one hundred to get a percentage. This percentage is documented for each of the matching diseases based on the user symptom list. ",
      },
      shvrkboy: {
        site: "http://shvrkboy.com/",
        roles:
          "Business related project with applied understanding of web scraping, API creation and cloud functions.",
        description:
          "SHVRKBOY Focuses on my journey as a reseller with an ABOUT section that highlights how I started, TESTIMONIALS to prove legitamacy, SALES that fetches revenue from several third-party platforms, and FUTURE that discuesses where I see myself in five years. Both desktop and mobile designs are curated with unique paralax experiences. For best experience please view on desktop. Created using React.js, Express.js, Heroku, Cloud Firestore, Firebase Cloud Functions, and Puppeteer. Hardest challenge was scraping Twitter to create an in-house API to fetch for replies under a tweet. Learned that Puppeteer works for logins as well and can bypass more secured logins that prevent automation with the Puppeteer-extra-stealth library.",
      },
      psycheofpat: {
        site: "https://psycheofpat.com/",
        roles:
          "Personal project that reinforced stronger understanding of CSS web layouts.",
        description:
          "PSYCHEOFPAT is a website curated towards my favorite pieces of media. There I include a scrollable navigation of the media with the STORY, my THOUGHTS, and REVIEW of each piece. Developed a stronger understanding of flexbox and transitions using React without excessive need of other libraries. Heightened confident in manipulating the DOM, React states and refractoring.",
      },
      pso2scratch: {
        site: "https://pso2scratch.com/",
        roles:
          "Consumer driven project with updating database that scrapes new information off several webpages using in-house API.",
        description:
          "PSO2 Scratch houses a front-end database query to filter for cosmetic items with their respective images from popular online role playing game: Phantasy Star Online 2. The biggest challenge was the algorithm design. Web crawling through all the cosmetic pages on the official website proved taxing as each cosmetic item page on the official website was not coded consistently. Players find it hard to find specific items in-game through the marketplace and the official website does not help either as there is no query system. PSO2 Scratch eliminates those hinderances by placing all cosmetics items on one page with a query and group filter. ",
      },
    },

    more: "",
  };

  showMore = (website, i) => {
    document.getElementById(`m-more-button-${i}`).style.display = "none";
    document.getElementById(`m-less-button-${i}`).style.display = "block";

    document.getElementById(`m-web-${i}`).style.display = "block";
  };

  showLess = (website, i) => {
    document.getElementById(`m-more-button-${i}`).style.display = "block";
    document.getElementById(`m-less-button-${i}`).style.display = "none";
    document.getElementById(`m-web-${i}`).style.display = "none";
  };

  render() {
    return (
      <div className="m-body">
        <main className="m-cont-all-main">
          {/*           */}
          {/* Main Page */}
          {/*           */}
          <header>
            <section className="m-head-cont">
              <h1 className="m-head">PATRICK TORRES</h1>
              <article className="m-sub-head">
                aspiring full-stack engineer
              </article>
            </section>
          </header>

          <main className="m-cont">
            <div>
              <tr className="m-fern-tr">
                <ul>F</ul>
                <ul>E</ul>
                <ul>R</ul>
                <ul>N</ul>
              </tr>
            </div>
            <div>
              <tr className="m-fern-tr">
                <ul>irebase</ul>
                <ul>xpress</ul>
                <ul>eact</ul>
                <ul>ode</ul>
              </tr>
            </div>
          </main>

          <section className="m-skills-sub">
            <p>
              <span>Skills:</span> React, HTML, CSS, Python, Solidity, Three.js,
              Firebase, Cloud Firestore, Express, Heroku, Node, Git, Material
              UI, Bootstrap, Illustrator, Photoshop, Experience Design, Premiere
              Pro
            </p>
          </section>

          <section className="m-fern-sub">
            <p>
              The web development stack that I am most confident coding in is
              FERN. Currently looking for internships in software engineering to
              propel my future forward.
            </p>
          </section>
        </main>
        {/*           */}
        {/* Websites Page */}
        {/*           */}

        <main className="m-cont-all-web">
          <header>
            <section className="m-head-web-cont">
              <h1 className="m-head">WEBSITES</h1>
              <article className="m-sub-head">
                click on any of the titles to visit the webpage
              </article>
            </section>
          </header>

          <main>
            {Object.keys(this.state.websites).map((website, i) => (
              <section id={`m-web-sec-${i}`} className="m-web-sec">
                <a href={Object.values(this.state.websites)[i].site}>
                  {" "}
                  <h1 className="m-web-title">{website}</h1>
                </a>

                <p className="m-web-sub">
                  {Object.values(this.state.websites)[i].roles}
                </p>

                <article id={`m-web-${i}`}>
                  <p className="m-web-article">
                    {Object.values(this.state.websites)[i].description}
                  </p>
                </article>
                <button
                  className="m-web-button"
                  id={`m-more-button-${i}`}
                  onClick={() => this.showMore(website, i)}
                >
                  show more
                </button>
                <button
                  className="m-web-button"
                  id={`m-less-button-${i}`}
                  onClick={() => this.showLess(website, i)}
                >
                  show less
                </button>
              </section>
            ))}
          </main>
        </main>
      </div>
    );
  }
}

export default Mobile;
