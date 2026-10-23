import {
  React,
  usePageTitle,
  PageLayout,
  rm,
  Component_sn,
  Component_ia,
  Component_ra,
  Af,
  hS,
  Fe,
  $e,
} from "../site.jsx";
export default function PrisonLibrariesPage() {
  return (
    usePageTitle("Correctional Libraries & Rehabilitation"),
    (
      <PageLayout>
        <div className="bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {"Prison Libraries & Rehabilitation"}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 opacity-90">
              {"Correctional Libraries & Rehabilitation Through Learning"}
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80 leading-relaxed mb-4">
              {
                "FODADY supports rehabilitation and reintegration in correctional facilities by strengthening access to libraries and structured learning programmes. Our work focuses on education as a practical tool for personal development, skills acquisition, and successful reintegration into society."
              }
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80 leading-relaxed">
              {
                "We approach correctional education with professionalism and restraint, working alongside relevant authorities to ensure programmes are constructive, dignified, and aligned with national rehabilitation objectives."
              }
            </p>
          </div>
        </div>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <img
                  src={rm}
                  alt="Vocational training and rehabilitation programmes in Nigerian correctional centres"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  {"Why Libraries in Correctional Facilities"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {
                    "Access to reading and learning materials has been shown globally to support:"
                  }
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {"Improved literacy and cognitive skills"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {"Reduced recidivism risk"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      {"Better post-release reintegration outcomes"}
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {
                    "Libraries provide a structured, low-risk environment for learning that complements vocational and counselling programmes already in place within correctional systems."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {"What FODADY Does"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {"In correctional settings, FODADY focuses on:"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="p-4 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                  <Component_ia className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {"Establishing or revitalising prison library spaces"}
                </h3>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="p-4 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                  <Component_ia className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {
                    "Curating relevant educational, vocational, and life-skills materials"
                  }
                </h3>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="p-4 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                  <Component_ra className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {"Supporting structured reading and learning activities"}
                </h3>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="p-4 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                  <Af className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {
                    "Strengthening coordination between correctional authorities and education partners"
                  }
                </h3>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-lg font-bold text-orange-600">
                {
                  "FODADY does not engage in advocacy or litigation and does not replace statutory correctional functions."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {"How We Work"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {"Our approach to correctional libraries is:"}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Component_ra className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {"Collaborative"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {
                    "Implemented in partnership with correctional services and relevant ministries"
                  }
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Component_ia className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {"Education-focused"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {"Prioritising literacy, learning, and skills development"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="h-16 w-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                  <Af className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {"Pilot-led"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {"Tested in carefully scoped facilities before replication"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Component_sn className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {"Accountable"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {"Monitored using simple, practical indicators"}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  {"Intended Outcomes"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {
                    "Correctional library programmes supported by FODADY aim to:"
                  }
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-lg">
                      {"Improve access to learning resources"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-lg">
                      {
                        "Support personal development and self-directed education"
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Component_sn className="h-6 w-6 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-lg">
                      {
                        "Contribute to safer facilities and better reintegration prospects"
                      }
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={hS}
                  alt="Library and reading resources inside a Nigerian correctional facility"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {"Positioning Note"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "FODADY's correctional work is rooted in education and rehabilitation, not activism. Our role is to support practical, constructive interventions that complement existing correctional and educational systems."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {"Support Our Correctional Libraries & Rehabilitation Initiative"}
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              {
                "Your donation can help provide books, training materials, and vocational equipment to correctional facilities across Nigeria."
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Fe href="/donate">
                <$e
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 text-lg"
                >
                  {"Donate Now"}
                </$e>
              </Fe>
              <Fe href="/contact">
                <$e
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold h-14 px-8 text-lg"
                >
                  {"Partner With Us"}
                </$e>
              </Fe>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  );
}
