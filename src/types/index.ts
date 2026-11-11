/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';
export type MainSection = 'explanation' | 'workspace' | 'mvp';
export type WorkspaceMode = 'organization' | 'expert';

export type UserRole =
  | 'org_admin'           // 1. Organization Administrator: Full organization access
  | 'infra_operator'      // 2. Infrastructure / Server Operator: Linux, OS, servers, containers, CPU/RAM
  | 'software_operator'   // 3. Software / Application Operator: Frontend, backend, APIs, exceptions
  | 'network_operator'    // 4. Network / Security Operator: Connectivity, DNS, firewall, TLS, auth failures
  | 'database_operator'   // 5. Database / Storage Operator: Databases, query performance, pool, disk/storage
  | 'hardware_operator'   // 6. Hardware Operator: CPU temperature, RAM, disk health, fan speed, power
  | 'expert'              // 7. Expert: Separate expert marketplace, sanitized cases, proposals
  | 'technical_staff'     // legacy alias
  | 'hardware_specialist' // legacy alias
  | 'backend_engineer'    // legacy alias
  | 'frontend_engineer'   // legacy alias
  | 'infra_engineer'      // legacy alias
  | 'dba'                 // legacy alias
  | 'network_engineer'    // legacy alias
  | 'security_engineer'   // legacy alias
  | 'it_operator'         // legacy alias
  | 'platform_admin';     // legacy alias

export type TechnicalCategory =
  | 'infrastructure'
  | 'linux'
  | 'network'
  | 'database'
  | 'backend'
  | 'frontend'
  | 'software'
  | 'apis'
  | 'devops'
  | 'cloud'
  | 'security'
  | 'architecture'
  | 'performance'
  | 'hardware'
  | 'storage'
  | 'other';

// Five canonical monitoring domains per specification
export type MainMonitoringDomain =
  | 'application'       // 1. Application & Software: Frontend, Backend, APIs, Microservices, App Errors, Exceptions, Request Latency
  | 'infrastructure'    // 2. Infrastructure & Runtime: Servers, Linux, Operating Systems, Containers, Virtualization, Cloud, CPU, Memory, Processes
  | 'database_storage'  // 3. Database & Storage: Databases, Cache, Queues, Disk, File Systems, Storage Capacity, I/O, Backup Events
  | 'network'           // 4. Network & Connectivity: Network Interfaces, DNS, Firewall, TLS, Internet Connectivity, Latency, Packet Loss
  | 'hardware_security';// 5. Hardware & Security: Physical Devices, Hardware Health, Temperature, Power, Sensors, Authentication Events, Security Events

export type MonitoringSourceCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'server'
  | 'disk'
  | 'network'
  | 'security'
  | 'cloud'
  | 'hardware'
  | 'storage'
  | 'api'
  | MainMonitoringDomain;

export type CategoryHealthStatus = 'healthy' | 'warning' | 'critical' | 'unknown' | 'no_data';

export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export type IncidentStatus =
  | 'detected'
  | 'investigating'
  | 'diagnosed'
  | 'awaiting_action'
  | 'in_progress'
  | 'resolved'
  | 'reviewed'
  | 'submitted'
  | 'under_review'
  | 'expert_requested';

export interface IncidentTimelineEvent {
  time: string;
  title: string;
  detail?: string;
  type: 'ingest' | 'policy_tripped' | 'alert_generated' | 'incident_created' | 'expert_dispatched' | 'remediation_applied' | 'resolved';
}

export interface Incident {
  id: string;
  ticketNumber: string;
  title: string;
  category: TechnicalCategory;
  domain?: MainMonitoringDomain;
  sourceCategory?: MonitoringSourceCategory;
  severity: IncidentSeverity;
  affectedSystem: string;
  description: string;
  stepsTaken?: string;
  rawLogs?: string;
  sanitizedLogs?: string;
  createdAt: string;
  status: IncidentStatus;
  isSample?: boolean;
  expertRequestId?: string;
  organizationId?: string;
  timeline?: IncidentTimelineEvent[];
}

export interface StructuredLog {
  id: string;
  timestamp: string;
  severity: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL' | 'DEBUG';
  domain: MainMonitoringDomain;
  source: MonitoringSourceCategory | string;
  service: string;
  host?: string;
  message: string;
  eventId: string;
  correlationId?: string;
  relatedIncidentId?: string;
  processingStatus: 'parsed' | 'evaluated' | 'redacted' | 'alert_generated';
  organizationId: string;
  clientContext?: {
    browser?: string;
    traceId?: string;
    latencyMs?: number;
    host?: string;
  };
  payload?: Record<string, any>;
  highlight?: boolean;
}

