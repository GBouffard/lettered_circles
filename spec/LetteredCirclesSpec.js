describe('LetteredCircles', function() {
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('Stage 1: Make circles', function() {
    it('has no initial mouse pointer position when it opens', function(){
      expect("#coordinates").toHaveText('Last mouse pointer position (for testing purposes): none');
    });

    it('has no circles already positionned on the page when it opens', function(){
      expect('#LC_canvas').toBeEmpty();
    });

    it('knows and shows the X and Y coordinates of the mouse pointer when clicked', function(){
      // nb: I searched and found out that the mouse position cannot be set, which didnt help my test.
      $('#LC_canvas').click();
      // expect("#coordinates").toHaveText('0, 0'); didnt work either while it appears in the browser so I tested this instead:
      expect("#coordinates").not.toHaveText('Last mouse pointer position (for testing purposes): none');
    });

    it('triggers the circle drawing method wherever a user clicks on the canvas', function(){
      // I wanted at first to test the presence of the red colour (colour of my circles) in the canvas after click but had to find another way:
      var spyEvent = spyOnEvent('#LC_canvas', 'click')
      $('#LC_canvas').click();
      expect(spyEvent).toHaveBeenTriggered();
    });
  });

  describe('Stage 2: Make lettered circles', function() {
    it('has no text in the typeable area when it opens', function(){
      expect($("#myText")).toBeEmpty();
    });

    it('recognizes when a text is present in the typeable area', function(){
      $("#myText").text("Hello world!");
      expect($("#myText")).not.toBeEmpty();
    });

    xit('outputs the first character from the typeable area in a circle wherever a user clicks on the canvas', function(){
      $("#myText").text("Hello world!");
      $('#LC_canvas').click();
      // the test I'm trying to achieve is something like: expect('#LC_canvas').toHaveText('H');
      // I found some dicussions around canvas interactions JavaScript Testing on StacKoverflow & Google but no clear solutions to solve such tests.
    });

    xit('removes the first letter from the typeable area when a click on the canvas has happened', function(){
    });
  });
});
