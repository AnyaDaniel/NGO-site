import {
  React,
  usePageTitle,
  Component_ia,
  UA,
  Component_jr,
  ZA,
  PageLayout,
  fS,
} from "../site.jsx";
export default function ProjectsPage() {
  usePageTitle("Projects & Programmes");
  const t = [
    {
      title: "Public & Community Library Support",
      icon: Component_ia,
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
      description:
        "FODADY strengthens literacy and lifelong learning by supporting the development and revitalisation of public library spaces. This includes partnering with Local Government authorities, educators, and communities to improve access to reading, research and educational resources. Libraries serve as hubs for inclusive learning across age groups and community settings.",
      activities: [
        "Establishing or upgrading library facilities",
        "Supplying books, digital resources, and educational materials",
        "Supporting structured reading and literacy activities",
      ],
      outcomes: [
        "Expanded access to knowledge",
        "Increased community engagement in learning",
        "Replicable public library models",
      ],
    },
    {
      title: "Inclusive & Disability-Friendly Library Design",
      icon: UA,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      description:
        "FODADY ensures that library environments are accessible and welcoming to persons with disabilities, providing equitable access to learning opportunities.",
      activities: [
        "Ramps, wide aisles and accessible seating",
        "Sensory-considerate quiet spaces",
        "Large-print and assistive learning formats",
        "Staff orientation on inclusive service practices",
        "Collaboration with disability advocacy organisations",
      ],
      activitiesLabel: "Inclusion Features",
      outcomes: [
        "Increased participation of persons with disabilities in learning",
        "Inclusive library models that can be scaled",
      ],
    },
    {
      title: "Correctional Libraries & Rehabilitation-Focused Learning",
      icon: Component_jr,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      description:
        "We establish and support libraries within correctional facilities as part of structured rehabilitation interventions. These spaces promote literacy, personal development, and skills acquisition, contributing to reintegration outcomes.",
      activities: [
        "Setting up correctional library spaces",
        "Provision of vocational, educational, and life-skills resources",
        "Coordinating with correctional authorities and partners",
      ],
      outcomes: [
        "Improved access to educational materials in correctional settings",
        "Support for rehabilitation and reintegration pathways",
      ],
    },
    {
      title: "Institutional Readiness & Pilot Models",
      icon: ZA,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      description:
        "FODADY follows a disciplined, pilot-first strategy. Our pilot phase focuses on operational readiness, governance foundations, and testing scalable delivery models before broader rollout.",
      activities: [
        "Governance and accountability systems",
        "Data-informed pilot evaluation",
        "Partnership cultivation with public and philanthropic actors",
      ],
      activitiesLabel: "Focus Areas",
      outcomes: [
        "Evidence-based delivery models",
        "Strengthened credibility for scaled impact",
      ],
    },
  ];
  return (
    <PageLayout>
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            data-testid="text-projects-title"
          >
            {"Our Projects"}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {
              "Building knowledge access through libraries, inclusive design, rehabilitation learning, and scalable delivery models."
            }
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <img
          src={fS}
          alt="FODADY Core Programmes - Community & Public Libraries, Inclusive & Disability-Friendly Libraries, Correctional Education & Rehabilitation, Institutional Capacity Building"
          loading="lazy"
          className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg"
          data-testid="img-core-programmes"
        />
      </div>
      <div className="container mx-auto px-4 pb-16 space-y-16">
        {t.map((i, a) => {
          const Component_r = i.icon;
          return (
            <section
              className={`rounded-2xl border p-8 md:p-12 ${i.color}`}
              data-testid={`section-project-${a}`}
              key={a}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm ${i.iconColor}`}
                >
                  <Component_r className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {i.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
                {i.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {i.activitiesLabel || "Key Activities"}
                  </h3>
                  <ul className="space-y-3">
                    {i.activities.map((l, d) => (
                      <li className="flex items-start gap-3" key={d}>
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${i.iconColor.replace("text-", "bg-")}`}
                        />
                        <span className="text-muted-foreground">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {"Expected Outcomes"}
                  </h3>
                  <ul className="space-y-3">
                    {i.outcomes.map((l, d) => (
                      <li className="flex items-start gap-3" key={d}>
                        <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                        <span className="text-muted-foreground">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </PageLayout>
  );
}
