import { apiRequest } from "../api.js";
import {
  React,
  usePageTitle,
  Or,
  dh,
  PageLayout,
  Tf,
  R0,
  D0,
  Input,
  Textarea,
  $e,
} from "../site.jsx";
export default function ContactPage() {
  usePageTitle("Contact Us");
  const { toast: t } = Or(),
    [i, a] = React.useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    }),
    r = dh({
      mutationFn: async (d) => {
        return apiRequest("/api/contact", { method: "POST", body: d });
      },
      onSuccess: () => {
        (t({
          title: "Message sent!",
          description:
            "Thank you for contacting us. We'll get back to you soon.",
        }),
          a({
            name: "",
            email: "",
            subject: "",
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
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-6">
              {"Contact Us"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {
                "Have a question, a partnership proposal, or just want to say hello? We'd love to hear from you."
              }
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Tf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{"Visit Our Office"}</h3>
                  <p className="text-muted-foreground">
                    {"Shopping Mall, Efab Metropolis Estate,"}
                    <br />
                    {"Karsana, Abuja"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Tf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{"Training Center"}</h3>
                  <p className="text-muted-foreground">
                    {"Shopping Mall, CGC Quarry Junction,"}
                    <br />
                    {"Ushafa, Abuja"}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <R0 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{"Call Us"}</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+2348035786148"
                      className="hover:text-primary hover:underline"
                    >
                      {"+2348035786148"}
                    </a>
                    <br />
                    <a
                      href="tel:+2348099395191"
                      className="hover:text-primary hover:underline"
                    >
                      {"+2348099395191"}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <D0 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{"Email Us"}</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:info@fodady.org"
                      className="hover:text-primary hover:underline"
                    >
                      {"info@fodady.org"}
                    </a>
                    <br />
                    <a
                      href="mailto:partnerships@fodady.org"
                      className="hover:text-primary hover:underline"
                    >
                      {"partnerships@fodady.org"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 font-medium">
                {
                  "FODADY welcomes quiet, professional conversations with partners committed to education, rehabilitation, and institutional integrity."
                }
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">{"Send a Message"}</h2>
            <form aria-busy={r.isPending} onSubmit={l} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    {"Name"}
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={120}
                    placeholder="Your Name"
                    value={i.name}
                    onChange={(d) =>
                      a({
                        ...i,
                        name: d.target.value,
                      })
                    }
                    required={!0}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                  >
                    {"Email"}
                  </label>
                  <Input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="Your Email"
                    value={i.email}
                    onChange={(d) =>
                      a({
                        ...i,
                        email: d.target.value,
                      })
                    }
                    required={!0}
                    className="h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium"
                >
                  {"Subject"}
                </label>
                <Input
                  id="contact-subject"
                  name="subject"
                  minLength={2}
                  maxLength={200}
                  placeholder="Inquiry about..."
                  value={i.subject}
                  onChange={(d) =>
                    a({
                      ...i,
                      subject: d.target.value,
                    })
                  }
                  required={!0}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  {"Message"}
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  minLength={10}
                  maxLength={10000}
                  placeholder="How can we help?"
                  className="min-h-[150px]"
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
                className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12"
                disabled={r.isPending}
              >
                {r.isPending ? "Sending..." : "Send Message"}
              </$e>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
