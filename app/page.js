import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";
import { AlertTriangle, ArrowDown, BarChart3, Brain, CheckCircle, Palette, Target, Users2 } from "lucide-react";
export default function Home() {
  const problems = [
    "Generic forms look unprofessional",
    "Over-complicated tools are too much for a single waitlist",
    "Manually tracking feedback from emails and social media is a mess",
  ];
   const features = [
    {
      icon: Palette,
      title: "Clean, Customizable Forms",
      description: "Create beautiful, brand-free waitlist forms in seconds. No design skills needed."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Our AI analyzes feature requests and feedback to give you a clear summary of what to build next."
    },
    {
      icon: Users2,
      title: "Community Integration",
      description: "Automatically invite new sign-ups to your Discord community to build early traction and engage with your core users."
    },
    {
      icon: BarChart3,
      title: "Simple Analytics",
      description: "Track every sign-up and referral source from one intuitive dashboard. Stop flying blind."
    }
  ];
  return (
    <>
      <section
        className="min-h-screen
 flex items-center justify-center overflow-hidden relative"
      >
        {/* Decorative gradient blur */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-600 opacity-30 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="container mx-auto px-6 py-20 z-10">
          <div className="text-center items-center space-y-8 animate-fade-in flex flex-col lg:flex-row">
            <div className="">
              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight tracking-tight bg-gradient-to-r from-teal-300 via-purple-300 to-pink-400 text-transparent bg-clip-text">
                Launch with a{" "}
                <span className="text-yellow-300 drop-shadow-md">
                  waitlist{" "}
                </span>
                that builds your product for you.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                <span className="text-cyan-300 font-medium">LaunchList</span> is
                the AI-powered waitlist form builder for indie hackers — it not
                only collects emails and feature requests but also gives you{" "}
                <span className="text-pink-300">insights</span> on what to build
                first.
              </p>
            </div>

            <WaitlistForm />
          </div>

          {/* Arrow animation */}
          <ArrowDown className="w-fit mx-auto mt-8 animate-bounce text-cyan-300" />
        </div>
      </section>
      <section className="py-24 relative text-white ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            {/* Problem Statement */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-teal-300 via-purple-300 to-pink-400 text-transparent bg-clip-text">
                Stop guessing what your users want.{" "}
                <span className="">
                  Start building what they need.
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  >
                    <AlertTriangle className="w-8 h-8 text-red-400 mb-4 mx-auto" />
                    <p className="text-gray-200">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative p-12 space-y-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-semibold">The Solution</h3>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  LaunchList provides a single, elegant solution to capture
                  interest, validate your idea, and gather critical feedback
                  before you even launch. No more scattered tools or messy
                  processes.
                </p>
                <div className="flex justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything you need to launch with{" "}
              <span className="text-yellow-300 drop-shadow-md">CONFIDENCE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto bg-gradient-to-r from-teal-300 via-purple-300 to-pink-400 text-transparent bg-clip-text">
              LaunchList saves you time and gives you the insights to build a product people will love.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 border border-border rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed bg-gradient-to-r from-teal-300 via-purple-300 to-pink-400 text-transparent bg-clip-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
