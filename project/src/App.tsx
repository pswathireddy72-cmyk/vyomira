import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Zap, TrendingUp, Users, Award, ChevronRight, Play, Menu, X, Lock, Globe, BarChart3, Activity, CheckCircle, Bot, Brain, Target, Gamepad2, Moon, Sun, Mic, Contrast as DragDropContext, AlertTriangle, Coins, Settings, Layers, MessageSquare, Trophy, Star, Radar, Palette, Headphones } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [complianceScore, setComplianceScore] = useState(87);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'solutions', label: 'Solutions', icon: Shield },
    { id: 'platform', label: 'Platform', icon: BarChart3 },
    { id: 'features', label: 'Advanced Features', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Activity },
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: 'Cloud Cost Optimization',
      description: 'AI-powered cost analysis and savings recommendations across AWS, GCP, and Azure.',
      features: ['Real-time cost monitoring', 'Anomaly detection', 'Automated recommendations'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'Auto-Remediation Engine',
      description: 'AI-powered automatic fixes for security misconfigurations and policy violations.',
      features: ['Auto-fix S3 buckets', 'IAM role optimization', 'Policy-driven controls'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance Automation',
      description: 'Comprehensive security posture management with automated compliance checks.',
      features: ['PCI DSS, ISO 27001, SOC2', 'Risk scoring dashboards', 'Audit-ready reports'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'Predictive Workload Optimization',
      description: 'AI forecasts scaling needs and recommends optimal instance types and timing.',
      features: ['Workload forecasting', 'Reserved instance planning', 'Spot instance calculator'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'DevOps Managed Services',
      description: 'End-to-end DevOps consulting and embedded team solutions.',
      features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerts'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Target,
      title: 'Cross-Cloud Optimization',
      description: 'Intelligent workload placement across AWS, GCP, and Azure for optimal performance.',
      features: ['Multi-cloud analysis', 'Workload migration suggestions', 'Performance benchmarking'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Cloud Billing Partner',
      description: 'Simplified cloud billing management and cost consolidation.',
      features: ['Unified billing dashboard', 'Multi-cloud cost tracking', 'Payment optimization'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const advancedFeatures = [
    {
      icon: Bot,
      title: 'Compliance Copilot',
      description: 'AI chatbot that answers compliance queries instantly',
      demo: '"Am I SOC2 compliant today?" → "Yes, 94% compliant with 3 minor issues"'
    },
    {
      icon: Gamepad2,
      title: 'Gamified Compliance',
      description: 'Achievement system with progress tracking and badges',
      demo: 'Gold Badge: 100% PCI Compliant for 90 days'
    },
    {
      icon: Radar,
      title: 'Compliance Radar Map',
      description: 'Visual heat map showing risk zones across your infrastructure',
      demo: 'Interactive radar with real-time risk visualization'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant',
      description: 'Voice-activated queries for instant insights',
      demo: '"What\'s my AWS spend this week?" → "$12,450 (15% below budget)"'
    },
    {
      icon: Layers,
      title: 'White-Label Platform',
      description: 'MSPs can rebrand and resell the platform to their clients',
      demo: 'Custom branding, multi-tenant architecture'
    },
    {
      icon: Coins,
      title: 'Smart Billing Assistant',
      description: 'AI predicts cloud bills 30 days in advance with optimization tips',
      demo: 'Predicted bill: $8,200 (Save $1,800 with reserved instances)'
    }
  ];

  const roleBasedViews = [
    {
      role: 'CFO',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: ['Cost reports & ROI', 'Budget tracking', 'Savings analytics', 'Financial forecasting']
    },
    {
      role: 'CISO',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: ['Security posture', 'Compliance status', 'Risk assessment', 'Audit reports']
    },
    {
      role: 'DevOps Engineer',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      features: ['Live metrics', 'Alert management', 'Performance monitoring', 'Automation tools']
    },
    {
      role: 'Compliance Officer',
      icon: CheckCircle,
      color: 'from-purple-500 to-indigo-500',
      features: ['Framework tracking', 'Audit trails', 'Policy management', 'Certification status']
    }
  ];
  const stats = [
    { number: '500+', label: 'Cloud Environments Secured', icon: Shield },
    { number: '$50M+', label: 'Cloud Costs Optimized', icon: TrendingUp },
    { number: '99.9%', label: 'Compliance Success Rate', icon: CheckCircle },
    { number: '24/7', label: 'DevOps Support', icon: Activity }
  ];

  const AIAssistant = () => (
    <div className={`fixed bottom-6 right-6 z-50 ${showAIAssistant ? 'w-80' : 'w-16'} transition-all duration-300`}>
      {showAIAssistant ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6" />
                <span className="font-semibold">Vyomira AI</span>
              </div>
              <button
                onClick={() => setShowAIAssistant(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-600">Hi! I'm your AI assistant. Try asking:</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• "What's my AWS spend this month?"</li>
                  <li>• "Am I SOC2 compliant?"</li>
                  <li>• "Show security risks"</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAIAssistant(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <Bot className="w-8 h-8" />
        </button>
      )}
    </div>
  );

  const renderNavigation = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md shadow-lg` : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Vyomira</h1>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tech Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-200 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? `${isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'}` 
                    : `${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => setActiveSection('login')}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Login
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t py-4 space-y-2`}>
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? `${isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'}` 
                    : `${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                setActiveSection('login');
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-medium"
            >
              <Lock className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );

  const renderHome = () => (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-900 via-blue-800 to-green-800'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Optimize.</span>
                <span className="block text-green-400">Secure.</span>
                <span className="block text-blue-400">Comply.</span>
                <span className="block text-cyan-400">Pay Smarter.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                The first platform uniting Cloud Cost Optimization, Security Compliance, 
                Billing Management, and DevOps Services in a single ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <span>Request Demo</span>
              </button>
              <button className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-3">
                <ChevronRight className="w-6 h-6" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compliance Score Widget */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 relative">
              <div className={`absolute inset-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">{complianceScore}%</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Compliant</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Your Compliance Score</h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Gold Badge Achievement Unlocked!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4 transform group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{stat.number}</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Complete Cloud Solutions</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              From cost optimization to security compliance, we provide everything you need for cloud success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.slice(0, 6).map((solution, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{solution.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderFeatures = () => (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Advanced Features</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Next-generation AI-powered features that set Vyomira apart from traditional cloud management platforms.
          </p>
        </div>

        {/* Role-Based Dashboards */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center mb-12`}>Role-Based Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleBasedViews.map((view, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 border shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${view.color} rounded-xl mb-4`}>
                  <view.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{view.role}</h3>
                <ul className="space-y-2">
                  {view.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center mb-12`}>AI-Powered Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{feature.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{feature.description}</p>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-mono`}>{feature.demo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className={`${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'} rounded-3xl p-12 text-center`}>
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Try Our Self-Service Demo</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto`}>
            Explore a fully interactive sandbox with real AWS/GCP data. No signup required - just click and discover the power of Vyomira.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Launch Interactive Demo</span>
            </button>
            <button className={`border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200`}>
              <span>Watch Video Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>About Vyomira</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            We're revolutionizing cloud operations by combining cost optimization, security compliance, 
            and managed services into a single, powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Our Mission</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              To empower organizations with intelligent cloud solutions that reduce costs, enhance security, 
              ensure compliance, and accelerate digital transformation through expert DevOps services.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              We believe that cloud management shouldn't be complex, expensive, or risky. Our platform 
              brings together the best of AI-driven insights, automated compliance, and human expertise.
            </p>
          </div>
          <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-green-50'} p-8 rounded-2xl`}>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Why Choose Vyomira?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Unified Platform:</strong>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>All your cloud needs in one place</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>AI-Powered:</strong>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>Intelligent insights and automation</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Expert Support:</strong>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>24/7 DevOps and security expertise</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Proven Results:</strong>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>50M+ in cloud costs optimized</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Cloud Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of organizations already saving millions with Vyomira.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );

  const renderSolutions = () => (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Our Solutions</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Comprehensive cloud solutions designed to optimize costs, enhance security, 
            ensure compliance, and accelerate your digital transformation.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl mb-6`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>{solution.title}</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`}>
                  Learn More
                </button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-gradient-to-br ${solution.color.replace('500', '50')} p-8 rounded-2xl`}>
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="text-white/60 text-center">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPlatform = () => (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Vyomira Platform</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Experience the power of our integrated platform with AI-driven insights, 
            real-time monitoring, and comprehensive compliance automation.
          </p>
        </div>

        {/* Platform Overview */}
        <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-purple-900' : 'bg-gradient-to-br from-gray-900 to-blue-900'} rounded-3xl p-8 md:p-12 mb-16 text-white overflow-hidden relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Unified Cloud Intelligence</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our platform combines advanced AI with expert human insights to deliver 
                  unparalleled cloud optimization and security management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Multi-cloud cost optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Automated security compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Predictive analytics & insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">Integrated billing management</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-medium">Cost Savings This Month</span>
                    <span className="text-green-400 font-bold">$47,250</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-medium">Security Score</span>
                    <span className="text-blue-400 font-bold">98/100</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-medium">Compliance Status</span>
                    <span className="text-green-400 font-bold">✓ Compliant</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-medium">Active Resources</span>
                    <span className="text-cyan-400 font-bold">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>See It In Action</h2>
          <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-green-50'} rounded-2xl p-12`}>
            <div className={`aspect-video ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg flex items-center justify-center mb-8`}>
              <div className="text-center">
                <Play className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Platform Demo Video</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Watch how Vyomira transforms cloud operations</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Watch Demo
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of unified cloud management with a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Contact Us</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Ready to transform your cloud operations? Get in touch with our experts 
            and discover how Vyomira can help you optimize, secure, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Get In Touch</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Our team of cloud experts is ready to help you achieve your goals. 
                Whether you need a demo, have questions, or want to discuss your specific requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>24/7 Support</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Round-the-clock assistance for all your cloud needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-900' : 'bg-green-100'} rounded-lg flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Expert Consultation</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Dedicated cloud architects and security specialists</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'} rounded-lg flex items-center justify-center`}>
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Rapid Implementation</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Quick setup and integration with your existing systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>First Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Last Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Company</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>How can we help?</label>
                <select className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}>
                  <option>Request a Demo</option>
                  <option>Cost Optimization Consultation</option>
                  <option>Security Assessment</option>
                  <option>DevOps Services</option>
                  <option>Billing Management</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Message</label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Tell us about your cloud challenges and goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLogin = () => (
    <div className={`min-h-screen pt-24 pb-16 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Welcome Back</h1>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Sign in to access your Vyomira dashboard</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
              <input
                type="email"
                className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Password</label>
              <input
                type="password"
                className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>Or continue with</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-colors`}>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Google SSO</span>
              </button>
              <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-colors`}>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Microsoft Azure AD</span>
              </button>
              <button className={`w-full flex items-center justify-center px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-colors`}>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Okta</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                Request Access
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'about':
        return renderAbout();
      case 'solutions':
        return renderSolutions();
      case 'platform':
        return renderPlatform();
      case 'features':
        return renderFeatures();
      case 'contact':
        return renderContact();
      case 'login':
        return renderLogin();
      default:
        return renderHome();
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {renderNavigation()}
      <AIAssistant />
      <main>
        {renderCurrentSection()}
      </main>
      
      {/* Footer */}
      {activeSection !== 'login' && (
        <footer className={`${isDarkMode ? 'bg-black' : 'bg-gray-900'} text-white py-12`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vyomira Tech Solutions</h3>
                    <p className="text-sm text-gray-400">Optimize. Secure. Comply. Pay Smarter.</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  The first platform uniting Cloud Cost Optimization, Security Compliance, 
                  Billing Management, and DevOps Services in a single ecosystem.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Cost Optimization</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security & Compliance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">DevOps Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Billing Management</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AI Features</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Vyomira Tech Solutions Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;