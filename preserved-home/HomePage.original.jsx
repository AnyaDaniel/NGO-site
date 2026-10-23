import {
  React,
  usePageTitle,
  Z4,
  Ob,
  $4,
  Component_ra,
  E0,
  Component_ia,
  C0,
  PageLayout,
  Component_gb,
  yl,
  Fe,
  $e,
  W4,
  Gd,
  rm,
} from "../site.jsx";
export default function HomePage() {
  usePageTitle();
  const [t, i] = React.useState(0),
    a = [
      {
        image: Z4,
        title: (
          <React.Fragment>
            {"FODADY: "}
            <span className="text-accent">
              {"Bridging Knowledge Access"}
            </span>{" "}
            <br />
            {"and Rehabilitation"}
          </React.Fragment>
        ),
        description:
          "Strengthening libraries and learning for public and correctional communities across Nigeria.",
      },
      {
        image: Ob,
        title: (
          <React.Fragment>
            {"FODADY: "}
            <span className="text-accent">
              {"Using Libraries and Knowledge"}
            </span>
            {" to Support Education and Rehabilitation in Nigeria"}
          </React.Fragment>
        ),
        description:
          "Building public and correctional libraries that promote learning, rehabilitation, and social reintegration.",
      },
      {
        image: $4,
        title: (
          <React.Fragment>
            {"Inclusive Education & "}
            <br />
            <span className="text-accent">{"Community Learning"}</span>
          </React.Fragment>
        ),
        description:
          "Empowering able and differently-abled youths through inclusive education, rehabilitation, and community learning.",
      },
      {
        image: Ob,
        title: (
          <React.Fragment>
            {"Libraries + Structured Learning = "}
            <br />
            <span className="text-accent">{"A Better Future."}</span>
          </React.Fragment>
        ),
        description:
          "Libraries + structured learning = literacy, rehabilitation, reintegration, and long-term stability.",
      },
    ];
  React.useEffect(() => {
    const d = setInterval(() => {
      i((f) => (f + 1) % a.length);
    }, 5e3);
    return () => clearInterval(d);
  }, []);
  const r = [
      {
        label: "Youths Empowered Through Libraries",
        value: "3M+",
      },
      {
        label: "Libraries Built",
        value: "20",
      },
      {
        label: "Correctional Centres Reached",
        value: "30+",
      },
      {
        label: "States Covered",
        value: "18",
      },
    ],
    l = [
      {
        title: "Youth Learning & Development",
        description:
          "Support youth development through structured learning and literacy initiatives.",
        icon: Component_ra,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        title: "Correctional Libraries & Rehabilitation Programmes",
        description:
          "Establishing library and learning spaces within correctional facilities to support rehabilitation.",
        icon: E0,
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        title: "Public & Community Library Development",
        description:
          "Supporting public library infrastructure and learning access at community and Local Government levels.",
        icon: Component_ia,
        color: "text-green-600",
        bg: "bg-green-50",
      },
      {
        title: "Inclusive & Disability-Friendly Libraries",
        description:
          "Ensuring library spaces are accessible and inclusive for persons with disabilities.",
        icon: C0,
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
    ];
  return (
    <PageLayout>
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden bg-black">
        <Component_gb mode="wait">
          <yl.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 z-0"
            key={t}
          >
            <img
              src={a[t].image}
              alt="FODADY - Nigerian youths collaborating on community library projects"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/40" />
          </yl.div>
        </Component_gb>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Component_gb mode="wait">
            <yl.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="max-w-3xl text-white"
              key={t}
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {a[t].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {a[t].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Fe href="/get-involved">
                  <$e
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto"
                  >
                    {"Partner With Us"}
                  </$e>
                </Fe>
                <Fe href="/about">
                  <$e
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto"
                  >
                    {"Learn More"}
                  </$e>
                </Fe>
              </div>
            </yl.div>
          </Component_gb>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {a.map((d, f) => (
            <button
              onClick={() => i(f)}
              className={`w-3 h-3 rounded-full transition-all ${f === t ? "bg-accent w-8" : "bg-white/50 hover:bg-white"}`}
              key={f}
            />
          ))}
        </div>
      </section>
      <section className="py-12 bg-primary text-white -mt-2 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-accent">
            {"FODADY 3 Years Aim"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {r.map((d, f) => (
              <yl.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  delay: f * 0.1,
                }}
                className="p-4"
                key={f}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                  {d.value}
                </div>
                <div className="text-sm md:text-base opacity-80 uppercase tracking-wide font-medium">
                  {d.label}
                </div>
              </yl.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <img
                src={W4}
                alt="FODADY promoting unity and inclusion for able and disabled youths in Nigeria"
                loading="lazy"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] transform transition-transform hover:scale-[1.01]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                {"WHO WE ARE"}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                {"Libraries and Knowledge for Education and Rehabilitation"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {
                  "FODADY is a Nigerian non-governmental organisation focused on expanding access to libraries and knowledge-based learning as tools for education, rehabilitation, and long-term social development."
                }
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {
                  "FODADY's work has evolved from early community-focused initiatives into a disciplined, institution-ready model."
                }
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {
                  "We work with public institutions, correctional services, philanthropic partners, and communities to establish and strengthen library and learning spaces that support literacy, dignity, rehabilitation, and reintegration. Our approach prioritises institutional credibility, responsible engagement, and sustainable delivery over visibility or advocacy noise."
                }
              </p>
              <Fe href="/about">
                <$e
                  variant="link"
                  className="text-primary font-bold text-lg p-0 h-auto group"
                >
                  {"Read Our Full Story "}
                  <Gd className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </$e>
              </Fe>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
              {"What We Do"}
            </h2>
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {"1"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {"Public & Community Libraries"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "We support the development and revitalisation of public and community libraries at Local Government level to improve access to literacy resources, learning materials, and structured educational opportunities."
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {"2"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {"Correctional Libraries & Rehabilitation Learning"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "We establish and strengthen library and learning spaces within correctional facilities to support literacy, skills development, personal growth, and reintegration outcomes."
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {"3"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {"Inclusive & Disability-Friendly Library Design"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "We integrate inclusive, disability-friendly design to ensure equitable access to learning. FODADY is committed to ensuring that persons with disabilities can participate fully in learning environments. Our library spaces incorporate practical accessibility features and inclusive learning resources designed to promote dignity, independence, and equal opportunity."
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {"4"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {"Institutional Delivery Support"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "We work alongside statutory institutions to pilot scalable models, strengthen coordination, and improve delivery capacity for sustainable knowledge access initiatives."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                {"Learn more about our mission, approach, and current focus."}
              </p>
              <Fe href="/about">
                <$e className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 h-auto text-lg">
                  {"Learn More "}
                  <Gd className="ml-2 h-5 w-5" />
                </$e>
              </Fe>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {"Our Core Focus Areas"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {
                "We channel our resources and energy into four critical pillars of societal development."
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {l.map((d, f) => (
              <yl.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: !0,
                }}
                transition={{
                  delay: f * 0.1,
                }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start"
                key={f}
              >
                <div className={`p-4 rounded-lg ${d.bg} ${d.color} mb-6`}>
                  <d.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {d.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {d.description}
                </p>
                <Fe
                  href="/focus-areas"
                  className={`text-sm font-bold flex items-center ${d.color} hover:underline`}
                >
                  {"Learn more "}
                  <Gd className="ml-1 h-3 w-3" />
                </Fe>
              </yl.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-stretch overflow-hidden rounded-3xl bg-primary text-white shadow-2xl">
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              <img
                src={rm}
                alt="Vocational training and skill development in Nigerian correctional centres"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6">
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full self-start backdrop-blur-sm">
                {"PROJECT SPOTLIGHT"}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {"Second Chances: The Kuje Prison Rehabilitation Project"}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {
                  "Through our vocational training initiative and library projects, over 2500 inmates would have gained advanced certifications, learned advanced carpentry and tailoring skills, welding, agric, small scale manufacturing; giving them a viable path to reintegration upon release. We plan to build on existing programs to build the skills that make freedom sustainable."
                }
              </p>
              <div className="pt-4">
                <Fe href="/projects">
                  <$e className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    {"View All Projects"}
                  </$e>
                </Fe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {"Join Us in Building a Better Nigeria"}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {
              "Whether you donate, volunteer, or partner with us, your contribution creates tangible change in the lives of Nigerian youths."
            }
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Fe href="/donate">
              <$e
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg shadow-lg"
              >
                {"Make a Donation"}
              </$e>
            </Fe>
            <Fe href="/contact">
              <$e
                size="lg"
                variant="outline"
                className="bg-white border-gray-200 hover:bg-gray-50 text-gray-900 font-bold h-14 px-8 text-lg"
              >
                {"Become a Volunteer"}
              </$e>
            </Fe>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
