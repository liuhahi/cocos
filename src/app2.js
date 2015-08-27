var INITIALIZE2 = false;

var HelloWorldLayer2 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var menuItem1 = new cc.MenuItemFont("Pop",pop);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);

        return true;
    }
});

var pop = function()
{
  INITIALIZE2 = false;
  cc.director.popScene();
}


var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(INITIALIZE2 == false)
        {
          INITIALIZE2 = true;

          var layer = new HelloWorldLayer2();
          this.addChild(layer);
        }
    }
});
