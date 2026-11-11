/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Theme,
  MainSection,
  WorkspaceMode,
  UserRole,
  Incident,
  ExpertRequest,
  ExpertProposal,
  CollaborationProject,
  IntegrationConnector,
  OrgAccessMember,
  CategoryPolicy,
  AlertNotification,
  StructuredLog,
  MonitoringSourceCategory,
} from '../types';
import { INITIAL_SEED_INCIDENTS } from '../data/phase1Data';
import {
  CATEGORY_POLICIES_DATA,
  INITIAL_ALERTS,
  INITIAL_EXPERT_REQUESTS,
  INITIAL_PROPOSALS,
  INITIAL_COLLABORATION_PROJECTS,
  INITIAL_INTEGRATIONS,
  INITIAL_ORG_MEMBERS,
  STRUCTURED_LOGS_DATA,
} from '../data/mockOpsData';

interface AppContextType {
  language: Language;
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mainSection: MainSection;
  setMainSection: (section: MainSection) => void;
  activeWorkspace: WorkspaceMode;
  setActiveWorkspace: (ws: WorkspaceMode) => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  canAccess: (permission: string) => boolean;
  incidents: Incident[];
  createIncident: (data: Omit<Incident, 'id' | 'ticketNumber' | 'createdAt' | 'status'>) => Incident;
  resetIncidentsToDefault: () => void;
  expertRequests: ExpertRequest[];
  addExpertRequest: (req: ExpertRequest) => void;
  approveCaseForSharing: (requestId: string) => void;
  proposals: ExpertProposal[];
  submitProposal: (proposalData: Omit<ExpertProposal, 'id' | 'status' | 'submittedAt'>) => void;
  acceptProposal: (proposalId: string) => void;
  collaborationProjects: CollaborationProject[];
  activeProjectId: string | null;
  setActiveProjectId: (id: string | null) => void;
  sendCollaborationMessage: (projectId: string, text: string, codeSnippet?: string) => void;
  toggleMilestone: (projectId: string, milestoneId: string) => void;
  resolveProject: (projectId: string, resolutionNotes: string) => void;
  integrations: IntegrationConnector[];
  toggleIntegration: (id: string) => void;
  orgMembers: OrgAccessMember[];
  addOrgMember: (member: OrgAccessMember) => void;
  selectedDocId: string | null;
  setSelectedDocId: (id: string | null) => void;
  selectedOrgId: string;
  setSelectedOrgId: (id: string) => void;
  activeCategory: MonitoringSourceCategory | null;
  setActiveCategory: (cat: MonitoringSourceCategory | null) => void;
  activeOpsTab: string;
  setActiveOpsTab: (tab: string) => void;
  policies: CategoryPolicy[];
  togglePolicy: (policyId: string) => void;
  simulatePolicyEvaluation: (policyId: string) => { success: boolean; message: string; actionResult: string };
  alerts: AlertNotification[];
  acknowledgeAlert: (alertId: string) => void;
  structuredLogs: StructuredLog[];
  addLogRecord: (log: StructuredLog) => void;
  isStreamPaused: boolean;
  setIsStreamPaused: (paused: boolean) => void;
  t: (fa: string, en: string) => string;
}

