var rule = {
    title: '影探app',
    类型: '影视',
    host: 'http://csjt.lyyytv.cn',
    hostJs: '',
    headers: {'User-Agent': MOBILE_UA},
    编码: 'utf-8',
    timeout: 5000,

    homeUrl: '/api.php/app/index_video',
    url: '/api.php/app/video?tid=fyfilter&pg=fypage&limit=20',
    filter_url: '{{fl.cateId}}&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
    searchUrl: '/api.php/app/search?text=**&pg=fypage',
    detailUrl: '/api.php/app/video_detail?id=fyid',

    limit: 9,
    double: true,
    class_name: '电影&剧集&综艺&动漫&微短剧',
    class_url: '47&48&50&49&22',
    filter_def: {
        47: {cateId: '47'},
        48: {cateId: '48'},
        50: {cateId: '50'},
        49: {cateId: '49'},
        22: {cateId: '22'}
    },

    推荐: 'json:list;vlist;vod_name;vod_pic;vod_remarks;vod_id',
    一级: $js.toString(() => {
        VODS = JSON.parse(fetch(input)).list
    }),
    搜索: '*',
    二级: $js.toString(() => {
        let kvod = JSON.parse(fetch(input)).data;
        let ktabs = kvod.vod_url_with_player.map((it) => {
            return it.name
        });
        let kurls = kvod.vod_url_with_player.map((it) => {
            return it.url
        });
        VOD = kvod;
        VOD.type_name = kvod.vod_class;
        VOD.vod_play_from = ktabs.join('$$$');
        VOD.vod_play_url = kurls.join('$$$');
    }),

    play_parse: true,
    lazy: $js.toString(() => {
        function AESJieMi(data) {
            const key = CryptoJS.enc.Utf8.parse('z0afJ9wfCMDuLwDM');
            const iv = CryptoJS.enc.Utf8.parse('JqFHwFGmaxCzC5zM');
            const decrypted = CryptoJS.AES.decrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return decrypted.toString(CryptoJS.enc.Utf8)
        };
        let kurl = input;
        if (/lvdou/.test(kurl)) {
            kurl = kurl.split('lvdou+')[1];
            kurl = AESJieMi(kurl)
        }
        ;
        kurl = kurl.replace('yt4kjx', 'my4kjx').replace('fj4kjx', 'fm4kjx');
        if (/\.(m3u8|mp4)/.test(kurl)) {
            input = {jx: 0, parse: 0, url: kurl, header: rule.headers}
        } else if (/qq|youku|iqiyi|mgtv|bilibili/.test(kurl)) {
            kurl = 'http://niiuma.qi-simple.top/nn.php?url=' + kurl;
            kurl = JSON.parse(fetch(kurl)).url;
            input = {jx: 0, parse: 0, url: kurl, header: rule.headers}
        } else {
            input = {jx: 0, parse: 1, url: kurl}
        }
    }),

    filter: 'H4sIAAAAAAAAA+2ZSW8iRxTH7/4YnH3oBrwwxyiXKB9hNAeUWDnE8WEmiTSyLGFjbMN4WByPl4C38YLtMTbYHofFwHcZUd3Nt0hB1Vt6Ah0kMxlF4sbv/buW96qr3utifswXnPI9ez427/t55rXvme+H8K8z3/3oG/fNhX+ZkWyXamL/jeTfw7O/ScPzed+cNIvYeTt63jFLkD0sjCu7tVW0Nz+Kein4vRbNXtqnzJGWA73l91r2G6iL07qTLIm9fWjZQ/qUOQTV7KXiqP5eKgwaCPRSj0ENotpe+mgVU05kUU0cHpggn8o3IlW0aykRK4M62VNlM5/q8wBOfrrPAzj/EM3/JN/eXXFNIGj0VGkCQbPPAzCBIItett6q5j+PQDDQ7wE2CoXR2klaOwet8h9OIwMqi+Fi2ops2fFV+7bRjsThARnGFwvj9N7Ohl+9otdWxPNWNOb92tIct3LyeW3VAJq9VtIdEbhnpjUN2GfivFXPQZ8KsM98RlRq0KcCbIcTJ8Dx1nZaVQiABtCcwplYv9SaBhwvcWPXQdPA5mlv1mieHaCXf5XmqQHnUjhrNWAtNWC7lY327gW0U4Dt9i/lzKGdAtSWruwteAM0oBZNWEt/gqYA/eOvtwbconsb1s6p1jTQibPqxKvQpwL0oXHteqWJ8YnUiXOMK6UAteSKSN2CpgBXqpmWcYaVUkCRy1l7GYxcF1BbbtofwBMNGIF6xq7lXBN2mVxbJfxyJsx2Sq4o1quD7pTueQBzUEBzj8m+cO5dwFU4uJAHAayCAtTOduUxBpoCinHRqjQwxl3A1ds+tXJXsHoKMB6NJI2nAdvdFUnTgGvzpkSaBpafROJQ7B3hCwOMT1zl5VggKxhkVPG2KKpn4KUC1GIPrRqcMRpcqzkbnvuJVtO5KTjnkUFXM1uXz0PfClgkSNOA0b09IU0DruZ2XbzdJpmYvQtMVsDWlDQNLIJMu3vHNdH4i3migEVQXEcpgh1wRfD1TPgl2w+V+1atPmAE/YZ/AisV/wS3B8ke5PYA2QPc7ie7n9tNspvcbpDdYHYzhHYzxO3TZJ/m9imyT3H7JNknuZ38Nbm/Jvlrcn9N8tfk/prkr8n9Nclfk/trkr8m99cgfw3ur0H+Gtxfg/w1uL8G+Wtwfw3y1+D+GuSv/Cnfp7EX47KWnn5yLc2KO3nAxPNYSPt5WbYllW++BYUmJnexq83kPxQq4/yfF5qySqM6yD89vAKrHa2L8hJseQWDpFGvgkflcrH4IKIpV3rXpkGKO3H9IKp4bCgYsGjqW9x5FU1exZ1XyeBV4LQqR1QyaKCiKWbtQmrVgOO9W6FCTAMrJyhmGtxJjmRinuxR1sAOeNZUwcCpblS4jAqX/2HhMipARgXIf1WATBhPLUAmyDm79ig/iamYCA6xIojE7XwE9pICnrWWD1jWkoC7+7rpFNdgdyvAdhsFKwEfyBpof8asMmRQDbSv71qVNO7rLrDzuH0Mc9GAWvVSXMNtpAYcL3vLrhYUYLvNA+ser38UUCFWttZSreoGXRG4TBiH+/eyDoA4KMA+SkvO4jq0VjC0POqRK1URibPuAjsf5YlJ52MHPLPPKFOMMsUoU3zBTBEMPflTNcS3mfX4gTIFu/8vZsRy03XL7A8NL4945Qqva3Y7WnCOIP9owD6T53YavhU0oJbet6/wiloBnY39r72d9J6ThC9ZDdjn4ZHI4omgYJAvTStXZVfpCnA8j0tmr6/qznJV7mE8BVw7vWOaBIznSaP1CNfzGujL9kCsZaGdAvx6rd6KAuReDdhnNmHtQg7VQHEpieY2xqULo+/Ir/0d+a+RH+WvUf4aUv6SS8fz11P+/vW4gfyqt4xf4ibR42bP65ZWVtw0ngbs86LpPCSgTwWjE2GIJ0LnjR9b+BszO4FJqyMAAA=='
}