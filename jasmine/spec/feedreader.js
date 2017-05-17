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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //checking if all the urls in allFeeds are not empty

        it('URL is not empty and defined', function() {

            for (i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual('');

            }


        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        //checking if all the urls in allFeeds are not empty

        it('Name is not empty and defined', function() {


            for (i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual('');

            }

        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {




        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        //checking if the body has menu-hidden class that keeps it hidden

        it('the menu is hidden by default', function() {


            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        //checking if the menu changes visibility when you click it (open and close)
        it('changes visibility when the menu is clicked', function() {

            // opening the menu : the menu-hidden class has to be toggeled
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // closing the menu : the menu-hidden class has to be toggeled back
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(true);



        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        //checking if there is at least one entry in the feeds container
        //first we need to use beforeEach and done() because the loadFeed is asynchronous function:

        beforeEach(function(done) {
            loadFeed(0, function() {

                done();

            });

        });

        it('there is at least an entry in feeds', function(done) {

            //checking if there is at least one entry

            expect($('.entry').length).toBeGreaterThan(0);
            done();

        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        //cheking if the content changes after call load feed function
        //First saving the original content to compare it later whith the current after calling the function

        var originalContent = $('.entry').val();

        beforeEach(function(done) {
            loadFeed(0, function() {

                done();

            });

        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('the content actually changes', function(done) {

            //comparing the old and the new content

            expect(originalContent).not.toEqual($('.entry').val());
            done();

        });

    });
}());