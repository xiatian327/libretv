// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    laosebizy: {
    api: 'https://apilsbzy1.com/api.php/provide/vod',
    name: '老司机',
},
115: {
    api: 'https://155api.com/api.php/provide/vod',
    name: '115',
},
senlin: {
    api: 'https://slapibf.com/api.php/provide/vod',
    name: '森林',
},
semao: {
    api: 'https://caiji.semaozy.net/inc/api.php/provide/vod',
    name: '色猫',
},
meishaonv: {
    api: 'https://www.msnii.com/api/json.php',
    name: '美少女',
},
yinshuiji: {
    api: 'https://www.xrbsp.com/api/json.php',
    name: '淫水机',
},
xiangnaier: {
    api: 'https://www.gdlsp.com/api/json.php',
    name: '香奶儿',
},
baipiao: {
    api: 'https://www.kxgav.com/api/json.php',
    name: '白嫖',
},
xiaoshimei: {
    api: 'https://www.afasu.com/api/json.php',
    name: '小湿妹',
},
huangav: {
    api: 'https://www.pgxdy.com/api/json.php',
    name: '黄AV',
},
shayu: {
    api: 'https://shayuapi.com/api.php/provide/vod',
    name: '鲨鱼',
},
ikun: {
    api: 'https://thzy1.me/api.php/provide/vod',
    name: '爱坤',
},
baiwan: {
    api: 'https://api.bwzyz.com/api.php/provide/vod',
    name: '百万',
},
naixiangxiang: {
    api: 'https://naixxzy.com/api.php/provide/vod',
    name: '奶香香',
},
jingpin: {
    api: 'https://www.jingpinx.com/api.php/provide/vod',
    name: '精品',
},
aosika: {
    api: 'https://aosikazy.com/api.php/provide/vod',
    name: '奥斯卡',
},
lajiao: {
    api: 'http://apilj.com/api.php/provide/vod',
    name: '辣椒',
},
yutu: {
    api: 'https://apiyutu.com/api.php/provide/vod',
    name: '玉兔',
},
didi: {
    api: 'https://api.ddapi.cc/api.php/provide/vod',
    name: '滴滴',
},
huanggua: {
    api: 'https://www.avre06.com/api.php/Prodao/vod',
    name: '黄瓜',
},
siwa: {
    api: 'https://siwazyw.tv/api.php/provide/vod',
    name: '丝袜',
},
danaizi: {
    api: 'https://apidanaizi.com/api.php/provide/vod',
    name: '大奶子',
},
jkun: {
    api: 'https://jkunzyapi.com/api.php/provide/vod',
    name: 'JKUN',
},
kuaibo: {
    api: 'https://gayapi.com/api.php/provide/vod',
    name: '快播',
},
dadi: {
    api: 'https://dadiapi.com/api.php/provide/vod',
    name: '大地',
},
ckzy: {
    api: 'https://ckzy.me/api.php/provide/vod',
    name: 'CK资源',
},
fanhao: {
    api: 'http://fhapi9.com/api.php/provide/vod',
    name: '番号资源',
},
laosebi: {
    api: 'https://apilsbzy1.com/api.php/provide/vod',
    name: '老色逼',
},
caoliu: {
    api: 'https://www.caoliuzyw.com/api.php/provide/vod',
    name: '草榴',
},
xibaowang: {
    api: 'https://www.xxibaozyw.com/api.php/provide/vod',
    name: '细胞网',
},
xiaoji: {
    api: 'https://api.xiaojizy.live/provide/vod',
    name: '小鸡',
},
hsckzy888: {
    api: 'https://hsckzy888.com/api.php/provide/vod',
    name: '黄色仓库',
},
soa: {
    api: 'https://api.souavzy.vip/api.php/provide/vod',
    name: '搜A',
},
lsb: {
    api: 'https://apilsbzy1.com/api.php/provide/vod',
    name: 'lsb资源',
},
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
