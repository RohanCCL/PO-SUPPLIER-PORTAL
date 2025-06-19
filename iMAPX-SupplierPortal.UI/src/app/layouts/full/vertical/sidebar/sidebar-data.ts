import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/starter',
  },
  {
    navCap: 'Admin',
  },
  {
    displayName: 'Users',
    iconName: 'user',
    children: [
      {
        displayName: 'Login as  Different User',
        iconName: 'point',
        route: '/users/login-as-different-user',
      },
      {
        displayName: 'Create User Group',
        iconName: 'point',
        route: '/users/create-user-group',
      },
      {
        displayName: 'User Creation',
        iconName: 'point',
        route: '/users/user-creation',
      },
      {
        displayName: 'Reset Password',
        iconName: 'point',
        route: '/users/reset-password',
      },
    ],
  },
  {
    displayName: 'Applications',
    iconName: 'apps',
    children: [
      {
        displayName: 'Add Applications',
        iconName: 'point',
        route: '/applications/add-applications',
      },
    ],
  },
  {
    displayName: 'Reference',
    iconName: 'file-text',
    children: [
      {
        displayName: 'Operation Master',
        iconName: 'point',
        route: '/reference/operation-master',
      },
      {
        displayName: 'Operation Template',
        iconName: 'point',
        route: '/reference/operation-template',
      },
      {
        displayName: 'Style Operation',
        iconName: 'point',
        route: '/reference/style-operation',
      },
      {
        displayName: 'Team Operations',
        iconName: 'point',
        route: '/reference/team-operations',
      },
      {
        displayName: 'WO Process',
        iconName: 'point',
        route: '/reference/wo-process',
      },
      {
        displayName: 'FG Master Update',
        iconName: 'point',
        route: '/reference/fg-master-update',
      },
    ],
  },
  {
    displayName: 'Cutting',
    iconName: 'scissors',
    children: [
      {
        displayName: 'Docket Creation',
        iconName: 'point',
        route: '/cutting/docket-creation',
      },
      {
        displayName: 'Docket Priority',
        iconName: 'point',
        route: '/cutting/docket-priority',
      },
      {
        displayName: 'Docket Confirmation',
        iconName: 'point',
        route: '/cutting/docket-confirmation',
      },
      {
        displayName: 'Docket Creation (Rule)',
        iconName: 'point',
        route: '/cutting/docket-creation-rule',
      },
      {
        displayName: 'Tag Allocation',
        iconName: 'point',
        route: '/cutting/tag-allocation',
      },
      {
        displayName: 'Tag Deallocation',
        iconName: 'point',
        route: '/cutting/tag-deallocation',
      },
      {
        displayName: 'Tag Reallocation',
        iconName: 'point',
        route: '/cutting/tag-reallocation',
      },
      {
        displayName: 'Bundle Usability',
        iconName: 'point',
        route: '/cutting/bundle-usability',
      },
      {
        displayName: 'Bundle Transfer',
        iconName: 'point',
        route: '/cutting/bundle-transfer',
      },
    ],
  },

 {
    displayName: 'PO',
    iconName: 'cards-filled',
    children: [
      {
        displayName: 'PO Creation',
        iconName: 'point',
        route: '/po/po-create',
      },
     
    ],
  },
  {
    displayName: 'SRP',
    iconName: 'tag',
    children: [
      {
        displayName: 'Manual SRP Creation',
        iconName: 'point',
        route: '/srp/manual-srp-creation',
      },
      {
        displayName: 'Additional SRP',
        iconName: 'point',
        route: '/srp/additional-srp',
      },
      {
        displayName: 'Print SRP',
        iconName: 'point',
        route: '/srp/print-srp',
      },
      {
        displayName: 'SRP Qty Change',
        iconName: 'point',
        route: '/srp/srp-qty-change',
      },
    ],
  },
  {
    displayName: 'AQL',
    iconName: 'checklist',
    children: [
      {
        displayName: 'AQL Reverse',
        iconName: 'point',
        route: '/aql/aql-reverse',
      },
      {
        displayName: 'AQL Reverse Scan',
        iconName: 'point',
        route: '/aql/aql-reverse-scan',
      },
      {
        displayName: 'Manage QC Bonus',
        iconName: 'point',
        route: '/aql/manage-qc-bonus',
      },
      {
        displayName: 'Audit Board',
        iconName: 'point',
        route: '/aql/audit-board',
      },
      {
        displayName: 'Return To Recorrect',
        iconName: 'point',
        route: '/aql/return-to-recorrect',
      },
      {
        displayName: 'AQL Receive',
        iconName: 'point',
        route: '/aql/aql-receive',
      },
      {
        displayName: 'Fix Audit Level',
        iconName: 'point',
        route: '/aql/fix-audit-level',
      },
      {
        displayName: 'Sample Transfer',
        iconName: 'point',
        route: '/aql/sample-transfer',
      },
      {
        displayName: 'Sample Transfer Revers',
        iconName: 'point',
        route: '/aql/sample-transfer-revers',
      },
    ],
  },
  {
    displayName: 'FG',
    iconName: 'packages',
    children: [
      {
        displayName: 'Scan FG',
        iconName: 'point',
        route: '/fg/scan-fg',
      },
      {
        displayName: 'Reverse FG',
        iconName: 'point',
        route: '/fg/reverse-fg',
      },
      {
        displayName: 'Reverse FG Scan',
        iconName: 'point',
        route: '/fg/reverse-fg-scan',
      },
      {
        displayName: 'FG EOC',
        iconName: 'point',
        route: '/fg/fg-eoc',
      },
      {
        displayName: 'FG Delivery',
        iconName: 'point',
        route: '/fg/fg-delivery',
      },
      {
        displayName: 'Packing List',
        iconName: 'point',
        route: '/fg/packing-list',
      },
      {
        displayName: 'Gatepass',
        iconName: 'point',
        route: '/fg/gatepass',
      },
      {
        displayName: 'Pack Carton',
        iconName: 'point',
        route: '/fg/pack-carton',
      },
      {
        displayName: 'Pack Data',
        iconName: 'point',
        route: '/fg/pack-data',
      },
    ],
  },
  {
    displayName: 'Production',
    iconName: 'building-factory',
    children: [
      {
        displayName: 'Team Scan New',
        iconName: 'point',
        route: '/production/team-scan-new',
      },
      {
        displayName: 'Team Scan Barcode',
        iconName: 'point',
        route: '/production/team-scan-barcode',
      },
      {
        displayName: 'Team Scan Reverse',
        iconName: 'point',
        route: '/production/team-scan-reverse',
      },
      {
        displayName: 'Operation Scan',
        iconName: 'point',
        route: '/production/operation-scan',
      },
      {
        displayName: 'Operation Scan Upload',
        iconName: 'point',
        route: '/production/operation-scan-upload',
      },
      {
        displayName: 'Bundle Transfer Prod:',
        iconName: 'point',
        route: '/production/bundle-transfer-prod',
      },
      {
        displayName: 'Team Transfer Reverse',
        iconName: 'point',
        route: '/production/team-transfer-reverse',
      },
      {
        displayName: 'Bundle Reject',
        iconName: 'point',
        route: '/production/bundle-reject',
      },
      {
        displayName: 'Split Bundle',
        iconName: 'point',
        route: '/production/split-bundle',
      },
      {
        displayName: 'FG Transfer',
        iconName: 'point',
        route: '/production/fg-transfer',
      },
      {
        displayName: 'Bundle Qty Change',
        iconName: 'point',
        route: '/production/bundle-qty-change',
      },
      {
        displayName: 'Team Transfer',
        iconName: 'point',
        route: '/production/team-transfer',
      },
      {
        displayName: 'SOTeam Sequance',
        iconName: 'point',
        route: '/production/soteam-sequance',
      },
    ],
  },
  {
    displayName: 'Rejection',
    iconName: 'circle-dashed-x',
    children: [
      {
        displayName: 'Reject CP/SG',
        iconName: 'point',
        route: '/rejection/reject-cpsg',
      },
      {
        displayName: 'Reject Receive CWR',
        iconName: 'point',
        route: '/rejection/reject-receive-cwr',
      },
      {
        displayName: 'Rejection Gatepass',
        iconName: 'point',
        route: '/rejection/rejection-gatepass',
      },
      {
        displayName: 'Reverse CWR Receiving',
        iconName: 'point',
        route: '/rejection/reverse-cwr-receiving',
      },
      {
        displayName: 'Reverse CP/SG Rejection',
        iconName: 'point',
        route: '/rejection/reverse-cpsg-rejection',
      },
      {
        displayName: 'Reverse Pending Gatepass',
        iconName: 'point',
        route: '/rejection/reverse-pending-gatepass',
      },
    ],
  },
  {
    displayName: 'Inquires',
    iconName: 'checklist',
    children: [
      {
        displayName: 'Team Progress Chart',
        iconName: 'point',
        route: '/inquires/team-progress-chart',
      },
      {
        displayName: 'SRP Status',
        iconName: 'point',
        route: '/inquires/srp-status',
      },
      {
        displayName: 'Stock Take',
        iconName: 'point',
        route: '/inquires/stock-take',
      },
      {
        displayName: 'Print Tag',
        iconName: 'point',
        route: '/inquires/print-tag',
      },
      {
        displayName: 'Add Work Station',
        iconName: 'point',
        route: '/inquires/add-work-station',
      },
    ],
  },
  {
    displayName: 'Incentive',
    iconName: 'coin',
    children: [
      {
        displayName: 'Incentive Week',
        iconName: 'point',
        route: '/incentive/incentive-week',
      },
      {
        displayName: 'Production Calendar',
        iconName: 'point',
        route: '/incentive/production-calender',
      },
      {
        displayName: 'Calculate Incentive',
        iconName: 'point',
        route: '/incentive/calculate-incentive',
      },
    ],
  },
  {
    displayName: 'Reports',
    iconName: 'file-analytics',
    route: '/reports',
  },
  {
    displayName: 'Stock',
    iconName: 'trending-up',
    children: [
      {
        displayName: 'Stock Administration',
        iconName: 'point',
        route: '/stock/stock-administration',
      },
      {
        displayName: 'Physical Stock CP',
        iconName: 'point',
        route: '/stock/physical-stock-cp',
      },
      {
        displayName: 'Rejection Stock',
        iconName: 'point',
        route: '/stock/rejection-stock',
      },
    ],
  },
  {
    displayName: 'Embellishment',
    iconName: 'paint',
    children: [
      {
        displayName: 'Emb: Send SG',
        iconName: 'point',
        route: '/embellishment/emb-send-sg',
      },
      {
        displayName: 'Emb: GRN',
        iconName: 'point',
        route: '/embellishment/emb-grn',
      },
    ],
  },
  {
    displayName: 'Manage Files',
    iconName: 'folder',
    children: [
      {
        displayName: 'Size Master',
        iconName: 'point',
        route: '/manage/size-master',
      },
      {
        displayName: 'Update Size Master',
        iconName: 'point',
        route: '/manage/update-size-master',
      },
      {
        displayName: 'Size Grid',
        iconName: 'point',
        route: '/manage/size-grid',
      },
      
    ],
  },
];
