define(['lib/news_special/bootstrap'], 
	function(news) {

    var DatasetNav = function() {

        this.MARKUP = '<h3 id="ns_6710__toggle_cta" class="description special-16">Choose results</h3>' +
        '<form id="ns__schools_nav__toggle">' +
            '<fieldset class="ns__schools_nav_data_control">' +
                '<input type="radio" value="primary" name="ns__results_set" id="ns__schools_nav_select--primary" />' +
                '<label for="ns__schools_nav_select--primary">' + news.$('#ns__choose--primary').html() + '</label>' +
            '</fieldset>' +
            '<fieldset class="ns__schools_nav_data_control">' +
                '<input type="radio" value="gcse" name="ns__results_set" id="ns__schools_nav_select--gcse" />' +
                '<label for="ns__schools_nav_select--gcse">' + news.$('#ns__choose--gcse').html() + '</label>' +
            '</fieldset>' +
            '<fieldset class="ns__schools_nav_data_control">' +
                '<input type="radio" value="alevel" name="ns__results_set" id="ns__schools_nav_select--alevel" />' +
                '<label for="ns__schools_nav_select--alevel">' + news.$('#ns__choose--alevel').html() + '</label>' +
            '</fieldset>' +
        '</form>';

        this.lastResultsSet;

        return this;
    }

    DatasetNav.prototype.init = function (beforeEltId, resultsSetsList, resultsSetSelected) {
        
        // Hide form headers
        news.$('.ns__schools_nav .ns__choose').css('display', 'none');

        // Add the toggle element 
        news.$('#' + beforeEltId).before(this.MARKUP);

        // Check the default option
        news.$('#ns__schools_nav_select--' + resultsSetSelected).attr('checked', 'checked');

        this.lastResultsSet = resultsSetSelected;
        this.addEvents();
        this.toggleNav(resultsSetsList, resultsSetSelected);

        var myDatasetNav = this;
        news.pubsub.on('ns__toggle_results_set', function (resSet) {
            //console.log('School search', dataItem);

            myDatasetNav.toggleNav(resultsSetsList, resSet);
            
            news.pubsub.emit('istats', ['data-set-selected', 'newsspec-interaction']);
        });
    }

    DatasetNav.prototype.toggleNav = function (resultsSetsList, resultsSetSelected) {
        // Gets the values in the currently displayed searchboxes and sets the hidden
        // forms to the same values
        // Shows the nav section for the selected data set and hides the other sections

        var myDataSetNav = this,
            myPostcodeVal,
            myAreaVal;

        myPostcodeVal = news.$('#ns__' + this.lastResultsSet + '__postcode_field').val();
        myAreaVal = news.$('#ns__' + this.lastResultsSet + '__school_field').val();
        //console.log('this.lastResultsSet: ' + this.lastResultsSet);
        //console.log('myPostcodeVal: ' + myPostcodeVal);

        for (var i in resultsSetsList) {
            if (resultsSetsList[i] === resultsSetSelected) {
                news.$('#ns__' + resultsSetsList[i] + '__postcode_field').val(myPostcodeVal);
                news.$('#ns__' + resultsSetsList[i] + '__school_field').val(myAreaVal);

                news.$('#ns__' + resultsSetsList[i] + '__postcode_form').css('display', 'block');
                news.$('#ns__' + resultsSetsList[i] + '__school_user_form').css('display', 'block');
            } else {
                news.$('#ns__' + resultsSetsList[i] + '__postcode_form').css('display', 'none');
                news.$('#ns__' + resultsSetsList[i] + '__school_user_form').css('display', 'none');
            }
        }

        this.lastResultsSet = resultsSetSelected;

    }

    DatasetNav.prototype.addEvents = function () {

        var that = this;
        news.$('input[name="ns__results_set"]').on('change', function () {
            news.pubsub.emit('ns__toggle_results_set', [news.$('input[name="ns__results_set"]:checked').val()]);
            //return false;
        });
    }

    return DatasetNav;
});