export type LiveLog = StructuredLog;

export interface CategoryMetric {
  id: string;
  label: { fa: string; en: string };
  value: string | number;
  unit?: string;
  change?: string;
  isWarning?: boolean;
  isCritical?: boolean;
  sparkline?: number[];
  note?: { fa: string; en: string };
}

export interface CategoryPolicy {
  id: string;
  name: { fa: string; en: string };
  description: { fa: string; en: string };
  domain?: MainMonitoringDomain;
  category: MonitoringSourceCategory;
  targetComponent: string;
  triggerCondition: string;
  configuredThreshold: string;
  evaluationInterval: string;
  action: { fa: string; en: string };
  notificationDestination: string;
  severity: IncidentSeverity;
  enabled: boolean;
  lastExecutionTime?: string;
  lastExecutionResult?: 'success' | 'failed' | 'tripped';
  executionCount: number;
  whyExists: { fa: string; en: string };
  whatItMonitors: { fa: string; en: string };
  samplePayload?: Record<string, any>;
}

export type PolicyRule = CategoryPolicy;

export type AlertStatus = 'new' | 'acknowledged' | 'in_progress' | 'resolved' | 'dismissed';

export interface AlertNotification {
  id: string;
  timestamp: string;
  title: { fa: string; en: string };
  message: { fa: string; en: string };
  severity: IncidentSeverity;
  domain?: MainMonitoringDomain;
  sourceCategory: MonitoringSourceCategory;
  service: string;
  incidentId?: string;
  policyId?: string;
  organizationId: string;
  acknowledged: boolean;
  status?: AlertStatus;
  suggestedAction: { fa: string; en: string };
}

export interface DemoOrganization {
  id: string;
  name: { fa: string; en: string };
  industry: { fa: string; en: string };
  health: CategoryHealthStatus;
  connectedSources: number;
  sources: MonitoringSourceCategory[];
  metricsSummary: {
    warnings: number;
    critical: number;
    activeIncidents: number;
    activePolicies: number;
    pendingRequests: number;
  };
}

export interface Expert {
  id: string;
  name: string;
  title: { fa: string; en: string };
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  domains: TechnicalCategory[];
  skills: string[];
  bio: { fa: string; en: string };
  certifications: string[];
  completedCases: number;
  availability: { fa: string; en: string };
  verified: boolean;
}

export type ExpertRequestSharingStatus =
  | 'draft'
  | 'under_sanitization'
  | 'approved_for_sharing'
  | 'proposals_received'
  | 'in_collaboration'
  | 'resolved'
  | 'case_approved';

export interface ExpertRequest {
  id: string;
  requestId: string;
  incidentId: string;
  incidentTicket: string;
  incidentTitle: string;
  organizationId?: string;
  organizationName: string;
  organizationIndustry?: string;
  technicalDomain: TechnicalCategory;
  requiredSkills: string[];
  severity: IncidentSeverity;
  problemDescription: string;
  sanitizedEvidence: string;
  actionsTaken: string;
  expectedOutcome: string;
  budgetPreference: string;
  status: ExpertRequestSharingStatus;
  matchedExpert?: Expert;
  createdAt: string;
  proposalsCount?: number;
  selectedProposalId?: string;
}

export interface ExpertProposal {
  id: string;
  requestId: string;
  incidentTicket: string;
  caseTitle: string;
  expertId: string;
  expertName: string;
  expertAvatar: string;
  expertTitle: { fa: string; en: string };
  proposedRate: string;
  estimatedHours: string;
  coverNote: { fa: string; en: string };
  proposedApproach: { fa: string; en: string };
  status: 'submitted' | 'accepted' | 'declined';
  submittedAt: string;
}

export interface CollaborationMessage {
  id: string;
  projectId: string;
  senderRole: 'organization' | 'expert' | 'system';
  senderName: string;
  timestamp: string;
  text: string;
  codeSnippet?: string;
  isSanitized?: boolean;
}

