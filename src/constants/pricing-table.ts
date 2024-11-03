export const features: Feature = {
  websiteNumber: 'Website number',
  serverStorage: 'Server storage',
  database: 'Database',
  unmeteredBandwidth: 'Unmetered Bandwidth',
  ssdDisk: 'SSD Disk',
  vcpusFontworld: 'VCPUS Fontworld',
  worldpressInstall: 'Worldpress install',
  serverSpeed: 'Server speed',
};

const data: Plan[] = [
  {
    tier: 'Free',
    price: 0,
    features: {
      websiteNumber: '01',
      serverStorage: '100GB',
      database: false,
      unmeteredBandwidth: false,
      ssdDisk: false,
      vcpusFontworld: false,
      worldpressInstall: false,
      serverSpeed: false,
    },
  },
  {
    tier: 'Team',
    price: 59,
    features: {
      websiteNumber: 10,
      serverStorage: '500GB',
      database: 15,
      unmeteredBandwidth: true,
      ssdDisk: false,
      vcpusFontworld: false,
      worldpressInstall: false,
      serverSpeed: false,
    },
  },
  {
    tier: 'Popular',
    active: true,
    price: 99,
    features: {
      websiteNumber: 50,
      serverStorage: '1TB',
      database: 'Unlimited',
      unmeteredBandwidth: true,
      ssdDisk: true,
      vcpusFontworld: true,
      worldpressInstall: true,
      serverSpeed: true,
    },
  },
  {
    tier: 'Enterprise',
    price: 299,
    features: {
      websiteNumber: 'Unlimited',
      serverStorage: 'Unlimited',
      database: 'Unlimited',
      unmeteredBandwidth: true,
      ssdDisk: true,
      vcpusFontworld: true,
      worldpressInstall: true,
      serverSpeed: true,
    },
  },
];

export default data;
