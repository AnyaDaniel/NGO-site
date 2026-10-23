import { apiRequest } from "../api.js";
import {
  React,
  usePageTitle,
  Or,
  dh,
  PageLayout,
  Nr,
  Component_wt,
  St,
  Fe,
  $e,
  Component_ra,
} from "../site.jsx";
export default function GetInvolvedPage() {
  usePageTitle("Get Involved");
  const { toast: t } = Or(),
    [i, a] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      areaOfInterest: "Correctional Libraries & Rehabilitation",
      message: "",
    }),
    r = dh({
      mutationFn: async (d) => {
        return apiRequest("/api/volunteer", { method: "POST", body: d });
      },
      onSuccess: () => {
        (t({
          title: "Application submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        }),
          a({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            areaOfInterest: "Correctional Libraries & Rehabilitation",
            message: "",
          }));
      },
      onError: (error) => {
        t({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    }),
    l = (d) => {
      (d.preventDefault(), r.mutate(i));
    };
  return (
    <PageLayout>
      <div className="bg-primary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {"Get Involved"}
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {
              "Your support fuels our mission. Together, we can build libraries, reform lives, and empower the youth."
            }
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-full">
                <Nr className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                {"Make a Donation"}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {
                "Every Naira counts. Your donation goes directly towards purchasing books for libraries, tools for vocational training, and resources for disability support."
              }
            </p>
            <Component_wt className="border-primary/10 shadow-lg mb-4">
              <St className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">
                  {"Admin Account Transfer Details"}
                </h3>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      {"Bank Name:"}
                    </span>
                    <span className="font-bold">{"Fidelity Bank"}</span>
                  </div>
                  <div className="flex flex-col border-b pb-2 gap-1">
                    <span className="text-muted-foreground">
                      {"Account Name:"}
                    </span>
                    <span className="font-bold text-primary">
                      {
                        "Foundation for the development of able and disable youths"
                      }
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      {"Account Number:"}
                    </span>
                    <span className="font-bold font-mono text-lg">
                      {"5601504190"}
                    </span>
                  </div>
                </div>
              </St>
            </Component_wt>
            <Component_wt className="border-primary/10 shadow-lg mb-8">
              <St className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">
                  {"Project Account Transfer Details"}
                </h3>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      {"Bank Name:"}
                    </span>
                    <span className="font-bold">
                      {"United Bank for Africa"}
                    </span>
                  </div>
                  <div className="flex flex-col border-b pb-2 gap-1">
                    <span className="text-muted-foreground">
                      {"Account Name:"}
                    </span>
                    <span className="font-bold text-primary">
                      {
                        "Foundation for the development of able and disable youths"
                      }
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-muted-foreground">
                      {"Account Number:"}
                    </span>
                    <span className="font-bold font-mono text-lg">
                      {"1029827599"}
                    </span>
                  </div>
                </div>
              </St>
            </Component_wt>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 font-medium mb-8">
              {
                "If your donation is meant to support our operations, please ensure it is sent to the "
              }
              <strong>{"admin account"}</strong>
              {
                ". Donations meant to support our projects should be sent to the "
              }
              <strong>{"project account"}</strong>
              {"."}
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-bold mb-2">{"Donate Online"}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {"Secure payment via Paystack"}
              </p>
              <Fe href="/donate">
                <$e className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12">
                  <Nr className="mr-2 h-4 w-4 fill-current" />
                  {" Donate Now"}
                </$e>
              </Fe>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Component_ra className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                {"Volunteer With Us"}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {
                "Join our network of passionate volunteers. Whether you're a teacher, lawyer, medical professional, or just passionate about change, we have a place for you."
              }
            </p>
            <form aria-busy={r.isPending} onSubmit={l} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    {"First Name"}
                  </label>
                  <input
                    id="first-name"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John"
                    value={i.firstName}
                    onChange={(d) =>
                      a({
                        ...i,
                        firstName: d.target.value,
                      })
                    }
                    required={!0}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    {"Last Name"}
                  </label>
                  <input
                    id="last-name"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Doe"
                    value={i.lastName}
                    onChange={(d) =>
                      a({
                        ...i,
                        lastName: d.target.value,
                      })
                    }
                    required={!0}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {"Email Address"}
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="john@example.com"
                  value={i.email}
                  onChange={(d) =>
                    a({
                      ...i,
                      email: d.target.value,
                    })
                  }
                  required={!0}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  {"Phone Number"}
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="+234..."
                  value={i.phone}
                  onChange={(d) =>
                    a({
                      ...i,
                      phone: d.target.value,
                    })
                  }
                  required={!0}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">
                  {"Area of Interest"}
                </label>
                <select
                  id="interest"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={i.areaOfInterest}
                  onChange={(d) =>
                    a({
                      ...i,
                      areaOfInterest: d.target.value,
                    })
                  }
                >
                  <option>{"Correctional Libraries & Rehabilitation"}</option>
                  <option>{"Library Development"}</option>
                  <option>{"Youth Mentorship"}</option>
                  <option>{"Disability Support"}</option>
                  <option>{"Training and Resource"}</option>
                  <option>{"General Admin/Logistics"}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {"Why do you want to volunteer?"}
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us a bit about yourself..."
                  value={i.message}
                  onChange={(d) =>
                    a({
                      ...i,
                      message: d.target.value,
                    })
                  }
                  required={!0}
                />
              </div>
              <$e
                type="submit"
                className="w-full font-bold h-12 text-base"
                disabled={r.isPending}
              >
                {r.isPending ? "Submitting..." : "Submit Application"}
              </$e>
            </form>
          </div>
        </div>
        <div className="mt-20 p-8 md:p-12 bg-gray-900 text-white rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {"Corporate Partnerships"}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {
              "Does your organization share our values? Partner with FODADY for CSR initiatives that have measurable, long-lasting impact."
            }
          </p>
          <Fe href="/contact">
            <$e
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              {"Contact Us for Partnership"}
            </$e>
          </Fe>
        </div>
      </div>
    </PageLayout>
  );
}
