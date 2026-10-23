import {
  React,
  usePageTitle,
  PageLayout,
  Af,
  Xx,
  Component_jr,
  Component_ra,
  Fe,
  $e,
} from "../site.jsx";
export default function CurrentFocusPage() {
  return (
    usePageTitle("Current Focus & Partnerships"),
    (
      <PageLayout>
        <div className="bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {"Current Focus and Partnerships"}
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80 leading-relaxed">
              {
                "FODADY collaborates with government agencies, correctional authorities, and development partners to deliver sustainable educational and rehabilitation programmes."
              }
            </p>
          </div>
        </div>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Af className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Current Focus"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {"In its initial operational phase, FODADY is focused on:"}
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Establishing Institutional Readiness"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Building operational capacity to deliver sustainable programmes."
                    }
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Piloting Prison Libraries"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Launching rehabilitation-focused learning initiatives in correctional facilities."
                    }
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"National Library Pilot"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Engaging in a carefully scoped national library pilot programme."
                    }
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Developing Delivery Models"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Creating models applicable to both Local Government Areas and correctional facilities."
                    }
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground italic">
                {"This phase is intentionally modest and learning-driven."}
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Xx className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Partnerships"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {"FODADY collaborates with:"}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Component_jr className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {"Public & Correctional Institutions"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Component_ra className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {"Philanthropic Foundations"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Component_jr className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {"Corporate Social Responsibility Partners"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Xx className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {"Community-Based Stakeholders"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {
                  "FODADY collaborates with disability-focused organisations and community representatives to ensure library spaces are accessible, inclusive, and responsive to the needs of persons with disabilities."
                }
              </p>
              <p className="text-lg text-muted-foreground italic">
                {
                  "All partnerships are guided by clarity of roles, discretion, and shared commitment to long-term impact."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">{"Partner With Us"}</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {
                "We welcome partnerships with organizations committed to education, rehabilitation, and institutional integrity."
              }
            </p>
            <Fe href="/contact">
              <$e
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
              >
                {"Contact Us"}
              </$e>
            </Fe>
          </div>
        </section>
      </PageLayout>
    )
  );
}
