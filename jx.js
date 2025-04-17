async function fetchVideoData() {
    // 获取当前URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const targetUrl = urlParams.get('url');

    if (!targetUrl) {
        throw new Error('Missing required parameter: url');
    }

    // 编码目标URL
    const encodedUrl = encodeURIComponent(targetUrl);

    const apis = [
        `http://8.129.30.117:8117/suisui.php?key=suisui&url=${encodedUrl}`,
        `http://222.186.57.24:7600/jx.php?url=${encodedUrl}`,
        `http://8.155.50.80/xiaye.php?url=${encodedUrl}`,
        `http://117.50.184.199:94/api.php/?key=1&url=${encodedUrl}`
    ];

    for (const api of apis) {
        try {
            const response = await fetch(api, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();

            const result = {
                code: data.code ?? null,
                url: data.url ?? null,
                title: data.title ?? 'Unknown Title',
                from: data.from ?? 'Unknown Source',
                description: data.description ?? 'No description'
            };

            if (result.url) {
                console.log(`Success from ${new URL(api).host}`);
                return result;
            }
        } catch (error) {
            console.warn(`Request failed: ${api}`, error.message);
        }
    }

    throw new Error('All API requests failed');
}

// 自动执行并处理结果
fetchVideoData()
    .then(result => {
        // 返回结构化数据
        document.body.innerHTML = JSON.stringify(result, null, 2);
    })
    .catch(error => {
        document.body.innerHTML = `Error: ${error.message}`;
    });