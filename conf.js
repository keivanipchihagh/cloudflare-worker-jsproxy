jsproxy_config({
  // The version of the current configuration (recorded in the log for troubleshooting)
  // Every time the configuration is modified, the value needs to be increased, otherwise it will not take effect.
  // By default, the configuration is automatically downloaded every 5 minutes. If you want to verify immediately, you can access it in private mode.
  ver: '103',

  // Accelerate static resources of commonly used websites through CDN (experimental)
  static_boost: {
    enable: true,
    ver: 62
  },

  // node configuration
  node_map: {
   'local': {
      label: 'local',
      lines: {
        [location.host]: 1, // Current worker
      }
    },
    'hk': {
      label: 'Hongkong',
      lines: {
        // host:weight
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'sg': {
      label: 'Singapore',
      lines: {
        // host:weight
        'node-aliyun-sg.etherdream.com:8443': 1,
      }
    },
    // This node is used to load large-volume static resources
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // Paid version (high weight)
        'node-cfworker-2.etherdream.com': 4,
        // free version (low weight, share some cost - 100,000 free requests per account per day, but there is a frequency limit)
        'web.keivanipchihagh.com': 2,
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * default node
   */
  node_default: 'local',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'hk' : 'local',

  /**
   * Acceleration node
   */
  node_acc: 'cfworker',

  /**
   * Static resource CDN address (Used to speed up resource access in the `assets` directory)
   */
  assets_cdn: 'https://cdn.jsdelivr.net/gh/keivanipchihagh/jsproxy@main/assets/',

  // Open when testing locally, otherwise access is online
  assets_cdn: 'assets/',

  // Home path
  index_path: 'index.html',

  // List of sites that support CORS (experimental...)
  direct_host_list: 'cors.txt',

  /**
   * Customize the HTML of the injected page
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL custom handling (in design)
   */
  // url_handler: {
  //   'https://www.pornhub.com/': { content: 'Umm... that\' not gonna happen U_U' },
  //   'https://www.youporn.com/': { content: 'Umm... that\' not gonna happen U_U' },
  //   'https://www.xvideos.com/': { content: 'Umm... that\' not gonna happen U_U' },
  // }
})
