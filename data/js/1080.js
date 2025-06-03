// ==UserScript==
// @name              VIP 视频解析
// @version           3.2.9
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
    var $ = $ || window.$;
    var log_count = 1;
    var host = location.host;
    var parseInterfaceList = [];
    var selectedInterfaceList = [];
    var originalInterfaceList = [
        // 页内播放解析
        {title:"火花",type:"1",url:"https://api.huohua.live/bfq/?key=U1u6H8QZgCqD4h7Ljp&url="},
        {title:"JY",type:"1",url:"https://jx.playerjy.com/?url="},
        {title:"咸鱼",type:"1",url:"https://jx.xymp4.cc/?url="},
        {title:"虾米|FLV",type:"1",url:"https://jx.xmflv.com/?url="},
        {title:"M3U8|虾米",type:"1",url:"https://jx.m3u8.tv/jiexi/?url="},
        {title:"夜幕|虾米",type:"1",url:"https://www.yemu.xyz/?url="},
        // 页外播放解析
        {title:"小红",type:"0",url:"https://www.xiaohys.com/static/player/artplayer.html?url="},
    ];

    // 优化后的log函数
    function mylog(message, data = '') {
        const timestamp = new Date().toISOString();
        const logPrefix = `[VIP-${timestamp}]`;
        console.log(logPrefix, message, data);
    }

    //内嵌页内播放
    function innerParse(url) {
        const iframe = document.getElementById('iframe-player');
        if (!iframe) {
            mylog('播放器iframe不存在');
            return;
        }

        try {
            iframe.src = url;
            mylog('成功加载播放器', url);
        } catch (error) {
            mylog('播放器加载失败', error);
        }
    }

    //视频播放控制
    function removeVideo() {
        const videoElements = document.getElementsByTagName('video');
        const removeInterval = setInterval(() => {
            if (videoElements.length === 0) {
                clearInterval(removeInterval);
                return;
            }

            Array.from(videoElements).forEach(video => {
                try {
                    video.src = '';
                    video.muted = true;
                    video.load();
                    video.pause();
                } catch (error) {
                    mylog('视频移除失败', error);
                }
            });
        }, 1500);
    }

    //实时监听网址变化
    function urlChangeReload(){
        var oldURL = window.location.href;
        setInterval(() => {
            var currentURL = window.location.href;
            if (oldURL !== currentURL) {
                window.location.reload();
            }
        }, 500);
    }

    //优化后的兼容性函数
    const GM = {
        openInTab: (url, openInBackground) => {
            return typeof GM_openInTab === 'function'
                ? GM_openInTab(url, openInBackground)
                : GM.openInTab(url, openInBackground);
        },

        getValue: (name, defaultValue) => {
            return typeof GM_getValue === 'function'
                ? GM_getValue(name, defaultValue)
                : GM.getValue(name, defaultValue);
        },

        setValue: (name, value) => {
            return typeof GM_setValue === 'function'
                ? GM_setValue(name, value)
                : GM.setValue(name, value);
        },

        xmlhttpRequest: (options) => {
            return typeof GM_xmlhttpRequest === 'function'
                ? GM_xmlhttpRequest(options)
                : GM.xmlHttpRequest(options);
        },

        addStyle: (css) => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }
    };

    //播放节点预处理
    var node = "";
    var player_Containers = [
        {
            host: "v.qq.com",
            container: "#mod_player,#player-container,.container-player",
            displayNodes: ["#mask_layer", ".mod_vip_popup", ".panel-tip-pay"]
        }, {
            host: "m.v.qq.com",
            container: ".mod_player,#player",
            displayNodes: [".mod_vip_popup", "[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]", "div[dt-eid=open_app_bottom]", "div.video_function.video_function_new", "a[open-app]", "section.mod_source", "section.mod_box.mod_sideslip_h.mod_multi_figures_h,section.mod_sideslip_privileges,section.mod_game_rec", ".at-app-banner"]
        }, {
            host: "w.mgtv.com",
            container: "#mgtv-player-wrap",
            displayNodes: []
        }, {
            host: "www.mgtv.com",
            container: "#mgtv-player-wrap",
            displayNodes: []
        }, {
            host: "m.mgtv.com",
            container: ".video-area",
            displayNodes: ["div[class^=mg-app]", ".video-area-bar", ".open-app-popup"]
        }, {
            host: "www.bilibili.com",
            container: "#player_module,#bilibiliPlayer,#bilibili-player",
            displayNodes: ["[class^=playerPop_wrap]"]
        }, {
            host: "m.bilibili.com",
            container: ".player-wrapper,.player-container,.mplayer",
            displayNodes: []
        }, {
            host: "www.iqiyi.com",
            container: ".iqp-player-videolayer-inner",
            displayNodes: ["#playerPopup", "div[class^=qy-header-login-pop]", "section[class^=modal-cover_]", ".toast"]
        }, {
            host: "m.iqiyi.com",
            container: ".iqp-player-videolayer-inner",
            displayNodes: ["div.m-iqyGuide-layer", "a[down-app-android-url]", "[name=m-extendBar]", "[class*=ChannelHomeBanner]", "section.m-hotWords-bottom"]
        }, {
            host: "www.iq.com",
            container: ".intl-video-wrap",
            displayNodes: []
        }, {
            host: "v.youku.com",
            container: "#ykPlayer,#youku-dashboard",
            displayNodes: ["#iframaWrapper", "#checkout_counter_mask", "#checkout_counter_popup"]
        }, {
            host: "m.youku.com",
            container: "#ykplayer,#player,.h5-detail-player",
            displayNodes: [".callEnd_box", ".h5-detail-guide", ".h5-detail-vip-guide"]
        }, {
            host: "tv.sohu.com",
            container: "#player",
            displayNodes: []
        }, {
            host: "film.sohu.com",
            container: "#playerWrap",
            displayNodes: []
        }, {
            host: "www.le.com",
            container: "#le_playbox",
            displayNodes: []
        }, {
            host: "video.tudou.com",
            container: ".td-playbox",
            displayNodes: []
        }, {
            host: "v.pptv.com",
            container: "#pptv_playpage_box",
            displayNodes: []
        }, {
            host: "vip.pptv.com",
            container: ".w-video",
            displayNodes: []
        }, {
            host: "www.wasu.cn",
            container: "#flashContent",
            displayNodes: []
        }, {
            host: "www.acfun.cn",
            container: "#player",
            displayNodes: []
        }, {
            host: "vip.1905.com",
            container: "#player,#vodPlayer",
            displayNodes: []
        }, {
            host: "www.1905.com",
            container: "#player,#vodPlayer",
            displayNodes: []
        },
    ];

    //播放容器处理与弹出界面处理
    function handlePlayerNodes() {
        const currentHost = location.host;
        const playerConfig = player_Containers.find(item => item.host === currentHost);

        if (!playerConfig) {
            mylog('未找到当前网站的播放器配置');
            return;
        }

        // 设置播放器节点
        node = playerConfig.container;

        // 处理需要隐藏的元素
        const hideInterval = setInterval(() => {
            playerConfig.displayNodes.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    element.style.display = 'none';
                });
            });
        }, 500);

        // 清理定时器
        setTimeout(() => clearInterval(hideInterval), 10000);
    }

    var autoPlay = !!GM.getValue("autoPlayerKey_" + host, null) ? "开" : "关";
    var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

    var iframeDivCss = "width:100%;height:100%;z-index:999999;";
    var videoPlayer = $(`<div id='iframe-div' style='`+ iframeDivCss + `'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`);

    var ImgBase64 =`
        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVR42r2VCw7CIAxAWzQuelsv4ml12XSAhZQFl0L3cWvSwFjhtRQKeu9bALgiCbDQmOfuQHqGuow2whpPpLajTlMAWNKTAhhthDU6zBbbRY
        4D7LRFfQ3geXJIoCM1PIYTQC3JrRZBfooGIRqcA4gThZ/R6zCegI7EmBBIjAY4ogSSAFZNcppEZg9q7jz84WgMKFIDvEkvuVcCKG0bqoBCknEKKICgsIZ6TKEE0GwPBYSzbpYCFm9RMUn/SnJmnO7Az+URPLaZfQI47ttx/pwcCFHm3w7KtU
        gFlB6c/AbXSsVqQC6bAGl/pSoKE5t1tWirHAJ4UXvb6UWLgJ5/NgJgmbfCg/MFf/07iXwnzokAAAAASUVORK5CYII=`;

    var sImgBase64=`
        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAgUlEQVR42t3UQQqAIBAF0EahE3S1buFtPEY3jGr8QgxEm5D5Cc7GlfP8jigTsVR1ESZQaxxAcF+Xa2ORgEUtAQB1BsQSpJRCzvmkAffqmsAgRt
        M+AHXIYwCsGgj4c8j1y4iNfW1vl2e6OgPbA2DVC0CS2ALjxMcnwD0BTjxD31lAAVVYNypdDsbLAAAAAElFTkSuQmCC`;

    // 视频解析预处理
    var innerList = [];
    var outerList = [];
    var innerli = "";
    var outerli = "";
    var num = "";
    originalInterfaceList.forEach((item, index) => {
        if (item.type == "1") {
            innerList.push(item);
            innerli += "<li title='请勿相信视频中广告'>" + item.title + "</li>";
        }else{
            outerList.push(item);
            outerli += "<li title='请勿相信视频中广告'>" + item.title + "</li>";
        }
    })

    parseInterfaceList = innerList.concat(outerList);

    //图片按钮定位
    var left = 0;
    var top = 100;
    var Position = GM.getValue("Position_" + host);
    if(!!Position){
        top = Position.top;
    }

    GM.addStyle(`
                #vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; right:0px; width:45px; z-index:99999; font-size:14px; text-align:center; transition: all 0.3s ease;}

                #vip_movie_box .item_text, #vip_movie_box .selected_text, #vip_movie_box .img_text {
                    width: 45px; /* Adjusted width */
                    padding: 8px 0px; /* Increased padding */
                    text-align: center;
                    background-color: rgba(93, 173, 226, 0.9); /* Light blue */
                    margin: 2px 0px;
                    border-radius: 8px 0 0 8px; /* More rounded corners */
                    box-shadow: -3px 3px 6px rgba(0,0,0,0.2); /* Adjusted shadow */
                    transition: background-color 0.3s ease, transform 0.1s ease; /* Added transform for hover effect */
                }
                #vip_movie_box .item_text:hover, #vip_movie_box .selected_text:hover, #vip_movie_box .img_text:hover {
                    background-color: rgba(93, 173, 226, 1); /* Solid light blue on hover */
                    transform: translateX(-3px); /* Subtle hover effect */
                }
		        #vip_movie_box .item_text img, #vip_movie_box .selected_text img {width:26px; height:26px; display:inline-block; vertical-align:middle;}

                #vip_movie_box .vip_mod_box_selected {
                    width: 360px; /* Adjusted width to better fit 4 items */
                    max-height: 450px; /* Adjusted max height */
                    display: none;
                    position: absolute;
                    right: 50px; /* Position next to wider button */
                    top: 0;
                    text-align: center;
                    backdrop-filter: saturate(1.8) blur(12px); /* Adjusted blur */
                    background: rgba(44, 62, 80, 0.6); /* Darker, muted background */
                    border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
                    border-radius: 8px; /* Consistent rounded corners */
                    overflow-y: auto;
                    box-shadow: -3px 3px 12px rgba(0,0,0,0.4); /* Deeper shadow */
                    padding: 15px; /* Added padding inside menu */
                }
                #vip_movie_box .vip_mod_box_selected ul{
                    list-style: none;
                    margin: 0; /* Remove default margin */
                    padding: 0;
                    display: flex; /* Use flexbox for layout */
                    flex-wrap: wrap; /* Allow items to wrap */
                    gap: 10px; /* Increased space between items */
                }
                #vip_movie_box .vip_mod_box_selected li{
                    font-size: 14px; /* Slightly larger font */
                    color: #E0E0E0; /* Lighter text color for contrast */
                    text-align: center;
                    flex-basis: calc(25% - 8px); /* Adjusted for 4 items with gap */
                    line-height: normal; /* Reset line height */
                    padding: 12px 8px; /* Increased padding */
                    margin: 0; /* Ensure no margin */
                    background: rgba(52, 73, 94, 0.7); /* Slightly lighter item background */
                    border-radius: 5px; /* Rounded corners for items */
                    box-sizing: border-box;
                    transition: background-color 0.2s ease, color 0.2s ease;
                    cursor: pointer; /* Indicate clickable */
                    overflow: hidden; /* Hide overflow text */
                    text-overflow: ellipsis; /* Add ellipsis for overflow text */
                    white-space: nowrap; /* Prevent text wrapping */
                }
                #vip_movie_box .vip_mod_box_selected li:hover{
                    color:#FFFFFF;
                    background-color: rgba(93, 173, 226, 0.8); /* Light blue hover background */
                }
                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar{width:8px; height:1px;} /* Wider scrollbar */
                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#888;} /* Darker scrollbar thumb */
                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;} /* Light scrollbar track */
                #vip_movie_box .vip_mod_box_selected .selected{
                    color:#FFFFFF;
                    background-color:#5DADE2; /* Solid light blue for selected */
                }

                #vip_movie_box .img_text {width:45px; text-align:center; padding:3px 0px; background-color: rgba(93, 173, 226, 0.9); margin:1px 0px; border-radius: 8px 0 0 8px; box-shadow: -3px 3px 6px rgba(0,0,0,0.2); transition: background-color 0.3s ease, transform 0.1s ease;}
                #vip_movie_box .img_text:hover{background-color: rgba(93, 173, 226, 1); transform: translateX(-3px);}
                #vip_movie_box .vip_auto {color:#FFFFFF; font-size:22px; font-weight:bold; line-height:normal;}

                /* Style for the section titles within the menu */
                #vip_movie_box .vip_mod_box_selected > div > div {
                    font-size: 15px; /* Slightly smaller title font */
                    font-weight: bold;
                    text-align: center;
                    color: #BBDEFB; /* Lighter blue for titles */
                    line-height: normal;
                    margin-top: 15px; /* Increased top margin */
                    margin-bottom: 8px; /* Added bottom margin */
                    padding-bottom: 5px; /* Add padding at bottom */
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator line */
                }

                 `);

    if (isMobile) {
        GM.addStyle(`#vip_movie_box {top:300px;}`);
    }

    var html = $(`<div id='vip_movie_box'>
                    <div class='item_text'><img src='`+ ImgBase64 +`' title='快速解析'/></div>
                    <div class='selected_text' >
                       <img src='`+ sImgBase64 +`' title='视频解析'/>
                       <div class='vip_mod_box_selected' >
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500;  line-height:21px; margin-top:10px;'>页内解析</div>
                             <ul>
                               ` + innerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500;  line-height:21px; margin-top:10px;'>页外解析</div>
                             <ul>
                               ` + outerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                       </div>
                    </div>
                    <div class="img_text"><div class="vip_auto" style="color:white; font-size:20px; font-weight:bold; line-height:23px; " title="自动解析开关">${autoPlay}</div></div>
                 </div>`);

    $("body").append(html);

    //快速解析事件处理
    $(".item_text").on("click", () => {
        GM.openInTab("http://vip.wandhi.com/?v=" + location.href, false);
    });

    //视频解析事件处理
    // Modified to show/hide menu based on whether the mouse is within the selected_text button area
    const movieBox = $("#vip_movie_box"); // Keep for drag functionality if needed elsewhere
    const selectedTextButton = $(".selected_text"); // The video parsing button
    const selectedMenu = $(".vip_mod_box_selected"); // The menu

    let menuHideTimeout;

    const showMenu = () => {
        // Only show if not dragging
        if (!isDragging) {
            clearTimeout(menuHideTimeout);
            selectedMenu.show();
        }
    };

    const hideMenu = () => {
        // Hide menu after a slight delay
        menuHideTimeout = setTimeout(() => {
            selectedMenu.hide();
        }, 100); // Reduced delay slightly for responsiveness
    };

    // Use mouseenter and mouseleave on the selectedTextButton to control menu visibility
    selectedTextButton.on("mouseenter", showMenu);
    selectedTextButton.on("mouseleave", hideMenu);

    // Prevent menu from hiding immediately when moving from button to menu
    // Keep the timeout clearing on menu mouseenter
    selectedMenu.on("mouseenter", () => { clearTimeout(menuHideTimeout); });
    selectedMenu.on("mouseleave", hideMenu);

    // Optimize menu item styles for a cleaner look
    GM.addStyle(`
        #vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; right:0px; width:45px; z-index:99999; font-size:14px; text-align:center; transition: all 0.3s ease;}

        #vip_movie_box .item_text, #vip_movie_box .selected_text, #vip_movie_box .img_text {
            width: 45px; /* Adjusted width */
            padding: 8px 0px; /* Increased padding */
            text-align: center;
            background-color: rgba(93, 173, 226, 0.9); /* Light blue */
            margin: 2px 0px;
            border-radius: 8px 0 0 8px; /* More rounded corners */
            box-shadow: -3px 3px 6px rgba(0,0,0,0.2); /* Adjusted shadow */
            transition: background-color 0.3s ease, transform 0.1s ease; /* Added transform for hover effect */
        }
        #vip_movie_box .item_text:hover, #vip_movie_box .selected_text:hover, #vip_movie_box .img_text:hover {
            background-color: rgba(93, 173, 226, 1); /* Solid light blue on hover */
            transform: translateX(-3px); /* Subtle hover effect */
        }
		        #vip_movie_box .item_text img, #vip_movie_box .selected_text img {width:26px; height:26px; display:inline-block; vertical-align:middle;}

        #vip_movie_box .vip_mod_box_selected {
            width: 360px; /* Adjusted width to better fit 4 items */
            max-height: 450px; /* Adjusted max height */
            display: none;
            position: absolute;
            right: 50px; /* Position next to wider button */
            top: 0;
            text-align: center;
            backdrop-filter: saturate(1.8) blur(12px); /* Adjusted blur */
            background: rgba(44, 62, 80, 0.6); /* Darker, muted background */
            border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
            border-radius: 8px; /* Consistent rounded corners */
            overflow-y: auto;
            box-shadow: -3px 3px 12px rgba(0,0,0,0.4); /* Deeper shadow */
            padding: 15px; /* Added padding inside menu */
        }
        #vip_movie_box .vip_mod_box_selected ul{
            list-style: none;
            margin: 0; /* Remove default margin */
            padding: 0;
            display: flex; /* Use flexbox for layout */
            flex-wrap: wrap; /* Allow items to wrap */
            gap: 10px; /* Increased space between items */
        }
        #vip_movie_box .vip_mod_box_selected li{
            font-size: 14px; /* Slightly larger font */
            color: #E0E0E0; /* Lighter text color for contrast */
            text-align: center;
            flex-basis: calc(25% - 8px); /* Adjusted for 4 items with gap */
            line-height: normal; /* Reset line height */
            padding: 12px 8px; /* Increased padding */
            margin: 0; /* Ensure no margin */
            background: rgba(52, 73, 94, 0.7); /* Slightly lighter item background */
            border-radius: 5px; /* Rounded corners for items */
            box-sizing: border-box;
            transition: background-color 0.2s ease, color 0.2s ease;
            cursor: pointer; /* Indicate clickable */
            overflow: hidden; /* Hide overflow text */
            text-overflow: ellipsis; /* Add ellipsis for overflow text */
            white-space: nowrap; /* Prevent text wrapping */
        }
        #vip_movie_box .vip_mod_box_selected li:hover{
            color:#FFFFFF;
            background-color: rgba(93, 173, 226, 0.8); /* Light blue hover background */
        }
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar{width:8px; height:1px;} /* Wider scrollbar */
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#888;} /* Darker scrollbar thumb */
        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;} /* Light scrollbar track */
        #vip_movie_box .vip_mod_box_selected .selected{
            color:#FFFFFF;
            background-color:#5DADE2; /* Solid light blue for selected */
        }

        #vip_movie_box .img_text {width:45px; text-align:center; padding:3px 0px; background-color: rgba(93, 173, 226, 0.9); margin:1px 0px; border-radius: 8px 0 0 8px; box-shadow: -3px 3px 6px rgba(0,0,0,0.2); transition: background-color 0.3s ease, transform 0.1s ease;}
        #vip_movie_box .img_text:hover{background-color: rgba(93, 173, 226, 1); transform: translateX(-3px);}
        #vip_movie_box .vip_auto {color:#FFFFFF; font-size:22px; font-weight:bold; line-height:normal;}

        /* Style for the section titles within the menu */
        #vip_movie_box .vip_mod_box_selected > div > div {
            font-size: 15px; /* Slightly smaller title font */
            font-weight: bold;
            text-align: center;
            color: #BBDEFB; /* Lighter blue for titles */
            line-height: normal;
            margin-top: 15px; /* Increased top margin */
            margin-bottom: 8px; /* Added bottom margin */
            padding-bottom: 5px; /* Add padding at bottom */
            border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator line */
        }

         `);

    $(".vip_mod_box_selected li").each((index, item) => {
        item.addEventListener("click", function(){
            // Remove "selected" class from ALL list items in the menu
            $(".vip_mod_box_selected li").removeClass("selected");

            const selectedInterface = parseInterfaceList[index];
            const targetUrl = selectedInterface.url + location.href;

            if (selectedInterface.type == "1") {
                // Handle internal parsing
                $(this).addClass("selected"); // Add "selected" class to the clicked item
                GM.setValue("autoPlayerValue_" + host, index);

                // Prepare the player iframe
                const iframe = document.getElementById('iframe-player');
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    removeVideo();
                    player.empty();
                    player.append($(`<div id='iframe-div' style='`+ iframeDivCss + `'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`));
                }

                if (selectedInterface.title === "小红解析") {
                    // Special handling for 小红解析 using GM_xmlhttpRequest
                    mylog('尝试使用 GM_xmlhttpRequest 获取小红解析内容:', targetUrl);

                    // Show a loading indicator (optional, requires adding a loading element in HTML or CSS)
                    // For now, just log the attempt

                    GM.xmlhttpRequest({
                        method: "GET",
                        url: targetUrl,
                        onload: function(response) {
                            mylog('GM_xmlhttpRequest onload 状态码:', response.status);
                            if (response.status >= 200 && response.status < 300) {
                                mylog('成功获取小红解析内容', { url: targetUrl, responseUrl: response.finalUrl });
                                const iframe = document.getElementById('iframe-player');
                                if (iframe) {
                                    try {
                                        // Using Blob URL to load content
                                        const blob = new Blob([response.responseText], { type: 'text/html' });
                                        iframe.src = URL.createObjectURL(blob);
                                        mylog('成功将小红解析内容加载到 iframe (Blob URL)', targetUrl);

                                        // Optional: Add a load listener to the iframe to detect success/failure after loading
                                        iframe.onload = () => mylog('iframe 加载完成', targetUrl);
                                        iframe.onerror = () => mylog('iframe 加载错误', targetUrl);

                                    } catch (e) {
                                        mylog('加载内容到 iframe 失败:', e);
                                        // Fallback if Blob URL fails
                                        GM.openInTab(targetUrl, false);
                                        // Show user a message
                                        alert('无法在页内播放小红解析，请尝试页外播放或其他解析接口。');
                                    }

                                } else {
                                    mylog('播放器iframe不存在');
                                    alert('播放器容器未找到，无法加载视频。');
                                }
                            } else {
                                mylog('获取小红解析内容失败', { url: targetUrl, status: response.status, statusText: response.statusText });
                                // Fallback to external parsing
                                GM.openInTab(targetUrl, false);
                                // Show user a message
                                alert(`获取小红解析内容失败（状态码: ${response.status}），请尝试页外播放或其他解析接口。`);
                            }
                        },
                        onerror: function(error) {
                            mylog('GM_xmlhttpRequest 发生错误:', error);
                            // Fallback to external parsing
                            GM.openInTab(targetUrl, false);
                            // Show user a message
                            alert('请求小红解析时发生网络错误，请尝试页外播放或其他解析接口。');
                        }
                    });
                } else {
                    // Default internal parsing for other interfaces
                    if (isMobile) {
                        iframeDivCss = "width:100%;height:220px;z-index:999999;";
                    }
                    if (isMobile && window.location.href.indexOf("iqiyi.com") !== -1) {
                        iframeDivCss = "width:100%;height:220px;z-index:999999;margin-top:-56.25%;";
                    }
                    // Ensure iframe exists before setting src
                     const iframe = document.getElementById('iframe-player');
                     if (iframe) {
                         iframe.src = targetUrl;
                         mylog('成功加载播放器', targetUrl);
                     } else {
                         mylog('播放器iframe不存在');
                         alert('播放器容器未找到，无法加载视频。');
                     }
                }
            } else {
                // Handle external parsing
                GM.openInTab(targetUrl, false);
            }
        });
    });

    //自动解析视频事件处理
    $(".vip_auto").on("click", function () {
        if (!!GM.getValue("autoPlayerKey_" + host, null)) {
            GM.setValue("autoPlayerKey_" + host, null);
            $(this).html("关");
        } else {
            GM.setValue("autoPlayerKey_" + host, "true");
            $(this).html("开");
        }
        setTimeout(function () {
            window.location.reload();
        }, 200);
    });

    //检测自动播放是否开启
    function autoPlayer() {
        if (!!GM.getValue("autoPlayerKey_" + host, null)) {
            var index = GM.getValue("autoPlayerValue_" + host, 0); // Change default index from 2 to 0
            $(".vip_mod_box_selected li").eq(index).addClass("selected");
            $(".vip_auto").attr("title", `当前解析源：${parseInterfaceList[index].title}`);
            setTimeout(function () {
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    removeVideo();
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }, 2500);
            urlChangeReload(); //实时监听网址变化
        }
    };

    // 右键拖拽功能 - 防止与其他脚本干扰
    var movie_box = $("#vip_movie_box")[0]; // Get the native DOM element

    let isDragging = false;
    let dragOffsetX, dragOffsetY;
    let animationFrameId = null;
    let maxX, maxY, minX = 0, minY = 0;

    const moveHandler = function(e) {
        if (!isDragging) return;

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            let x = e.clientX - dragOffsetX;
            let y = e.clientY - dragOffsetY;

            // Apply boundaries
            x = Math.max(minX, Math.min(x, maxX));
            y = Math.max(minY, Math.min(y, maxY));

            // Update style using native style property
            movie_box.style.left = x + 'px';
            movie_box.style.top = y + 'px';
        });
    };

    const stopDragging = function() {
        isDragging = false;
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseup', stopDragging);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        movie_box.style.cursor = 'pointer'; // 还原样式

        // Save final position
        const finalPosition = movie_box.getBoundingClientRect();
        GM.setValue("Position_" + host,{"top":finalPosition.top + window.scrollY, "left":finalPosition.left + window.scrollX});
    };

    movie_box.addEventListener('mousedown', function(e) {
        // 1 = 鼠标左键
        if (e.button === 0) { // Use e.button for native events
            e.preventDefault(); // 阻止默认行为

            isDragging = true;
            movie_box.style.cursor = 'grabbing'; // 设置样式为拖动中

            const rect = movie_box.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;

            // Calculate boundaries once on mousedown
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const elementWidth = rect.width;
            const elementHeight = rect.height;

            // Keep it on the right side of the screen (adjust minX based on window width)
            minX = 0; // Allow dragging from the left edge
            maxX = windowWidth - elementWidth; // Allow dragging to the right edge

            // Vertical boundaries
            minY = 0;
            maxY = windowHeight - elementHeight;


            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', stopDragging);
        }
    });

    // Prevent context menu on right-click
    movie_box.addEventListener("contextmenu", function(e){
        e.preventDefault();
    });

    window.onload = function () {
        handlePlayerNodes();
        autoPlayer();
        // Apply saved position on load
        var savedPosition = GM.getValue("Position_" + host);
        if (savedPosition) {
             // Use style.left and style.top with 'px'
             movie_box.style.top = savedPosition.top + 'px';
             // If left position was not saved, keep it on the right side
             if (savedPosition.left !== undefined && savedPosition.left !== null) {
                 movie_box.style.left = savedPosition.left + 'px';
             } else {
                 // If no left position saved, place it on the right edge initially
                 movie_box.style.left = (window.innerWidth - movie_box.getBoundingClientRect().width) + 'px';
             }
        } else {
             // If no position saved, place it on the right side by default
             movie_box.style.left = (window.innerWidth - movie_box.getBoundingClientRect().width) + 'px';
        }
    }

    // Hide movie box when video is in fullscreen
    document.addEventListener('fullscreenchange', () => {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (fullscreenElement) {
            movieBox.hide(); // Hide the movie box using jQuery hide
        } else {
            movieBox.show(); // Show the movie box using jQuery show
        }
    });

})();
