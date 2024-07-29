(() => {
  window._tenkiAd = window._tenkiAd || [];

  // 広告をレンダリングする関数
  function renderAds() {
    _tenkiAd.forEach((ad, index) => {
      const element = document.getElementById(ad.container);
      if (element && !element.classList.contains('ad-rendered')) {
        element.insertAdjacentHTML('beforeend', `
        <style>
          .ad-box {
            width: 300px;
            height: 250px;
            background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 48px;
            font-weight: bold;
            color: #333;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .ad-box span {
            font-size: 24px;
          }
        </style>
        <div class="ad-box"><div>AD<br><span>${ad.container}</span></div></div>
      `);
        element.classList.add('ad-rendered');
        // この広告を配列から削除
        _tenkiAd.splice(index, 1);
      }
    });
  }

  // 配列の変更を監視するためのProxy
  const _tenkiAdHandler = {
    set(target, property, value) {
      target[property] = value;
      if (property === 'length' && value > 0) {
        // 配列の長さが変更された場合、新しい広告が追加された場合
        renderAds();
      }
      return true;
    }
  };

  window._tenkiAd = new Proxy(window._tenkiAd, _tenkiAdHandler);

  // 初期の広告をレンダリング
  renderAds();

})();