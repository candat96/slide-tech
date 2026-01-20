import React from 'react';
import { SlideContent, SlideLayout } from '../types';
import { 
  Cloud, 
  ShieldAlert, 
  ArrowDown, 
  Settings, 
  Box, 
  Database, 
  Activity, 
  Lock,
  ArrowRight,
  Video,
  Building2,
  Users,
  DollarSign,
  RefreshCw,
  Layers,
  CheckCircle2,
  Server,
  Zap
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideContent;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const Icon = slide.icon;

  // Render Header with modern typography
  const Header = () => (
    <div className="mb-8 border-b border-gray-700/50 pb-6">
      <div className="flex items-center gap-5 mb-3">
        {Icon && (
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Icon className="w-10 h-10 text-cyan-400" />
                    </div>
        )}
        <h2 className="text-4xl font-extrabold tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-emerald-300">
            {slide.title}
        </h2>
      </div>
        {slide.subtitle && (
          <p className="text-2xl text-cyan-400 font-light tracking-wide ml-[5.25rem]">{slide.subtitle}</p>
        )}
    </div>
  );

  switch (slide.layout) {
    case SlideLayout.TITLE:
      return (
        <div className="h-full flex flex-col justify-center items-center text-center p-12 relative overflow-hidden">
          {/* Decorative background element for Title slide */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
              {Icon && (
                  <div className="mb-8 p-6 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full border border-cyan-400/30 shadow-[0_0_60px_rgba(6,182,212,0.4)]">
                    <Icon className="w-24 h-24 text-cyan-400 animate-pulse-slow" />
                  </div>
              )}
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-emerald-400 to-violet-400 mb-8 tracking-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <div className="bg-surface/30 px-8 py-4 rounded-2xl border border-gray-700/50 backdrop-blur-sm mb-12 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl text-gray-200 font-light whitespace-pre-line leading-relaxed">
                    {slide.subtitle}
                    </h2>
                </div>
              )}
              {slide.points && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {slide.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-lg text-gray-300 bg-gradient-to-r from-surface/40 to-cyan-500/5 hover:from-surface/60 hover:to-emerald-500/10 transition-all py-3 px-6 rounded-lg border border-cyan-400/30 shadow-lg backdrop-blur-md">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      );

    case SlideLayout.BULLET_POINTS:
      return (
        <div className="h-full p-12 flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-surface/10 p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
                <ul className="space-y-8">
                {slide.points?.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-6 text-2xl text-gray-200 group">
                    <div className="mt-1 p-1 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full group-hover:from-cyan-500/40 group-hover:to-emerald-500/40 transition-all">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="font-light tracking-wide">{point}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
      );

    case SlideLayout.TWO_COLUMN:
      return (
        <div className="h-full p-8 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-2 overflow-y-auto pb-8">
            {/* Left Column */}
            <div className="bg-gradient-to-br from-emerald-500/10 via-surface/40 to-surface/10 p-6 rounded-2xl border border-emerald-400/30 shadow-xl backdrop-blur-sm flex flex-col h-fit">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-emerald-400/30 pb-3 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
                {slide.columns?.left.title}
              </h3>
              <ul className="space-y-3 flex-1">
                {slide.columns?.left.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-surface/40 to-surface/10 p-6 rounded-2xl border border-cyan-400/30 shadow-xl backdrop-blur-sm flex flex-col h-fit">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-cyan-400/30 pb-3 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></span>
                {slide.columns?.right.title}
              </h3>
              <ul className="space-y-3 flex-1">
                {slide.columns?.right.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base text-gray-300">
                    <div className="mt-1 p-0.5 bg-cyan-500/20 rounded-full flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="leading-relaxed font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    case SlideLayout.GRID:
      return (
        <div className="h-full p-8 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 content-start overflow-y-auto pb-8">
            {slide.gridItems?.map((gridItem, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-surface/30 to-cyan-500/5 hover:from-surface/50 hover:to-cyan-500/10 transition-all duration-300 p-5 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-400/10 h-fit">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <div className="w-6 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-transparent rounded-full group-hover:w-12 transition-all duration-500 mt-1.5 flex-shrink-0"></div>
                    <span className="leading-tight">{gridItem.title}</span>
                </h3>
                <ul className="space-y-2.5">
                  {gridItem.items.map((item, i) => (
                    <li key={i} className="text-gray-400 group-hover:text-gray-300 flex items-start gap-2 transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-gray-600 group-hover:bg-cyan-400 rounded-full transition-colors flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideLayout.INFRA_DIAGRAM:
      return (
        <div className="h-full p-6 flex flex-col overflow-hidden">
           <Header />
           <div className="flex-1 relative flex flex-col items-center justify-start gap-4 mt-2 overflow-y-auto pb-6">
              
              {/* Layer 1: Public Internet & Security */}
              <div className="w-full max-w-5xl flex flex-col items-center animate-fadeIn">
                 <div className="flex items-center gap-2 mb-2 px-4 py-1 bg-sky-900/20 rounded-full border border-sky-500/20">
                    <Cloud className="text-sky-400 w-4 h-4" />
                    <span className="text-xs text-sky-400 font-mono tracking-wider">INTERNET & USERS</span>
                 </div>
                 
                 {/* Connection Line */}
                 <div className="h-4 w-px border-l-2 border-dashed border-sky-500/30"></div>

                 {/* DDoS Protection */}
                 <div className="bg-gradient-to-r from-orange-900/20 to-surface border border-orange-500/30 rounded-xl p-4 w-4/5 flex justify-between items-center shadow-[0_0_25px_rgba(249,115,22,0.15)] backdrop-blur-sm mb-2">
                    <div className="flex items-center gap-4">
                       <div className="p-2 bg-orange-500/10 rounded-xl border border-orange-500/20">
                          <ShieldAlert className="text-orange-400 w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-base">DDoS Protection</h4>
                          <div className="flex gap-2 mt-1">
                             <span className="text-xs text-orange-300 bg-orange-950/50 px-2 py-0.5 rounded border border-orange-500/20">AWS Shield</span>
                             <span className="text-xs text-orange-300 bg-orange-950/50 px-2 py-0.5 rounded border border-orange-500/20">Cloudflare</span>
                          </div>
                       </div>
                    </div>
                    <div className="text-right hidden md:block border-l border-orange-500/20 pl-4">
                       <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Layer 1</span>
                    </div>
                 </div>

                 <div className="h-3 w-px border-l-2 border-dashed border-sky-500/30"></div>

                 {/* WAF & LB */}
                 <div className="bg-gradient-to-r from-red-900/20 to-surface border border-red-500/30 rounded-xl p-4 w-4/5 flex justify-between items-center shadow-[0_0_25px_rgba(239,68,68,0.15)] backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                       <div className="p-2 bg-red-500/10 rounded-xl border border-red-500/20">
                          <ShieldAlert className="text-red-400 w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-base">WAF & Load Balancer</h4>
                          <div className="flex gap-2 mt-1">
                             <span className="text-xs text-red-300 bg-red-950/50 px-2 py-0.5 rounded border border-red-500/20">SQL Injection Filter</span>
                             <span className="text-xs text-red-300 bg-red-950/50 px-2 py-0.5 rounded border border-red-500/20">SSL/TLS</span>
                             <span className="text-xs text-red-300 bg-red-950/50 px-2 py-0.5 rounded border border-red-500/20">Auto-scaling</span>
                          </div>
                       </div>
                    </div>
                    <div className="text-right hidden md:block border-l border-red-500/20 pl-4">
                       <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Layer 2</span>
                    </div>
                 </div>
              </div>

              {/* Connection */}
              <ArrowDown className="text-gray-600 animate-bounce" size={16} />

              {/* Layer 3: API Gateway */}
              <div className="w-full max-w-5xl flex flex-col items-center">
                 <div className="bg-gradient-to-r from-yellow-900/20 to-surface border border-yellow-500/30 rounded-xl p-4 w-4/5 flex justify-between items-center shadow-[0_0_25px_rgba(234,179,8,0.15)] backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                       <div className="p-2 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                          <Lock className="text-yellow-400 w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-base">API Gateway (Kong/NGINX)</h4>
                          <div className="flex gap-2 mt-1">
                             <span className="text-xs text-yellow-300 bg-yellow-950/50 px-2 py-0.5 rounded border border-yellow-500/20">OAuth2/JWT</span>
                             <span className="text-xs text-yellow-300 bg-yellow-950/50 px-2 py-0.5 rounded border border-yellow-500/20">Rate Limit</span>
                             <span className="text-xs text-yellow-300 bg-yellow-950/50 px-2 py-0.5 rounded border border-yellow-500/20">API Versioning</span>
                          </div>
                       </div>
                    </div>
                    <div className="text-right hidden md:block border-l border-yellow-500/20 pl-4">
                       <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Layer 3</span>
                    </div>
                 </div>
              </div>

              {/* Connection */}
              <ArrowDown className="text-gray-600 animate-bounce" size={16} />

              {/* Layer 4: Kubernetes Cluster */}
              <div className="w-full max-w-6xl bg-gradient-to-br from-dark/40 to-cyan-500/5 border border-cyan-400/30 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-cyan-400/10">
                 {/* K8s Label */}
                 <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 px-4 py-2 rounded-br-2xl border-b border-r border-cyan-400/30 text-cyan-300 text-xs font-bold flex items-center gap-2">
                    <Settings className="w-4 h-4 animate-spin-slow" /> KUBERNETES ORCHESTRATION (Layer 4)
                 </div>

                 <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Core Services */}
                    <div className="bg-surface/60 p-3 rounded-xl border border-gray-700 hover:border-green-500/50 flex items-center gap-3 transition-all group">
                       <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                         <Server className="text-green-400 w-5 h-5" />
                       </div>
                       <div>
                          <h5 className="font-bold text-white text-sm">Core Microservices</h5>
                          <div className="flex gap-1 mt-1">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                             <span className="text-xs text-gray-400 ml-1">HPA enabled</span>
                          </div>
                       </div>
                    </div>

                    {/* Video Service */}
                    <div className="bg-surface/60 p-3 rounded-xl border border-gray-700 hover:border-indigo-500/50 flex items-center gap-3 transition-all group">
                       <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                         <Video className="text-indigo-400 w-5 h-5" />
                       </div>
                       <div>
                          <h5 className="font-bold text-white text-sm">Video & Signaling</h5>
                          <div className="flex gap-1 mt-1">
                             <span className="text-xs text-gray-400 bg-gray-800 px-1.5 rounded">StatefulSets</span>
                          </div>
                       </div>
                    </div>

                    {/* AI Service */}
                    <div className="bg-surface/60 p-3 rounded-xl border border-gray-700 hover:border-purple-500/50 flex items-center gap-3 transition-all group">
                       <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                         <Box className="text-purple-400 w-5 h-5" />
                       </div>
                       <div>
                          <h5 className="font-bold text-white text-sm">AI Adapter</h5>
                          <div className="flex gap-1 mt-1">
                             <span className="text-xs text-purple-300 bg-purple-900/30 px-1.5 rounded border border-purple-500/20">Edge AI</span>
                          </div>
                       </div>
                    </div>

                    {/* Redis */}
                    <div className="bg-gradient-to-r from-red-900/10 to-surface border border-red-500/30 p-3 rounded-xl flex items-center gap-3">
                       <Zap className="text-red-400 w-5 h-5 fill-red-400/20" />
                       <div>
                         <span className="text-sm font-bold text-red-100 block">Redis Cluster</span>
                         <span className="text-xs text-red-400/70">Cache & Session</span>
                       </div>
                    </div>

                    {/* Message Queue */}
                    <div className="bg-gradient-to-r from-amber-900/10 to-surface border border-amber-500/30 p-3 rounded-xl flex items-center gap-3">
                       <Activity className="text-amber-400 w-5 h-5" />
                       <div>
                         <span className="text-sm font-bold text-amber-100 block">RabbitMQ</span>
                         <span className="text-xs text-amber-400/70">Async Tasks</span>
                       </div>
                    </div>

                    {/* Database */}
                    <div className="bg-gradient-to-r from-blue-900/10 to-surface border border-blue-500/30 p-3 rounded-xl flex items-center gap-3">
                       <Database className="text-blue-400 w-5 h-5 fill-blue-400/20" />
                       <div>
                         <span className="text-sm font-bold text-blue-100 block">PostgreSQL (Sharded)</span>
                         <span className="text-xs text-blue-400/70">Multi-tenant DB</span>
                       </div>
                    </div>
                 </div>

                 {/* Bottom note */}
                 <div className="mt-4 text-center">
                    <span className="text-xs text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700">Auto-scaling · Self-healing · Zero-downtime deployment</span>
                 </div>
              </div>
           </div>
        </div>
      );

    case SlideLayout.MULTI_TENANT_ARCH:
        return (
          <div className="h-full p-8 flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-start gap-6 overflow-y-auto pb-8">
                {/* Benefits Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
                    <div className="bg-gradient-to-b from-green-500/5 to-surface/50 border border-green-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-green-500/10 transition-all">
                        <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
                            <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-white mb-1">Cost Efficiency</h4>
                            <p className="text-xs text-gray-400">Shared Infra saves ~40% cost</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-500/5 to-surface/50 border border-blue-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-blue-500/10 transition-all">
                        <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20">
                            <RefreshCw className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-white mb-1">Unified Updates</h4>
                            <p className="text-xs text-gray-400">Deploy once, update all tenants</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-purple-500/5 to-surface/50 border border-purple-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-3 shadow-lg hover:shadow-purple-500/10 transition-all">
                        <div className="p-3 bg-purple-500/10 rounded-full border border-purple-500/20">
                            <Layers className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-white mb-1">Easy Maintenance</h4>
                            <p className="text-xs text-gray-400">Centralized monitoring & logs</p>
                        </div>
                    </div>
                </div>

                {/* Architecture Visual */}
                <div className="w-full max-w-6xl bg-surface/20 p-6 rounded-3xl border border-gray-700/50 relative shadow-2xl backdrop-blur-md">
                    {/* Tenants Layer */}
                    <div className="flex justify-around px-4 mb-6">
                        {['Hospital A', 'Clinic B', 'Center C'].map((name, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 group relative z-10">
                                <div className={`w-16 h-16 bg-dark border-2 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                                    i===0 ? 'border-orange-500/50 group-hover:bg-orange-900/10' : 
                                    i===1 ? 'border-pink-500/50 group-hover:bg-pink-900/10' : 
                                    'border-cyan-500/50 group-hover:bg-cyan-900/10'
                                }`}>
                                    <Building2 className={`w-8 h-8 ${i===0 ? 'text-orange-400' : i===1 ? 'text-pink-400' : 'text-cyan-400'}`} />
                                </div>
                                <span className="font-mono text-xs text-gray-300 font-semibold">{name}</span>
                                <ArrowDown className="text-gray-600 animate-bounce mt-1" size={16} />
                            </div>
                        ))}
                    </div>

                     {/* Shared App Layer */}
                     <div className="w-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-violet-500/10 border border-cyan-400/40 rounded-2xl p-4 text-center mb-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                        <h3 className="text-xl font-bold text-white relative z-10 flex items-center justify-center gap-3">
                            <Box className="text-cyan-400 w-5 h-5" /> 
                            HOPITA SAAS PLATFORM CORE
                        </h3>
                        <div className="flex justify-center gap-6 mt-2 relative z-10 text-xs text-gray-300">
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400"/> Single Codebase</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400"/> Shared Compute</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-400"/> Isolated Config</span>
                        </div>
                    </div>

                    {/* Database Layer */}
                    <div className="w-full bg-dark/60 border border-gray-600/50 rounded-2xl p-6 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-4 py-1 rounded-full border border-gray-600 text-xs font-bold font-mono text-gray-300 shadow-lg tracking-wider">
                            ISOLATED DATA LAYER
                        </div>
                        
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Database className="w-6 h-6 text-gray-400" />
                            <span className="font-bold text-base text-gray-200">Centralized Database Cluster</span>
                        </div>

                        {/* Partitions */}
                        <div className="flex gap-4">
                            <div className="flex-1 bg-orange-950/20 border border-orange-500/20 p-4 rounded-xl flex flex-col items-center hover:bg-orange-950/30 transition-colors">
                                <Lock className="w-5 h-5 text-orange-400 mb-2" />
                                <span className="text-xs font-mono text-orange-300 tracking-wide">TENANT_ID: A</span>
                            </div>
                            <div className="flex-1 bg-pink-950/20 border border-pink-500/20 p-4 rounded-xl flex flex-col items-center hover:bg-pink-950/30 transition-colors">
                                <Lock className="w-5 h-5 text-pink-400 mb-2" />
                                <span className="text-xs font-mono text-pink-300 tracking-wide">TENANT_ID: B</span>
                            </div>
                            <div className="flex-1 bg-cyan-950/20 border border-cyan-500/20 p-4 rounded-xl flex flex-col items-center hover:bg-cyan-950/30 transition-colors">
                                <Lock className="w-5 h-5 text-cyan-400 mb-2" />
                                <span className="text-xs font-mono text-cyan-300 tracking-wide">TENANT_ID: C</span>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-xs text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700">Row-Level Security (RLS) & Schema Isolation</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );

    default:
      return <div className="p-12">Layout not supported</div>;
  }
};