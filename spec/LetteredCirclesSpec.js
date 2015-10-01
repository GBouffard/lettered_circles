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

    xit('knows and shows the X and Y coordinates of the mouse pointer when clicked', function(){
    });

    xit('triggers the circle drawing method wherever a user clicks on the canvas', function(){
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
