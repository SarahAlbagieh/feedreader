/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //checking if all the urls in allFeeds are not empty

        it('URL is not empty and defined', function() {

            for (i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual('');
            }
        });

        //checking if all the urls in allFeeds are not empty

        it('Name is not empty and defined', function() {


            for (i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual('');

            }

        });
    });


    describe('The menu', function() {

        //checking if the body has menu-hidden class that keeps it hidden

        it('the menu is hidden by default', function() {


            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        //checking if the menu changes visibility when you click it (open and close)
        it('changes visibility when the menu is clicked', function() {

            // opening the menu : the menu-hidden class has to be toggeled
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            // closing the menu : the menu-hidden class has to be toggeled back
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

    });

    describe('Initial Entries', function() {

        //checking if there is at least one entry in the feeds container
        //first we need to use beforeEach and done() because the loadFeed is asynchronous function:

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('there is at least an entry in feeds', function() {

            //checking if there is at least one entry

            expect($('.feed .entry').length).toBeGreaterThan(0);

        });

    });

    describe('New Feed Selection', function() {
        var firstContent;
        var secondContent;

        //cheking if the content changes after call load feed function
        //first Call:
        beforeEach(function(done) {
            loadFeed(0, function(){
                        //storing the content
        firstContent = $('.entry').text();
        done();

            });
        });

        //Second Call:
        beforeEach(function(done) {
            loadFeed(1, function(){
                        //storing the content
        secondContent = $('.entry').text();
        done();

            });
        });




        it('the content actually changes', function(done) {

            //comparing the old and the new content

            expect(firstContent).not.toEqual(secondContent);

            done();

        });

    });
}());