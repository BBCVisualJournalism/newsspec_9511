define(['lib/news_special/bootstrap', 'module/controller/controller'], function (news, controller) {

    return {
        init: function (storyPageUrl) {
            controller.init('primary');

            news.pubsub.emit('istats', ['app-initiated', 'newsspec-nonuser', true]);

            news.sendMessageToremoveLoadingImage();
        }
    };

});
