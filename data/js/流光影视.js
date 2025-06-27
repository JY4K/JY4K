var rule = {
    title: '流光4K',
    host: 'https://www.lgys.xyz/',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/index.php/vod/search.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_parse: '.menu a:gt(0):lt(8);a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy: `
        js:
          let html = request(input);
          let iframe = html.match(/<iframe[^>]*src="(https[^"]+)"/);
          let player = html.match(/var player_\w+\s*=\s*({[\s\S]*?})\s*;</);
          
          // 方法1：尝试提取iframe播放地址
          if (iframe) {
            let iframeUrl = iframe[1];
            // 尝试点击播放按钮（如果存在）
            let clickScript = "document.querySelector('#playleft iframe').contentDocument.querySelector('#start').click()";
            input = { parse: 1, url: iframeUrl, js: clickScript, click: clickScript };
          } 
          // 方法2：解析player变量（当iframe提取失败时使用）
          else if (player) {
            try {
              let json = JSON5.parse(player[1]);
              let url = json.url;
              
              // 处理不同加密类型
              if (json.encrypt == '1') url = unescape(url);
              if (json.encrypt == '2') url = unescape(base64Decode(url));
              
              // 处理特殊格式
              if (json.from === 'BXD' && url.includes('BX-')) {
                url = 'https://jx.uniuui.com/player/ec.php?code=qw&from=BX&if=1&url=' + url;
              }
              
              // 返回最终地址
              if (/\.(m3u8|mp4)/.test(url)) {
                input = { parse: 0, jx: 0, url: url };
              } else {
                input = { parse: 0, jx: 1, url: url };
              }
            } catch (e) {
              console.log('解析错误:' + e.message);
            }
          }
          // 两种方法都失败时使用默认处理
          else {
            // 尝试通用播放按钮点击
            let clickScript = "document.querySelector('#start').click()";
            input = { parse: 1, url: input, js: clickScript, click: clickScript };
          }`,
    limit: 6,
    double: true,
    推荐: '.content;.myui-vodbox-content;.card-info .title&&Text;img&&src;.tag.text-overflow&&Text;a&&href',
    一级: '.show-vod-list .myui-vodbox-content;.card-info .title&&Text;img&&src;.tag.text-overflow&&Text;a&&href',
    二级: {
        title: '.detail-box .title--span&&Text;.tag:eq(1)&&Text',
        img: '.img-box .lazyload&&data-original',
        desc: '.tags&&Text;.other-box .item:eq(2)&&Text;.other-box .item:eq(1)&&Text;.director:eq(1)&&Text;.director:eq(0)&&Text',
        content: '.wrapper_more_text&&Text',
        tabs: '.nav.nav-btn&&li',
        lists: '.lists-box:eq(#id) a',
    },
    搜索: '.show-vod-list .myui-vodbox-content;.card-info .title&&Text;img&&src;.tag.text-overflow&&Text;a&&href',
};
