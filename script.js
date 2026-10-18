// ==========================================================================
// Vellicor Technologies Ltd — Enterprise Operating Portal & CoE Console
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
    // 2. Interactive Parent-Subsidiary Dual Operating Model Simulator
    // ----------------------------------------------------------------------
    const stageData = {
        1: {
            title: "US Jurisdiction & Sovereign Governance Lock",
            entity: "Vellicor Technologies Ltd (US Parent)",
            entityBadge: "US Parent Holding Entity",
            entityBadgeClass: "bg-indigoPrimary/20 text-indigoGlow border-indigoPrimary/40",
            icon: "fa-scale-balanced",
            lead: "North American C-Suite Legal, MSA & Compliance Architecture",
            description: "Direct contractual relationship under United States law. Establishes sovereign data boundaries (SOC2 Type II, HIPAA, NIST 800-53) and executes master service agreements with client IP protections.",
            deliverables: [
                "US Delaware Legal Umbrella & Corporate MSA",
                "Sovereign Zero-Retention Data Isolation Protocol",
                "C-Suite Strategic Architecture Alignment",
                "Patent & Enterprise IP Custody Shield"
            ],
            metrics: {
                timeline: "Days 1–5",
                governance: "100% US Enforceable",
                compliance: "SOC2 / HIPAA / FedRAMP ready",
                risk: "Zero Offshore Legal Exposure"
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
                compliance: "ISO 27001 & Dedicated Secure Dev Labs",
                risk: "Guaranteed 8–12 Week Production Cutover"
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
                "Sub-Second Bidirectional ERP/SAP Streaming Hub",
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
                            <a href="./contact.html" class="btn-indigo-solid w-full text-center py-2 text-xs uppercase tracking-wider block">
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
    // 3. Follow-the-Sun Dual-Continent Live Clocks
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
        if (nyDate) nyDate.textContent = formatDate('America/New_York') + ' (US Eastern / Parent HQ)';
        
        if (blrClock) blrClock.textContent = formatTime('Asia/Kolkata');
        if (blrDate) blrDate.textContent = formatDate('Asia/Kolkata') + ' (IST / Engineering CoE)';
    }

    updateClocks();
    setInterval(updateClocks, 1000);

    // ----------------------------------------------------------------------
    // 4. Sub-400ms Voice Telephony Latency Simulator
    // ----------------------------------------------------------------------
    const voiceSimulateBtn = document.getElementById('voiceSimulateBtn');
    const voiceLatencyValue = document.getElementById('voiceLatencyValue');
    const voiceLogOutput = document.getElementById('voiceLogOutput');
    const waveformContainer = document.getElementById('waveformContainer');

    if (voiceSimulateBtn && voiceLatencyValue && voiceLogOutput) {
        let isSimulating = false;

        voiceSimulateBtn.addEventListener('click', () => {
            if (isSimulating) return;
            isSimulating = true;
            voiceSimulateBtn.disabled = true;
            voiceSimulateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Measuring Full-Duplex Turn...`;

            if (waveformContainer) {
                waveformContainer.classList.remove('opacity-40');
                waveformContainer.classList.add('opacity-100');
            }

            voiceLogOutput.innerHTML = `
                <div class="text-cyanGlow">&gt; Initiating sub-400ms WebRTC / SIP duplex telemetry ping...</div>
            `;

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; User speech input detected (SIP trunk buffer: 48ms)</div>
                `;
            }, 80);

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; Streaming ASR tokenization completed (duration: 62ms)</div>
                `;
            }, 160);

            setTimeout(() => {
                voiceLogOutput.innerHTML += `
                    <div class="text-slate-300">&gt; Sovereign SLM reasoning & intent dispatch (duration: 145ms)</div>
                `;
            }, 260);

            setTimeout(() => {
                const finalLatency = Math.floor(Math.random() * 25) + 355; // 355-380ms
                voiceLatencyValue.textContent = `${finalLatency} ms`;

                voiceLogOutput.innerHTML += `
                    <div class="text-indigoGlow">&gt; Neural TTS audio synthesis & first packet audio burst (duration: 104ms)</div>
                    <div class="text-emerald-400 font-bold">&gt; Benchmark Confirmed: ${finalLatency}ms round-trip (Under 400ms SLA). Zero speech collision.</div>
                `;

                voiceSimulateBtn.disabled = false;
                voiceSimulateBtn.innerHTML = `<i class="fa-solid fa-play mr-2"></i> Re-Run Voice Telemetry Benchmark`;
                isSimulating = false;
            }, 380);
        });
    }

    // ----------------------------------------------------------------------
    // 5. Enterprise Velocity vs Core Scope Calculator
    // ----------------------------------------------------------------------
    const calcScopeSelect = document.getElementById('calcScopeSelect');
    const calcScaleSelect = document.getElementById('calcScaleSelect');
    const calcVellicorTime = document.getElementById('calcVellicorTime');
    const calcTraditionalTime = document.getElementById('calcTraditionalTime');
    const calcCostSavings = document.getElementById('calcCostSavings');
    const calcArchitectureScore = document.getElementById('calcArchitectureScore');

    function calculateTransformation() {
        if (!calcScopeSelect || !calcScaleSelect) return;

        const scope = calcScopeSelect.value;
        const scale = calcScaleSelect.value;

        let vellicorWeeks = "8–10 Weeks";
        let traditionalMonths = "12–15 Months";
        let costAdvantage = "55% TCO Savings";
        let archStandard = "CSDM 4.0 Clean Core & Zero Debt";

        if (scope === 'servicenow') {
            if (scale === 'enterprise') {
                vellicorWeeks = "8–12 Weeks";
                traditionalMonths = "14–18 Months";
                costAdvantage = "60% TCO Savings";
            } else if (scale === 'fortune500') {
                vellicorWeeks = "10–14 Weeks";
                traditionalMonths = "18–24 Months";
                costAdvantage = "65% TCO Savings";
            } else {
                vellicorWeeks = "6–8 Weeks";
                traditionalMonths = "9–12 Months";
                costAdvantage = "50% TCO Savings";
            }
        } else if (scope === 'sovereign_ai') {
            if (scale === 'enterprise' || scale === 'fortune500') {
                vellicorWeeks = "8–12 Weeks";
                traditionalMonths = "12–18 Months";
                costAdvantage = "65% TCO Savings";
                archStandard = "100% Air-Gapped VPC + Zero Retention";
            } else {
                vellicorWeeks = "6–8 Weeks";
                traditionalMonths = "8–10 Months";
                costAdvantage = "55% TCO Savings";
                archStandard = "Private VPC & Client-Retained Weights";
            }
        } else if (scope === 'voice') {
            vellicorWeeks = "4–6 Weeks";
            traditionalMonths = "8–12 Months";
            costAdvantage = "70% Call Center TCO Reduction";
            archStandard = "Sub-400ms SIP / WebRTC Engine";
        } else if (scope === 'full_suite') {
            vellicorWeeks = "12–16 Weeks";
            traditionalMonths = "24–36 Months";
            costAdvantage = "65% Unified TCO Savings";
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
        calculateTransformation();
    }

    // ----------------------------------------------------------------------
    // 6. Operating Entity Filter / Toggle (Portal View)
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
    // 7. Contact & Executive Briefing Form Sanitization & Submission
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
