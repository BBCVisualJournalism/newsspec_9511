define(['lib/news_special/bootstrap', 'app'],  function (news, app) {

    beforeEach(function () {
        news.$('body').append('<div id="newsspec_9511" class="newsspec_9511 ns__noJs">' +

    '<div class="ns__schools_nav">' +

        '<h2 class="strapline special-24"><a href="/news/education-11950098">English primary school tables</a></h2>' +

       '<h3 id="ns__schools_nav_cta" class="ns__schools_nav_cta description special-16">Compare schools in your area on Department for Education website</h3>' +

        '<div id="ns__primary__postcode_form" class="ns__postcode_form ns__search_form_container">' +

            '<form id="ns__primary__postcode_user_form" class="ns__postcode_form" method="POST" action="http://www.bbc.co.uk/locator/default/bouncer/news_school_league_tables_2012">' +
                '<input type="hidden" name="level" value="primary">' +
                '<input type="hidden" name="mode" value="lea">' +
                '<input type="hidden" name="year" value="13">' +
                '<input type="hidden" name="destination" value="dfe">' +
                '<span class="ns__input_wrapper">' +
                    '<input  id="ns__primary__postcode_field" name="location_id" class="ns__search_field" type="text" placeholder="Enter full England postcode" />' +
                    '<input class="ns__go_button" name="ns__search_button" type="submit" value="Go" />' +
                '</span>' +
            '</form>' +

            '<div class="ns__error_message"></div>' +
        '</div>' +

    '</div>' +

'</div>');
    });

    afterEach(function () {
        news.$('.main').remove();
    });

    describe('app', function () {
        app.init();
        it('', function () {
            expect(true).toBeTruthy();
        });
    });

});