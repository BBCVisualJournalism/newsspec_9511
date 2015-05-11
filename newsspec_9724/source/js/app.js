define(['lib/news_special/bootstrap', 'module/controller/controller'], function (news, controller) {

    return {
        init: function (storyPageUrl) {

            // Add a class if we're on desktop
            if (news.$('.blq-journalism-domestic', window.parent.document).length > 0) {
                news.$('#newsspec_9724').addClass('ns__desktop');
            }

            controller.init('primary');

            news.pubsub.emit('istats', ['app-initiated', 'newsspec-nonuser', true]);

            news.sendMessageToremoveLoadingImage();
        }
    };

});
