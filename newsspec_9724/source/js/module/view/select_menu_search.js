define(['lib/news_special/bootstrap'], 
	function(news) {


    var SelectmenuSearch = function(resultsSet) {

        // The paramaters used in the DfE website (pri, sec, p16)
        this.dfeParams = {
            primary: 'pri',
            gcse: 'sec',
            alevel: 'p16'
        }

        this.FORM_ID = 'ns__' + resultsSet + '__school_form';

        this.MARKUP = '<div id="ns__' + resultsSet + '__school_user_form" class="ns__' + resultsSet + '__school_user_form ns__search_form_container">' +
            '<form id="' + this.FORM_ID + '" class="ns__school_form" method="GET" action="http://www.education.gov.uk/cgi-bin/schools/performance/group.pl" target="_parent">' +
                '<input type="hidden" name="qtype" value="LA">' +
                '<input type="hidden" name="superview" value="' + this.dfeParams[resultsSet] + '">' +
                '<span class="ns__input_wrapper">' +
                    '<select id="ns__' + resultsSet + '__school_field" name="no">' +
                        '<option value="" class="ns__cta">Or choose local authority</option>' +
                        '<option value="301">Barking and Dagenham</option>' +
                        '<option value="302">Barnet</option>' +
                        '<option value="370">Barnsley</option>' +
                        '<option value="800">Bath and North East Somerset</option>' +
                        '<option value="822">Bedford</option>' +
                        '<option value="303">Bexley</option>' +

                        '<option value="330">Birmingham</option>' +
                        '<option value="889">Blackburn with Darwen</option>' +
                        '<option value="890">Blackpool</option>' +
                        '<option value="350">Bolton</option>' +
                        '<option value="837">Bournemouth</option>' +
                        '<option value="867">Bracknell Forest</option>' +

                        '<option value="380">Bradford</option>' +
                        '<option value="304">Brent</option>' +
                        '<option value="846">Brighton and Hove</option>' +
                        '<option value="801">Bristol, City of</option>' +
                        '<option value="305">Bromley</option>' +
                        '<option value="825">Buckinghamshire</option>' +

                        '<option value="351">Bury</option>' +
                        '<option value="381">Calderdale</option>' +
                        '<option value="873">Cambridgeshire</option>' +
                        '<option value="202">Camden</option>' +
                        '<option value="823">Central Bedfordshire</option>' +
                        '<option value="895">Cheshire East</option>' +

                        '<option value="896">Cheshire West and Chester</option>' +
                        '<option value="201">City of London</option>' +
                        '<option value="908">Cornwall</option>' +
                        '<option value="331">Coventry</option>' +
                        '<option value="306">Croydon</option>' +
                        '<option value="909">Cumbria</option>' +

                        '<option value="841">Darlington</option>' +
                        '<option value="831">Derby</option>' +
                        '<option value="830">Derbyshire</option>' +
                        '<option value="878">Devon</option>' +
                        '<option value="371">Doncaster</option>' +
                        '<option value="835">Dorset</option>' +

                        '<option value="332">Dudley</option>' +
                        '<option value="840">Durham</option>' +
                        '<option value="307">Ealing</option>' +
                        '<option value="811">East Riding of Yorkshire</option>' +
                        '<option value="845">East Sussex</option>' +
                        '<option value="308">Enfield</option>' +

                        '<option value="881">Essex</option>' +
                        '<option value="390">Gateshead</option>' +
                        '<option value="916">Gloucestershire</option>' +
                        '<option value="203">Greenwich</option>' +
                        '<option value="204">Hackney</option>' +
                        '<option value="876">Halton</option>' +

                        '<option value="205">Hammersmith and Fulham</option>' +
                        '<option value="850">Hampshire</option>' +
                        '<option value="309">Haringey</option>' +
                        '<option value="310">Harrow</option>' +
                        '<option value="805">Hartlepool</option>' +
                        '<option value="311">Havering</option>' +

                        '<option value="884">Herefordshire</option>' +
                        '<option value="919">Hertfordshire</option>' +
                        '<option value="312">Hillingdon</option>' +
                        '<option value="313">Hounslow</option>' +
                        '<option value="921">Isle of Wight</option>' +
                        '<option value="420">Isles of Scilly</option>' +

                        '<option value="206">Islington</option>' +
                        '<option value="207">Kensington and Chelsea</option>' +
                        '<option value="886">Kent</option>' +
                        '<option value="810">Kingston upon Hull, City of</option>' +
                        '<option value="314">Kingston upon Thames</option>' +
                        '<option value="382">Kirklees</option>' +

                        '<option value="340">Knowsley</option>' +
                        '<option value="208">Lambeth</option>' +
                        '<option value="888">Lancashire</option>' +
                        '<option value="383">Leeds</option>' +
                        '<option value="856">Leicester</option>' +
                        '<option value="855">Leicestershire</option>' +

                        '<option value="209">Lewisham</option>' +
                        '<option value="925">Lincolnshire</option>' +
                        '<option value="341">Liverpool</option>' +
                        '<option value="821">Luton</option>' +
                        '<option value="352">Manchester</option>' +
                        '<option value="887">Medway</option>' +

                        '<option value="315">Merton</option>' +
                        '<option value="806">Middlesbrough</option>' +
                        '<option value="826">Milton Keynes</option>' +
                        '<option value="391">Newcastle upon Tyne</option>' +
                        '<option value="316">Newham</option>' +
                        '<option value="926">Norfolk</option>' +

                        '<option value="812">North East Lincolnshire</option>' +
                        '<option value="813">North Lincolnshire</option>' +
                        '<option value="802">North Somerset</option>' +
                        '<option value="392">North Tyneside</option>' +
                        '<option value="815">North Yorkshire</option>' +
                        '<option value="928">Northamptonshire</option>' +

                        '<option value="929">Northumberland</option>' +
                        '<option value="892">Nottingham</option>' +
                        '<option value="891">Nottinghamshire</option>' +
                        '<option value="353">Oldham</option>' +
                        '<option value="931">Oxfordshire</option>' +
                        '<option value="874">Peterborough</option>' +

                        '<option value="879">Plymouth</option>' +
                        '<option value="836">Poole</option>' +
                        '<option value="851">Portsmouth</option>' +
                        '<option value="870">Reading</option>' +
                        '<option value="317">Redbridge</option>' +
                        '<option value="807">Redcar and Cleveland</option>' +

                        '<option value="318">Richmond upon Thames</option>' +
                        '<option value="354">Rochdale</option>' +
                        '<option value="372">Rotherham</option>' +
                        '<option value="857">Rutland</option>' +
                        '<option value="355">Salford</option>' +
                        '<option value="333">Sandwell</option>' +

                        '<option value="343">Sefton</option>' +
                        '<option value="373">Sheffield</option>' +
                        '<option value="893">Shropshire</option>' +
                        '<option value="871">Slough</option>' +
                        '<option value="334">Solihull</option>' +
                        '<option value="933">Somerset</option>' +

                        '<option value="803">South Gloucestershire</option>' +
                        '<option value="393">South Tyneside</option>' +
                        '<option value="852">Southampton</option>' +
                        '<option value="882">Southend-on-Sea</option>' +
                        '<option value="210">Southwark</option>' +
                        '<option value="342">St. Helens</option>' +

                        '<option value="860">Staffordshire</option>' +
                        '<option value="356">Stockport</option>' +
                        '<option value="808">Stockton-on-Tees</option>' +
                        '<option value="861">Stoke-on-Trent</option>' +
                        '<option value="935">Suffolk</option>' +
                        '<option value="394">Sunderland</option>' +

                        '<option value="936">Surrey</option>' +
                        '<option value="319">Sutton</option>' +
                        '<option value="866">Swindon</option>' +
                        '<option value="357">Tameside</option>' +
                        '<option value="894">Telford and Wrekin</option>' +
                        '<option value="883">Thurrock</option>' +

                        '<option value="880">Torbay</option>' +
                        '<option value="211">Tower Hamlets</option>' +
                        '<option value="358">Trafford</option>' +
                        '<option value="384">Wakefield</option>' +
                        '<option value="335">Walsall</option>' +
                        '<option value="320">Waltham Forest</option>' +

                        '<option value="212">Wandsworth</option>' +
                        '<option value="877">Warrington</option>' +
                        '<option value="937">Warwickshire</option>' +
                        '<option value="869">West Berkshire</option>' +
                        '<option value="938">West Sussex</option>' +
                        '<option value="213">Westminster</option>' +

                        '<option value="359">Wigan</option>' +
                        '<option value="865">Wiltshire</option>' +
                        '<option value="868">Windsor and Maidenhead</option>' +
                        '<option value="344">Wirral</option>' +
                        '<option value="872">Wokingham</option>' +
                        '<option value="336">Wolverhampton</option>' +

                        '<option value="885">Worcestershire</option>' +
                        '<option value="816">York</option>' +
                    '</select>' +
                    '<input class="ns__go_button" type="submit" value="Go" />' +
                '</span>' +
            '</form>' +
        '</div>';

        return this;
    }

    SelectmenuSearch.prototype.init = function (afterEltId, resultsSet) {
        var mySelectmenuSearch = this;
        news.$(afterEltId).after(this.MARKUP);

        this.setButtonState('', resultsSet);
        
        this.addUserEvents(resultsSet);

        news.pubsub.on('ns__submit__' + resultsSet + '_dataitem', function (dataItem, resSet) {

            if (dataItem === '') {
                return false;
            }

            if(mySelectmenuSearch.submitForm()) {
                news.pubsub.emit('ns__schoolFormSubmitted');
                  
                news.pubsub.emit('istats', ['select-menu-used', 'newsspec-interaction']);
            }
        });

        news.pubsub.on('ns__change__' + resultsSet + '_dataitem', function (dataItem, resSet) {
            mySelectmenuSearch.setButtonState(dataItem, resSet);
        });
    }

    SelectmenuSearch.prototype.addUserEvents = function (resSet) {

        var that = this;

        //console.log('addUserEvents, ' + this.resultsSets[set]);
        //console.log('controller, addUserEvents: ' + resSet);
        document.getElementById("ns__" + resSet + "__school_form").onsubmit = function () {
            console.log('controller, onsubmit: ' + resSet);
            news.pubsub.emit('ns__submit__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        };

        news.$('#ns__' + resSet + '__school_field').on('change', function () {
            news.pubsub.emit('ns__change__' + resSet + '_dataitem', [news.$('#ns__' + resSet + '__school_field').val(), resSet]);
            return false;
        });
    }

    SelectmenuSearch.prototype.setButtonState = function (dataItem, resSet) {
        //console.log('SelectmenuSearch, setButtonState: ' + dataItem + ', ' + resSet);
        if (dataItem !== '' && news.$('#ns__' + resSet + '__school_form .ns__go_button').hasClass('ns--disabled')) {
            news.$('.ns__school_form .ns__go_button').removeClass('ns--disabled');
        } else if (dataItem === '' && !news.$('#ns__' + resSet + '__school_form .ns__go_button').hasClass('ns--disabled')) {
            news.$('.ns__school_form .ns__go_button').addClass('ns--disabled');
        } else {
            // Nothing to do 
        }
        
    }

    SelectmenuSearch.prototype.submitForm = function () {
        document.getElementById(this.FORM_ID).submit();
        return true;
    }

    return SelectmenuSearch;
});