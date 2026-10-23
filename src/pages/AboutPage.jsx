import {
  React,
  usePageTitle,
  PageLayout,
  Component_sn,
  Fe,
  $e,
} from "../site.jsx";
export default function AboutPage() {
  return (
    usePageTitle("About Us"),
    (
      <PageLayout>
        <div className="bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {"About FODADY"}
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {
                "Driven by compassion, sustained by integrity. We are building a legacy of empowerment for Nigeria."
              }
            </p>
          </div>
        </div>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                {"Who We Are"}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {
                    "FODADY is a Nigerian NGO incorporated in 2016. FODADY was founded to empower young people and support rehabilitation."
                  }
                </p>
                <p>
                  {
                    "As the organisation evolved, FODADY recognised that sustainable impact required structured, knowledge-based interventions. This led to a long-term vision to use libraries and access to knowledge as practical tools for education, rehabilitation, and social reintegration."
                  }
                </p>
                <p>
                  {
                    "From inception, FODADY recognised that national-scale institutional work requires more than good intentions. Rather than operate informally or below professional standards, the organisation deliberately deferred active operations until it could engage responsibly, with proper governance, professional setup, and alignment with credible national-level opportunities."
                  }
                </p>
                <p>
                  {
                    "FODADY is now activating operations in a careful pilot phase focused on building credibility, testing delivery models, and laying the foundation for sustainable impact across both public and correctional settings."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {"Our Mission"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {
                    "To strengthen access to libraries and knowledge-based learning across Nigeria, using education and skill acquisition as a tool for literacy, inclusivity, rehabilitation, reintegration, and long-term social development."
                  }
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {"Our Vision"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {
                    "A Nigeria where communities and correctional facilities alike have access to functional library, learning spaces and skills acquisition centers that support education, inclusivity, rehabilitation, dignity, and reintegration."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {"Our Core Values"}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Inclusion and Equity",
                  description:
                    "We ensure our programmes reach the underserved, including persons with disabilities",
                },
                {
                  name: "Discipline",
                  description:
                    "We grow responsibly and avoid premature expansion",
                },
                {
                  name: "Empowerment",
                  description:
                    "We equip individuals with knowledge and skills to transform their own lives",
                },
                {
                  name: "Accountability and Integrity",
                  description:
                    "We operate transparently and respect institutional boundaries",
                },
                {
                  name: "Excellence and Innovation",
                  description:
                    "We deliver quality programmes using proven and adaptive approaches",
                },
                {
                  name: "Partnership and Collaboration",
                  description:
                    "We work alongside public institutions and donors, not in competition with them",
                },
                {
                  name: "Sustainability",
                  description:
                    "We focus on long-term systems rather than one-off interventions",
                },
              ].map((t) => (
                <div
                  className="flex flex-col items-center space-y-3 w-64 p-4 bg-white/50 rounded-xl hover:bg-white hover:shadow-md transition-all"
                  key={t.name}
                >
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-md text-primary shrink-0">
                    <Component_sn className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{t.name}</h3>
                  {t.description && (
                    <p className="text-sm text-muted-foreground">
                      {t.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                {"Organizational Objectives"}
              </h2>
              <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
                <ul className="grid gap-6">
                  {[
                    "To expand equitable access to quality and inclusive education",
                    "To enhance correction services and youth rehabilitation",
                    "To establish and strengthen community libraries and learning hubs",
                    "To reduce youth vulnerability and recidivism",
                    "To promote disability inclusion and accessibility",
                    "To build youth leadership, civic engagement, and social responsibility",
                  ].map((t, i) => (
                    <li className="flex items-start gap-4" key={i}>
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <span className="text-lg text-muted-foreground pt-0.5">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                {"Our Approach"}
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                {
                  "FODADY adopts a delivery-focused approach designed for complex public-sector environments:"
                }
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Institutional Readiness"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Ensuring proper governance, coordination, and accountability."
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Pilot-First Strategy"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Testing library and rehabilitation models carefully before scaling."
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Collaboration"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Working with public institutions, correctional services, and community stakeholders."
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Learning & Replication"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Using pilots to inform scalable library and rehabilitation programmes across Local Government Areas and correctional facilities."
                    }
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground text-center mt-10 italic">
                {
                  "This approach allows FODADY to operate effectively while protecting partner confidence and public trust."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">{"Join Our Team"}</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {
                "We are always looking for passionate individuals to join us as volunteers or partners."
              }
            </p>
            <Fe href="/get-involved">
              <$e
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                {"Volunteer Now"}
              </$e>
            </Fe>
          </div>
        </section>
      </PageLayout>
    )
  );
}
