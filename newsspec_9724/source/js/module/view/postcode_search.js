define(['lib/news_special/bootstrap', 'module/controller/error'], 
	function(news) {

    var PostcodeSearch = function(fieldId) {
        this.FORM_CONTAINER;
        return this;
    }

    PostcodeSearch.prototype.init = function (fieldId, resultsSet) {
        this.FORM_CONTAINER = "#" + fieldId;
        //console.log('PostcodeSearch, init: ' + resultsSet);

        this.setButtonState('', resultsSet);
        
        this.addUserEvents(resultsSet);

        var myPostcodeSearch = this;
        news.pubsub.on('ns__resetForm', function () {
            myPostcodeSearch.resetForm();
        });

        news.pubsub.on('ns__' + resultsSet + '__submit_postcode', function (postcode, resSet) {

            var isValid = myPostcodeSearch.validatePostcode(postcode);
            if(isValid){
               if(myPostcodeSearch.submitForm(resSet)) {
                    news.pubsub.emit('ns__postcodeFormSubmitted', ['postcode']);
                    news.pubsub.emit('istats', ['postcode-search', 'newsspec-interaction']);
               } 
            } else {
                var errorMessage = 'Enter a valid full postcode.';
                news.pubsub.emit('ns__formError', [errorMessage]);
            }
            //console.log(isValid, 'isValid');
        });

        news.pubsub.on('ns__change__' + resultsSet + '_postcode', function (dataItem, resSet) {
            myPostcodeSearch.setButtonState(dataItem, resSet);
        });
    }

    PostcodeSearch.prototype.addUserEvents = function (resSet) {

        var myPostcodeSearch = this;

        //console.log('addUserEvents, ' + this.resultsSets[set]);
        //console.log('controller, addUserEvents: ' + resSet);
        // console.log("ns__" + resSet + "__postcode_user_form");
        document.getElementById("ns__" + resSet + "__postcode_user_form").onsubmit = function () {
            //console.log('controller, onsubmit: ' + resSet);
            news.pubsub.emit('ns__' + resSet + '__submit_postcode', [news.$('#ns__' + resSet + '__postcode_field').val(), resSet]);
            return false;
        };

        news.$('#ns__' + resSet + '__postcode_field').on('change', function () {
            news.pubsub.emit('ns__change__' + resSet + '_postcode', [news.$('#ns__' + resSet + '__postcode_field').val(), resSet]);
            return false;
        });

        news.$('#ns__' + resSet + '__postcode_field').on('keyup', function () {
            news.pubsub.emit('ns__change__' + resSet + '_postcode', [news.$('#ns__' + resSet + '__postcode_field').val(), resSet]);
            return false;
        });

        news.$('#ns__' + resSet + '__postcode_field').on('mouseup', function () {
            news.pubsub.emit('ns__change__' + resSet + '_postcode', [news.$('#ns__' + resSet + '__postcode_field').val(), resSet]);
            return false;
        });
    }

    PostcodeSearch.prototype.resetForm = function () {
        // Clear form 
        news.$(this.FORM_CONTAINER).val("");
    }

     PostcodeSearch.prototype.validatePostcode = function (postcode) {
        var isValid = (/^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i).test(postcode)
        //console.log(postcode);
        //console.log(isValid);
        return isValid;
        //return (/^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i).test(postcode);
    };

	PostcodeSearch.prototype.submitForm = function (resSet) {
        document.getElementById("ns__" + resSet + "__postcode_user_form").submit();
        return true;	
	}

    PostcodeSearch.prototype.showErrorButton = function() {
        news.$(".ns__error_message").show();
    }

    PostcodeSearch.prototype.hideErrorButton = function() {
        news.$(".ns__error_message").hide();   
    }

    PostcodeSearch.prototype.setButtonState = function (dataItem, resSet) {
        //console.log('PostcodeSearch, setButtonState: ' + dataItem + ', ' + resSet);
        if (dataItem !== '' && news.$('#ns__' + resSet + '__postcode_form .ns__go_button').hasClass('ns--disabled')) {
            news.$('.ns__postcode_form .ns__go_button').removeClass('ns--disabled');
        } else if (dataItem === '' && !news.$('#ns__' + resSet + '__postcode_field').hasClass('ns--disabled')) {
            news.$('.ns__postcode_form .ns__go_button').addClass('ns--disabled');
        } else {
            // Nothing to do 
        }
        
    }

    return PostcodeSearch;
});