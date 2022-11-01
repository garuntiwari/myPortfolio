import React from "react";
import projec1 from "../img/project1.jpg";
import projec2 from "../img/project2.jpg";
import projec3 from "../img/project3.jpg";
import projec4 from "../img/project4.jpg";

function Work() {
 const project = [
    {
    url:"https://shivanshuresume.netlify.app/",
    github:"https://github.com/Shivanshu-Upadhyay/Resume",
    img:projec1
 },
    {
    url:"https://physiomaticaproject2.netlify.app/",
    github:"https://github.com/Shivanshu-Upadhyay/physiomatica-website",
    img:projec2
 },
    {
    url:"https://heyshareme.netlify.app/login",
    github:"https://github.com/Shivanshu-Upadhyay/ShremeFrontend",
    img:projec3
 },
    {
    url:"https://heyshivanshu.netlify.app/api/home",
    github:"https://github.com/Shivanshu-Upadhyay/MyPortfolio",
    img:projec4
 },
]

  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Work</h2>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
        {project.map(item=><Card key={item.url} img={item.img} url={item.url} github={item.github} />)}
          
        </div>
      </div>
    </section>
  );
}


const Card = ({img,url,github})=>{
    return <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src={img} class="img-fluid" alt="" height="100%" />
      <div class="portfolio-info">
        <div class="portfolio-links  d-flex justify-content-between my-3" style={{width:"28%"}}>
        <a
            href={url}
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_gp7ouyyz.json"
              background="transparent"
              style={{ width: "30px", height: "30px" }}
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </a>
          <a
            href={github}
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_6HFXXE.json"
              background="transparent"
              style={{ width: "30px", height: "30px" }}
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Work;