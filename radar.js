// ==========================================================================
// Vellicor Technologies Ltd — Enterprise Technology Radar Controller
// Enterprise Technology Radar Architecture
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Mobile Drawer Navigation
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

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
    }

    // ----------------------------------------------------------------------
    // 2. Radar Data Registry (16 Blips across 4 Quadrants & 4 Rings)
    // Center: (300, 300)
    // Rings radii:
    // ADOPT:   r <= 80
    // TRIAL:   80 < r <= 145
    // ASSESS: 145 < r <= 210
    // HOLD:   210 < r <= 270
    //
    // Quadrants (angles):
    // Q1 (Top-Right: 270° to 360° / 0°): Sovereign AI & Voice
    // Q2 (Bottom-Right: 0° to 90°): ServiceNow Clean Core
    // Q3 (Bottom-Left: 90° to 180°): Engineering Velocity
    // Q4 (Top-Left: 180° to 270°): Institutional Governance & VPC
    // ----------------------------------------------------------------------
    const radarBlips = [
        // --- QUADRANT 1: SOVEREIGN AI & VOICE (Top-Right) ---
        {
            id: 1,
            name: "Sub-400ms Voice Telephony Engines",
            quadrant: "ai",
            quadrantName: "Quadrant 1: Sovereign AI & Voice",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 345, y: 255, // ADOPT (r~63)
            lead: "Human Conversational Comfort SLA with WebRTC / SIP Duplex",
            description: "Natural human conversational turn-taking requires round-trip latency under 450ms. By coupling streaming phoneme tokenization with state-space speech synthesis and native WebRTC/SIP trunks, AnshuAI achieves a certified 359ms latency benchmark without speech collisions.",
            specs: {
                cta: "Adopt for Tier-1 Enterprise Service Desks",
                velocity: "4–6 Week Cutover",
                boundary: "Private WebRTC / Zero Telemetry Retention"
            },
            link: "./portal.html#telemetry",
            linkText: "Test in Voice Telemetry Lab"
        },
        {
            id: 2,
            name: "Air-Gapped Private VPC SLM Inference",
            quadrant: "ai",
            quadrantName: "Quadrant 1: Sovereign AI & Voice",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 335, y: 285, // ADOPT (r~38)
            lead: "Client-Retained Weights Isolated from Commercial Cloud Leaks",
            description: "Deploying quantized small language models (SLMs) strictly inside client-governed sovereign VPCs and dedicated on-premise enclaves. Client proprietary datasets never traverse public multi-tenant APIs.",
            specs: {
                cta: "Mandatory for Regulated Industries",
                velocity: "6–8 Week Deployment",
                boundary: "100% On-Premise / Private Cloud"
            },
            link: "./solutions.html#sovereign-ai",
            linkText: "Explore Sovereign AI Specs"
        },
        {
            id: 3,
            name: "Autonomous Incident Auto-Remediation",
            quadrant: "ai",
            quadrantName: "Quadrant 1: Sovereign AI & Voice",
            ring: "TRIAL",
            ringClass: "bg-cyanPrimary/20 text-cyanGlow border-cyanPrimary/30",
            color: "#22D3EE",
            x: 395, y: 220, // TRIAL (r~124)
            lead: "Closed-Loop L1/L2 Incident Resolution for ServiceNow ITSM",
            description: "Agentic microservices analyzing incoming incident signals, querying CMDB relationship graphs, and executing automated diagnostic scripts before dispatching human engineers.",
            specs: {
                cta: "Trial on High-Volume IT Tickets",
                velocity: "Reduces MTTR by 68%",
                boundary: "ServiceNow Integration Hub"
            },
            link: "./solutions.html#servicenow",
            linkText: "Review Remediation Architecture"
        },
        {
            id: 4,
            name: "Multi-Tenant Commercial LLM API Egress",
            quadrant: "ai",
            quadrantName: "Quadrant 1: Sovereign AI & Voice",
            ring: "HOLD",
            ringClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
            color: "#F43F5E",
            x: 480, y: 120, // HOLD (r~248)
            lead: "Major Regulatory Risk: Third-Party Telemetry & Training Leaks",
            description: "Routing sensitive customer PII or corporate source code to public multi-tenant LLM endpoints without strict BAA zero-retention guarantees exposes enterprises to major compliance sanctions.",
            specs: {
                cta: "HOLD / Cease Unregulated Usage",
                velocity: "Violates HIPAA / SOC2",
                boundary: "Uncontrolled Foreign Server Egress"
            },
            link: "./about.html#governance",
            linkText: "Read Sovereign Governance Policy"
        },

        // --- QUADRANT 2: SERVICENOW CLEAN CORE (Bottom-Right) ---
        {
            id: 5,
            name: "CSDM 4.0 Common Service Data Model",
            quadrant: "servicenow",
            quadrantName: "Quadrant 2: ServiceNow Clean Core",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 345, y: 345, // ADOPT (r~63)
            lead: "Foundation Architecture Standardizing Enterprise Entities",
            description: "Aligning Business Applications, Technical Services, and Infrastructure into a clean, unpolluted CMDB hierarchy. Eliminates tribal data silos and establishes transparent service mapping.",
            specs: {
                cta: "Foundational Pre-Requisite",
                velocity: "Eliminates 80% CMDB Data Rot",
                boundary: "Native ServiceNow Standard"
            },
            link: "./solutions.html#servicenow",
            linkText: "View CSDM Architecture Guide"
        },
        {
            id: 6,
            name: "Zero-Debt Out-of-the-Box Guardrails",
            quadrant: "servicenow",
            quadrantName: "Quadrant 2: ServiceNow Clean Core",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 330, y: 375, // ADOPT (r~80)
            lead: "Eliminates Monolithic Script Overrides & Guarantees Upgrades",
            description: "Strict Certified Technical Architect (CTA) enforcement forbidding customization of core platform scripts. Ensures future Washington/Xanadu upgrades execute in minutes without regressions.",
            specs: {
                cta: "Strict CTA Architecture Mandate",
                velocity: "1-Click Major Upgrades",
                boundary: "Zero Technical Debt"
            },
            link: "./about.html#governance",
            linkText: "Read CTA Governance Framework"
        },
        {
            id: 7,
            name: "Automated CMDB Service Graph Connectors",
            quadrant: "servicenow",
            quadrantName: "Quadrant 2: ServiceNow Clean Core",
            ring: "TRIAL",
            ringClass: "bg-cyanPrimary/20 text-cyanGlow border-cyanPrimary/30",
            color: "#22D3EE",
            x: 410, y: 380, // TRIAL (r~136)
            lead: "Real-Time Normalized Topology Sync Across Multi-Cloud",
            description: "Replacing brittle scheduled flat-file imports with certified Service Graph Connectors across hybrid multi-cloud estates and core ERP systems, maintaining live sub-minute CMDB accuracy.",
            specs: {
                cta: "Trial for Hybrid Cloud Estates",
                velocity: "Sub-Minute Discovery Sync",
                boundary: "Service Graph Certification"
            },
            link: "./solutions.html#integration",
            linkText: "Explore Integration Hub"
        },
        {
            id: 8,
            name: "Monolithic Custom Business Rule Scripting",
            quadrant: "servicenow",
            quadrantName: "Quadrant 2: ServiceNow Clean Core",
            ring: "HOLD",
            ringClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
            color: "#F43F5E",
            x: 485, y: 460, // HOLD (r~244)
            lead: "The #1 Cause of Upgrade Failures & Sprawling Multi-Million Dollar Debt",
            description: "Writing complex server scripts directly on OOTB baseline tables. When ServiceNow upgrades, customized scripts conflict with new features, locking enterprises into outdated platform versions.",
            specs: {
                cta: "HOLD / Refactor Immediately",
                velocity: "Causes 6-Month Upgrade Delays",
                boundary: "Monolithic Legacy Trap"
            },
            link: "./about.html#governance",
            linkText: "Audit Your Platform Debt"
        },

        // --- QUADRANT 3: ENGINEERING VELOCITY (Bottom-Left) ---
        {
            id: 9,
            name: "HeadStart Pre-Engineered IP Modules",
            quadrant: "velocity",
            quadrantName: "Quadrant 3: Engineering Velocity",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 255, y: 345, // ADOPT (r~63)
            lead: "Pre-Built Architecture Templates for Healthcare & Financial Workflows",
            description: "By pre-assembling 80% of common industry architecture into verified accelerators, delivery squads eliminate months of boilerplate configuration, cutting timelines down to 8–12 weeks.",
            specs: {
                cta: "Standard Vellicor Accelerator",
                velocity: "Collapses 12 Months to 8–12 Wks",
                boundary: "Pre-Verified AnshuAI IP"
            },
            link: "./subsidiaries.html",
            linkText: "Inspect HeadStart IP"
        },
        {
            id: 10,
            name: "24/7 Follow-the-Sun Agile Sprint Relay",
            quadrant: "velocity",
            quadrantName: "Quadrant 3: Engineering Velocity",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 240, y: 325, // ADOPT (r~65)
            lead: "Daily Architecture Handoff between US Advisors & Bengaluru CoE",
            description: "Continuous 24-hour sprint momentum. US architectural specifications defined during the North American business day are implemented and tested overnight by Bengaluru engineering squads.",
            specs: {
                cta: "Core Operating Methodology",
                velocity: "3x Feature Burn Rate",
                boundary: "Transcontinental Sprints"
            },
            link: "./subsidiaries.html",
            linkText: "Review Bengaluru CoE Model"
        },
        {
            id: 11,
            name: "Automated Synthetic Telemetry Test Suites",
            quadrant: "velocity",
            quadrantName: "Quadrant 3: Engineering Velocity",
            ring: "TRIAL",
            ringClass: "bg-cyanPrimary/20 text-cyanGlow border-cyanPrimary/30",
            color: "#22D3EE",
            x: 200, y: 395, // TRIAL (r~138)
            lead: "Continuous Robotic Call Ingestion & Latency Verification",
            description: "Autonomous bot callers dial into voice telephony trunks hourly, executing synthetic spoken dialogs to detect audio packet jitter, turn latency regressions, or ASR drift.",
            specs: {
                cta: "Trial on Critical Voice Channels",
                velocity: "Zero Downtime Deployments",
                boundary: "Continuous Regression Shield"
            },
            link: "./portal.html#telemetry",
            linkText: "Run Telemetry Suite"
        },
        {
            id: 12,
            name: "Multi-Quarter Waterfall Discovery Phasing",
            quadrant: "velocity",
            quadrantName: "Quadrant 3: Engineering Velocity",
            ring: "HOLD",
            ringClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
            color: "#F43F5E",
            x: 120, y: 470, // HOLD (r~247)
            lead: "Legacy Big-4 Billable Void: 6 Months of Slide Decks without Code",
            description: "Traditional consultancy models that mandate multi-month discovery workshops before shipping a single working user story. Results in massive budget overruns and obsolete requirements.",
            specs: {
                cta: "HOLD / Replace with Agile Prototyping",
                velocity: "14–18 Month Delivery Void",
                boundary: "Traditional Big-4 Trap"
            },
            link: "./contact.html",
            linkText: "Schedule Sprint Assessment"
        },

        // --- QUADRANT 4: INSTITUTIONAL GOVERNANCE & VPC (Top-Left) ---
        {
            id: 13,
            name: "Delaware Corporate MSA Legal Umbrella",
            quadrant: "governance",
            quadrantName: "Quadrant 4: Institutional Governance",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 255, y: 255, // ADOPT (r~63)
            lead: "Direct US Contract Enforceability with Client IP Custody Protections",
            description: "All client engagements contract directly with Vellicor Technologies Ltd (Delaware, USA), shielding enterprises from cross-border legal jurisdiction ambiguities and overseas contract disputes.",
            specs: {
                cta: "Mandatory Corporate Foundation",
                velocity: "Standardized North American MSA",
                boundary: "Delaware Corporate Law"
            },
            link: "./about.html#governance",
            linkText: "Inspect Legal Structure"
        },
        {
            id: 14,
            name: "Automated SOC2 Type II & HIPAA Audit Trails",
            quadrant: "governance",
            quadrantName: "Quadrant 4: Institutional Governance",
            ring: "ADOPT",
            ringClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            color: "#34D399",
            x: 270, y: 230, // ADOPT (r~76)
            lead: "Continuous Tamper-Evident Security Log Aggregation",
            description: "Real-time compliance monitoring across all development pipelines, development labs, and client VPC access points, backing institutional compliance guarantees.",
            specs: {
                cta: "Institutional Baseline",
                velocity: "Audit-Ready Every Day",
                boundary: "Zero-Trust Architecture"
            },
            link: "./about.html",
            linkText: "Review Compliance Vault"
        },
        {
            id: 15,
            name: "Post-Quantum Cryptographic VPN Enclaves",
            quadrant: "governance",
            quadrantName: "Quadrant 4: Institutional Governance",
            ring: "ASSESS",
            ringClass: "bg-anshuGold/20 text-anshuGold border-anshuGold/30",
            color: "#D4AF37",
            x: 160, y: 190, // ASSESS (r~177)
            lead: "Quantum-Resistant Key Exchange for Transcontinental Pipelines",
            description: "Evaluating lattice-based cryptography algorithms (Kyber/Dilithium) across transatlantic and transpacific data tunnels to protect against future harvest-now-decrypt-later attacks.",
            specs: {
                cta: "Assess for Defense & Banking",
                velocity: "Future-Proof 2030 Standard",
                boundary: "Post-Quantum Security"
            },
            link: "./portal.html",
            linkText: "Inspect Network Security"
        },
        {
            id: 16,
            name: "Direct Unshielded Offshore Contracting",
            quadrant: "governance",
            quadrantName: "Quadrant 4: Institutional Governance",
            ring: "HOLD",
            ringClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
            color: "#F43F5E",
            x: 110, y: 130, // HOLD (r~254)
            lead: "Dangerous Exposure: Offshore IP Loss & Non-Enforceable Disputes",
            description: "Signing enterprise master agreements directly with unshielded foreign vendors. If intellectual property is misappropriated, US courts cannot compel offshore entity enforcement.",
            specs: {
                cta: "HOLD / Require US Legal Parent",
                velocity: "Severe Institutional Liability",
                boundary: "Uncontrolled Cross-Border Risk"
            },
            link: "./about.html#governance",
            linkText: "Read Holding Group Governance"
        }
    ];

    // ----------------------------------------------------------------------
    // 3. Render Blips on SVG Canvas
    // ----------------------------------------------------------------------
    const blipsGroup = document.getElementById('blipsGroup');
    const radarInspector = document.getElementById('radarInspector');
    const radarQuickList = document.getElementById('radarQuickList');
    const searchInput = document.getElementById('radarSearchInput');
    const quadrantFilters = document.querySelectorAll('.radar-filter-quadrant');

    let currentBlipId = 1;

    function renderBlips(filterQuadrant = 'all', searchQuery = '') {
        if (!blipsGroup) return;

        blipsGroup.innerHTML = '';
        if (radarQuickList) radarQuickList.innerHTML = '';

        const normalizedSearch = searchQuery.toLowerCase().trim();

        radarBlips.forEach(blip => {
            const matchesQuadrant = (filterQuadrant === 'all' || blip.quadrant === filterQuadrant);
            const matchesSearch = !normalizedSearch || 
                blip.name.toLowerCase().includes(normalizedSearch) || 
                blip.description.toLowerCase().includes(normalizedSearch) ||
                blip.ring.toLowerCase().includes(normalizedSearch);

            if (!matchesQuadrant || !matchesSearch) return;

            const isActive = blip.id === currentBlipId;

            // 1. Create SVG Blip Node
            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.setAttribute("class", `blip-node ${isActive ? 'active-blip' : ''}`);
            g.setAttribute("transform", `translate(${blip.x}, ${blip.y})`);
            g.setAttribute("data-blip-id", blip.id);
            g.style.color = blip.color;

            // Outer Pulse Ring for Active
            if (isActive) {
                const pulseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                pulseCircle.setAttribute("r", "16");
                pulseCircle.setAttribute("fill", "none");
                pulseCircle.setAttribute("stroke", blip.color);
                pulseCircle.setAttribute("stroke-width", "1.5");
                pulseCircle.setAttribute("opacity", "0.6");
                g.appendChild(pulseCircle);
            }

            // Blip Circle Body
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("r", "10");
            circle.setAttribute("fill", "#0B132B");
            circle.setAttribute("stroke", blip.color);
            circle.setAttribute("stroke-width", "2");
            circle.setAttribute("filter", "url(#blipGlow)");

            // Blip Number Text
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("y", "3.5");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "#FFFFFF");
            text.setAttribute("font-family", "'JetBrains Mono', monospace");
            text.setAttribute("font-size", "8");
            text.setAttribute("font-weight", "700");
            text.textContent = blip.id;

            g.appendChild(circle);
            g.appendChild(text);

            // Hover and Click Handlers
            g.addEventListener('click', () => {
                selectBlip(blip.id);
            });
            g.addEventListener('mouseenter', () => {
                selectBlip(blip.id, false);
            });

            blipsGroup.appendChild(g);

            // 2. Add to Quick-List
            if (radarQuickList) {
                const item = document.createElement('div');
                item.className = `p-2.5 rounded-xl border text-xs font-mono transition cursor-pointer flex items-center justify-between ${isActive ? 'bg-surface/90 border-indigoPrimary text-white' : 'bg-deep/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'}`;
                item.innerHTML = `
                    <div class="flex items-center gap-2">
                        <span class="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px]" style="background: ${blip.color}22; color: ${blip.color};">
                            ${blip.id}
                        </span>
                        <span class="font-sans font-semibold">${blip.name}</span>
                    </div>
                    <span class="text-[9px] uppercase px-1.5 py-0.5 rounded ${blip.ringClass}">${blip.ring}</span>
                `;
                item.addEventListener('click', () => {
                    selectBlip(blip.id);
                });
                radarQuickList.appendChild(item);
            }
        });
    }

    function selectBlip(blipId, reRender = true) {
        currentBlipId = blipId;
        const blip = radarBlips.find(b => b.id === blipId);
        if (!blip || !radarInspector) return;

        radarInspector.innerHTML = `
            <div class="space-y-4 animate-fadeIn">
                <div class="flex items-center justify-between pb-3 border-b border-indigoPrimary/20">
                    <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${blip.ringClass}">
                        RING: ${blip.ring}
                    </span>
                    <span class="text-xs font-mono text-slate-400">Blip #${blip.id < 10 ? '0' + blip.id : blip.id} of 16</span>
                </div>

                <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-cyanGlow">${blip.quadrantName}</span>
                    <h3 class="text-xl sm:text-2xl font-extrabold text-white font-heading mt-1">${blip.name}</h3>
                    <div class="text-xs font-mono text-slate-400 mt-1">${blip.lead}</div>
                </div>

                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    ${blip.description}
                </p>

                <div class="p-3.5 rounded-xl bg-deep/80 border border-white/5 space-y-2 text-xs font-mono">
                    <div class="flex justify-between">
                        <span class="text-slate-400">CTA Recommendation:</span>
                        <span class="text-emerald-400 font-bold">${blip.specs.cta}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Velocity Advantage:</span>
                        <span class="text-white font-bold">${blip.specs.velocity}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Data Boundary:</span>
                        <span class="text-cyanGlow font-bold">${blip.specs.boundary}</span>
                    </div>
                </div>

                <div class="pt-2">
                    <a href="${blip.link}" class="btn-cyan-pill w-full text-center py-2.5 text-xs uppercase tracking-wider block font-bold shimmer-trigger">
                        <i class="fa-solid fa-arrow-right mr-1.5"></i> ${blip.linkText}
                    </a>
                </div>
            </div>
        `;

        if (reRender) {
            const activeQuadrantBtn = document.querySelector('.radar-filter-quadrant.active');
            const q = activeQuadrantBtn ? activeQuadrantBtn.getAttribute('data-quadrant') : 'all';
            const query = searchInput ? searchInput.value : '';
            renderBlips(q, query);
        }
    }

    // Quadrant Filter Click Handlers
    if (quadrantFilters.length > 0) {
        quadrantFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                quadrantFilters.forEach(b => {
                    b.classList.remove('bg-white/10', 'text-white', 'border-indigoPrimary', 'active');
                    b.classList.add('text-slate-400', 'border-transparent');
                });
                btn.classList.add('bg-white/10', 'text-white', 'border-indigoPrimary', 'active');
                btn.classList.remove('text-slate-400', 'border-transparent');

                const q = btn.getAttribute('data-quadrant');
                renderBlips(q, searchInput ? searchInput.value : '');
            });
        });
    }

    // Search Input Handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeQuadrantBtn = document.querySelector('.radar-filter-quadrant.active');
            const q = activeQuadrantBtn ? activeQuadrantBtn.getAttribute('data-quadrant') : 'all';
            renderBlips(q, e.target.value);
        });
    }

    // Initial render
    renderBlips('all', '');
    selectBlip(1, false);
});
