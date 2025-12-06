
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Shield,
  Zap,
  Users,
  CheckCircle,
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
  PlayCircle,
  Linkedin,
  Twitter,
  PenTool, // Added PenTool icon
  User
} from "lucide-react";
import '../App.css';

export default function Landing() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Unified agreement work flow with AI-powered features",
      description: "End to end platform speeds up contract creation, enhance negotiations with intuitive comparisons, legal insights, and smart analytics across your private repository"
    },
    {
      icon: Shield,
      title: "Proven Transaction-Based Professional NDAs and Agreements",
      description: "Backed by 20 years and over $5b of transactions; leveraging databases with thousands of precedents"
    },
    {
      icon: Zap,
      title: "Lightning Fast and Standardized",
      description: "Create, send, and execute agreements in minutes, not days"
    },
    {
      icon: Users,
      title: "For Business Users and Lawyers",
      description: "Intuitive, real-time collaborative platform, scale effortlessly with your needs"
    },
    {
      icon: Lock,
      title: "Tamper-Proof, Secure and Compliant",
      description: "Content and signature verification with cryptographic encryption ensures document integrity"
    },
    {
      icon: TrendingUp,
      title: "How It Should Be",
      description: "Unifies fragmented processes from Outlook, Word, Adobe, Docusign, Dropbox, and free up your lawyer to higher value tasks"
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "2 NDAs per month or 10 total",
        "Receive additional free usage for referrals",
        "Use our standardized or your own NDA",
        "Storage and document management / analytics",
        "Unified automated work flows and notifications"
      ],
      cta: "Start Free (no credit card)",
      popular: false,
      color: "slate"
    },
    {
      name: "Business",
      priceMonthly: "$25",
      priceAnnual: "$250",
      period: "/month",
      description: "For growing businesses",
      features: [
        "20 documents per month",
        "Access growing database of legal templates covering multiple high frequency use cases (employment agreements, exclusivity, distribution, marketing, etc)",
        "Efficiently scale legal - create templates for your teams easily with AI, spend less time generating and processing docs",
        "Smart analytics leverage your central repository; manage, search, extract insights"
      ],
      cta: "Subscribe",
      popular: true,
      color: "blue",
    },
    {
      name: "Professional",
      priceMonthly: "Contact sales for more",
      priceAnnual: "Contact sales for more",
      period: "",
      description: "For legal teams & enterprises",
      features: [
        "Enhanced AI services",
        "Access to professional provisions library",
        "Advanced administrator capabilities and team collaboration",
        "API integrations into your tech stack (CRM, HRM, payments etc)",
        "Priority support and white glove attorney access with our partner ecosystem"
      ],
      cta: "Coming Soon",
      popular: false,
      color: "indigo",
      isComingSoon: true
    }
  ];

  const calculateSavings = (monthlyPrice, annualPrice) => {
    const monthlyNum = parseFloat(monthlyPrice.replace('$', ''));
    const annualNum = parseFloat(annualPrice.replace('$', ''));
    if (monthlyNum > 0 && annualNum > 0) {
      const yearlyMonthly = monthlyNum * 12;
      const savings = ((yearlyMonthly - annualNum) / yearlyMonthly * 100).toFixed(0);
      return parseInt(savings);
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">

              <a href="#" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              <img
                src="endalogo.jpg"
                alt="eNDA Logo"
                className="h-10 w-auto"
              /></a>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3 rounded">
                  <Button
                    variant="ghost"
                    onClick={() => (window.location.href = "https://enda.legal-flow.app/dashboard")}
                    className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  >
                    Dashboard
                  </Button>
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
                {/* email input removed */}
                <Button
                  className="bg-[#FF6B35] hover:bg-[#FF5722] text-white h-12 px-8 rounded-full font-semibold"
                  onClick={() => (window.location.href = "https://enda.legal-flow.app/getstarted")}
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
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">Lawyer-approved</p>
              <p className="text-sm text-slate-600">000's of Agreements Leveraged</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">90%+</p>
              <p className="text-sm text-slate-600">Time savings - minutes vs. weeks</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 mb-1">100%</p>
              <p className="text-sm text-slate-600">Easy recall and transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white ">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div 
            className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            <div className="inline-block mb-6 px-4 py-2 text-[#003366] bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium tracking-wide">
                THE FUTURE OF NDA MANAGEMENT
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Struggling with slow,<br />costly NDAs?
            </h1>
            
            <p className="text-xl md:text-2xl text-[#003366] mb-12 leading-relaxed font-light">
              Drafts in Word. Emails flying back and forth. Redlines and edits piling up across versions. Signatures in DocuSign. 
              Conversions to PDF. Stored in Dropbox or local folders. Has it been fully executed?!?!
            </p>

            <Button 
              size="lg" 
              className="bg-[#003366]  text-white hover:bg-white/90 hover:text-[#003366] px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
            >
            <a href="#problem-summary">
              See How eNDA Solves This</a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
      </section>

      {/* Problem Section - Complex Workflow */}
      <section id="problem-summary" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="problem"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.problem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
                THE OLD WAY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                The Cumbersome Reality
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                On top of the multiple tools used, it's hard to know what's final, what's expired, or who's signed what with who and what has been agreed to!
              </p>
            </div>

            {/* GIF/Video Placeholder - For Future Upload */}
            <Card className="p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-2xl">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '400px' }}>
              <img src="workflow.gif" alt="Workfow" className="w-full h-full object-cover" />
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {['Multiple Tools', 'Version Confusion', 'Email Chains', 'Lost Documents', 'Time Consuming'].map((pain) => (
                  <div key={pain} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    {pain}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-16 bg-gradient-to-r from-[#003B73] via-[#0055A5] to-[#003B73]  relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent 70%)',
            backgroundSize: '50px 50px'
          }} />
        </div> */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            There's a Better Way
          </h2>
          <p className="text-xl text-white/90 font-light">
            Meet eNDA Technologies — the all-in-one platform for drafting, editing, 
            agreeing, and managing NDAs in minutes (and any agreement) - the Evolution of Negotiated Digital Agreements
          </p>
        </div>
      </section>

      {/* Solution Section - eNDA Workflow */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="solution"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-6">
                THE eNDA WAY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                Simple. Fast. Intelligent.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                One platform. One workflow. Complete control. Useful for NDAs and any agreement, especially high frequency ones!
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-[#0066CC] shadow-2xl relative overflow-hidden">
              {/* Visual representation of negotiation */}
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden p-12 md:p-20">
                <div className="flex items-center justify-center gap-8 md:gap-16">
                  {/* Person 1 */}
                  <div className="flex flex-col items-center animate-in slide-in-from-left duration-1000">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#003366] to-[#0066CC] rounded-full flex items-center justify-center shadow-xl">
                      <User className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </div>
                    <p className="mt-4 text-sm md:text-base font-semibold text-[#003366]">Party A</p>
                  </div>

                  {/* eNDA Logo/Connection */}
                  <div className="flex flex-col items-center animate-in zoom-in duration-1000 delay-300">
                    <div className="relative">
                      {/* Connection lines */}
                      <div className="absolute top-1/2 -left-12 md:-left-20 w-12 md:w-20 h-0.5 bg-gradient-to-r from-[#0066CC] to-transparent" />
                      <div className="absolute top-1/2 -right-12 md:-right-20 w-12 md:w-20 h-0.5 bg-gradient-to-l from-[#0066CC] to-transparent" />
                      
                      {/* Central eNDA element */}
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#0066CC] to-[#0099FF] rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                        <div className="text-center">
                          <FileText className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-bold text-xs md:text-sm">eNDA</p>
                        </div>
                      </div>
                      
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-2xl bg-[#0066CC] opacity-20 animate-ping" />
                    </div>
                    <p className="mt-4 text-xs md:text-sm font-medium text-[#0066CC]">ONE PLATFORM</p>
                  </div>

                  {/* Person 2 */}
                  <div className="flex flex-col items-center animate-in slide-in-from-right duration-1000">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#003366] to-[#0066CC] rounded-full flex items-center justify-center shadow-xl">
                      <User className="w-10 h-10 md:w-14 md:h-14 text-white" />
                    </div>
                    <p className="mt-4 text-sm md:text-base font-semibold text-[#003366]">Party B</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {['AI-Features', 'Single Platform for All Steps', 'Automated Notifications', 'Faster Execution', 'Smart Management'].map((benefit) => (
                  <div key={benefit} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features-summary" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="features"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                How eNDA Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to transform your NDA process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Draft with Intelligence",
                  description: "Choose a trusted, lawyer-approved template or upload your own with AI assistance to extract from real agreements; easily customize and process using our technology."
                },
                {
                  icon: Zap,
                  title: "Toggle & Optimize",
                  description: "Simply toggle on/off provisions such as non-solicit or non-circumvention from our master library or your own dedicated set; use AI to analyze drafts / exchanges as you wish."
                },
                {
                  icon: Users,
                  title: "Agree & Sign",
                  description: "Invite your counterparty, agree, and sign — all in one place. No more email chains or version confusion."
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 border-gray-100"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0099FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>






{/* 

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
                Select from our library of pre-built legal templates or upload your own using AI to quickly standardize it to our legal flow, enrich your data and customize it to your needs.
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
      </section> */}


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
                Between attorney fees for drafting, review, negotiations, and execution, most businesses spend hundreds to thousands of dollars on NDAs through traditional legal channels utilizing a cumbersome process requiring several applications. eNDA automates this entire process at a fraction of the time and cost with a simple subcription model rather than a per hour or per document cost.
              </p>
            </div>

            {/* Billing Period Toggle */}
            <div className="flex justify-center mb-12 mt-8">
              <div className="inline-flex rounded-full border-2 border-slate-300 bg-white p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                    billingPeriod === 'annual'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Annual
                  <Badge className="absolute -top-3 -right-2 bg-emerald-500 text-white border-0 text-xs px-2 py-0.5">
                    Save 17%
                  </Badge>
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => {
              const displayPrice = billingPeriod === 'monthly' ? tier.priceMonthly : tier.priceAnnual;
              const savings = billingPeriod === 'annual' ? calculateSavings(tier.priceMonthly, tier.priceAnnual) : null;
              return (
              <Card
                key={index}
                className={`relative border-2 ${
                  tier.hasSpecialOffer ? 'z-30' : 'z-0'} 
                  ${
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
                          {/* <div className="text-[#0055A5] text-[6.5px] font-bold uppercase tracking-tight leading-[1.2]">
                            That Claim It
                          </div> */}
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
                        {displayPrice}
                      </Badge>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-slate-900">{displayPrice}</span>
                        {billingPeriod === 'monthly' && tier.period && <span className="text-slate-600">{tier.period}</span>}
                        {billingPeriod === 'annual' && <span className="text-slate-600">/year</span>}
                      </>
                    )}
                    {savings && (
                      <div className="mt-2">
                        <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                          Save {savings}%
                        </Badge>
                      </div>
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
                      💡 Save thousands annually vs traditional legal fees
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
                    onClick={() => (window.location.href = "https://enda.legal-flow.app/getstarted?plan=" + encodeURIComponent(tier.name) + "&term=" + billingPeriod)}
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
            );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Need more? We offer custom enterprise solutions.
            </p>
            <Button variant="outline" className="border-slate-300">

            <a href="mailto:sales@legal-flow.app">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003B73] via-[#0055A5] to-[#003B73] text-white">
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
              onClick={() => (window.location.href = "https://enda.legal-flow.app/getstarted")}
            >
              Start free 
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {/* <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule demo
            </Button> */}
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
              We're constantly expanding our template library to cover your higher frequency legal needs — helping your teams use a standardized baseline and stay productive
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Service Agreements', 'Employment Contracts', 'Exclusivity Agreements', 'Real Estate/Insurance', 'Consulting Agreements', 'Influencer License Agreements', 'Selling Agreements', 'Partnership Agreements'].map((item, idx) => (
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
                src="endalogo.jpg"
                alt="eNDA Logo"
                className="h-10 w-auto"
              />
              <p className="text-slate-400 text-sm">
                Revolutionizing legal agreements with AI-powered technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
                  <a href="mailto:support@legal-flow.app" className="hover:text-white transition-colors">support@legal-flow.app</a>
                </li>
                {/* <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                </li> */}
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
