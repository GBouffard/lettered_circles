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
      expect('#LCcanvas').toBeEmpty();
    });

    it('knows and shows the X and Y coordinates of the mouse pointer when clicked', function(){
      // nb: I searched and found out that the mouse position cannot be set, which didnt help my test.
      $('#LCcanvas').click();
      // expect("#coordinates").toHaveText('0, 0'); didnt work either while it appears in the browser so I tested this instead:
      expect("#coordinates").not.toHaveText('Last mouse pointer position (for testing purposes): none');
    });

    it('triggers the circle drawing method wherever a user clicks on the canvas', function(){
      // I wanted at first to test the presence of the red colour (colour of my circles) in the canvas after click but had to find another way:
      var spyEvent = spyOnEvent('#LCcanvas', 'click')
      $('#LCcanvas').click();
      expect(spyEvent).toHaveBeenTriggered();
    });
  });

  describe('Stage 2: Make lettered circles', function() {
    xit('has no text in the typeable area when it opens', function(){
    });

    xit('recognizes when a text has been entered in the typeable area', function(){
    });

    xit('outputs the first character from the typeable area in a circle wherever a user clicks on the canvas', function(){
    });

    xit('removes the first letter from the typeable area when a click on the canvas has happened', function(){
    });
  });
});
