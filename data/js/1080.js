// ==UserScript==
// @name              VIP 视频解析
// @version           3.3.0
// @description       支持腾讯视频、爱奇艺、优酷、土豆、芒果TV、搜狐视频、乐视视频、PPTV、风行、华数TV、哔哩哔哩等，支持多个解析接口切换，支持视频自由选集，自动解析视频，支持自定义拖拽位置，支持视频广告跳过，支持页内页外解析，支持 Tampermonkey、Violentmonkey、Greasemonkey
// @author            sign
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA3LTIxVDEwOjUwOjE4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNy0yMVQxMDo1OToyNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNy0yMVQxMDo1OToyNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2M2YyZWUxZC0xZDdi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
// @namespace         https://greasyfork.org/users/665670
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js
// @match             *://*.youku.com/*
// @match             *://*.iqiyi.com/*
// @match             *://*.iq.com/*
// @match             *://*.le.com/*
// @match             *://v.qq.com/*
// @match             *://m.v.qq.com/*
// @match             *://*.tudou.com/*
// @match             *://*.mgtv.com/*
// @match             *://tv.sohu.com/*
// @match             *://film.sohu.com/*
// @match             *://*.1905.com/*
// @match             *://*.bilibili.com/*
// @match             *://*.pptv.com/*
// @license           GPL License
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_download
// @grant             GM_registerMenuCommand
// @downloadURL https://update.greasyfork.org/scripts/406849/VIP%20%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.user.js
// @updateURL https://update.greasyfork.org/scripts/406849/VIP%20%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.meta.js
// ==/UserScript==

