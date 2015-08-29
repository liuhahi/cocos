var BackgroundLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var size = cc.winSize;

        var centerPos = cc.p(size.width / 2, size.height / 2);
        var spriteBG = cc.Sprite.create(res.bg1);
        spriteBG.setPosition(centerPos);
        spriteBG.scaleX = 0.7;
        spriteBG.scaleY = 0.7;
        this.addChild(spriteBG);
    }
});
