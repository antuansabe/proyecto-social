export interface Law {
  id: string;
  title: string;
  description: string;
  slug: string;
  impact: 'high' | 'medium' | 'low';
  status: 'active' | 'pending' | 'draft';
  affectedSections: string[];
  mythsAndTruths: MythAndTruth[];
  actionableAdvice: string[];
  realCases: RealCase[];
}

export interface MythAndTruth {
  id: string;
  myth: string;
  truth: string;
  explanation: string;
}

export interface RealCase {
  id: string;
  title: string;
  description: string;
  outcome: string;
  date: string;
}

export interface DigitalDefenseApp {
  id: string;
  name: string;
  category: 'messenger' | 'browser' | 'vpn' | 'security' | 'other';
  description: string;
  downloadUrl: string;
  isRecommended: boolean;
}

export interface LegislativeRadarItem {
  id: string;
  title: string;
  status: 'monitoring' | 'alert' | 'critical';
  impact: 'high' | 'medium' | 'low';
  description: string;
  lastUpdate: string;
}