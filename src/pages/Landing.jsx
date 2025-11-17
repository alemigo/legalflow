
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
// import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  TrendingUp,
  Clock,
  DollarSign,
  MessageSquare,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  PenTool // Added PenTool icon
} from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const authenticated = await base44.auth.isAuthenticated();
  //       setIsLoggedIn(authenticated);
  //       if (authenticated) {
  //         const userData = await base44.auth.me();
  //         setUser(userData);
  //       }
  //     } catch (error) {
  //       console.error("Authentication check failed:", error);
  //       setIsLoggedIn(false);
  //       setUser(null);
  //     }
  //   };
  //   checkAuth();
  // }, []);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Assisted Drafting and Smart Analytics",
      description: "Intelligent document work flow with AI-powered suggestions; track document status, edits, and legal insights"
    },
    {
      icon: Shield,
      title: "Proven NDAs, Transaction Based Professional Agreements",
      description: "Backed by 20 years and over $5b of transactions; leveraging databases with thousands of precedents"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create, send, and execute agreements in minutes, not days"
    },
    {
      icon: Users,
      title: "Collaborative, For Business Users or Lawyers",
      description: "Real-time collaboration with counterparties and team members"
    },
    {
      icon: Lock,
      title: "Tamper-Proof, Secure and Compliant",
      description: "Content and signature verification with cryptographic encryption ensures document integrity"
    },
    {
      icon: TrendingUp,
      title: "How It Should Be",
      description: "Consolidate Outlook, Word, Adobe, Docusign, Dropbox, and free up your lawyer to higher value tasks"
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "2 NDAs per month or 10 total",
        "Use our standardized or your own NDA",
        "Storage and document management",
        "Receive additional free usage for referrals",
        "Automated work flows and notifications"
      ],
      cta: "Start Free",
      popular: false,
      color: "slate"
    },
    {
      name: "Business",
      price: "$25",
      period: "/month",
      description: "For growing businesses",
      features: [
        "20 documents per month",
        "Access growing database of legal templates covering additional use cases",
        "Create custom templates for your teams using AI to leverage your database",
        "Team collaboration",
        "Smart analytics"
      ],
      cta: "Start 14-day trial",
      popular: true,
      color: "blue",
      promo: "special offer: save 25% with $250 annual billing for a limited time",
      hasSpecialOffer: true
    },
    {
      name: "Professional",
      price: "Contact sales for more",
      period: "",
      description: "For legal teams & enterprises",
      features: [
        "Enhanced AI services",
        "Access to professional provisions library",
        "Advanced administrator capabilities",
        "API integrations into your tech stack",
        "Priority support and discounted white glove attorney service"
      ],
      cta: "Coming Soon",
      popular: false,
      color: "indigo",
      isComingSoon: true
    }
  ];

  // const handleGetStarted = () => {
  //   if (isLoggedIn) {
  //     navigate(createPageUrl("Dashboard"));
  //   } else {
  //     navigate(createPageUrl("Dashboard")); // This will redirect to login if not authenticated
  //   }
  // };

  // const handleLoginClick = () => {
  //   if (isLoggedIn) {
  //     navigate(createPageUrl("Dashboard"));
  //   } else {
  //     base44.auth.redirectToLogin();
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904bfd2b3cbee331d007f27/3c0ad16c5_Logo2.JPG"
                alt="eNDA Logo"
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Pricing
              </a>
              <a href="#how-it-works" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                How it Works
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate(createPageUrl("Dashboard"))}
                    className="text-slate-700"
                  >
                    Go to Dashboard
                  </Button>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                    <div className="w-7 h-7 bg-slate-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {user?.full_name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {user?.full_name || user?.email}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="text-slate-700"
                  >
                    Log in
                  </Button>
                  <Button
                    className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full px-6"
                  >
                    Get started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003B73] via-[#0055A5] to-[#003B73] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMhYjovMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMyAxNGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUtMi0yIDItMi0uODk1LTItMnptLTYgMGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUtMi0yIDItMi0uODk1LTItMnoiLz48L2c+PC9nPg==')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#FF6B35] text-white border-0 mb-6 px-4 py-1">
                Revolutionizing Legal Agreements
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Quick and easy non-disclosure agreements
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                ... with or without a lawyer
              </p>
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                Consolidate your NDA and legal workflow into one AI-powered platform. High value, low cost,
                efficient document management that simplifies the entire legal process. Proven transaction based professional agreements leveraging two decades of institutional scale deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 text-slate-900 bg-white border-0"
                  />
                </div>
                <Button
                  className="bg-[#FF6B35] hover:bg-[#FF5722] text-white h-12 px-8 rounded-full font-semibold"
                >
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                  <span>Start with 2 free NDAs/month</span>
                </div>
              </div>
            </div>

            {/* Updated Right Side - Clean Visual Representation */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Floating Documents Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main Document Card */}
                  <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 w-80 transform rotate-0 transition-transform duration-500 hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-slate-200 rounded w-32 mb-2"></div>
                          <div className="h-2 bg-slate-100 rounded w-24"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 bg-slate-100 rounded w-full"></div>
                        <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                        <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                        <div className="h-2 bg-slate-100 rounded w-full"></div>
                        <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <div className="flex-1 h-8 bg-[#003B73] rounded flex items-center justify-center">
                          <PenTool className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 h-8 bg-emerald-500 rounded flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Security Badge */}
                  <div className="absolute top-10 right-10 bg-white rounded-xl shadow-xl p-4 transform rotate-6 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Shield className="w-8 h-8 text-emerald-500" />
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-16 mb-1"></div>
                        <div className="h-2 bg-slate-100 rounded w-12"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Speed Indicator */}
                  <div className="absolute bottom-16 left-10 bg-white rounded-xl shadow-xl p-4 transform -rotate-6">
                    <div className="flex items-center gap-2">
                      <Zap className="w-8 h-8 text-[#FF6B35]" />
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-16 mb-1"></div>
                        <div className="h-2 bg-slate-100 rounded w-12"></div>
                      </div>
                    </div>
                  </div>

                  {/* Background Decoration Circles */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">Thousands</p>
              <p className="text-sm text-slate-600">Agreements Leveraged</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">99.9%</p>
              <p className="text-sm text-slate-600">Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">5 min</p>
              <p className="text-sm text-slate-600">Average Time to Sign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-0 mb-4">
              Powerful Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to manage legal agreements
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From creation to execution, eNDA streamlines your entire legal workflow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#FF6B35] text-white border-0 mb-4">
              Simple, Transparent Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose the plan that fits your needs
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
            <div className="max-w-3xl mx-auto mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-lg text-blue-900 font-semibold mb-2">
                💰 Traditional NDAs cost hundreds per agreement
              </p>
              <p className="text-sm text-blue-700">
                Between attorney fees for drafting, review, negotiations, and execution, most businesses spend hundreds to thousands of dollars per NDA through traditional legal channels. eNDA automates this entire process at a fraction of the cost.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  tier.popular
                    ? 'border-blue-600 shadow-xl scale-105'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white border-0 px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {tier.hasSpecialOffer && (
                  <div className="absolute -top-6 -right-10 z-10">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#003B73] via-[#0055A5] to-[#003B73] rounded-full shadow-2xl transform -rotate-12"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center transform rotate-12 border-2 border-blue-200">
                        <div className="text-center px-2">
                          <div className="text-[#003B73] text-[8px] font-black uppercase tracking-tight leading-tight mb-0.5">
                            Special Offer
                          </div>
                          <div className="text-[#0055A5] text-xl font-black leading-none mb-0.5">
                            25%
                          </div>
                          <div className="text-[#003B73] text-xl font-black leading-none mb-1">
                            OFF
                          </div>
                          <div className="text-[#0055A5] text-[6.5px] font-bold uppercase tracking-tight leading-[1.2]">
                            First 100
                          </div>
                          <div className="text-[#0055A5] text-[6.5px] font-bold uppercase tracking-tight leading-[1.2]">
                            Customers
                          </div>
                          <div className="text-[#0055A5] text-[6.5px] font-bold uppercase tracking-tight leading-[1.2]">
                            That Claim It
                          </div>
                        </div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#003B73] to-[#0055A5] rounded-full blur-md opacity-30"></div>
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    {tier.name}
                  </p>
                  <div className="mb-2">
                    {tier.isComingSoon ? (
                      <Badge className="bg-purple-100 text-purple-700 border border-purple-300 text-xs px-2 py-0.5">
                        <Sparkles className="w-3 h-3 mr-1 inline" />
                        {tier.price}
                      </Badge>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-slate-900">{tier.price}</span>
                        {tier.period && <span className="text-slate-600">{tier.period}</span>}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{tier.description}</p>
                  {tier.promo && (
                    <div className="mt-3">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300 text-xs">
                        🎉 {tier.promo}
                      </Badge>
                    </div>
                  )}
                  {tier.popular && (
                    <p className="text-xs text-green-600 font-semibold mt-2">
                      💡 Save $6,000+ annually vs traditional legal fees
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    disabled={tier.isComingSoon}
                    className={`w-full h-12 ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : tier.isComingSoon
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Need more? We offer custom enterprise solutions.
            </p>
            <Button variant="outline" className="border-slate-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-0 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get started in 3 easy steps
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Create, collaborate, and execute agreements in minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Choose a Template
              </h3>
              <p className="text-slate-600">
                Select from our library of pre-built legal templates or upload your own. AI helps customize it to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Collaborate & Review
              </h3>
              <p className="text-slate-600">
                Invite counterparties to review and negotiate terms in real-time. Track changes with intelligent version control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Sign & Execute
              </h3>
              <p className="text-slate-600">
                Secure e-signatures with cryptographic verification. Get executed PDF instantly with tamper-proof audit trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to revolutionize your legal workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses managing their agreements smarter, faster, and more securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#FF6B35] hover:bg-[#FF5722] text-white h-14 px-8 text-lg rounded-full font-semibold"
            >
              Start free trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule demo
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit card required • 2 free NDAs/month • Cancel anytime
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-0 mb-4">
              Coming Soon
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              More legal agreements on the way
            </h2>
            <p className="text-slate-600">
              We're constantly expanding our template library to cover all your legal needs—helping your teams use a standardized baseline and stay productive
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Service Agreements', 'Employment Contracts', 'Consulting Agreements', 'Partnership Agreements'].map((item, idx) => (
              <Card key={idx} className="text-center border-2 border-dashed border-slate-300 bg-white">
                <CardContent className="pt-8 pb-6">
                  <FileText className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="font-semibold text-slate-700">{item}</p>
                  <Badge className="mt-2 bg-purple-100 text-purple-700 border-0 text-xs">
                    Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6904bfd2b3cbee331d007f27/3c0ad16c5_Logo2.JPG"
                alt="eNDA Logo"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 text-sm">
                Revolutionizing legal agreements with AI-powered technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@enda.com" className="hover:text-white transition-colors">hello@enda.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 eNDA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
