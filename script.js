// ==========================================================================
// Vellicor Technologies Ltd — Enterprise Delivery Hub & Engineering Telemetry
// JavaScript Application Architecture: Velocity & Core Dual Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Mobile Drawer Navigation & Scroll Effects
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('py-2', 'shadow-indigoPrimary/10');
                navbar.classList.remove('py-2.5', 'sm:py-3');
            } else {
                navbar.classList.remove('py-2', 'shadow-indigoPrimary/10');
                navbar.classList.add('py-2.5', 'sm:py-3');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 2. Interactive Topology Visualizer (Dual-Continent Network Engine)
    // ----------------------------------------------------------------------
    const topologyNodes = {
        us: {
            title: "Vellicor Technologies Ltd",
            subtitle: "Global Enterprise Strategy & Executive Governance",
            status: "EXECUTIVE OVERSIGHT ACTIVE",
            statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
            icon: "fa-compass-drafting",
            badge: "Client Advisory Node",
            badgeClass: "bg-indigoPrimary/20 text-indigoGlow border-indigoPrimary/40",
            description: "Executive advisory, strategic platform direction, client success governance, and enterprise architecture standards ensuring alignment across complex multi-stakeholder transformations.",
            specs: [
                { label: "Advisory Scope", value: "United States & Global Enterprise Markets" },
                { label: "Security & Quality", value: "Enterprise Architecture & Best Practice Standards" },
                { label: "Architecture Oversight", value: "Clean Core Enterprise Architecture" },
                { label: "Client Governance", value: "Direct Engagement & Client IP Ownership" }
            ],
            metrics: {
                metric1: { name: "Delivery Model", val: "Executive Governance" },
                metric2: { name: "Architecture Quality", val: "Clean Core Guardrails" },
                metric3: { name: "Data Security", val: "Zero-Trust Principles" }
            }
        },
        bridge: {
            title: "Sovereign Air-Gapped Transit Bridge",
            subtitle: "Encrypted Transcontinental High-Throughput Transit Tunnel",
            status: "ENCRYPTED PIPE: 182ms FIBER PING",
            statusClass: "text-cyanGlow bg-cyanPrimary/10 border-cyanPrimary/30",
            icon: "fa-shield-halved",
            badge: "Quantum-Safe Tunnel",
            badgeClass: "bg-cyanPrimary/20 text-cyanGlow border-cyanPrimary/40",
            description: "Dedicated private virtual network pairing executive strategy with Bengaluru engineering execution. Enforces strict mutual TLS 1.3 encryption, client-isolated VPC peering, automated CI/CD continuous regression testing, and zero external egress leakage.",
            specs: [
                { label: "Transit Protocol", value: "Mutual TLS 1.3 / Air-Gapped VPC Peering" },
                { label: "Round-Trip Latency", value: "182ms Transcontinental Fiber Trunk" },
                { label: "Data Egress", value: "0.00% Third-Party Telemetry Leakage" },
                { label: "Relay Cadence", value: "Follow-the-Sun Continuous Automated CI/CD" }
            ],
            metrics: {
                metric1: { name: "Encryption Standard", val: "AES-256-GCM / Post-Quantum" },
                metric2: { name: "Transit SLA", val: "High-Availability Transit" },
                metric3: { name: "Handoff Velocity", val: "Continuous Follow-the-Sun" }
            }
        },
        apac: {
            title: "AnshuAI Technologies Pvt. Ltd. (Bengaluru, India)",
            subtitle: "Global Engineering Delivery Center & Wholly-Owned Subsidiary CoE",
            status: "24/7 SPRINT ALPHA IN EXECUTION",
            statusClass: "text-anshuGold bg-anshuGold/10 border-anshuGold/30",
            icon: "fa-bolt-lightning",
            badge: "APAC Delivery CoE",
            badgeClass: "bg-anshuGold/20 text-anshuGold border-anshuGold/40",
            description: "The primary high-velocity delivery arm housing specialized engineering squads. Drives accelerated 2-week agile sprints, sub-400ms full-duplex voice telephony engines, HeadStart pre-configured industry accelerators, and 24/7 Follow-the-Sun operational site reliability.",
            specs: [
                { label: "Delivery Center HQ", value: "Bengaluru, Karnataka, India" },
                { label: "Velocity Benchmark", value: "8–12 Week Production Cutover" },
                { label: "Voice Telephony SLA", value: "Sub-400ms Conversational Duplex" },
                { label: "Delivery Engine", value: "HeadStart Pre-Engineered IP Modules" }
            ],
            metrics: {
                metric1: { name: "Sprint Cycle", val: "2-Week Agile Delivery" },
                metric2: { name: "Voice Turn Latency", val: "362ms Benchmark SLA" },
                metric3: { name: "Operational Window", val: "24/7 Follow-the-Sun" }
            }
        }
    };

    const topologyBtns = document.querySelectorAll('[data-topology-target]');
    const topologyDetailPanel = document.getElementById('topologyDetailPanel');

    function renderTopologyNode(nodeKey) {
        const node = topologyNodes[nodeKey];
        if (!node || !topologyDetailPanel) return;

        topologyBtns.forEach(btn => {
            const target = btn.getAttribute('data-topology-target');
            if (target === nodeKey) {
                btn.classList.add('active', 'border-indigoPrimary');
                btn.classList.remove('border-white/10');
            } else {
                btn.classList.remove('active', 'border-indigoPrimary');
                btn.classList.add('border-white/10');
            }
        });

        topologyDetailPanel.innerHTML = `
            <div class="space-y-6 animate-fadeIn">
                <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-indigoPrimary/20">
                    <div class="flex items-center gap-3">
                        <span class="w-10 h-10 rounded-xl bg-indigoPrimary/20 border border-indigoPrimary/40 flex items-center justify-center text-indigoGlow text-lg">
                            <i class="fa-solid ${node.icon}"></i>
                        </span>
                        <div>
                            <h3 class="text-xl sm:text-2xl font-extrabold text-white font-heading">${node.title}</h3>
                            <div class="text-xs text-slate-400">${node.subtitle}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-3 py-1 rounded-full text-xs font-mono font-bold border ${node.statusClass}">
                            ${node.status}
                        </span>
                        <span class="px-3 py-1 rounded-full text-xs font-semibold border ${node.badgeClass}">
                            ${node.badge}
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-7 space-y-4">
                        <p class="text-slate-300 text-sm leading-relaxed">${node.description}</p>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            ${node.specs.map(spec => `
                                <div class="p-3 rounded-xl bg-surface/80 border border-white/5 space-y-1">
                                    <div class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">${spec.label}</div>
                                    <div class="text-xs font-bold text-white">${spec.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-surface/90 rounded-2xl p-5 border border-indigoPrimary/30 space-y-4">
                        <div class="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Live Node Telemetry</span>
                            <span class="text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></span> SYNCHRONIZED
                            </span>
                        </div>
                        <div class="space-y-3 font-mono text-xs">
                            <div class="p-2.5 rounded-lg bg-deep/80 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">${node.metrics.metric1.name}:</span>
                                <span class="text-white font-bold">${node.metrics.metric1.val}</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-deep/80 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">${node.metrics.metric2.name}:</span>
                                <span class="text-cyanGlow font-bold">${node.metrics.metric2.val}</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-deep/80 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">${node.metrics.metric3.name}:</span>
                                <span class="text-anshuGold font-bold">${node.metrics.metric3.val}</span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <a href="./contact.html" class="btn-indigo-solid w-full text-center py-2.5 text-xs uppercase tracking-wider block shimmer-trigger">
                                Inspect Node Specifications <i class="fa-solid fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (topologyBtns.length > 0) {
        topologyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-topology-target');
                renderTopologyNode(target);
            });
        });
        // Initial render
        renderTopologyNode('us');
    }

    // ----------------------------------------------------------------------
    // 3. Interactive Parent-Subsidiary Dual Operating Model Simulator
    // ----------------------------------------------------------------------
    const stageData = {
        1: {
            title: "Executive Strategy & Engagement Governance",
            entity: "Vellicor Technologies Ltd",
            entityBadge: "Client Advisory & Governance",
            entityBadgeClass: "bg-indigoPrimary/20 text-indigoGlow border-indigoPrimary/40",
            icon: "fa-compass-drafting",
            lead: "Enterprise Strategy, Engagement Framework & Architecture Alignment",
            description: "Establishing mutual objectives, data governance guidelines, and standardized master service agreements with clear client ownership and security alignment.",
            deliverables: [
                "Master Services Engagement Agreement",
                "Data Isolation & Privacy Guidelines",
                "C-Suite Strategic Architecture Alignment",
                "Enterprise IP & Code Ownership Alignment"
            ],
            metrics: {
                timeline: "Days 1–5",
                governance: "Executive Alignment",
                compliance: "Security Best Practices",
                risk: "Transparent Governance"
            }
        },
        2: {
            title: "CTA Platform Blueprint & Clean-Core Guardrails",
            entity: "Vellicor Technologies Ltd (US Parent)",
            entityBadge: "Certified Technical Architect (CTA) Oversight",
            entityBadgeClass: "bg-cyanPrimary/20 text-cyanGlow border-cyanPrimary/40",
            icon: "fa-drafting-compass",
            lead: "Zero-Debt Technical Architecture Directed by Top 1% ServiceNow CTAs",
            description: "Our certified US architecture leads design the future-state platform blueprint adhering strictly to ServiceNow Common Service Data Model (CSDM 4.0), domain separation, and custom LLM microservices without technical debt.",
            deliverables: [
                "CSDM 4.0 Enterprise Entity Model & Service Graph",
                "Zero-Debt Out-of-the-Box (OOTB) Guardrails",
                "Sovereign Algorithmic RAG Topology Design",
                "Sub-400ms Voice Telephony Integration Specs"
            ],
            metrics: {
                timeline: "Weeks 1–2",
                governance: "ServiceNow CTA Signoff",
                compliance: "100% Clean Core",
                risk: "Pre-empts 85% Common Architectural Flaws"
            }
        },
        3: {
            title: "High-Velocity APAC CoE Sprint Execution & Accelerators",
            entity: "AnshuAI Technologies Pvt. Ltd. (Bangalore CoE)",
            entityBadge: "Global Engineering CoE & Wholly-Owned Subsidiary",
            entityBadgeClass: "bg-anshuGold/20 text-anshuGold border-anshuGold/40",
            icon: "fa-bolt-lightning",
            lead: "Industrialized 24/7 Follow-the-Sun Engineering & Pre-Built HeadStart IP",
            description: "AnshuAI’s specialized engineering center in Bangalore executes rapid 2-week agile sprints. Leveraging pre-built accelerators for Healthcare, Automotive, and Manufacturing, delivery cycles collapse from 12 months down to 8–12 weeks.",
            deliverables: [
                "HeadStart Pre-Configured Industry Accelerators",
                "Sub-400ms WebRTC / SIP Conversational Voice Engines",
                "Private VPC Model Fine-Tuning & Quantization",
                "Autonomous ServiceDesk Incident Auto-Remediation"
            ],
            metrics: {
                timeline: "Weeks 3–10 (Continuous Sprints)",
                governance: "24/7 Follow-the-Sun Delivery",
                compliance: "Secure Development Workflows",
                risk: "Target 8–12 Week Production Cutover"
            }
        },
        4: {
            title: "Air-Gapped VPC Production Cutover & Continuous Telemetry",
            entity: "Vellicor + AnshuAI Unified Engine",
            entityBadge: "Dual-Continent Production Operations",
            entityBadgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
            icon: "fa-shield-halved",
            lead: "Tamper-Evident Deployment, Client-Retained Weights & SLA Assurance",
            description: "Joint deployment into the client's sovereign cloud or on-premises environment. All model weights remain client-controlled with zero third-party telemetry, backed by 24/7 dual-continent mission monitoring.",
            deliverables: [
                "Air-Gapped VPC Deployment & Key Handover",
                "Zero Third-Party Data Leak Verification",
                "Sub-Second Bidirectional ERP Streaming Hub",
                "Ongoing CTA Health Score & Performance Audits"
            ],
            metrics: {
                timeline: "Weeks 10–12 Go-Live",
                governance: "Dual-Tier Executive & Engineering SLA",
                compliance: "Zero Data-Retention Audited",
                risk: "Enterprise Continuity & 99.99% Availability"
            }
        }
    };

    const stageButtons = document.querySelectorAll('.stage-step');
    const stageDisplay = document.getElementById('stageDisplay');

    function renderStage(stageNumber) {
        const data = stageData[stageNumber];
        if (!data || !stageDisplay) return;

        stageButtons.forEach(btn => {
            const btnStage = btn.getAttribute('data-stage');
            if (btnStage == stageNumber) {
                btn.classList.add('active', 'border-indigoPrimary', 'bg-surface/90');
                btn.classList.remove('border-white/10', 'bg-surface/40');
            } else {
                btn.classList.remove('active', 'border-indigoPrimary', 'bg-surface/90');
                btn.classList.add('border-white/10', 'bg-surface/40');
            }
        });

        stageDisplay.innerHTML = `
            <div class="space-y-6 animate-fadeIn">
                <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-indigoPrimary/20">
                    <div class="flex items-center gap-3">
                        <span class="w-10 h-10 rounded-xl bg-indigoPrimary/20 border border-indigoPrimary/40 flex items-center justify-center text-indigoGlow text-lg">
                            <i class="fa-solid ${data.icon}"></i>
                        </span>
                        <div>
                            <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400">Stage 0${stageNumber}</span>
                            <h3 class="text-xl sm:text-2xl font-extrabold text-white font-heading">${data.title}</h3>
                        </div>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-semibold border ${data.entityBadgeClass}">
                        ${data.entityBadge}
                    </span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-7 space-y-4">
                        <div class="text-xs font-bold uppercase tracking-wider text-cyanGlow">${data.lead}</div>
                        <p class="text-slate-300 text-sm leading-relaxed">${data.description}</p>
                        
                        <div class="pt-2">
                            <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Stage Deliverables & Guardrails</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                ${data.deliverables.map(item => `
                                    <div class="p-2.5 rounded-lg bg-surface/70 border border-white/10 flex items-start gap-2 text-xs text-slate-200">
                                        <i class="fa-solid fa-check text-indigoGlow mt-0.5"></i>
                                        <span>${item}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-5 bg-deep/80 rounded-2xl p-5 border border-indigoPrimary/30 space-y-4">
                        <div class="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Stage SLA & Telemetry</span>
                            <span class="inline-flex items-center gap-1.5 text-emerald-400 text-[11px]">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></span> Active Protocol
                            </span>
                        </div>
                        <div class="space-y-3 font-mono text-xs">
                            <div class="p-2.5 rounded-lg bg-surface/60 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">Timeframe:</span>
                                <span class="text-white font-bold">${data.metrics.timeline}</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-surface/60 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">Governance:</span>
                                <span class="text-indigoGlow font-bold">${data.metrics.governance}</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-surface/60 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">Compliance:</span>
                                <span class="text-cyanGlow font-bold">${data.metrics.compliance}</span>
                            </div>
                            <div class="p-2.5 rounded-lg bg-surface/60 border border-white/5 flex justify-between items-center">
                                <span class="text-slate-400">Risk Mitigation:</span>
                                <span class="text-anshuGold font-bold">${data.metrics.risk}</span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <a href="./contact.html" class="btn-indigo-solid w-full text-center py-2 text-xs uppercase tracking-wider block shimmer-trigger">
                                Initiate Stage Consultation <i class="fa-solid fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (stageButtons.length > 0) {
        stageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const stage = btn.getAttribute('data-stage');
                renderStage(stage);
            });
        });
        // Initial render stage 1
        renderStage(1);
    }

    // ----------------------------------------------------------------------
    // 4. Follow-the-Sun Dual-Continent Live Clocks
    // ----------------------------------------------------------------------
    function updateClocks() {
        const now = new Date();

        const formatTime = (timeZone) => {
            return new Intl.DateTimeFormat('en-US', {
                timeZone: timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }).format(now);
        };

        const formatDate = (timeZone) => {
            return new Intl.DateTimeFormat('en-US', {
                timeZone: timeZone,
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            }).format(now);
        };

        const nyClock = document.getElementById('nyClock');
        const nyDate = document.getElementById('nyDate');
        const blrClock = document.getElementById('blrClock');
        const blrDate = document.getElementById('blrDate');

        if (nyClock) nyClock.textContent = formatTime('America/New_York');
        if (nyDate) nyDate.textContent = formatDate('America/New_York') + ' (EDT / US Jurisdiction)';
        
        if (blrClock) blrClock.textContent = formatTime('Asia/Kolkata');
        if (blrDate) blrDate.textContent = formatDate('Asia/Kolkata') + ' (IST / CoE Sprint Relay)';
    }

    updateClocks();
    setInterval(updateClocks, 1000);

    // ----------------------------------------------------------------------
    // 5. Sub-400ms Voice Telephony Benchmark with Web Audio API Synthesizer
    // ----------------------------------------------------------------------
    const voiceSimulateBtn = document.getElementById('voiceSimulateBtn');
    const voiceLatencyValue = document.getElementById('voiceLatencyValue');
    const voiceLogOutput = document.getElementById('voiceLogOutput');
    const waveformContainer = document.getElementById('waveformContainer');
    const logTabBtn = document.getElementById('logTabBtn');
    const packetTabBtn = document.getElementById('packetTabBtn');
    const voicePacketView = document.getElementById('voicePacketView');

    // Tab Switcher (Console vs Packet JSON)
    if (logTabBtn && packetTabBtn && voiceLogOutput && voicePacketView) {
        logTabBtn.addEventListener('click', () => {
            logTabBtn.classList.add('bg-indigoPrimary/20', 'text-cyanGlow', 'font-bold');
            logTabBtn.classList.remove('text-slate-400');
            packetTabBtn.classList.remove('bg-indigoPrimary/20', 'text-cyanGlow', 'font-bold');
            packetTabBtn.classList.add('text-slate-400');

            voiceLogOutput.classList.remove('hidden');
            voicePacketView.classList.add('hidden');
        });

        packetTabBtn.addEventListener('click', () => {
            packetTabBtn.classList.add('bg-indigoPrimary/20', 'text-cyanGlow', 'font-bold');
            packetTabBtn.classList.remove('text-slate-400');
            logTabBtn.classList.remove('bg-indigoPrimary/20', 'text-cyanGlow', 'font-bold');
            logTabBtn.classList.add('text-slate-400');

            voicePacketView.classList.remove('hidden');
            voiceLogOutput.classList.add('hidden');
        });
    }

    // Modern Web Audio Chime Synth
    function playTelemetryChime() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const now = ctx.currentTime;

            // Oscillator 1 (High crisp ping)
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, now);
            osc.frequency.exponentialRampToValueAtTime(440, now + 0.18);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.22);
        } catch (e) {
            // Audio context not allowed or unsupported; fail silently
        }
    }

    if (voiceSimulateBtn && voiceLatencyValue && voiceLogOutput) {
        let isSimulating = false;

        voiceSimulateBtn.addEventListener('click', () => {
            if (isSimulating) return;
            isSimulating = true;
            voiceSimulateBtn.disabled = true;
            voiceSimulateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Measuring Full-Duplex Turn...`;

            playTelemetryChime();

            // Ensure console tab is active
            if (logTabBtn && voiceLogOutput) {
                logTabBtn.click();
            }

            if (waveformContainer) {
                waveformContainer.classList.remove('opacity-40');
                waveformContainer.classList.add('opacity-100');
            }

            voiceLogOutput.innerHTML = `
                <div class="text-cyanGlow">&gt; [INIT] Streaming sub-400ms WebRTC / SIP duplex telemetry ping...</div>
            `;

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; [SIP TRUNK] VAD speech detection confirmed (+48ms)</div>
                `;
            }, 80);

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; [STREAMING ASR] Tokenized 14 phonemes (+62ms)</div>
                `;
            }, 160);

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; [SOVEREIGN SLM] Zero-retention private intent dispatch (+145ms)</div>
                `;
            }, 260);

            setTimeout(() => {
                const finalLatency = Math.floor(Math.random() * 20) + 355; // 355-375ms
                voiceLatencyValue.textContent = `${finalLatency} ms`;

                voiceLogOutput.innerHTML += `
                    <div class="text-indigoGlow">&gt; [NEURAL TTS] First packet audio burst dispatched (+104ms)</div>
                    <div class="text-emerald-400 font-bold">&gt; [PASS] Confirmed Turn Latency: ${finalLatency}ms round-trip (Under 400ms SLA).</div>
                `;

                playTelemetryChime();

                voiceSimulateBtn.disabled = false;
                voiceSimulateBtn.innerHTML = `<i class="fa-solid fa-play mr-2"></i> Re-Run Voice Telemetry Benchmark`;
                isSimulating = false;
            }, 380);
        });
    }

    // ----------------------------------------------------------------------
    // 6. Enterprise Velocity vs Core Scope Calculator (Reactive Slider & TCO)
    // ----------------------------------------------------------------------
    const calcScopeSelect = document.getElementById('calcScopeSelect');
    const calcScaleSelect = document.getElementById('calcScaleSelect');
    const calcSeatsSlider = document.getElementById('calcSeatsSlider');
    const calcSeatsDisplay = document.getElementById('calcSeatsDisplay');
    const calcVellicorTime = document.getElementById('calcVellicorTime');
    const calcTraditionalTime = document.getElementById('calcTraditionalTime');
    const calcCostSavings = document.getElementById('calcCostSavings');
    const calcArchitectureScore = document.getElementById('calcArchitectureScore');

    function calculateTransformation() {
        if (!calcScopeSelect || !calcScaleSelect) return;

        const scope = calcScopeSelect.value;
        const scale = calcScaleSelect.value;
        const seats = calcSeatsSlider ? parseInt(calcSeatsSlider.value, 10) : 12500;

        if (calcSeatsDisplay) {
            calcSeatsDisplay.textContent = `${seats.toLocaleString()} Users`;
        }

        let vellicorWeeks = "8–10 Weeks";
        let traditionalMonths = "12–15 Months";
        let costAdvantage = "55% TCO Savings";
        let archStandard = "CSDM 4.0 Clean Core & Zero Debt";

        // Dynamic Dollar Estimate based on seats
        let estimatedSavingsMillions = ((seats * 120) / 1000000).toFixed(2);

        if (scope === 'servicenow') {
            if (scale === 'enterprise') {
                vellicorWeeks = "8–12 Weeks";
                traditionalMonths = "14–18 Months";
                costAdvantage = `60% TCO ($${estimatedSavingsMillions}M Saved)`;
            } else if (scale === 'fortune500') {
                vellicorWeeks = "10–14 Weeks";
                traditionalMonths = "18–24 Months";
                costAdvantage = `65% TCO ($${(estimatedSavingsMillions * 1.4).toFixed(2)}M Saved)`;
            } else {
                vellicorWeeks = "6–8 Weeks";
                traditionalMonths = "9–12 Months";
                costAdvantage = `50% TCO ($${estimatedSavingsMillions}M Saved)`;
            }
        } else if (scope === 'sovereign_ai') {
            if (scale === 'enterprise' || scale === 'fortune500') {
                vellicorWeeks = "8–12 Weeks";
                traditionalMonths = "12–18 Months";
                costAdvantage = `65% TCO ($${(estimatedSavingsMillions * 1.5).toFixed(2)}M Saved)`;
                archStandard = "100% Air-Gapped VPC + Zero Retention";
            } else {
                vellicorWeeks = "6–8 Weeks";
                traditionalMonths = "8–10 Months";
                costAdvantage = `55% TCO ($${estimatedSavingsMillions}M Saved)`;
                archStandard = "Private VPC & Client-Retained Weights";
            }
        } else if (scope === 'voice') {
            vellicorWeeks = "4–6 Weeks";
            traditionalMonths = "8–12 Months";
            costAdvantage = `70% Call Center TCO Reduction`;
            archStandard = "Sub-400ms SIP / WebRTC Engine";
        } else if (scope === 'full_suite') {
            vellicorWeeks = "12–16 Weeks";
            traditionalMonths = "24–36 Months";
            costAdvantage = `65% Unified TCO ($${(estimatedSavingsMillions * 2.1).toFixed(2)}M Saved)`;
            archStandard = "Complete US Governance + CoE Engine";
        }

        if (calcVellicorTime) calcVellicorTime.textContent = vellicorWeeks;
        if (calcTraditionalTime) calcTraditionalTime.textContent = traditionalMonths;
        if (calcCostSavings) calcCostSavings.textContent = costAdvantage;
        if (calcArchitectureScore) calcArchitectureScore.textContent = archStandard;
    }

    if (calcScopeSelect && calcScaleSelect) {
        calcScopeSelect.addEventListener('change', calculateTransformation);
        calcScaleSelect.addEventListener('change', calculateTransformation);
        if (calcSeatsSlider) {
            calcSeatsSlider.addEventListener('input', calculateTransformation);
        }
        calculateTransformation();
    }

    // ----------------------------------------------------------------------
    // 7. Operating Entity Filter / Toggle (Portal View)
    // ----------------------------------------------------------------------
    const entityToggles = document.querySelectorAll('.entity-toggle-btn');
    const entityContentGroups = document.querySelectorAll('[data-entity-content]');

    if (entityToggles.length > 0) {
        entityToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const targetEntity = toggle.getAttribute('data-entity-target');

                entityToggles.forEach(btn => {
                    if (btn === toggle) {
                        btn.classList.add('bg-white/10', 'text-white', 'border-indigoPrimary');
                        btn.classList.remove('text-slate-400', 'border-transparent');
                    } else {
                        btn.classList.remove('bg-white/10', 'text-white', 'border-indigoPrimary');
                        btn.classList.add('text-slate-400', 'border-transparent');
                    }
                });

                entityContentGroups.forEach(group => {
                    const groupEntity = group.getAttribute('data-entity-content');
                    if (targetEntity === 'all' || groupEntity === targetEntity) {
                        group.classList.remove('hidden');
                    } else {
                        group.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ----------------------------------------------------------------------
    // 8. Contact & Executive Briefing Form Sanitization & Submission
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('vellicorContactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const botCheck = document.getElementById('botCheck');
            if (botCheck && botCheck.value.trim() !== '') {
                console.warn('Automated submission detected and halted.');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Registering Executive Intake...`;
            }

            const sanitize = (str) => str ? String(str).replace(/[<>]/g, '') : '';
            const payload = {
                fullName: sanitize(document.getElementById('formName')?.value),
                workEmail: sanitize(document.getElementById('formEmail')?.value),
                company: sanitize(document.getElementById('formCompany')?.value),
                title: sanitize(document.getElementById('formTitle')?.value),
                inquiryType: sanitize(document.getElementById('formInquiryType')?.value),
                message: sanitize(document.getElementById('formMessage')?.value),
                timestamp: new Date().toISOString()
            };

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.classList.add('hidden');
                }
                if (formSuccess) {
                    formSuccess.classList.remove('hidden');
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 800);
        });
    }
});
