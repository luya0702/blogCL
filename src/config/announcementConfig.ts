import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "",

	// 公告内容
	content: "欢迎来到本站！这是一个分享Galgame的网站。点击下方按钮加入TG频道获得更多资源。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "TG频道",
		// 链接 URL
		url: "https://t.me/sharegal",
		// 内部链接
		external: false,
	},
};
