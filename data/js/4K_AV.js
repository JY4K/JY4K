var rule = {
    title: '4kav',
    host: 'https://4k-av.com',
    url: '/fyclass/page-fypage.html',
    searchUrl: 's?k=**',
    searchable: 2,  //是否启用全局搜索,
    quickSearch: 0, //是否启用快速搜索,
    filterable: 0,  //是否启用分类筛选,
    headers: {'User-Agent': 'IOS_UA'},
    编码: 'utf-8',
    timeout: 5000,
    class_name: '电影&电视剧',
    class_url: 'movie&tv&',
    tab_exclude: 'av',
    play_parse: 0,
    lazy: `js:
        if (/m3u8|mp4/.test(input)) {
            input = {url: input }
        } else {
            let kurl = request(input).match(/<source src="(.*?)"/)[1];
            input = {url: kurl }
        }
        `,
    limit: 6,
    double: true,
    推荐: '*',
    一级: '.NTMitem;a&&title;img&&src;.tags&&Text;a&&href',
    二级: `js:
                let khtml = request(input);
                VOD = {};
                VOD.vod_id = input;
                VOD.vod_name = pdfh(khtml, '#MainContent_titleh12&&div:eq(1)&&Text');
                VOD.type_name = pdfh(khtml, '.tags--span&&Text');
                VOD.vod_pic = pdfh(khtml, '#MainContent_poster&&img&&src');
                VOD.vod_remarks = pdfh(khtml, '.videodetail&&label:eq(0)&&Text');
                VOD.vod_year = pdfh(khtml, '.videodetail&&a&&Text');
                VOD.vod_area = pdfh(khtml, '.videodetail&&label:eq(1)&&Text');
                VOD.vod_director = '未知';
                VOD.vod_actor = '未知';
                VOD.vod_content = pdfh(khtml, '.videodesc&&Text');
                VOD.vod_play_from = '4K专线';
                
                let klists = [];
                let kcode = pdfa(khtml, 'ul#rtlist&&li');
                if ( kcode == 0) {
                    kcode = pdfa(khtml, '#MainContent_poster&&a');
                    kcode.forEach((kc) => {
                    let kname = pdfh(kc, 'a&&title').replace('电影海报','');
                    let khref = pdfh(kc, 'a&&href').replace('poster.jpg','');
                    let klist = kname + '$' + khref;
                    klists.push(klist);
                    });
                    VOD.vod_play_url = klists.join('#');
                } else {
                    kcode;
                    kcode.forEach((kc) => {
                    let kname = pdfh(kc, 'span&&Text');
                    let khref = pdfh(kc, 'img&&src').replace('screenshot.jpg','');
                    let klist = kname + '$' + khref;
                    klists.push(klist);
                    });
                    VOD.vod_play_url = klists.join('#');
                }
        `,
    搜索: '.virow.search;.title&&Text;img&&src;.tags&&Text;a&&href',
}
