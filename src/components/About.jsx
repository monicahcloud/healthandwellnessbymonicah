import aboutImg from "../assets/monicahwithbraids.jpg";

import Title from "./Title";

const About = () => {
  return (
    <section className=" pt-40 pb-5" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-2 lg:gap-4 xl:gap-6">
        <div className="relative">
          <div className="border-8 border-cyan-500 absolute -top-6 -left-6 w-80 h-full"></div>
          <article className=" md:block">
            <img
              src={aboutImg}
              className="relative z-10 shadow-lg h-80 lg:h-90"
            />
          </article>
        </div>
        <article>
          <h1 className=" text-7xl font-bold tracking-wider text-cyan-600">
            Monicah <span className="text-slate-800"> Cloud</span>{" "}
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Health and Wellness Coach
          </p>
          <p className="mt-4 text-1xl text-slate-700  tracking-wide">
            Hi, I’m Monicah —a multi-passionate creative and tech-savvy
            professional who thrives at the intersection of purpose, strategy,
            and wellness. I bring my expertise in web development, digital
            marketing, and branding to help businesses grow and show up with
            clarity, impact, and authenticity.{" "}
          </p>

          <p className="mt-4 text-1xl text-slate-700 tracking-wide">
            As an Independent Associate with ASEA, I’m passionate about
            supporting others on their journey to optimal health and
            wellness—naturally. I share cutting-edge cellular health solutions
            that empower the body to heal and perform at its highest level,
            helping people feel better, live better, and show up as their best
            selves. I’m also the founder of Crown of Locs and Natural Hair LLC
            and VitaNova Designs and Marketing Inc., where I blend creativity
            with business sense to deliver powerful brand experiences and
            digital solutions.{" "}
          </p>

          <p className="mt-4 text-1xl text-slate-700  tracking-wide">
            Whether I’m designing websites using tools like React and Next.js or
            helping someone restore their health from the inside out, I lead
            with heart, intention, and excellence. I believe in creating space
            for people to grow and glow—because I am who God says I am, and I
            help others walk boldly in that truth too.
          </p>
        </article>
      </div>
      <section className="pt-36 align-element " id="">
        <Title
          text=" ASEA Redox Cell Signaling Supplement"
          subtitle="A Life Changing Techology"
        />
        <div className="py-10 grid lg:grid-cols-1 xl:grid-cols-1 gap-4">
          <img
            src="https://www.aseaglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fessential-bundles-slide-1.216079fe.jpg&w=750&q=75"
            alt="ASEA Redox"
            className="w-full object-cover rounded-t-lg h-96"
          />
          <div className="capitalize p-8">
            <h2 className="text-4xl text-cyan-600 tracking-wide font-medium">
              ASEA
            </h2>
            <p className="mt-4 text-slate-700 leading-loose">
              {" "}
              ASEA is a wellness company driven by the power of human potential.
              Headquartered in Utah and serving a global community, ASEA is a
              trailblazer in cellular health. As the first to introduce
              groundbreaking redox signaling molecules, ASEA helps your cells
              function in harmony, as they were designed to. With each product
              and every opportunity, ASEA is committed to empowering individuals
              and enhancing lives.
            </p>

            <div className="mt-4 flex gap-x-20 justify-between">
              {/* <a href={url} target="_blank">
                      <TbWorldWww className="h-14 w-14 text-cyan-600 hover:text-cyan-400 duration-300" />
                    </a>{' '} */}
              <a
                href="https://shop.aseaglobal.com/products?sponsorId=A8SSHBGEAA&at=true&m=7/"
                target="_blank">
                <span>
                  {" "}
                  <h3 className="pt-5 text-2xl text-cyan-500 font-bold">
                    Lucrative Business Opportunity
                  </h3>
                </span>{" "}
              </a>
              <a
                href="https://shop.aseaglobal.com/products?sponsorId=A8SSHBGEAA&m=7"
                target="_blank">
                <span>
                  {" "}
                  <h3 className="pt-5 text-2xl text-cyan-500 font-bold">
                    Preferred Customer
                  </h3>
                </span>{" "}
              </a>
            </div>
          </div>
        </div>{" "}
      </section>
    </section>
  );
};

export default About;
