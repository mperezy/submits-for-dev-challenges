type FeatureKey =
  | 'websiteNumber'
  | 'serverStorage'
  | 'database'
  | 'unmeteredBandwidth'
  | 'ssdDisk'
  | 'vcpusFontworld'
  | 'worldpressInstall'
  | 'serverSpeed';

type Feature = Reocrd<FeatureKey, string>;

type Plan = {
  tier: 'Free' | 'Team' | 'Popular' | 'Enterprise';
  price: number;
  active?: boolean;
  features: Record<FeatureKey, string | number | boolean | 'Unlimited'>;
};
