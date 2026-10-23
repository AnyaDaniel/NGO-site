import {
  React,
  usePageTitle,
  PageLayout,
  d6,
  l6,
  c6,
  u6,
  Fe,
  $e,
} from "../site.jsx";
export default function LeadershipPage() {
  return (
    usePageTitle("Leadership & Governance"),
    (
      <PageLayout>
        <div className="bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {"Leadership & Governance"}
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {"Competence, discretion, and accountability in leadership."}
            </p>
          </div>
        </div>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                {"Leadership"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "FODADY is led by a small founding team with experience in civic engagement, programme coordination, and stakeholder management. The organisation prioritises competence, discretion, and accountability in its leadership."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              {"Board of Trustees"}
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {
                  "FODADY is governed by a Board of Trustees responsible for providing strategic oversight, safeguarding institutional integrity, and ensuring alignment with the organisation's mission. The Board operates independently from management and provides guidance on long-term direction, compliance, and risk management. Trustees meet periodically to review progress, approve strategic priorities, and uphold accountability standards appropriate to the organisation's stage of growth."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "As FODADY scales, the Board will continue to expand its expertise in governance, finance, education, and institutional partnerships to strengthen oversight capacity."
                }
              </p>
            </div>
            <div className="flex justify-center mb-16">
              <div className="text-center max-w-sm">
                <div className="h-64 w-full bg-gray-200 rounded-xl mb-4 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center text-muted-foreground">
                    {"Placeholder Photo"}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {"Professor (Mrs) Bilikisu Aminu Shinkafi"}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {"Chairman, Board of Trustees"}
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                {"Governance Framework"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {
                  "FODADY operates under a structured governance framework designed to promote transparency, accountability, and responsible growth. The organisation maintains:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6">
                <li>
                  {
                    "Clear separation between governance and management functions"
                  }
                </li>
                <li>{"Defined financial controls and approval processes"}</li>
                <li>{"Segregation of operational and programme funds"}</li>
                <li>{"Documented decision-making and reporting procedures"}</li>
                <li>{"Compliance with applicable regulatory requirements"}</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "The organisation follows a pilot-first growth strategy, ensuring that operational systems, partnerships, and financial controls are established before scaling programme activities. This disciplined approach protects stakeholder confidence and supports sustainable long-term impact."
                }
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-48 flex-shrink-0">
                <div className="h-64 w-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={d6}
                    alt="Mr. Innocent Obiora"
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {"Mr. Innocent Obiora"}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {"Executive Director"}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Mr. Innocent Obiora is the Executive Director of FODADY and provides overall strategic and operational leadership for the organisation. He holds a Master's degree in Facility Management and an Executive MBA, bringing a strong foundation in infrastructure planning, systems management, and organisational development. His professional background supports FODADY's disciplined, delivery-focused approach to library development and institutional coordination. He oversees governance standards, partnerships, and pilot implementation strategy, ensuring that projects are structured, sustainable, and aligned with public-sector collaboration frameworks."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-48 flex-shrink-0">
                <div className="h-64 w-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={l6}
                    alt="Mrs. Jessica Odozi"
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {"Mrs. Jessica Odozi"}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {"Programme Director"}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Mrs. Jessica Odozi serves as Programme Director at FODADY, overseeing programme design, coordination, and stakeholder engagement. She holds a Master's degree in Mass Communication and brings expertise in communication strategy, community engagement, and programme documentation. Her role ensures that FODADY's library and rehabilitation initiatives are clearly structured, effectively implemented, and responsibly communicated to partners and beneficiaries. She supports monitoring processes and maintains alignment between programme activities and institutional objectives."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-48 flex-shrink-0">
                <div className="h-64 w-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={c6}
                    alt="Mr. Abraham Oghani"
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {"Mr. Abraham Oghani"}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {"Technology & Systems Lead"}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Mr. Abraham Oghani holds a Bachelor's degree in Computer Engineering and supports FODADY's technology integration and systems development. He contributes to digital resource planning, basic IT infrastructure, and data coordination for library initiatives. His expertise strengthens FODADY's capacity to incorporate technology-enabled learning solutions and maintain reliable internal systems that support operational efficiency and programme monitoring."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-48 flex-shrink-0">
                <div className="h-64 w-48 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={u6}
                    alt="Mrs. Anita Okeleke"
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {"Mrs. Anita Okeleke"}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {"Finance & Compliance Lead"}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Mrs. Anita Okeleke holds a Bachelor's degree in Accounting and supports FODADY's financial management and compliance systems. She contributes to budgeting processes, financial controls, and record management to ensure transparency and responsible stewardship of resources. Her role supports the organisation's commitment to accountability, separation of operational and programme funds, and sound financial governance practices."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                {"Governance"}
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                {"FODADY is committed to strong governance, including:"}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {"1"}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Clear Financial Controls"}
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      "Transparent and accountable financial management practices."
                    }
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {"2"}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Separation of Funds"}
                  </h3>
                  <p className="text-muted-foreground">
                    {"Clear separation of operational and project funds."}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {"3"}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {"Independent Oversight"}
                  </h3>
                  <p className="text-muted-foreground">
                    {"Independent oversight as the organisation scales."}
                  </p>
                </div>
              </div>
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