(function () {
    'use strict';

    // 常量定义
    const $ = window.$;
    const host = location.host;
    const isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
    const isEdge = /Edg/i.test(navigator.userAgent);

    // 解析接口配置
    const parseInterfaces = [
        // 页内播放解析
        {title: "JY", type: "1", url: "https://jx.playerjy.com/?url="},
        {title: "影趣", type: "1", url: "https://yingqu.icu/dpplay/?url="},
        {title: "樱花", type: "1", url: "https://bfq.lggys.com/?url="},
        {title: "火花", type: "1", url: "https://api.huohua.live/bfq/?key=U1u6H8QZgCqD4h7Ljp&url="},
        {title: "咸鱼", type: "1", url: "https://jx.xymp4.cc/?url="},
        {title: "虾米", type: "1", url: "https://jx.xmflv.com/?url="},
        {title: "M3U8", type: "1", url: "https://jx.m3u8.tv/jiexi/?url="},
        {title: "夜幕", type: "1", url: "https://www.yemu.xyz/?url="},
        // 页外播放解析
        {title: "小红", type: "0", url: "https://www.xiaohys.com/static/player/artplayer.html?url="},
        {title: "光影", type: "0", url: "https://play.okcdn100.top/analysis/player/?key=eijlmtwxAENQTVY179&url="}
    ];

    // 播放器配置
    const playerConfigs = {
        "v.qq.com": {
            container: "#mod_player,#player-container,.container-player",
            displayNodes: ["#mask_layer", ".mod_vip_popup", ".panel-tip-pay"]
        },
        "m.v.qq.com": {
            container: ".mod_player,#player",
            displayNodes: [".mod_vip_popup", "[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]", "div[dt-eid=open_app_bottom]", "div.video_function.video_function_new", "a[open-app]", "section.mod_source", "section.mod_box.mod_sideslip_h.mod_multi_figures_h,section.mod_sideslip_privileges,section.mod_game_rec", ".at-app-banner"]
        },
        "w.mgtv.com": {
            container: "#mgtv-player-wrap",
            displayNodes: []
        },
        "www.mgtv.com": {
            container: "#mgtv-player-wrap",
            displayNodes: []
        },
        "m.mgtv.com": {
            container: ".video-area",
            displayNodes: ["div[class^=mg-app]", ".video-area-bar", ".open-app-popup"]
        },
        "www.bilibili.com": {
            container: "#player_module,#bilibiliPlayer,#bilibili-player",
            displayNodes: ["[class^=playerPop_wrap]"]
        },
        "m.bilibili.com": {
            container: ".player-wrapper,.player-container,.mplayer",
            displayNodes: []
        },
        "www.iqiyi.com": {
            container: ".iqp-player-videolayer-inner",
            displayNodes: ["#playerPopup", "div[class^=qy-header-login-pop]", "section[class^=modal-cover_]", ".toast"]
        },
        "m.iqiyi.com": {
            container: ".iqp-player-videolayer-inner",
            displayNodes: ["div.m-iqyGuide-layer", "a[down-app-android-url]", "[name=m-extendBar]", "[class*=ChannelHomeBanner]", "section.m-hotWords-bottom"]
        },
        "www.iq.com": {
            container: ".intl-video-wrap",
            displayNodes: []
        },
        "v.youku.com": {
            container: "#ykPlayer,#youku-dashboard",
            displayNodes: ["#iframaWrapper", "#checkout_counter_mask", "#checkout_counter_popup"]
        },
        "m.youku.com": {
            container: "#ykplayer,#player,.h5-detail-player",
            displayNodes: [".callEnd_box", ".h5-detail-guide", ".h5-detail-vip-guide"]
        },
        "tv.sohu.com": {
            container: "#player",
            displayNodes: []
        },
        "film.sohu.com": {
            container: "#playerWrap",
            displayNodes: []
        },
        "www.le.com": {
            container: "#le_playbox",
            displayNodes: []
        },
        "video.tudou.com": {
            container: ".td-playbox",
            displayNodes: []
        },
        "v.pptv.com": {
            container: "#pptv_playpage_box",
            displayNodes: []
        },
        "vip.pptv.com": {
            container: ".w-video",
            displayNodes: []
        },
        "www.wasu.cn": {
            container: "#flashContent",
            displayNodes: []
        },
        "www.acfun.cn": {
            container: "#player",
            displayNodes: []
        },
        "vip.1905.com": {
            container: "#player,#vodPlayer",
            displayNodes: []
        },
        "www.1905.com": {
            container: "#player,#vodPlayer",
            displayNodes: []
        }
    };

    // 工具函数
    const utils = {
        log: (message, data = '') => {
            const timestamp = new Date().toISOString();
            console.log(`[VIP-${timestamp}]`, message, data);
        },

        GM: {
            openInTab: (url, openInBackground) => {
                if (isEdge) {
                    return typeof GM_openInTab === 'function'
                        ? GM_openInTab(url, openInBackground)
                        : window.open(url, '_blank');
                }
                return typeof GM_openInTab === 'function'
                    ? GM_openInTab(url, openInBackground)
                    : GM.openInTab(url, openInBackground);
            },
            getValue: (name, defaultValue) => {
                if (isEdge) {
                    return typeof GM_getValue === 'function'
                        ? GM_getValue(name, defaultValue)
                        : localStorage.getItem(name) || defaultValue;
                }
                return typeof GM_getValue === 'function'
                    ? GM_getValue(name, defaultValue)
                    : GM.getValue(name, defaultValue);
            },
            setValue: (name, value) => {
                if (isEdge) {
                    if (typeof GM_setValue === 'function') {
                        GM_setValue(name, value);
                    } else {
                        localStorage.setItem(name, value);
                    }
                    return;
                }
                return typeof GM_setValue === 'function'
                    ? GM_setValue(name, value)
                    : GM.setValue(name, value);
            },
            addStyle: (css) => {
                const style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);
            }
        },

        // 性能优化：防抖函数
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // 性能优化：节流函数
        throttle: (func, limit) => {
            let inThrottle;
            return function executedFunction(...args) {
                if (!inThrottle) {
                    func(...args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // 性能优化：DOM操作缓存
        cache: new Map(),

        // 性能优化：获取DOM元素
        getElement: (selector) => {
            if (!utils.cache.has(selector)) {
                utils.cache.set(selector, document.querySelector(selector));
            }
            return utils.cache.get(selector);
        },

        // 性能优化：批量DOM操作
        batchDOM: (operations) => {
            requestAnimationFrame(() => {
                operations.forEach(op => op());
            });
        }
    };

    // 视频处理类
    class VideoHandler {
        constructor() {
            this.iframeDivCss = "width:100%;height:100%;z-index:999999;";
            this.currentPlayer = null;
            this.movieBox = null;
            this.selectedTextButton = null;
            this.selectedMenu = null;
            this.menuHideTimeout = null;
            this.init();
        }

        init() {
            this.setupPlayerNodes();
            this.setupUI();
            this.bindEvents();
            this.checkAutoPlay();
        }

        setupPlayerNodes() {
            const config = playerConfigs[host];
            if (!config) {
                utils.log('未找到当前网站的播放器配置');
                return;
            }

            this.currentPlayer = config.container;
            this.hideElements(config.displayNodes);
        }

        hideElements(selectors) {
            const hideInterval = setInterval(() => {
                utils.batchDOM(selectors.map(selector => () => {
                    document.querySelectorAll(selector).forEach(el => {
                        el.style.display = 'none';
                    });
                }));
            }, 500);
            setTimeout(() => clearInterval(hideInterval), 10000);
        }

        removeVideo() {
            const videoElements = document.getElementsByTagName('video');
            const removeInterval = setInterval(() => {
                if (videoElements.length === 0) {
                    clearInterval(removeInterval);
                    return;
                }
                utils.batchDOM([() => {
                    Array.from(videoElements).forEach(video => {
                        try {
                            video.src = '';
                            video.muted = true;
                            video.load();
                            video.pause();
                        } catch (error) {
                            utils.log('视频移除失败', error);
                        }
                    });
                }]);
            }, 1500);
        }

        setupUI() {
            const autoPlay = !!utils.GM.getValue("autoPlayerKey_" + host, null) ? "开" : "关";
            const top = utils.GM.getValue("Position_" + host, {top: 100}).top;

            // 添加样式
            utils.GM.addStyle(this.getStyles(top, isMobile));

            // 创建UI元素
            const html = this.createUIElements(autoPlay);
            $("body").append(html);

            // 初始化UI引用
            this.movieBox = $("#vip_movie_box");
            this.selectedTextButton = $(".selected_text");
            this.selectedMenu = $(".vip_mod_box_selected");
        }

        getStyles(top, isMobile) {
            return `
                #vip_movie_box {
                    cursor: pointer;
                    position: fixed;
                    top: ${isMobile ? '300px' : top + 'px'};
                    right: 0px;
                    width: 45px;
                    z-index: 99999;
                    font-size: 14px;
                    text-align: center;
                    transition: all 0.3s ease;
                    will-change: transform;
                }

                #vip_movie_box .item_text,
                #vip_movie_box .selected_text,
                #vip_movie_box .img_text {
                    width: 45px;
                    padding: 8px 0px;
                    text-align: center;
                    background-color: rgba(93, 173, 226, 0.9);
                    margin: 2px 0px;
                    border-radius: 8px 0 0 8px;
                    box-shadow: -3px 3px 6px rgba(0,0,0,0.2);
                    transition: background-color 0.3s ease, transform 0.1s ease;
                    will-change: transform;
                }

                #vip_movie_box .item_text:hover,
                #vip_movie_box .selected_text:hover,
                #vip_movie_box .img_text:hover {
                    background-color: rgba(93, 173, 226, 1);
                    transform: translateX(-3px);
                }

                #vip_movie_box .item_text img,
                #vip_movie_box .selected_text img {
                    width: 26px;
                    height: 26px;
                    display: inline-block;
                    vertical-align: middle;
                }

                #vip_movie_box .vip_mod_box_selected {
                    width: 360px;
                    max-height: 450px;
                    display: none;
                    position: absolute;
                    right: 50px;
                    top: 0;
                    text-align: center;
                    backdrop-filter: saturate(1.8) blur(12px);
                    background: rgba(44, 62, 80, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    overflow-y: auto;
                    box-shadow: -3px 3px 12px rgba(0,0,0,0.4);
                    padding: 15px;
                    will-change: transform;
                }

                #vip_movie_box .vip_mod_box_selected ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                #vip_movie_box .vip_mod_box_selected li {
                    font-size: 14px;
                    color: #E0E0E0;
                    text-align: center;
                    flex-basis: calc(25% - 8px);
                    line-height: normal;
                    padding: 12px 8px;
                    margin: 0;
                    background: rgba(52, 73, 94, 0.7);
                    border-radius: 5px;
                    box-sizing: border-box;
                    transition: background-color 0.2s ease, color 0.2s ease;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                #vip_movie_box .vip_mod_box_selected li:hover {
                    color: #FFFFFF;
                    background-color: rgba(93, 173, 226, 0.8);
                }

                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar {
                    width: 8px;
                    height: 1px;
                }

                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-thumb {
                    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #888;
                }

                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #F1F1F1;
                }

                #vip_movie_box .vip_mod_box_selected .selected {
                    color: #FFFFFF;
                    background-color: #5DADE2;
                }

                #vip_movie_box .img_text {
                    width: 45px;
                    text-align: center;
                    padding: 3px 0px;
                    background-color: rgba(93, 173, 226, 0.9);
                    margin: 1px 0px;
                    border-radius: 8px 0 0 8px;
                    box-shadow: -3px 3px 6px rgba(0,0,0,0.2);
                    transition: background-color 0.3s ease, transform 0.1s ease;
                }

                #vip_movie_box .img_text:hover {
                    background-color: rgba(93, 173, 226, 1);
                    transform: translateX(-3px);
                }

                #vip_movie_box .vip_auto {
                    color: #FFFFFF;
                    font-size: 22px;
                    font-weight: bold;
                    line-height: normal;
                }

                #vip_movie_box .vip_mod_box_selected > div > div {
                    font-size: 15px;
                    font-weight: bold;
                    text-align: center;
                    color: #BBDEFB;
                    line-height: normal;
                    margin-top: 15px;
                    margin-bottom: 8px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                @media (prefers-reduced-motion: reduce) {
                    #vip_movie_box,
                    #vip_movie_box .item_text,
                    #vip_movie_box .selected_text,
                    #vip_movie_box .img_text {
                        transition: none;
                    }
                }
            `;
        }

        createUIElements(autoPlay) {
            const innerList = parseInterfaces.filter(item => item.type === "1");
            const outerList = parseInterfaces.filter(item => item.type === "0");

            const innerli = innerList.map(item =>
                `<li title='请勿相信视频中广告'>${item.title}</li>`
            ).join('');

            const outerli = outerList.map(item =>
                `<li title='请勿相信视频中广告'>${item.title}</li>`
            ).join('');

            return $(`
                <div id='vip_movie_box'>
                    <div class='item_text'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVR42r2VCw7CIAxAWzQuelsv4ml12XSAhZQFl0L3cWvSwFjhtRQKeu9bALgiCbDQmOfuQHqGuow2whpPpLajTlMAWNKTAhhthDU6zBbbRY4D7LRFfQ3geXJIoCM1PIYTQC3JrRZBfooGIRqcA4gThZ/R6zCegI7EmBBIjAY4ogSSAFZNcppEZg9q7jz84WgMKFIDvEkvuVcCKG0bqoBCknEKKICgsIZ6TKEE0GwPBYSzbpYCFm9RMUn/SnJmnO7Az+URPLaZfQI47ttx/pwcCFHm3w7KtUgFlB6c/AbXSsVqQC6bAGl/pSoKE5t1tWirHAJ4UXvb6UWLgJ5/NgJgmbfCg/MFf/07iXwnzokAAAAASUVORK5CYII=' title='快速解析'/>
                    </div>
                    <div class='selected_text'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAgUlEQVR42t3UQQqAIBAF0EahE3S1buFtPEY3jGr8QgxEm5D5Cc7GlfP8jigTsVR1ESZQaxxAcF+Xa2ORgEUtAQB1BsQSpJRCzvmkAffqmsAgRtM+AHXIYwCsGgj4c8j1y4iNfW1vl2e6OgPbA2DVC0CS2ALjxMcnwD0BTjxD31lAAVVYNypdDsbLAAAAAElFTkSuQmCC' title='视频解析'/>
                        <div class='vip_mod_box_selected'>
                            <div>
                                <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500; line-height:21px; margin-top:10px;'>页内解析</div>
                                <ul>${innerli}</ul>
                            </div>
                            <div>
                                <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500; line-height:21px; margin-top:10px;'>页外解析</div>
                                <ul>${outerli}</ul>
                            </div>
                        </div>
                    </div>
                    <div class="img_text">
                        <div class="vip_auto" style="color:white; font-size:20px; font-weight:bold; line-height:23px;" title="自动解析开关">${autoPlay}</div>
                    </div>
                </div>
            `);
        }

        bindEvents() {
            // 快速解析事件
            $(".item_text").on("click", () => {
                const currentIndex = utils.GM.getValue("autoPlayerValue_" + host, 0);
                const currentInterface = parseInterfaces[currentIndex];
                utils.GM.openInTab(currentInterface.url + location.href, false);
            });

            // 菜单显示/隐藏事件
            const showMenu = utils.throttle(() => {
                clearTimeout(this.menuHideTimeout);
                this.selectedMenu.show();
            }, 100);

            const hideMenu = utils.debounce(() => {
                this.menuHideTimeout = setTimeout(() => {
                    this.selectedMenu.hide();
                }, 100);
            }, 100);

            this.selectedTextButton.on("mouseenter", showMenu);
            this.selectedTextButton.on("mouseleave", hideMenu);

            this.selectedMenu.on("mouseenter", () => {
                clearTimeout(this.menuHideTimeout);
            });

            this.selectedMenu.on("mouseleave", hideMenu);

            // 解析接口点击事件
            $(".vip_mod_box_selected li").each((index, item) => {
                item.addEventListener("click", () => {
                    $(".vip_mod_box_selected li").removeClass("selected");
                    const selectedInterface = parseInterfaces[index];
                    const targetUrl = selectedInterface.url + location.href;

                    if (selectedInterface.type === "1") {
                        this.handleInnerParse(index, targetUrl);
                    } else {
                        this.handleOuterParse(targetUrl);
                    }
                });
            });

            // 自动解析开关事件
            $(".vip_auto").on("click", () => {
                if (utils.GM.getValue("autoPlayerKey_" + host, null)) {
                    utils.GM.setValue("autoPlayerKey_" + host, null);
                    $(".vip_auto").html("关");
                } else {
                    utils.GM.setValue("autoPlayerKey_" + host, "true");
                    utils.GM.setValue("autoPlayerValue_" + host, 0);
                    $(".vip_auto").html("开");
                    this.handleInnerParse(0, parseInterfaces[0].url + location.href);
                }
                setTimeout(() => window.location.reload(), 200);
            });

            // 全屏事件
            document.addEventListener('fullscreenchange', () => {
                const fullscreenElement = document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement;
                this.movieBox[fullscreenElement ? 'hide' : 'show']();
            });
        }

        handleInnerParse(index, targetUrl) {
            $(".vip_mod_box_selected li").eq(index).addClass("selected");
            utils.GM.setValue("autoPlayerValue_" + host, index);

            let iframe = document.getElementById('iframe-player');
            if (!iframe) {
                const player = $(this.currentPlayer);
                this.removeVideo();
                player.empty();
                player.append(this.createVideoPlayer());
                iframe = document.getElementById('iframe-player');
            }

            if (isMobile) {
                this.iframeDivCss = "width:100%;height:220px;z-index:999999;";
                if (window.location.href.indexOf("iqiyi.com") !== -1) {
                    this.iframeDivCss += "margin-top:-56.25%;";
                }
            }

            if (iframe) {
                iframe.src = targetUrl;
                utils.log('成功加载播放器', targetUrl);
            } else {
                utils.log('播放器iframe不存在');
                alert('播放器容器未找到，无法加载视频。');
            }
        }

        handleOuterParse(url) {
            try {
                utils.GM.openInTab(url, false);
                utils.log('页外解析已打开', url);
            } catch (error) {
                utils.log('页外解析打开失败', error);
                alert('页外解析打开失败，请重试');
            }
        }

        createVideoPlayer() {
            return $(`<div id='iframe-div' style='${this.iframeDivCss}'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`);
        }

        checkAutoPlay() {
            if (utils.GM.getValue("autoPlayerKey_" + host, null)) {
                const index = utils.GM.getValue("autoPlayerValue_" + host, 0);
                $(".vip_mod_box_selected li").eq(index).addClass("selected");
                $(".vip_auto").attr("title", `当前解析源：${parseInterfaces[index].title}`);

                setTimeout(() => {
                    if (!document.getElementById("iframe-player")) {
                        const player = $(this.currentPlayer);
                        this.removeVideo();
                        player.empty();
                        player.append(this.createVideoPlayer());
                    }
                    this.handleInnerParse(index, parseInterfaces[index].url + location.href);
                }, 2500);

                this.watchUrlChanges();
            }
        }

        watchUrlChanges() {
            let oldURL = window.location.href;
            setInterval(() => {
                if (oldURL !== window.location.href) {
                    window.location.reload();
                }
            }, 500);
        }
    }

    // 初始化
    window.onload = () => {
        new VideoHandler();
    };

})();
