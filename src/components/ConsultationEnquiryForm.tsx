import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const interests = [
  "Luxury Residence",
  "Off-Plan Investment",
  "Commercial",
  "Land Plots",
  "Portfolio Strategy",
];
const budgets = ["Under $2M", "$2M – $5M", "$5M – $15M", "$15M – $50M", "$50M+"];

export function ConsultationEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(interests[0]);
  const [budget, setBudget] = useState(budgets[1]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-bronze/40 bg-graphite p-10 md:p-14 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-bronze mb-6">
          <Check className="text-bronze" size={22} aria-hidden />
        </div>
        <h3 className="font-display text-3xl text-warm-white">Thank you.</h3>
        <p className="mt-4 text-soft-gray max-w-md mx-auto">
          Your enquiry has been received. Eugenia's team will reach out within 24 hours to schedule
          a discreet consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-graphite border border-border p-8 md:p-12 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
      noValidate={false}
      aria-label="Consultation enquiry form"
    >
      <input type="hidden" name="interest" value={interest} />
      <input type="hidden" name="budget" value={budget} />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Nationality" name="nationality" required />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+971 52 840 1126"
        />

        <div>
          <fieldset>
            <legend className="block text-[10px] tracking-[0.3em] uppercase text-soft-gray mb-3">
              Investment Interest
            </legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Investment interest">
              {interests.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setInterest(i)}
                  aria-pressed={interest === i}
                  className={`px-4 py-2.5 text-xs tracking-wider border transition-all duration-300 min-h-[40px] ${
                    interest === i
                      ? "border-bronze bg-bronze/10 text-warm-white"
                      : "border-border text-soft-gray hover:text-warm-white hover:border-bronze/40"
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend className="block text-[10px] tracking-[0.3em] uppercase text-soft-gray mb-3">
              Budget Range
            </legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Budget range">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  aria-pressed={budget === b}
                  className={`px-4 py-2.5 text-xs tracking-wider border transition-all duration-300 min-h-[40px] ${
                    budget === b
                      ? "border-bronze bg-bronze/10 text-warm-white"
                      : "border-border text-soft-gray hover:text-warm-white hover:border-bronze/40"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="enquiry-message"
          className="block text-[10px] tracking-[0.3em] uppercase text-soft-gray mb-3"
        >
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          className="w-full bg-background border border-border focus:border-bronze outline-none px-4 py-3 text-sm text-warm-white placeholder:text-soft-gray/50 transition-colors duration-300 resize-none"
          placeholder="Tell us about your investment objectives, timeline, and preferred communities…"
        />
      </div>

      <button
        type="submit"
        className="mt-8 group inline-flex items-center gap-3 px-8 py-4 bg-bronze text-background text-[11px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-bronze-soft hover:shadow-[0_0_24px_rgba(184,129,90,0.25)] active:scale-[0.98] min-h-[48px]"
      >
        Request Consultation
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </button>
      <p className="mt-5 text-xs text-soft-gray">
        All enquiries are handled with the utmost discretion.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.3em] uppercase text-soft-gray mb-3"
      >
        {label}
        {required && (
          <span className="text-bronze ml-1" aria-hidden>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full bg-background border border-border focus:border-bronze outline-none px-4 py-3 text-sm text-warm-white transition-colors duration-300 min-h-[44px]"
      />
    </div>
  );
}
