import React, { Component } from "react";
import fernPfp from "../img/fern_pfp.png";

class Main extends Component {
  state = {
    transform: 0.1,
    secTransform: 0.1,
    secTransformAll: 0.1,
    hideLanding: false,
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
    activeWebsite: "salvex",
  };

  componentDidMount() {
    window.addEventListener("wheel", (e) => this.handleScroll(e));
    console.log(Object.keys(this.state.websites));
    console.log(Object.values(this.state.websites)[0].site);
    console.log(Object.values(this.state.websites)[0].roles);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = async (e) => {
    const landingContainer = document.querySelector(".outer-background");
    const secondaryContainer = document.querySelector(".websites-container");
    var websiteHead = document.getElementById("websiteHead");
    var websiteHeadbounds = websiteHead.getBoundingClientRect();
    var secondaryContainerbounds = secondaryContainer.getBoundingClientRect();

    secondaryContainer.style.display = "block";
    if (e.deltaY > 0) {
      if (this.state.hideLanding == true) {
        landingContainer.style.display = "none";
        secondaryContainer.style.opacity = "1";
      }
    }
    if (e.deltaY > 0 && 104857.6 > this.state.transform) {
      this.setState({
        transform: this.state.transform * 2,
      });
    } else if (e.deltaY < 0 && 1 < this.state.transform) {
      landingContainer.style.display = "block";
      landingContainer.style.opacity = "1";
      secondaryContainer.style.opacity = "0";
      this.setState({
        hideLanding: false,
        transform: this.state.transform / 2,
      });
    } else if (104857.5 < this.state.transform) {
      landingContainer.style.opacity = "0";
      this.setState({
        hideLanding: true,
      });
    }
    // if (this.state.hideLanding === true && e.deltaY > 0) {
    //   this.setState({
    //     secTransform: this.state.secTransform * 2,
    //   });
    //   if (websiteHeadbounds.top < -10) {
    //     this.setState(
    //       {
    //         secTransformAll: this.state.secTransformAll * 2,
    //       },
    //       () => {
    //         secondaryContainer.style.transform = `translateY(${
    //           this.state.secTransformAll * -0.25
    //         }px)`;
    //       }
    //     );
    //   }
    // }
    // if (this.state.hideLanding === true && e.deltaY < 0) {
    //   this.setState({
    //     secTransform: this.state.secTransform / 2,
    //   });
    //   if (websiteHeadbounds.top < -10) {
    //     this.setState(
    //       {
    //         secTransformAll: this.state.secTransformAll / 2,
    //       },
    //       () => {
    //         secondaryContainer.style.transform = `translateY(${
    //           this.state.secTransformAll / -0.25
    //         }px)`;
    //       }
    //     );
    //   }
    // }
    else {
      return;
    }
  };

  async handleWebsite(e, i) {
    const websiteTarget = document.querySelectorAll(".desc-header")[i];
    websiteTarget.style.opacity = 1;
    e[0].target.style.flex = "10";
  }

  offWebsite(e, i) {
    if (this.state.hideLanding === false) {
      return;
    }
    if (e[0].target.classList.contains("website")) {
      const websiteTarget = document.querySelectorAll(".desc-header")[i];
      websiteTarget.style.opacity = 0;
      e[0].target.style.flex = "1";
    } else return;
  }

  loadWebsite(website) {
    if (this.state.hideLanding === false) {
      return;
    }
    const currentWebsite = document.getElementById(
      this.state.activeWebsite.toString()
    );
    if (website === this.state.activeWebsite) {
      console.log("returning");
      return;
    } else if (currentWebsite.classList.contains("active-website")) {
      currentWebsite.classList.add("website");
      currentWebsite.classList.remove("active-website");
      currentWebsite.style.flex = "1";
    } else {
      this.setState({
        activeWebsite: website,
      });
    }
    this.setState({ activeWebsite: website });
  }

  redirect(site) {
    window.open(site);
  }

  render() {
    return (
      <React.Fragment>
        {/* Landing Page */}
        {/* Landing Page */}
        {/* Landing Page */}
        <div className="true-background">
          <main className="websites-container">
            <div>
              <section className="websites-list">
                <aside
                  id="websiteHead"
                  style={{
                    transform: `translateY(${
                      this.state.secTransform * -0.25
                    }px)`,
                  }}
                >
                  WEBSITES
                </aside>
                {Object.keys(this.state.websites).map((website, i) => (
                  <main
                    id={website}
                    className={
                      website === this.state.activeWebsite
                        ? "active-website"
                        : "website"
                    }
                    onMouseOver={(e) => this.handleWebsite([e], i)}
                    onMouseOut={(e) => this.offWebsite([e], i)}
                    onClick={() => this.loadWebsite(website)}
                  >
                    <section
                      className={
                        website === this.state.activeWebsite
                          ? "desc-container-active"
                          : "desc-container"
                      }
                    >
                      <h1
                        className="desc-header"
                        onClick={() =>
                          this.redirect(
                            Object.values(this.state.websites)[i].site
                          )
                        }
                      >
                        {website.toUpperCase()}
                      </h1>

                      <span className="desc-span">
                        {Object.values(this.state.websites)[i].roles}
                      </span>
                      <div className="desc-sub-container">
                        <p className="desc-sub">
                          {Object.values(this.state.websites)[i].description}
                        </p>
                      </div>
                    </section>
                  </main>
                ))}
              </section>
            </div>
          </main>
          <main className="main-background">
            <div
              className="outer-background"
              style={{
                transform: `translateY(${this.state.transform * -0.025}px)`,
              }}
            >
              <aside className="inner-background">
                {/* Main Header */}
                <main className="main-container">
                  <section
                    className="landing-header"
                    style={{
                      transform: `translateY(${this.state.transform * -0.5}px)`,
                    }}
                  >
                    <div>
                      <article>Patrick Torres</article>
                      <span>Aspiring full-stack engineer</span>
                    </div>
                  </section>
                  <section
                    className="profile-line"
                    style={{
                      transform: `translateY(${
                        this.state.transform * -0.05
                      }px)`,
                    }}
                  ></section>
                  <img
                    className="profile-pic"
                    src={fernPfp}
                    style={{
                      transform: `translateY(${this.state.transform * -0.1}px)`,
                    }}
                  />
                </main>
                {/* Fern Background */}
                <section className="fern-background"></section>
                {/* Fern Name */}
                <main
                  className="fern-container"
                  style={{
                    transform: `translateX(${this.state.transform * -1}px)`,
                  }}
                >
                  <h1>FERN</h1>
                </main>
                <table
                  className="fern-floating"
                  style={{
                    transform: `translateX(${this.state.transform * -0.25}px)`,
                  }}
                >
                  <tr>irebase</tr>
                  <tr>xpress</tr>
                  <tr>eact</tr>
                  <tr>ode</tr>
                </table>
                <section
                  className="stack-line"
                  style={{
                    transform: `translateY(${this.state.transform * 0.25}px)`,
                  }}
                ></section>
                <main
                  className="stack-container"
                  style={{
                    transform: `translateY(${this.state.transform}px)`,
                  }}
                >
                  <p>
                    The web development stack that I am most confident coding in
                    is FERN. Currently looking for internships in software
                    engineering to propel my future forward.{" "}
                  </p>
                </main>
              </aside>
            </div>
          </main>
        </div>

        {/* Landing Page */}
        {/* Landing Page */}
        {/* Landing Page */}

        {/* WEBSITES Page */}
        {/* WEBSITES Page */}
        {/* WEBSITES Page */}
      </React.Fragment>
    );
  }
}

export default Main;
