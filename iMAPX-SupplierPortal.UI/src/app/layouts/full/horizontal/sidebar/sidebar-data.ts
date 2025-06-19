import { NavItem } from '../../vertical/sidebar/nav-item/nav-item';

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
    navCap: 'Other',
  },
  {
    displayName: 'Users',
    iconName: 'user',
    children: [
      {
        displayName: 'Login as  Different User',
        route: '/users/login-as-different-user',
      },
      {
        displayName: 'Create User Group',
        route: '/users/create-user-group',
      },
      {
        displayName: 'User Creation',
        route: '/users/user-creation',
      },
      {
        displayName: 'Reset Password',
        route: '/users/reset-password',
      },
    ],
  },
  {
    displayName: 'Reference',
    iconName: 'file-text',
    children: [
      {
        displayName: 'Operation Master',
        route: '/reference/operation-master',
      },
      {
        displayName: 'Operation Template',
        route: '/reference/operation-template',
      },
      {
        displayName: 'Style Operation',
        route: '/reference/style-operation',
      },
      {
        displayName: 'Team Operations',
        route: '/reference/team-operations',
      },
      {
        displayName: 'WO Process',
        route: '/reference/wo-process',
      },
      {
        displayName: 'FG Master Update',
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
        route: '/cutting/docket-creation',
      },
      {
        displayName: 'Docket Priority',
        route: '/cutting/docket-priority',
      },
      {
        displayName: 'Docket Confirmation',
        route: '/cutting/docket-confirmation',
      },
      {
        displayName: 'Docket Creation (Rule)',
        route: '/cutting/docket-creation-rule',
      },
      {
        displayName: 'Tag Allocation',
        route: '/cutting/tag-allocation',
      },
      {
        displayName: 'Tag Deallocation',
        route: '/cutting/tag-deallocation',
      },
      {
        displayName: 'Tag Reallocation',
        route: '/cutting/tag-reallocation',
      },
      {
        displayName: 'Bundle Usability',
        route: '/cutting/bundle-usability',
      },
      {
        displayName: 'Bundle Transfer',
        route: '/cutting/bundle-transfer',
      },
    ],
  },
  {
    displayName: 'SRP',
    iconName: 'tag',
    children: [
      {
        displayName: 'Manual SRP Creation',
        route: '/srp/manual-srp-creation',
      },
      {
        displayName: 'Additional SRP',
        route: '/srp/additional-srp',
      },
      {
        displayName: 'Print SRP',
        route: '/srp/print-srp',
      },
      {
        displayName: 'SRP Qty Change',
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
        route: '/aql/aql-reverse',
      },
      {
        displayName: 'AQL Reverse Scan',
        route: '/aql/aql-reverse-scan',
      },
      {
        displayName: 'Manage QC Bonus',
        route: '/aql/manage-qc-bonus',
      },
      {
        displayName: 'Audit Board',
        route: '/aql/audit-board',
      },
      {
        displayName: 'Return To Recorrect',
        route: '/aql/return-to-recorrect',
      },
      {
        displayName: 'AQL Receive',
        route: '/aql/aql-receive',
      },
      {
        displayName: 'Fix Audit Level',
        route: '/aql/fix-audit-level',
      },
      {
        displayName: 'Sample Transfer',
        route: '/aql/sample-transfer',
      },
      {
        displayName: 'Sample Transfer Revers',
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
        route: '/fg/scan-fg',
      },
      {
        displayName: 'Reverse FG',
        route: '/fg/reverse-fg',
      },
      {
        displayName: 'Reverse FG Scan',
        route: '/fg/reverse-fg-scan',
      },
      {
        displayName: 'FG EOC',
        route: '/fg/fg-eoc',
      },
      {
        displayName: 'FG Delivery',
        route: '/fg/fg-delivery',
      },
      {
        displayName: 'Packing List',
        route: '/fg/packing-list',
      },
      {
        displayName: 'Gatepass',
        route: '/fg/gatepass',
      },
      {
        displayName: 'Pack Carton',
        route: '/fg/pack-carton',
      },
      {
        displayName: 'Pack Data',
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
        route: '/production/team-scan-new',
      },
      {
        displayName: 'Team Scan Barcode',
        route: '/production/team-scan-barcode',
      },
      {
        displayName: 'Team Scan Reverse',
        route: '/production/team-scan-reverse',
      },
      {
        displayName: 'Operation Scan',
        route: '/production/operation-scan',
      },
      {
        displayName: 'Operation Scan Upload',
        route: '/production/operation-scan-upload',
      },
      {
        displayName: 'Bundle Transfer Prod:',
        route: '/production/bundle-transfer-prod',
      },
      {
        displayName: 'Team Transfer Reverse',
        route: '/production/team-transfer-reverse',
      },
      {
        displayName: 'Bundle Reject',
        route: '/production/bundle-reject',
      },
      {
        displayName: 'Split Bundle',
        route: '/production/split-bundle',
      },
      {
        displayName: 'FG Transfer',
        route: '/production/fg-transfer',
      },
      {
        displayName: 'Bundle Qty Change',
        route: '/production/bundle-qty-change',
      },
      {
        displayName: 'Team Transfer',
        route: '/production/team-transfer',
      },
      {
        displayName: 'SOTeam Sequance',
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
        route: '/rejection/reject-cpsg',
      },
      {
        displayName: 'Reject Receive CWR',
        route: '/rejection/reject-receive-cwr',
      },
      {
        displayName: 'Rejection Gatepass',
        route: '/rejection/rejection-gatepass',
      },
      {
        displayName: 'Reverse CWR Receiving',
        route: '/rejection/reverse-cwr-receiving',
      },
      {
        displayName: 'Reverse CP/SG Rejection',
        route: '/rejection/reverse-cpsg-rejection',
      },
      {
        displayName: 'Reverse Pending Gatepass',
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
        route: '/inquires/team-progress-chart',
      },
      {
        displayName: 'SRP Status',
        route: '/inquires/srp-status',
      },
      {
        displayName: 'Stock Take',
        route: '/inquires/stock-take',
      },
      {
        displayName: 'Print Tag',
        route: '/inquires/print-tag',
      },
      {
        displayName: 'Add Work Station',
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
        route: '/incentive/incentive-week',
      },
      {
        displayName: 'Production Calendar',
        route: '/incentive/production-calender',
      },
      {
        displayName: 'Calculate Incentive',
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
        route: '/stock/stock-administration',
      },
      {
        displayName: 'Physical Stock CP',
        route: '/stock/physical-stock-cp',
      },
      {
        displayName: 'Rejection Stock',
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
        route: '/embellishment/emb-send-sg',
      },
      {
        displayName: 'Emb: GRN',
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
        route: '/manage/size-master',
      },
    ],
  },
  {
    displayName: 'Disabled',
    iconName: 'ban',
    route: '/disabled',
    disabled: true,
  },
];
