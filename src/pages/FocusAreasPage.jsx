import {
  React,
  usePageTitle,
  PageLayout,
  fS,
  Component_ia,
  hS,
  rm,
  E0,
  Component_ra,
  n6,
  i6,
  C0,
} from "../site.jsx";
export default function FocusAreasPage() {
  return (
    usePageTitle("Focus Areas"),
    (
      <PageLayout>
        <div className="bg-slate-50 py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {"Our Focus Areas"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {
                "We take a multi-dimensional approach to development, targeting the most critical areas that affect the future of our youth."
              }
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <img
            src={fS}
            alt="FODADY Core Programmes - Community & Public Libraries, Inclusive & Disability-Friendly Libraries, Correctional Education & Rehabilitation, Institutional Capacity Building"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        <div className="container mx-auto px-4 pb-16 space-y-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Component_ia className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Public and Community Library Development"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {
                  "FODADY supports public library infrastructure and learning access at community and Local Government levels through:"
                }
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  {"Establishment or revitalisation of modest library spaces"}
                </li>
                <li>{"Provision of relevant educational materials"}</li>
                <li>
                  {"Support for structured reading and learning activities"}
                </li>
                <li>
                  {
                    "Collaboration with education authorities and local stakeholders"
                  }
                </li>
              </ul>
              <p className="text-lg font-semibold text-primary mb-3">
                {"Intended Outcomes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>{"Improved access to literacy resources"}</li>
                <li>{"Increased community learning engagement"}</li>
                <li>{"Sustainable local library models"}</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={hS}
                alt="Community public library built by FODADY in Nigeria"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={rm}
                alt="Correctional library providing rehabilitation through reading in Nigeria"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <E0 className="h-8 w-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Correctional Libraries & Rehabilitation Programmes"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {"FODADY supports correctional education through:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  {"Establishment or revitalisation of prison library spaces"}
                </li>
                <li>
                  {
                    "Provision of educational, vocational, and life‑skills materials"
                  }
                </li>
                <li>{"Support for structured learning sessions"}</li>
                <li>
                  {
                    "Coordination with correctional authorities and education partners"
                  }
                </li>
              </ul>
              <p className="text-lg font-semibold text-primary mb-3">
                {"Intended Outcomes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>
                  {
                    "Improved literacy and learning access in correctional settings"
                  }
                </li>
                <li>
                  {"Support for personal development and skills acquisition"}
                </li>
                <li>
                  {
                    "Contribution to safer facilities and reintegration prospects"
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Component_ra className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Youth Learning & Development"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {
                  "FODADY supports youth literacy, academic support, and structured learning activities through community library spaces. These environments provide safe, resource-rich settings that encourage critical thinking, self-directed learning, and personal development."
                }
              </p>
              <p className="text-lg font-semibold text-primary mb-3">
                {"Expected Outcomes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>
                  {
                    "Improved literacy and learning engagement among young people"
                  }
                </li>
                <li>
                  {"Increased access to academic and career-support materials"}
                </li>
                <li>
                  {"Strengthened pathways toward education and employability"}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={n6}
                alt="Youth Learning & Development"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={i6}
                alt="Inclusive Library Development"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <C0 className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-primary">
                  {"Inclusive & Disability-Friendly Library Development"}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {
                  "FODADY is committed to ensuring that library spaces are inclusive and accessible to persons with disabilities. We integrate disability-friendly features into our library design and programming to promote dignity, participation, and equal access to learning."
                }
              </p>
              <p className="text-lg font-semibold text-primary mb-3">
                {"Our inclusion model includes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  {
                    "Physical accessibility adaptations (ramps, wide aisles, accessible seating layouts)"
                  }
                </li>
                <li>
                  {
                    "Quiet and sensory-considerate reading spaces where feasible"
                  }
                </li>
                <li>
                  {
                    "Accessible learning materials, including large-print texts and assistive-friendly formats"
                  }
                </li>
                <li>{"Staff orientation on inclusive service delivery"}</li>
                <li>
                  {
                    "Collaboration with disability-focused organisations and community representatives"
                  }
                </li>
              </ul>
              <p className="text-lg font-semibold text-primary mb-3">
                {"Intended Outcomes:"}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>
                  {
                    "Increased access to knowledge for persons with disabilities"
                  }
                </li>
                <li>
                  {"Greater sense of belonging and community participation"}
                </li>
                <li>
                  {
                    "Inclusive library models that can be replicated at Local Government level"
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}
