var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
    admobid = {
        banner: 'ca-app-pub-3868593263837372/3312672648',
        interstitial: 'ca-app-pub-3868593263837372/4789405842',
    }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
    admobid = {
        banner: 'ca-app-pub-3940256099942544/2934735716',
        interstitial: 'ca-app-pub-3940256099942544/4411468910',
    }
}

document.addEventListener('deviceready', function () {
    
    AdMob.setOptions({
        isTesting: false,
    })

    AdMob.createBannerView({
        autoShow: true,
    });

    AdMob.prepareInterstitial({
        interstitialAdId: admobid.interstitial,
        autoShow: false,
    })

    document.getElementById('showAd').disabled = true;
    
    document.getElementById('showAd').onclick = function () {
        AdMob.showInterstitial()
    }

}, false)

document.addEventListener('onFailedToReceiveAd', function (event) {
    console.log(event)
})

document.addEventListener('onReceiveInterstitialAd', function (event) {
    console.log(event)
    document.getElementById('showAd').disabled = false
})

document.addEventListener('onDismissInterstitialAd', function (event) {
    console.log(event)

    alert('onDismissInterstitialAd');

    AdMob.prepareInterstitial({
        interstitialAdId: admobid.interstitial,
        autoShow: false,
    })
})
