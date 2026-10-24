
import { useState } from "react";

const initialForm = {
  age: "",
  sex: "male",
  bmi: "",
  children: "0",
  smoker: "no",
  region: "southeast",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.age ||
      !form.bmi ||
      Number(form.age) < 18 ||
      Number(form.age) > 100 ||
      Number(form.bmi) < 10 ||
      Number(form.bmi) > 80
    ) {
      setMessage("Enter a valid age (18–100) and BMI (10–80).");
      return;
    }

    setMessage(
      "Your form is ready! Connect the trained machine learning model to calculate your estimated insurance charge."
    );
  }

  return (
    <div className="min-h-screen bg-[#f5fbf8] text-[#173d35]">
      <header className="border-b border-emerald-100 bg-white/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-700 text-white">
              T
            </span>
            <span className="text-lg">
              TriRah<span className="text-emerald-700"> InsurePredict</span>
            </span>
          </a>
          <a
            href="#predict"
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Get Started
          </a>
        </nav>
      </header>

      <main className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 md:grid-cols-2 md:py-20">
        <section>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-800">
            SMART INSURANCE ESTIMATION
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Get Your Insurance{" "}
            <span className="text-emerald-700">Price Prediction</span>
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Explore estimated medical insurance costs using machine learning.
            Enter your details to prepare a personalized prediction.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["✓", "ML-powered analysis", "Built around insurance data"],
              ["↗", "Understand cost factors", "Explore factors linked to charges"],
              ["◎", "Simple and intuitive", "An easy-to-use prediction form"],
              ["◇", "Data-driven insights", "Designed for transparent analysis"],
            ].map(([icon, title, description]) => (
              <div key={title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                  {icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs leading-5 text-slate-500">
            Educational project only. Estimates are not official insurance
            quotes or financial advice.
          </p>
        </section>

        <section id="predict" className="scroll-mt-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  INSUREPREDICT
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Calculate Prediction
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Enter your details below.
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-xl text-emerald-800">
                ↗
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Age" htmlFor="age">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="18"
                    max="100"
                    value={form.age}
                    onChange={updateField}
                    placeholder="e.g. 25"
                    required
                    className={inputClass}
                  />
                </Field>

                <Field label="Gender" htmlFor="sex">
                  <select
                    id="sex"
                    name="sex"
                    value={form.sex}
                    onChange={updateField}
                    className={inputClass}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </Field>

                <Field label="Body Mass Index (BMI)" htmlFor="bmi">
                  <input
                    id="bmi"
                    name="bmi"
                    type="number"
                    min="10"
                    max="80"
                    step="0.1"
                    value={form.bmi}
                    onChange={updateField}
                    placeholder="e.g. 27.5"
                    required
                    className={inputClass}
                  />
                </Field>

                <Field label="Children" htmlFor="children">
                  <select
                    id="children"
                    name="children"
                    value={form.children}
                    onChange={updateField}
                    className={inputClass}
                  >
                    {[0, 1, 2, 3, 4, 5].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Smoking Status" htmlFor="smoker">
                  <select
                    id="smoker"
                    name="smoker"
                    value={form.smoker}
                    onChange={updateField}
                    className={inputClass}
                  >
                    <option value="no">Non-smoker</option>
                    <option value="yes">Smoker</option>
                  </select>
                </Field>

                <Field label="Region" htmlFor="region">
                  <select
                    id="region"
                    name="region"
                    value={form.region}
                    onChange={updateField}
                    className={inputClass}
                  >
                    <option value="southeast">Southeast</option>
                    <option value="southwest">Southwest</option>
                    <option value="northwest">Northwest</option>
                    <option value="northeast">Northeast</option>
                  </select>
                </Field>
              </div>

              {message && (
                <div
                  role="status"
                  className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-semibold text-white shadow-lg shadow-emerald-700/15 transition hover:bg-emerald-800"
              >
                Prepare My Prediction →
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Predictions will become available after the ML model API is
                connected.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white px-5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TriRah InsurePredict · Machine Learning
        Project
      </footer>
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}

export default App;

