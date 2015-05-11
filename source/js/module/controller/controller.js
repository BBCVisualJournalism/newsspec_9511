define(["lib/news_special/bootstrap", 'module/view/postcode_search', 'module/view/datalist_search', 'module/view/select_menu_search', 'module/view/dataset_nav'],
    function (news, PostcodeSearch, DatalistSearch, SelectMenuSearch, DatasetNav) {

        this.currentSelection = '';
        this.resultsSets;

		function init(defaultSelection) {

            //console.log('controller, init');
            this.currentSelection = defaultSelection;
            this.resultsSets = [
            	'primary'//,
            	// 'gcse',
            	// 'alevel'
            ];

            for (var set in this.resultsSets) if (this.resultsSets.hasOwnProperty(set)) {
                var myPostcodeSearch = new PostcodeSearch();
                myPostcodeSearch.init('ns__' + this.resultsSets[set] + '__postcode_user_form', this.resultsSets[set]);

                // Check for datalist support
                if ('options' in document.createElement('datalist')) {
                    // Add datalist
                    var myDatalistSearch = new DatalistSearch(this.resultsSets[set]);
                    myDatalistSearch.init('#ns__' + this.resultsSets[set] + '__postcode_form', this.resultsSets[set]);
                } else {
                    // Fallback (dropdown menu)
                    var mySelectmenuSearch = new SelectMenuSearch(this.resultsSets[set]);
                    mySelectmenuSearch.init('#ns__' + this.resultsSets[set] + '__postcode_form', this.resultsSets[set]);
                }

                // Check for placeholder support
                if(!("placeholder" in document.createElement("input"))) {
                    news.$('#ns__' + this.resultsSets[set] + '__postcode_field').prop('value', 'Enter full England postcode');
                }
            }

            // Add the data-set nav
            // var myDatasetNav = new DatasetNav();
            // myDatasetNav.init('ns__schools_nav_cta', this.resultsSets, 'primary');


		}

        return {
            init: init
        };
    });