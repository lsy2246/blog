/**
 * 个人站点完整配置示例。
 *
 * `src/consts.ts` 默认只放必选配置。这里展示可选配置的完整写法；
 * 需要哪个功能，就把对应配置块复制到 `src/consts.ts`。
 */
export const SITE_META = {
  // 站点公开访问地址，用于 canonical、RSS、sitemap、结构化数据等绝对链接。
  url: "https://b.u.cd",
  // 站点名称，会显示在浏览器标题、页眉、页脚和部分 SEO 信息里。
  title: "Echoes",
  // 站点作者名，会用于 RSS、结构化数据和页面元信息。
  author: "lsy",
  // 站点默认描述。页面没有单独传 description 时，会使用它作为兜底描述。
  description: "记录生活，分享所思",
} as const;


// 可选：外部静态资源代理模板。
export const ASSET_RELAY_URL = "https://proxy.u.cd/api/file/{url}?_headers={headers}";

export const SOURCE_REPOSITORY_CONFIG = {
  url: "https://github.com/lsy2246/blog",
  provider: "github",
} as const;
// 必选：站点导航结构。
// 默认模板已经提供一套通用导航；只有想增删页面、调整分组或改显示文字时才需要修改。
export const NAV_STRUCTURE = [
  // 单层导航项：直接指向某个页面。
  { id: "home", text: "首页", href: "/" },
  // 分组导航项：items 里的子项会显示为下拉/分组入口。
  {
    id: "articles",
    text: "文章",
    items: [
      // id 用于内部识别，text 是显示文字，href 是页面路径。
      { id: "path", text: "网格", href: "/articles" },
      { id: "filter", text: "筛选", href: "/filtered" },
      { id: "timeline", text: "时间轴", href: "/timeline" },
    ],
  },
  {
    id: "art",
    text: "艺术",
    items: [
      { id: "movies", text: "观影", href: "/movies" },
      { id: "books", text: "读书", href: "/books" },
    ],
  },
  { id: "albums", text: "相册", href: "/albums" },
  {
    id: "other",
    text: "其他",
    items: [
      { id: "about", text: "关于", href: "/about" },
      { id: "projects", text: "项目", href: "/projects" },
    ],
  },
];

// 可选：文章过期提醒。
// 不复制这一块时默认不开启；开启后，文章距离最后更新时间超过 expiryDays 会显示提醒。
export const ARTICLE_EXPIRY_CONFIG = {
  // 是否启用文章过期提醒。
  enabled: true,
  // 超过多少天未更新后显示提醒。
  expiryDays: 365,
  // 显示在文章页的提醒文案。
  warningMessage: "这篇文章最近一次更新距离现在已经超过一年了，内容可能已经过时，请谨慎参考。",
};
