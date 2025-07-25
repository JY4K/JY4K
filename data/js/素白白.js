// 地址发布页 https://subaibai.vip/
var rule = {
    title: '素白白',
    // host:'https://www.subaibai.com',
    host: 'https://subaibai.vip',
    hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,".go:eq(0)&&a&&href");print(src);HOST=src',//网页域名根动态抓取js代码。通过HOST=赋值
    // url:'/fyclass/page/fypage',
    //url:'/fyclassfyfilter/page/fypage',
    url: '/fyclassfyfilter',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.area}}{{fl.year}}{{fl.class}}{{fl.cateId}}/page/fypage',
    filter: {
        "movie_bt": [{
            "key": "cateId",
            "name": "分类",
            "value": [{"n": "全部", "v": ""}, {
                "v": "/movie_bt_series/dongmanju",
                "n": "动漫剧"
            }, {"v": "/movie_bt_series/dongmandy", "n": "动漫电影"}, {
                "v": "/movie_bt_series/yindudy",
                "n": "印度电影"
            }, {"v": "/movie_bt_series/guochanju", "n": "国产剧"}, {
                "v": "/movie_bt_series/guochandy",
                "n": "国产电影"
            }, {"v": "/movie_bt_series/riju", "n": "日剧"}, {
                "v": "/movie_bt_series/rihandy",
                "n": "日韩电影"
            }, {"v": "/movie_bt_series/oumeiju", "n": "欧美剧"}, {
                "v": "/movie_bt_series/oumeidy",
                "n": "欧美电影"
            }, {"v": "/movie_bt_series/taiju", "n": "泰剧"}, {
                "v": "/movie_bt_series/thaidy",
                "n": "泰国电影"
            }, {"v": "/movie_bt_series/gangju", "n": "港台剧"}, {
                "v": "/movie_bt_series/gangtaidy",
                "n": "港台电影"
            }, {"v": "/movie_bt_series/documentary", "n": "纪录片"}, {
                "v": "/movie_bt_series/zongyi",
                "n": "综艺"
            }, {"v": "/movie_bt_series/hanju", "n": "韩剧"}, {"v": "/movie_bt_series/xianggangdy", "n": "香港经典电影"}]
        }, {
            "key": "class",
            "name": "类型",
            "value": [{"n": "全部", "v": ""}, {
                "v": "/movie_bt_tags/pop-popular",
                "n": "POP流行"
            }, {"v": "/movie_bt_tags/biography", "n": "传记"}, {
                "v": "/movie_bt_tags/child",
                "n": "儿童"
            }, {"v": "/movie_bt_tags/adventure", "n": "冒险"}, {
                "v": "/movie_bt_tags/plot",
                "n": "剧情"
            }, {"v": "/movie_bt_tags/action", "n": "动作"}, {
                "v": "/movie_bt_tags/anime",
                "n": "动漫"
            }, {"v": "/movie_bt_tags/animation", "n": "动画"}, {
                "v": "/movie_bt_tags/history",
                "n": "历史"
            }, {"v": "/movie_bt_tags/costume", "n": "古装"}, {
                "v": "/movie_bt_tags/antiquity",
                "n": "古风"
            }, {"v": "/movie_bt_tags/homosexual", "n": "同性"}, {
                "v": "/movie_bt_tags/comedy",
                "n": "喜剧"
            }, {"v": "/movie_bt_tags/fantasy", "n": "奇幻"}, {
                "v": "/movie_bt_tags/family",
                "n": "家庭"
            }, {"v": "/movie_bt_tags/terror", "n": "恐怖"}, {
                "v": "/movie_bt_tags/suspense",
                "n": "悬疑"
            }, {"v": "/movie_bt_tags/erotic", "n": "情色"}, {
                "v": "/movie_bt_tags/thriller",
                "n": "惊悚"
            }, {"v": "/movie_bt_tags/drama", "n": "戏曲"}, {
                "v": "/movie_bt_tags/war",
                "n": "战争"
            }, {"v": "/movie_bt_tags/latin", "n": "拉丁"}, {
                "v": "/movie_bt_tags/funny",
                "n": "搞笑"
            }, {"v": "/movie_bt_tags/campus", "n": "校园"}, {
                "v": "/movie_bt_tags/song-and-dance",
                "n": "歌舞"
            }, {"v": "/movie_bt_tags/martial-arts", "n": "武侠"}, {
                "v": "/movie_bt_tags/disaster",
                "n": "灾难"
            }, {"v": "/movie_bt_tags/love", "n": "爱情"}, {
                "v": "/movie_bt_tags/crime",
                "n": "犯罪"
            }, {"v": "/movie_bt_tags/fancy", "n": "玄幻"}, {
                "v": "/movie_bt_tags/reality-show",
                "n": "真人秀"
            }, {"v": "/movie_bt_tags/short-film", "n": "短片"}, {
                "v": "/movie_bt_tags/kehuan",
                "n": "科幻"
            }, {"v": "/movie_bt_tags/documentary", "n": "纪录片"}, {
                "v": "/movie_bt_tags/talkshow",
                "n": "脱口秀"
            }, {"v": "/movie_bt_tags/stageart", "n": "舞台艺术"}, {
                "v": "/movie_bt_tags/west",
                "n": "西部"
            }, {"v": "/movie_bt_tags/sport", "n": "运动"}, {
                "v": "/movie_bt_tags/youth",
                "n": "青春"
            }, {"v": "/movie_bt_tags/music", "n": "音乐"}, {
                "v": "/movie_bt_tags/ghost",
                "n": "鬼怪"
            }, {"v": "/movie_bt_tags/black-film", "n": "黑色电影"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"v": "/movie_bt_cat/bhutan", "n": "不丹"}, {
                "v": "/movie_bt_cat/china",
                "n": "中国"
            }, {"v": "/movie_bt_cat/china-taiwan", "n": "中国台湾"}, {
                "v": "/movie_bt_cat/china-mainland",
                "n": "中国大陆"
            }, {"v": "/movie_bt_cat/china-hongkong", "n": "中国香港"}, {
                "v": "/movie_bt_cat/denmark",
                "n": "丹麦"
            }, {"v": "/movie_bt_cat/ukraine", "n": "乌克兰"}, {
                "v": "/movie_bt_cat/uruguay",
                "n": "乌拉圭"
            }, {"v": "/movie_bt_cat/israel", "n": "以色列"}, {
                "v": "/movie_bt_cat/iraq",
                "n": "伊拉克"
            }, {"v": "/movie_bt_cat/iran", "n": "伊朗"}, {
                "v": "/movie_bt_cat/russia",
                "n": "俄罗斯"
            }, {"v": "/movie_bt_cat/bulgaria", "n": "保加利亚"}, {
                "v": "/movie_bt_cat/croatia",
                "n": "克罗地亚"
            }, {"v": "/movie_bt_cat/iceland", "n": "冰岛"}, {
                "v": "/movie_bt_cat/canada",
                "n": "加拿大"
            }, {"v": "/movie_bt_cat/hungary", "n": "匈牙利"}, {
                "v": "/movie_bt_cat/south-africa",
                "n": "南非"
            }, {"v": "/movie_bt_cat/botswana", "n": "博茨瓦纳"}, {
                "v": "/movie_bt_cat/qatar",
                "n": "卡塔尔"
            }, {"v": "/movie_bt_cat/luxembourg", "n": "卢森堡"}, {
                "v": "/movie_bt_cat/india",
                "n": "印度"
            }, {"v": "/movie_bt_cat/indonesia", "n": "印度尼西亚"}, {
                "v": "/movie_bt_cat/kazakhstan",
                "n": "哈萨克斯坦"
            }, {"v": "/movie_bt_cat/colombia", "n": "哥伦比亚"}, {
                "v": "/movie_bt_cat/turkey",
                "n": "土耳其"
            }, {"v": "/movie_bt_cat/serbia", "n": "塞尔维亚"}, {
                "v": "/movie_bt_cat/cyprus",
                "n": "塞浦路斯"
            }, {"v": "/movie_bt_cat/mexico", "n": "墨西哥"}, {
                "v": "/movie_bt_cat/dominica",
                "n": "多米尼加"
            }, {"v": "/movie_bt_cat/austria", "n": "奥地利"}, {
                "v": "/movie_bt_cat/venezuela",
                "n": "委内瑞拉"
            }, {"v": "/movie_bt_cat/nigeria", "n": "尼日利亚"}, {
                "v": "/movie_bt_cat/巴基斯坦",
                "n": "巴基斯坦"
            }, {"v": "/movie_bt_cat/paraguay", "n": "巴拉圭"}, {
                "v": "/movie_bt_cat/brazil",
                "n": "巴西"
            }, {"v": "/movie_bt_cat/greece", "n": "希腊"}, {
                "v": "/movie_bt_cat/germany",
                "n": "德国"
            }, {"v": "/movie_bt_cat/italy", "n": "意大利"}, {
                "v": "/movie_bt_cat/latvia",
                "n": "拉脱维亚"
            }, {"v": "/movie_bt_cat/norway", "n": "挪威"}, {
                "v": "/movie_bt_cat/chech",
                "n": "捷克"
            }, {"v": "/movie_bt_cat/摩洛哥", "n": "摩洛哥"}, {
                "v": "/movie_bt_cat/斯洛伐克",
                "n": "斯洛伐克"
            }, {"v": "/movie_bt_cat/slovenia", "n": "斯洛文尼亚"}, {
                "v": "/movie_bt_cat/singapore",
                "n": "新加坡"
            }, {"v": "/movie_bt_cat/zealand", "n": "新西兰"}, {
                "v": "/movie_bt_cat/japan",
                "n": "日本"
            }, {"v": "/movie_bt_cat/chile", "n": "智利"}, {
                "v": "/movie_bt_cat/north-korea",
                "n": "朝鲜"
            }, {"v": "/movie_bt_cat/cambodia", "n": "柬埔寨"}, {
                "v": "/movie_bt_cat/georgia",
                "n": "格鲁吉亚"
            }, {"v": "/movie_bt_cat/belgium", "n": "比利时"}, {
                "v": "/movie_bt_cat/saudi-arabia",
                "n": "沙特阿拉伯"
            }, {"v": "/movie_bt_cat/france", "n": "法国"}, {
                "v": "/movie_bt_cat/poland",
                "n": "波兰"
            }, {"v": "/movie_bt_cat/puertorco", "n": "波多黎各"}, {
                "v": "/movie_bt_cat/bohei",
                "n": "波黑"
            }, {"v": "/movie_bt_cat/thailand", "n": "泰国"}, {
                "v": "/movie_bt_cat/australia",
                "n": "澳大利亚"
            }, {"v": "/movie_bt_cat/ireland", "n": "爱尔兰"}, {
                "v": "/movie_bt_cat/estonia",
                "n": "爱沙尼亚"
            }, {"v": "/movie_bt_cat/sweden", "n": "瑞典"}, {
                "v": "/movie_bt_cat/switzerland",
                "n": "瑞士"
            }, {"v": "/movie_bt_cat/belarus", "n": "白俄罗斯"}, {
                "v": "/movie_bt_cat/peru",
                "n": "秘鲁"
            }, {"v": "/movie_bt_cat/tunisia", "n": "突尼斯"}, {
                "v": "/movie_bt_cat/lithuania",
                "n": "立陶宛"
            }, {"v": "/movie_bt_cat/romania", "n": "罗马尼亚"}, {
                "v": "/movie_bt_cat/america",
                "n": "美国"
            }, {"v": "/movie_bt_cat/finland", "n": "芬兰"}, {
                "v": "/movie_bt_cat/sovietunion",
                "n": "苏联"
            }, {"v": "/movie_bt_cat/england", "n": "英国"}, {
                "v": "/movie_bt_cat/netherlands",
                "n": "荷兰"
            }, {"v": "/movie_bt_cat/philippines", "n": "菲律宾"}, {
                "v": "/movie_bt_cat/葡萄牙",
                "n": "葡萄牙"
            }, {"v": "/movie_bt_cat/west-germany", "n": "西德"}, {
                "v": "/movie_bt_cat/spain",
                "n": "西班牙"
            }, {"v": "/movie_bt_cat/vietnam", "n": "越南"}, {
                "v": "/movie_bt_cat/argentina",
                "n": "阿根廷"
            }, {"v": "/movie_bt_cat/korea", "n": "韩国"}, {
                "v": "/movie_bt_cat/malaysia",
                "n": "马来西亚"
            }, {"v": "/movie_bt_cat/马耳他", "n": "马耳他"}]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{"n": "全部", "v": ""}, {"v": "/year/2024", "n": "2024"}, {
                "v": "/year/2023",
                "n": "2023"
            }, {"v": "/year/2022", "n": "2022"}, {"v": "/year/2021", "n": "2021"}, {
                "v": "/year/2020",
                "n": "2020"
            }, {"v": "/year/2019", "n": "2019"}, {"v": "/year/2018", "n": "2018"}, {
                "v": "/year/2017",
                "n": "2017"
            }, {"v": "/year/2016", "n": "2016"}, {"v": "/year/2015", "n": "2015"}, {
                "v": "/year/2014",
                "n": "2014"
            }, {"v": "/year/2013", "n": "2013"}, {"v": "/year/2012", "n": "2012"}, {
                "v": "/year/2011",
                "n": "2011"
            }, {"v": "/year/2010", "n": "2010"}, {"v": "/year/2009", "n": "2009"}, {
                "v": "/year/2008",
                "n": "2008"
            }, {"v": "/year/2007", "n": "2007"}, {"v": "/year/2006", "n": "2006"}, {
                "v": "/year/2005",
                "n": "2005"
            }, {"v": "/year/2004", "n": "2004"}, {"v": "/year/2003", "n": "2003"}, {
                "v": "/year/2002",
                "n": "2002"
            }, {"v": "/year/2001", "n": "2001"}, {"v": "/year/2000", "n": "2000"}, {
                "v": "/year/1999",
                "n": "1999"
            }, {"v": "/year/1998", "n": "1998"}, {"v": "/year/1997", "n": "1997"}, {
                "v": "/year/1996",
                "n": "1996"
            }, {"v": "/year/1995", "n": "1995"}, {"v": "/year/1994", "n": "1994"}, {
                "v": "/year/1993",
                "n": "1993"
            }, {"v": "/year/1992", "n": "1992"}, {"v": "/year/1991", "n": "1991"}, {
                "v": "/year/1990",
                "n": "1990"
            }, {"v": "/year/1989", "n": "1989"}, {"v": "/year/1988", "n": "1988"}, {
                "v": "/year/1987",
                "n": "1987"
            }, {"v": "/year/1986", "n": "1986"}, {"v": "/year/1985", "n": "1985"}, {
                "v": "/year/1984",
                "n": "1984"
            }, {"v": "/year/1983", "n": "1983"}, {"v": "/year/1982", "n": "1982"}, {
                "v": "/year/1981",
                "n": "1981"
            }, {"v": "/year/1980", "n": "1980"}, {"v": "/year/1979", "n": "1979"}, {
                "v": "/year/1978",
                "n": "1978"
            }, {"v": "/year/1977", "n": "1977"}, {"v": "/year/1976", "n": "1976"}, {
                "v": "/year/1975",
                "n": "1975"
            }, {"v": "/year/1974", "n": "1974"}, {"v": "/year/1973", "n": "1973"}, {
                "v": "/year/1972",
                "n": "1972"
            }, {"v": "/year/1971", "n": "1971"}, {"v": "/year/1970", "n": "1970"}, {
                "v": "/year/1969",
                "n": "1969"
            }, {"v": "/year/1968", "n": "1968"}, {"v": "/year/1967", "n": "1967"}, {
                "v": "/year/1966",
                "n": "1966"
            }, {"v": "/year/1965", "n": "1965"}, {"v": "/year/1964", "n": "1964"}, {
                "v": "/year/1963",
                "n": "1963"
            }, {"v": "/year/1962", "n": "1962"}, {"v": "/year/1960", "n": "1960"}, {
                "v": "/year/1959",
                "n": "1959"
            }, {"v": "/year/1954", "n": "1954"}, {"v": "/year/1952", "n": "1952"}, {
                "v": "/year/1950",
                "n": "1950"
            }, {"v": "/year/1949", "n": "1949"}, {"v": "/year/1948", "n": "1948"}, {
                "v": "/year/1940",
                "n": "1940"
            }, {"v": "/year/1939", "n": "1939"}, {"v": "/year/1925", "n": "1925"}]
        }]
    },
    // searchUrl:'/search?q=**',
    searchUrl: '/search?q=**',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'UC_UA',
    },
    class_parse: '.navlist.hidden-md-and-down&&li;a&&Text;a&&href;.*/([^/]+)',
    play_parse: true,
    // lazy:'',
    lazy: `js:
        pdfh = jsp.pdfh;
        var html = request(input);
        var ohtml = pdfh(html, '.videoplay&&Html');
        var url = pdfh(ohtml, "body&&iframe&&src");
        if (/Cloud/.test(url)) {
            var ifrwy = request(url);
            let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');
            let temp = '';
            for (let i = 0x0; i < code.length; i = i + 0x2) {
                temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
            }
            input = {
                jx: 0,
                url: temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7),
                parse: 0
            }
        } else if (/decrypted/.test(ohtml)) {
            var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
            eval(getCryptoJS());
            var scrpt = phtml.match(/var.*?\\)\\);/g)[0];
            var data = [];
            eval(scrpt.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
            input = {
                jx: 0,
                url: data.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1],
                parse: 0
            }
        } else {
            input
        }
	`,
    limit: 6,
    推荐: '.leibox&&li;*;*;*;*',
    // double:true, // 推荐内容是否双层定位
    一级: '.bt_img.mi_ne_kd.mrb&&li;img&&alt;img&&data-original;.jidi&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img": ".dyimg&&img&&src",
        "desc": ".moviedteail_list&&li:eq(-1)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content": ".yp_context&&p&&Text",
        "tabs": ".mi_paly_box .ypxingq_t--span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索: '.search_list&&li;img&&alt;img&&data-original;.nostag&&Text;a&&href',
}