const STORAGE_KEYS = {
  LANG: 'logbridge_p1_lang',
  THEME: 'logbridge_p1_theme',
  INCIDENTS: 'logbridge_p1_incidents',
  REQUESTS: 'logbridge_p1_requests',
  PROPOSALS: 'logbridge_p1_proposals',
  PROJECTS: 'logbridge_p1_projects',
  ROLE: 'logbridge_p1_role',
  WORKSPACE: 'logbridge_p1_workspace',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language State
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return saved === 'en' ? 'en' : 'fa';
  });

  // 2. Theme State
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  // 3. Navigation Section: 'explanation' (Documentation) or 'workspace' (Interactive MVP)
  const [mainSection, setMainSection] = useState<MainSection>('explanation');

  // 4. Role & Workspace State
  const [currentRole, setCurrentRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ROLE);
    if (saved === 'org_admin' || saved === 'it_operator' || saved === 'expert' || saved === 'platform_admin') {
      return saved;
    }
    return 'org_admin';
  });

  const [activeWorkspace, setActiveWorkspaceState] = useState<WorkspaceMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.WORKSPACE);
    if (saved === 'organization' || saved === 'expert') return saved;
    return 'organization';
  });

  // 5. Selected Documentation Detail Page ID (null = show index)
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  // 6. Selected Demo Org & Active Category Navigation
  const [selectedOrgId, setSelectedOrgId] = useState<string>('org-digilog');
  const [activeCategory, setActiveCategory] = useState<MonitoringSourceCategory | null>(null);
  const [activeOpsTab, setActiveOpsTab] = useState<string>('overview');

  // 7. Incidents List
  const [incidents, setIncidents] = useState<Incident[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INCIDENTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse incidents from storage', e);
      }
    }
    return INITIAL_SEED_INCIDENTS;
  });

  // 8. Expert Requests List
  const [expertRequests, setExpertRequests] = useState<ExpertRequest[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse expert requests', e);
      }
    }
    return INITIAL_EXPERT_REQUESTS;
  });

  // 9. Expert Proposals List
  const [proposals, setProposals] = useState<ExpertProposal[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROPOSALS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse proposals', e);
      }
    }
    return INITIAL_PROPOSALS;
  });

  // 10. Collaboration Projects List
  const [collaborationProjects, setCollaborationProjects] = useState<CollaborationProject[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse projects', e);
      }
    }
    return INITIAL_COLLABORATION_PROJECTS;
  });

  const [activeProjectId, setActiveProjectId] = useState<string | null>('proj-01');

  // 11. Integrations and Org Members
  const [integrations, setIntegrations] = useState<IntegrationConnector[]>(INITIAL_INTEGRATIONS);
  const [orgMembers, setOrgMembers] = useState<OrgAccessMember[]>(INITIAL_ORG_MEMBERS);

  // 12. Policies and Alerts
  const [policies, setPolicies] = useState<CategoryPolicy[]>(CATEGORY_POLICIES_DATA);
  const [alerts, setAlerts] = useState<AlertNotification[]>(INITIAL_ALERTS);

  // 13. Structured Logs Stream
  const [structuredLogs, setStructuredLogs] = useState<StructuredLog[]>(STRUCTURED_LOGS_DATA);
  const [isStreamPaused, setIsStreamPaused] = useState(false);

  // Sync Language with DOM
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANG, language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
  }, [language]);

  // Sync Theme with DOM
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Role changes update workspace accordingly
  const setCurrentRole = (role: UserRole) => {
    setCurrentRoleState(role);
    localStorage.setItem(STORAGE_KEYS.ROLE, role);

    if (role === 'expert') {
      setActiveWorkspaceState('expert');
      localStorage.setItem(STORAGE_KEYS.WORKSPACE, 'expert');
    } else {
      setActiveWorkspaceState('organization');
      localStorage.setItem(STORAGE_KEYS.WORKSPACE, 'organization');
    }
  };

  const setActiveWorkspace = (ws: WorkspaceMode) => {
    setActiveWorkspaceState(ws);
    localStorage.setItem(STORAGE_KEYS.WORKSPACE, ws);
  };

  // Permission Check Helper with Domain-Scoped RBAC
  const canAccess = (permission: string): boolean => {
    if (currentRole === 'platform_admin' || currentRole === 'org_admin') return true;

    // Check domain-specific access for domain specialists
    if (permission.startsWith('domain:')) {
      const domainKey = permission.replace('domain:', '');
      if (currentRole === 'it_operator' || currentRole === 'technical_staff') return true;
      if (currentRole === 'software_operator' || currentRole === 'backend_engineer' || currentRole === 'frontend_engineer') {
        return domainKey === 'application' || domainKey === 'frontend' || domainKey === 'backend' || domainKey === 'software' || domainKey === 'api';
      }
      if (currentRole === 'infra_operator' || currentRole === 'infra_engineer') {
        return domainKey === 'infrastructure' || domainKey === 'server' || domainKey === 'cloud' || domainKey === 'linux';
      }
      if (currentRole === 'database_operator' || currentRole === 'dba') {
        return domainKey === 'database_storage' || domainKey === 'database' || domainKey === 'disk' || domainKey === 'storage';
      }
      if (currentRole === 'network_operator' || currentRole === 'network_engineer') {
        return domainKey === 'network' || domainKey === 'security';
      }
      if (currentRole === 'hardware_operator' || currentRole === 'hardware_specialist' || currentRole === 'security_engineer') {
        return domainKey === 'hardware_security' || domainKey === 'hardware' || domainKey === 'security';
      }
      return false;
    }

    switch (permission) {
      case 'manage_integrations':
      case 'manage_org_settings':
      case 'approve_expert_cases':
      case 'hire_experts':
        return false; // Handled by org_admin / platform_admin check above

      case 'view_org_telemetry':
      case 'triage_incidents':
      case 'manage_policies':
      case 'request_expert':
        return currentRole !== 'expert';

      case 'view_expert_opportunities':
      case 'submit_proposals':
      case 'manage_expert_profile':
        return currentRole === 'expert';

      case 'collaborate':
        return true;

      default:
        return true;
    }
  };

  // Periodic bounded log generator for live simulation
  useEffect(() => {
    if (isStreamPaused) return;

    const sources: { src: MonitoringSourceCategory; domain: any; host: string }[] = [
      { src: 'frontend', domain: 'application', host: 'edge-cdn-pop-01' },
      { src: 'backend', domain: 'application', host: 'node-worker-03' },
      { src: 'database', domain: 'database_storage', host: 'db-master-pg16' },
      { src: 'server', domain: 'infrastructure', host: 'prod-srv-core-01' },
      { src: 'disk', domain: 'database_storage', host: 'storage-node-array-01' },
      { src: 'network', domain: 'network', host: 'router-edge-teh-01' },
      { src: 'security', domain: 'hardware_security', host: 'iam-auth-gateway-01' },
      { src: 'cloud', domain: 'infrastructure', host: 'k8s-node-worker-02' },
    ];

    const interval = setInterval(() => {
      const selected = sources[Math.floor(Math.random() * sources.length)];
      const randId = Math.floor(1000 + Math.random() * 9000);
      const now = new Date();
      const timeStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now
        .getDate()
        .toString()
        .padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      const sampleEvents: Record<MonitoringSourceCategory, { level: 'INFO' | 'WARNING' | 'ERROR'; service: string; msg: string }> = {
        application: { level: 'INFO', service: 'order-api', msg: `HTTP 200 POST /v1/checkout/finalize latency=48ms` },
        infrastructure: { level: 'INFO', service: 'cgroups-daemon', msg: `cgroup v2 memory.current quota nominal: 68%` },
        database_storage: { level: 'INFO', service: 'postgres-primary', msg: `Query commit: transaction_id=${randId} lock_wait=0.2ms` },
        network: { level: 'INFO', service: 'edge-router', msg: `Ingress packet stream check: rx=1.4Gbps loss=0.01%` },
        hardware_security: { level: 'INFO', service: 'iam-gateway', msg: `Token verified: session_id=sess_${randId} tenant=${selectedOrgId}` },
        frontend: { level: 'INFO', service: 'shop-spa-client', msg: `Route transition /catalog?page=${Math.floor(Math.random() * 5 + 1)} render_time=42ms` },
        backend: { level: 'INFO', service: 'order-api', msg: `HTTP 200 POST /api/v1/orders/validate duration=${Math.floor(20 + Math.random() * 80)}ms` },
        database: { level: 'INFO', service: 'postgres-primary', msg: `Query commit: transaction_id=${randId} lock_wait=0.2ms` },
        server: { level: 'INFO', service: 'cgroups-daemon', msg: `cgroup memory usage nominal: 68% of 4GB quota` },
        disk: { level: 'INFO', service: 'nvme-driver', msg: `Periodic SMART telemetry healthy: 0 relocated sectors` },
        security: { level: 'INFO', service: 'auth-gateway', msg: `Token verified: session_id=sess_${randId} tenant=${selectedOrgId}` },
        cloud: { level: 'INFO', service: 'k8s-autoscaler', msg: `HPA target reached: 142 healthy replicas running` },
        hardware: { level: 'INFO', service: 'ipmi-telemetry', msg: `BMC IPMI health bus check: CPU0=68C PSU=380W fans=4200RPM` },
        storage: { level: 'INFO', service: 'raid-storage', msg: `RAID-10 volume check: write-cache battery backup nominal` },
        api: { level: 'INFO', service: 'api-gateway', msg: `Public routing table check: upstream latency=22ms` },
      };

      const ev = sampleEvents[selected.src] || sampleEvents.backend;

      const newRecord: StructuredLog = {
        id: `log-dyn-${Date.now()}`,
        timestamp: timeStr,
        severity: ev.level,
        domain: selected.domain,
        source: selected.src,
        service: ev.service,
        host: selected.host,
        message: ev.msg,
        eventId: `EVT-${selected.src.toUpperCase()}-${randId}`,
        correlationId: `corr-${selected.src}-${randId}`,
        processingStatus: 'evaluated',
        organizationId: selectedOrgId,
      };

      setStructuredLogs((prev) => [newRecord, ...prev.slice(0, 49)]);
    }, 4500);

    return () => clearInterval(interval);
  }, [isStreamPaused, selectedOrgId]);

  // Sync Handlers
  const persistIncidents = (updated: Incident[]) => {
    setIncidents(updated);
    localStorage.setItem(STORAGE_KEYS.INCIDENTS, JSON.stringify(updated));
  };

  const persistRequests = (updated: ExpertRequest[]) => {
    setExpertRequests(updated);
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(updated));
  };

  const persistProposals = (updated: ExpertProposal[]) => {
    setProposals(updated);
    localStorage.setItem(STORAGE_KEYS.PROPOSALS, JSON.stringify(updated));
  };

  const persistProjects = (updated: CollaborationProject[]) => {
    setCollaborationProjects(updated);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
  };

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'));
  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));

  const createIncident = (
    data: Omit<Incident, 'id' | 'ticketNumber' | 'createdAt' | 'status'>
  ): Incident => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr =
      language === 'fa'
        ? new Date().toLocaleDateString('fa-IR') +
          ' ' +
          new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        : new Date().toISOString().replace('T', ' ').slice(0, 16);

    const newIncident: Incident = {
      ...data,
      id: `inc-${Date.now()}`,
      ticketNumber: `INC-2026-${randNum}`,
      createdAt: dateStr,
      status: 'submitted',
      isSample: false,
      organizationId: selectedOrgId,
    };

    const updated = [newIncident, ...incidents];
    persistIncidents(updated);
    return newIncident;
  };

  const resetIncidentsToDefault = () => {
    persistIncidents(INITIAL_SEED_INCIDENTS);
    persistRequests(INITIAL_EXPERT_REQUESTS);
    persistProposals(INITIAL_PROPOSALS);
    persistProjects(INITIAL_COLLABORATION_PROJECTS);
    setPolicies(CATEGORY_POLICIES_DATA);
    setAlerts(INITIAL_ALERTS);
    setStructuredLogs(STRUCTURED_LOGS_DATA);
    setIntegrations(INITIAL_INTEGRATIONS);
    setOrgMembers(INITIAL_ORG_MEMBERS);
  };

  const addExpertRequest = (req: ExpertRequest) => {
    const updated = [req, ...expertRequests];
    persistRequests(updated);

    const updatedIncidents = incidents.map((inc) =>
      inc.id === req.incidentId ? { ...inc, status: 'expert_requested' as const, expertRequestId: req.id } : inc
    );
    persistIncidents(updatedIncidents);
  };

  // Approve case sharing (Organization Admin verifies sanitization and opens to expert network)
  const approveCaseForSharing = (requestId: string) => {
    const updated = expertRequests.map((r) =>
      r.id === requestId ? { ...r, status: 'approved_for_sharing' as const } : r
    );
    persistRequests(updated);
  };

  // Expert submits proposal
  const submitProposal = (data: Omit<ExpertProposal, 'id' | 'status' | 'submittedAt'>) => {
    const newProp: ExpertProposal = {
      ...data,
      id: `prop-${Date.now()}`,
      status: 'submitted',
      submittedAt: language === 'fa' ? 'هم‌اکنون' : 'Just now',
    };

    const updatedProps = [newProp, ...proposals];
    persistProposals(updatedProps);

    // Update request proposal count
    const updatedRequests = expertRequests.map((req) =>
      req.id === data.requestId
        ? {
            ...req,
            proposalsCount: (req.proposalsCount || 0) + 1,
            status: (req.status === 'approved_for_sharing' ? 'proposals_received' : req.status) as any,
          }
        : req
    );
    persistRequests(updatedRequests);
  };

  // Organization Admin accepts proposal -> creates collaboration project
  const acceptProposal = (proposalId: string) => {
    const prop = proposals.find((p) => p.id === proposalId);
    if (!prop) return;

    const req = expertRequests.find((r) => r.id === prop.requestId);

    // Mark proposal accepted
    const updatedProps = proposals.map((p) =>
      p.id === proposalId
        ? { ...p, status: 'accepted' as const }
        : p.requestId === prop.requestId
        ? { ...p, status: 'declined' as const }
        : p
    );
    persistProposals(updatedProps);

    // Mark request in_collaboration
    if (req) {
      const updatedReqs = expertRequests.map((r) =>
        r.id === req.id
          ? {
              ...r,
              status: 'in_collaboration' as const,
              selectedProposalId: proposalId,
            }
          : r
      );
      persistRequests(updatedReqs);
    }

    // Create new Collaboration Project if not existing
    const existing = collaborationProjects.find((cp) => cp.requestId === prop.requestId);
    if (!existing) {
      const newProj: CollaborationProject = {
        id: `proj-${Date.now()}`,
        requestId: prop.requestId,
        incidentTicket: prop.incidentTicket,
        title: prop.caseTitle,
        organizationId: req?.organizationId || selectedOrgId,
        organizationName: req?.organizationName || 'سازمان مشتری',
        organizationIndustry: req?.organizationIndustry || 'زیرساخت فنی',
        expertId: prop.expertId,
        expertName: prop.expertName,
        expertAvatar: prop.expertAvatar,
        status: 'in_collaboration',
        agreedRate: prop.proposedRate,
        milestones: [
          { id: 'm-1', title: 'تحلیل شواهد سانسورشده و تایید الگوی خطا', completed: true },
          { id: 'm-2', title: 'ارائه پچ یا راه‌حل اصلاحی', completed: false },
          { id: 'm-3', title: 'تست در محیط استیجینگ و تایید عملکرد', completed: false },
          { id: 'm-4', title: 'ثبت مستندات فنی و خاتمه رسمی', completed: false },
        ],
        messages: [
          {
            id: `msg-${Date.now()}`,
            projectId: `proj-${Date.now()}`,
            senderRole: 'system',
            senderName: 'LogBridge Privacy Guard',
            timestamp: 'هم‌اکنون',
            text: 'پیشنهاد با موفقیت پذیرفته شد. فضای اشتراکی امن برای همکاری سازمان و متخصص ایجاد گردید.',
          },
        ],
        startedAt: language === 'fa' ? 'امروز' : 'Today',
      };
      const updatedProjects = [newProj, ...collaborationProjects];
      persistProjects(updatedProjects);
      setActiveProjectId(newProj.id);
    }
  };

  const sendCollaborationMessage = (projectId: string, text: string, codeSnippet?: string) => {
    const senderRole = currentRole === 'expert' ? 'expert' : 'organization';
    const senderName =
      currentRole === 'expert'
        ? 'متخصص فنی'
        : currentRole === 'org_admin'
        ? 'مدیر سازمان'
        : 'اپراتور فنی';

    const newMsg = {
      id: `msg-${Date.now()}`,
      projectId,
      senderRole: senderRole as any,
      senderName,
      timestamp: language === 'fa' ? 'هم‌اکنون' : 'Just now',
      text,
      codeSnippet,
      isSanitized: true,
    };

    const updatedProjects = collaborationProjects.map((p) =>
      p.id === projectId ? { ...p, messages: [...p.messages, newMsg] } : p
    );
    persistProjects(updatedProjects);
  };

  const toggleMilestone = (projectId: string, milestoneId: string) => {
    const updatedProjects = collaborationProjects.map((p) => {
      if (p.id !== projectId) return p;
      return {
        ...p,
        milestones: p.milestones.map((m) =>
          m.id === milestoneId ? { ...m, completed: !m.completed } : m
        ),
      };
    });
    persistProjects(updatedProjects);
  };

  const resolveProject = (projectId: string, resolutionNotes: string) => {
    const project = collaborationProjects.find((p) => p.id === projectId);
    const dateStr = language === 'fa' ? 'امروز' : 'Today';

    const updatedProjects = collaborationProjects.map((p) =>
      p.id === projectId
        ? {
            ...p,
            status: 'resolved' as const,
            resolvedAt: dateStr,
            resolutionNotes,
            milestones: p.milestones.map((m) => ({ ...m, completed: true })),
          }
        : p
    );
    persistProjects(updatedProjects);

    // Also mark request and incident as resolved
    if (project) {
      const updatedReqs = expertRequests.map((r) =>
        r.id === project.requestId ? { ...r, status: 'resolved' as const } : r
      );
      persistRequests(updatedReqs);

      const updatedIncidents = incidents.map((inc) =>
        inc.ticketNumber === project.incidentTicket ? { ...inc, status: 'resolved' as const } : inc
      );
      persistIncidents(updatedIncidents);
    }
  };

  const toggleIntegration = (id: string) => {
    setIntegrations((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              status: it.status === 'active' ? 'disconnected' : 'active',
              lastSync: language === 'fa' ? 'هم‌اکنون' : 'Just now',
            }
          : it
      )
    );
  };

  const addOrgMember = (member: OrgAccessMember) => {
    setOrgMembers((prev) => [member, ...prev]);
  };

  const togglePolicy = (policyId: string) => {
    setPolicies((prev) =>
      prev.map((p) => (p.id === policyId ? { ...p, enabled: !p.enabled } : p))
    );
  };

  const simulatePolicyEvaluation = (policyId: string) => {
    const policy = policies.find((p) => p.id === policyId);
    if (!policy) return { success: false, message: 'Policy not found', actionResult: 'No action' };

    const nowTime =
      language === 'fa'
        ? new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        : new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    setPolicies((prev) =>
      prev.map((p) =>
        p.id === policyId
          ? {
              ...p,
              executionCount: p.executionCount + 1,
              lastExecutionTime: `هم‌اکنون (${nowTime})`,
              lastExecutionResult: 'tripped',
            }
          : p
      )
    );

    return {
      success: true,
      message: language === 'fa' ? `شرط ارزیابی شد: ${policy.triggerCondition}` : `Condition evaluated: ${policy.triggerCondition}`,
      actionResult: language === 'fa' ? `اقدام شبیه‌سازی‌شده: ${policy.action.fa}` : `Simulated action: ${policy.action.en}`,
    };
  };

  const acknowledgeAlert = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((alt) => (alt.id === alertId ? { ...alt, acknowledged: true } : alt))
    );
  };

  const addLogRecord = (log: StructuredLog) => {
    setStructuredLogs((prev) => [log, ...prev.slice(0, 49)]);
  };

  const t = (fa: string, en: string) => {
    return language === 'fa' ? fa : en;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        lang: language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        mainSection,
        setMainSection,
        activeWorkspace,
        setActiveWorkspace,
        currentRole,
        setCurrentRole,
        canAccess,
        incidents,
        createIncident,
        resetIncidentsToDefault,
        expertRequests,
        addExpertRequest,
        approveCaseForSharing,
        proposals,
        submitProposal,
        acceptProposal,
        collaborationProjects,
        activeProjectId,
        setActiveProjectId,
        sendCollaborationMessage,
        toggleMilestone,
        resolveProject,
        integrations,
        toggleIntegration,
        orgMembers,
        addOrgMember,
        selectedDocId,
        setSelectedDocId,
        selectedOrgId,
        setSelectedOrgId,
        activeCategory,
        setActiveCategory,
        activeOpsTab,
        setActiveOpsTab,
        policies,
        togglePolicy,
        simulatePolicyEvaluation,
        alerts,
        acknowledgeAlert,
        structuredLogs,
        addLogRecord,
        isStreamPaused,
        setIsStreamPaused,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