export interface CollaborationProject {
  id: string;
  requestId: string;
  incidentTicket: string;
  title: string;
  organizationId: string;
  organizationName: string;
  organizationIndustry: string;
  expertId: string;
  expertName: string;
  expertAvatar: string;
  status: 'in_collaboration' | 'pending_verification' | 'resolved';
  agreedRate: string;
  milestones: { id: string; title: string; completed: boolean }[];
  deliverables?: { id: string; title: string; completed: boolean }[];
  messages: CollaborationMessage[];
  startedAt: string;
  resolvedAt?: string;
  resolutionNotes?: string;
}

export interface IntegrationConnector {
  id: string;
  name: string;
  type: 'webhook' | 'slack' | 'pagerduty' | 'prometheus' | 'sentry_agent' | 'zabbix_proxy';
  category: 'Alerting' | 'Telemetry Ingestion' | 'Incident Sync';
  status: 'active' | 'degraded' | 'configured' | 'disconnected';
  lastSync: string;
  configSummary: string;
  iconName: string;
}

export interface OrgAccessMember {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastActive: string;
  accessScope: string;
  avatar: string;
}

export interface QuestionEvaluation {
  id: number;
  question: { fa: string; en: string };
  shortAnswer: { fa: string; en: string };
  detailedExplanation: { fa: string; en: string };
  reasoning: { fa: string; en: string };
  currentAssumptions: { fa: string; en: string };
  neededEvidence: { fa: string; en: string };
  statusLabel: 'hypothesis' | 'requires_validation' | 'proposed' | 'evidence_needed';
}

export interface ArchitectureComponent {
  id: string;
  number: number;
  name: { fa: string; en: string };
  role: { fa: string; en: string };
  responsibilities: { fa: string[]; en: string[] };
  inputs: { fa: string[]; en: string[] };
  outputs: { fa: string[]; en: string[] };
  relationships: { fa: string; en: string };
  failureBehavior?: { fa: string; en: string };
  status: 'implemented_phase1' | 'conceptual_phase1' | 'future_phase';
}

export interface DetailedDocumentationItem {
  id: string;
  title: { fa: string; en: string };
  subtitle?: { fa: string; en: string };
  badge?: { fa: string; en: string; type: 'implemented' | 'conceptual' | 'validation' | 'hypothesis' | 'deferred' };
  definition: { fa: string; en: string };
  purpose: { fa: string; en: string };
  problemAddressed: { fa: string; en: string };
  components: { fa: string[]; en: string[] };
  workflow: { fa: string[]; en: string[] };
  inputs: { fa: string[]; en: string[] };
  processing: { fa: string[]; en: string[] };
  outputs: { fa: string[]; en: string[] };
  implementationApproach: { fa: string; en: string };
  executionProcess: { fa: string; en: string };
  relationships: { fa: string; en: string };
  requirements: { fa: string[]; en: string[] };
  validation: { fa: string; en: string };
  currentStatus: { fa: string; en: string };
}

export interface WorkflowNode {
  id: string;
  order: number;
  name: { fa: string; en: string };
  shortRole: { fa: string; en: string };
  detailedDesc: { fa: string; en: string };
  privacyLevel: 'private' | 'sanitized_sharable' | 'internal_system';
  privateItems?: { fa: string[]; en: string[] };
  sharableItems?: { fa: string[]; en: string[] };
}

export interface DocumentationDetailItem {
  id: string;
  groupId: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
  itemNumber: number;
  title: { fa: string; en: string };
  summary: { fa: string; en: string };
  available: boolean;

  // Detailed page sections
  introduction: { fa: string; en: string };
  definition: { fa: string; en: string };
  whyExists: { fa: string; en: string };
  problemAddressed: { fa: string; en: string };
  mainComponents: { fa: string[]; en: string[] };
  howItWorks: { fa: string; en: string };
  stepByStepProcess: { fa: string[]; en: string[] };
  inputs: { fa: string[]; en: string[] };
  processingLogic: { fa: string[]; en: string[] };
  outputs: { fa: string[]; en: string[] };
  relationships: { fa: string; en: string };
  realisticExample: { fa: string; en: string };
  implementationApproach: { fa: string; en: string };
  evaluationMethod: { fa: string; en: string };

  whatHappensBefore?: { fa: string; en: string };
  whatHappensAfter?: { fa: string; en: string };
}

export interface PageHelpContent {
  pageKey: string;
  title: { fa: string; en: string };
  purpose: { fa: string; en: string };
  targetUsers: { fa: string; en: string };
  displayedInformation: { fa: string[]; en: string[] };
  allowedActions: { fa: string[]; en: string[] };
  relationshipToLogBridge: { fa: string; en: string };
}
