define(['lib/news_special/bootstrap'],
	function(news) {

    var DatalistSearch = function(resultsSet) {

        // The paramaters used in the DfE website (pri, sec, p16)
        this.dfeParams = {
            primary: 'pri',
            gcse: 'sec',
            alevel: 'p16'
        }

        this.FORM_ID = 'ns__' + resultsSet + '__school_form';

        this.MARKUP = '<div id="ns__' + resultsSet + '__school_user_form" class="ns__search_form_container">' +
            '<form id="' + this.FORM_ID + '" class="ns__school_form" method="GET" action="http://www.education.gov.uk/cgi-bin/schools/performance/group.pl" target="_parent">' +
                '<input type="hidden" name="qtype" value="LA">' +
                '<input type="hidden" id="ns__' + resultsSet + '__user_lacode" name="no" value="">' +
                '<input type="hidden" name="superview" value="' + this.dfeParams[resultsSet] + '">' +
                '<span class="ns__input_wrapper">' +
                    '<input id="ns__' + resultsSet + '__school_field" list="ns__list_las" class="ns__search_field" type="text" placeholder="Or enter local authority name" />' +
                    '<input class="ns__go_button" type="submit" value="Go" />' +
                '</span>' +
            '</form>' +
        '</div>';

        this.DATALIST = '<datalist id="ns__list_las">' +
            '<option data-lacode="301" value="Barking and Dagenham"></option>' +
            '<option data-lacode="302" value="Barnet"></option>' +
            '<option data-lacode="370" value="Barnsley"></option>' +
            '<option data-lacode="800" value="Bath and North East Somerset"></option>' +
            '<option data-lacode="822" value="Bedford"></option>' +
            '<option data-lacode="303" value="Bexley"></option>' +

            '<option data-lacode="330" value="Birmingham"></option>' +
            '<option data-lacode="889" value="Blackburn with Darwen"></option>' +
            '<option data-lacode="890" value="Blackpool"></option>' +
            '<option data-lacode="350" value="Bolton"></option>' +
            '<option data-lacode="837" value="Bournemouth"></option>' +
            '<option data-lacode="867" value="Bracknell Forest"></option>' +

            '<option data-lacode="380" value="Bradford"></option>' +
            '<option data-lacode="304" value="Brent"></option>' +
            '<option data-lacode="846" value="Brighton and Hove"></option>' +
            '<option data-lacode="801" value="Bristol, City of"></option>' +
            '<option data-lacode="305" value="Bromley"></option>' +
            '<option data-lacode="825" value="Buckinghamshire"></option>' +

            '<option data-lacode="351" value="Bury"></option>' +
            '<option data-lacode="381" value="Calderdale"></option>' +
            '<option data-lacode="873" value="Cambridgeshire"></option>' +
            '<option data-lacode="202" value="Camden"></option>' +
            '<option data-lacode="823" value="Central Bedfordshire"></option>' +
            '<option data-lacode="895" value="Cheshire East"></option>' +

            '<option data-lacode="896" value="Cheshire West and Chester"></option>' +
            '<option data-lacode="201" value="City of London"></option>' +
            '<option data-lacode="908" value="Cornwall"></option>' +
            '<option data-lacode="331" value="Coventry"></option>' +
            '<option data-lacode="306" value="Croydon"></option>' +
            '<option data-lacode="909" value="Cumbria"></option>' +

            '<option data-lacode="841" value="Darlington"></option>' +
            '<option data-lacode="831" value="Derby"></option>' +
            '<option data-lacode="830" value="Derbyshire"></option>' +
            '<option data-lacode="878" value="Devon"></option>' +
            '<option data-lacode="371" value="Doncaster"></option>' +
            '<option data-lacode="835" value="Dorset"></option>' +

            '<option data-lacode="332" value="Dudley"></option>' +
            '<option data-lacode="840" value="Durham"></option>' +
            '<option data-lacode="307" value="Ealing"></option>' +
            '<option data-lacode="811" value="East Riding of Yorkshire"></option>' +
            '<option data-lacode="845" value="East Sussex"></option>' +
            '<option data-lacode="308" value="Enfield"></option>' +

            '<option data-lacode="881" value="Essex"></option>' +
            '<option data-lacode="390" value="Gateshead"></option>' +
            '<option data-lacode="916" value="Gloucestershire"></option>' +
            '<option data-lacode="203" value="Greenwich"></option>' +
            '<option data-lacode="204" value="Hackney"></option>' +
            '<option data-lacode="876" value="Halton"></option>' +

            '<option data-lacode="205" value="Hammersmith and Fulham"></option>' +
            '<option data-lacode="850" value="Hampshire"></option>' +
            '<option data-lacode="309" value="Haringey"></option>' +
            '<option data-lacode="310" value="Harrow"></option>' +
            '<option data-lacode="805" value="Hartlepool"></option>' +
            '<option data-lacode="311" value="Havering"></option>' +

            '<option data-lacode="884" value="Herefordshire"></option>' +
            '<option data-lacode="919" value="Hertfordshire"></option>' +
            '<option data-lacode="312" value="Hillingdon"></option>' +
            '<option data-lacode="313" value="Hounslow"></option>' +
            '<option data-lacode="921" value="Isle of Wight"></option>' +
            '<option data-lacode="420" value="Isles of Scilly"></option>' +

            '<option data-lacode="206" value="Islington"></option>' +
            '<option data-lacode="207" value="Kensington and Chelsea"></option>' +
            '<option data-lacode="886" value="Kent"></option>' +
            '<option data-lacode="810" value="Kingston upon Hull, City of"></option>' +
            '<option data-lacode="314" value="Kingston upon Thames"></option>' +
            '<option data-lacode="382" value="Kirklees"></option>' +

            '<option data-lacode="340" value="Knowsley"></option>' +
            '<option data-lacode="208" value="Lambeth"></option>' +
            '<option data-lacode="888" value="Lancashire"></option>' +
            '<option data-lacode="383" value="Leeds"></option>' +
            '<option data-lacode="856" value="Leicester"></option>' +
            '<option data-lacode="855" value="Leicestershire"></option>' +

            '<option data-lacode="209" value="Lewisham"></option>' +
            '<option data-lacode="925" value="Lincolnshire"></option>' +
            '<option data-lacode="341" value="Liverpool"></option>' +
            '<option data-lacode="821" value="Luton"></option>' +
            '<option data-lacode="352" value="Manchester"></option>' +
            '<option data-lacode="887" value="Medway"></option>' +

            '<option data-lacode="315" value="Merton"></option>' +
            '<option data-lacode="806" value="Middlesbrough"></option>' +
            '<option data-lacode="826" value="Milton Keynes"></option>' +
            '<option data-lacode="391" value="Newcastle upon Tyne"></option>' +
            '<option data-lacode="316" value="Newham"></option>' +
            '<option data-lacode="926" value="Norfolk"></option>' +

            '<option data-lacode="812" value="North East Lincolnshire"></option>' +
            '<option data-lacode="813" value="North Lincolnshire"></option>' +
            '<option data-lacode="802" value="North Somerset"></option>' +
            '<option data-lacode="392" value="North Tyneside"></option>' +
            '<option data-lacode="815" value="North Yorkshire"></option>' +
            '<option data-lacode="928" value="Northamptonshire"></option>' +

            '<option data-lacode="929" value="Northumberland"></option>' +
            '<option data-lacode="892" value="Nottingham"></option>' +
            '<option data-lacode="891" value="Nottinghamshire"></option>' +
            '<option data-lacode="353" value="Oldham"></option>' +
            '<option data-lacode="931" value="Oxfordshire"></option>' +
            '<option data-lacode="874" value="Peterborough"></option>' +

            '<option data-lacode="879" value="Plymouth"></option>' +
            '<option data-lacode="836" value="Poole"></option>' +
            '<option data-lacode="851" value="Portsmouth"></option>' +
            '<option data-lacode="870" value="Reading"></option>' +
            '<option data-lacode="317" value="Redbridge"></option>' +
            '<option data-lacode="807" value="Redcar and Cleveland"></option>' +

            '<option data-lacode="318" value="Richmond upon Thames"></option>' +
            '<option data-lacode="354" value="Rochdale"></option>' +
            '<option data-lacode="372" value="Rotherham"></option>' +
            '<option data-lacode="857" value="Rutland"></option>' +
            '<option data-lacode="355" value="Salford"></option>' +
            '<option data-lacode="333" value="Sandwell"></option>' +

            '<option data-lacode="343" value="Sefton"></option>' +
            '<option data-lacode="373" value="Sheffield"></option>' +
            '<option data-lacode="893" value="Shropshire"></option>' +
            '<option data-lacode="871" value="Slough"></option>' +
            '<option data-lacode="334" value="Solihull"></option>' +
            '<option data-lacode="933" value="Somerset"></option>' +

            '<option data-lacode="803" value="South Gloucestershire"></option>' +
            '<option data-lacode="393" value="South Tyneside"></option>' +
            '<option data-lacode="852" value="Southampton"></option>' +
            '<option data-lacode="882" value="Southend-on-Sea"></option>' +
            '<option data-lacode="210" value="Southwark"></option>' +
            '<option data-lacode="342" value="St. Helens"></option>' +

            '<option data-lacode="860" value="Staffordshire"></option>' +
            '<option data-lacode="356" value="Stockport"></option>' +
            '<option data-lacode="808" value="Stockton-on-Tees"></option>' +
            '<option data-lacode="861" value="Stoke-on-Trent"></option>' +
            '<option data-lacode="935" value="Suffolk"></option>' +
            '<option data-lacode="394" value="Sunderland"></option>' +

            '<option data-lacode="936" value="Surrey"></option>' +
            '<option data-lacode="319" value="Sutton"></option>' +
            '<option data-lacode="866" value="Swindon"></option>' +
            '<option data-lacode="357" value="Tameside"></option>' +
            '<option data-lacode="894" value="Telford and Wrekin"></option>' +
            '<option data-lacode="883" value="Thurrock"></option>' +

            '<option data-lacode="880" value="Torbay"></option>' +
            '<option data-lacode="211" value="Tower Hamlets"></option>' +
            '<option data-lacode="358" value="Trafford"></option>' +
            '<option data-lacode="384" value="Wakefield"></option>' +
            '<option data-lacode="335" value="Walsall"></option>' +
            '<option data-lacode="320" value="Waltham Forest"></option>' +

            '<option data-lacode="212" value="Wandsworth"></option>' +
            '<option data-lacode="877" value="Warrington"></option>' +
            '<option data-lacode="937" value="Warwickshire"></option>' +
            '<option data-lacode="869" value="West Berkshire"></option>' +
            '<option data-lacode="938" value="West Sussex"></option>' +
            '<option data-lacode="213" value="Westminster"></option>' +

            '<option data-lacode="359" value="Wigan"></option>' +
            '<option data-lacode="865" value="Wiltshire"></option>' +
            '<option data-lacode="868" value="Windsor and Maidenhead"></option>' +
            '<option data-lacode="344" value="Wirral"></option>' +
            '<option data-lacode="872" value="Wokingham"></option>' +
            '<option data-lacode="336" value="Wolverhampton"></option>' +

            '<option data-lacode="885" value="Worcestershire"></option>' +
            '<option data-lacode="816" value="York"></option>' +
        '</datalist>';

        return this;
    }

    DatalistSearch.prototype.init = function (afterEltId, resultsSet) {
        var searchBoxElt = news.$(this.MARKUP),
            myDatalistSearch = this;

        news.$(afterEltId).after(searchBoxElt);
        if (! news.$('#ns__list_las').length > 0) {
            searchBoxElt.after(myDatalistSearch.DATALIST);
        }

        this.setButtonState('', resultsSet);

        this.addUserEvents(resultsSet);

        news.pubsub.on('ns__submit__' + resultsSet + '_dataitem', function (dataItem, resSet) {
            //console.log('Datalist submit: ' + dataItem + ' ' + resSet);
			var level = news.$('#ns__primary__postcode_user_form').find('input[name=level]:checked').val();

			news.$('#ns__primary__school_form').find('input[name=superview]').val(level);

            if(myDatalistSearch.dataItemSearch(resSet)) {
                news.pubsub.emit('ns__schoolFormSubmitted', [dataItem, resSet]);

                news.pubsub.emit('istats', ['data-list-search', 'newsspec-interaction']);
            }
        });

        news.pubsub.on('ns__change__' + resultsSet + '_dataitem', function (dataItem, resSet) {
            myDatalistSearch.setButtonState(dataItem, resSet);
        });
    }

    DatalistSearch.prototype.addUserEvents = function (resSet) {

        var that = this;

        //console.log('addUserEvents, ' + this.resultsSets[set]);
        //console.log('controller, addUserEvents: ' + resSet);
        document.getElementById("ns__" + resSet + "__school_user_form").onsubmit = function () {
            //console.log('controller, onsubmit: ' + resSet);
            news.pubsub.emit('ns__submit__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        };

        news.$('#ns__' + resSet + '__school_field').on('change', function () {
            news.pubsub.emit('ns__change__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        });
        news.$('#ns__' + resSet + '__school_field').on('keyup', function () {
            news.pubsub.emit('ns__change__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        });
        news.$('#ns__' + resSet + '__school_field').on('mouseup', function () {
            news.pubsub.emit('ns__change__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        });
    }

	DatalistSearch.prototype.dataItemSearch = function (resultsSet) {

        var userInput = news.$('#ns__' + resultsSet + '__school_field').val(),
            success = false,
            myLaCode = '';

        myLaCode = news.$('#ns__list_las option').filter(function() {
            return this.value === userInput;
        }).data('lacode');

        /* if value doesn't match an option, myLaCode will be undefined */
        if (myLaCode) {
            //console.log(myLaCode);
            news.$('#ns__' + resultsSet + '__user_lacode').val(myLaCode);
            this.submitForm();

            success = true;
        } else {
            // 'No Match'
        }

        return success;

	}

    DatalistSearch.prototype.setButtonState = function (dataItem, resSet) {
        //console.log('DatalistSearch, setButtonState: ' + dataItem + ', ' + resSet);
        if (dataItem !== '' && news.$('#ns__' + resSet + '__school_form .ns__go_button').hasClass('ns--disabled')) {
            news.$('.ns__school_form .ns__go_button').removeClass('ns--disabled');
        } else if (dataItem === '' && !news.$('#ns__' + resSet + '__school_form .ns__go_button').hasClass('ns--disabled')) {
            news.$('.ns__school_form .ns__go_button').addClass('ns--disabled');
        } else {
            // Nothing to do
        }

    }

    DatalistSearch.prototype.submitForm = function () {
        document.getElementById(this.FORM_ID).submit();
        return true;

    }

    return DatalistSearch;
});
