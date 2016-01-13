(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var Sprite = cjs.Sprite;
var MovieClip = cjs.MovieClip;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Container = cjs.Container;
var Shape = cjs.Shape;

// library properties:




// symbols:



(lib.border_bmp = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new Sprite();



(lib.ButtonHilightBmp = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new Sprite();



(lib.coinEmpty = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new Sprite();



(lib.coinEmptyBitmapContainer = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new Sprite();



(lib.coinMessages = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new Sprite();



(lib.coinMessagesLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new Sprite();



(lib.coinMusic = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new Sprite();



(lib.coinMusicLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new Sprite();



(lib.coinPeople = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new Sprite();



(lib.coinPeopleLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new Sprite();



(lib.coinPhoto = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new Sprite();



(lib.coinPhotoLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new Sprite();



(lib.coinSettings = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new Sprite();



(lib.coinSettingsLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new Sprite();



(lib.coinWeather = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new Sprite();



(lib.coinWeatherLabel = function() {
	var spriteSheet;
	spriteSheet = this.spriteSheet = ss["mim_debug_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new Sprite();



(lib.SquareMC = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#00A9E0").s().p("Ap/J/IAAz+IT+AAIAAT+g");
	shape.setTransform(64,64);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,128,128);


(lib.itemBorder_mc = function() {
	var instance;
	this.initialize();

	// border bitmap
	instance = this.instance = new lib.border_bmp();
	instance.setTransform(-8,-8);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-8,-8,396,396);


(lib.EmptyMC = function() {
	this.initialize();

}).prototype = p = new Container();
p.nominalBounds = null;


(lib.BitmapContainerMC = function() {
	var instance;
	this.initialize();

	// bmp outline
	instance = this.instance = new lib.coinEmptyBitmapContainer();
	instance.setTransform(-1,-1);

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-1,-1,258,258);


(lib.ButtonHilight = function() {
	var instance;
	this.initialize();

	// bitmap
	instance = this.instance = new lib.ButtonHilightBmp();

	this.addChild(instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,200,64);


(lib.TouchListItemMC = function(mode,startPosition,loop) {
	var label;
	var instance_12;
	var instance_11;
	var instance_10;
	var instance_9;
	var instance_8;
	var instance_7;
	var instance_6;
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	var bitmap;
	var border;
	this.initialize(mode,startPosition,loop,{});

	// border
	border = this.border = new lib.itemBorder_mc();
	border.setTransform(199.6,196.4,1,1,0,0,0,190,190);

	this.timeline.addTween(Tween.get(border).wait(7));

	// bmp container
	bitmap = this.bitmap = new lib.BitmapContainerMC();
	bitmap.setTransform(200,200,1,1,0,0,0,128,128);
	bitmap._off = true;

	this.timeline.addTween(Tween.get(bitmap).wait(6).to({_off:false},0).wait(1));

	// new 400
	instance = this.instance = new lib.coinPhoto();

	instance_1 = this.instance_1 = new lib.coinMessages();

	instance_2 = this.instance_2 = new lib.coinWeather();

	instance_3 = this.instance_3 = new lib.coinMusic();

	instance_4 = this.instance_4 = new lib.coinPeople();

	instance_5 = this.instance_5 = new lib.coinSettings();

	instance_6 = this.instance_6 = new lib.coinEmpty();

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance}]}).to({state:[{t:instance_1}]},1).to({state:[{t:instance_2}]},1).to({state:[{t:instance_3}]},1).to({state:[{t:instance_4}]},1).to({state:[{t:instance_5}]},1).to({state:[{t:instance_6}]},1).wait(1));

	// labels 400
	instance_7 = this.instance_7 = new lib.coinPhotoLabel();
	instance_7.setTransform(0,405);

	instance_8 = this.instance_8 = new lib.coinMessagesLabel();
	instance_8.setTransform(0,405);

	instance_9 = this.instance_9 = new lib.coinWeatherLabel();
	instance_9.setTransform(0,405);

	instance_10 = this.instance_10 = new lib.coinMusicLabel();
	instance_10.setTransform(0,405);

	instance_11 = this.instance_11 = new lib.coinPeopleLabel();
	instance_11.setTransform(0,405);

	instance_12 = this.instance_12 = new lib.coinSettingsLabel();
	instance_12.setTransform(0,405);

	label = this.label = new cjs.Text("Label", "48px 'Helvetica'", "#00A9E0");
	label.name = "label";
	label.textAlign = "center";
	label.lineHeight = 50;
	label.lineWidth = 403;
	label.setTransform(201.5,400);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_7}]}).to({state:[{t:instance_8}]},1).to({state:[{t:instance_9}]},1).to({state:[{t:instance_10}]},1).to({state:[{t:instance_11}]},1).to({state:[{t:instance_12}]},1).to({state:[{t:label}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,-1.6,400,470.6);


(lib.CrewMemberButtonMC = function() {
	var hilight;
	var label;
	this.initialize();

	// buttons
	label = this.label = new cjs.Text("crew", "48px 'Helvetica'", "#00CCFF");
	label.name = "label";
	label.textAlign = "center";
	label.lineHeight = 50;
	label.lineWidth = 196;
	label.setTransform(98,0);

	// hilight
	hilight = this.hilight = new lib.ButtonHilight();
	hilight.setTransform(100,32,1,1,0,0,0,100,32);

	this.addChild(hilight,label);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,200,64);


(lib.CrewMembersMC = function() {
	var shape_1;
	var btn_1;
	var btn_2;
	var btn_3;
	var btn_4;
	var btn_5;
	var btn_6;
	var shape;
	this.initialize();

	// fg
	shape = this.shape = new Shape();
	shape.graphics.f().s("#0099FF").ss(3,1,1).p("EhaogE/MC1QAAAQDIAAAADIIAADvQAADIjIAAMi1QAAAQjHAAAAjIIAAjvQAAjIDHAAg");
	shape.setTransform(600,32);

	// buttons
	btn_6 = this.btn_6 = new lib.CrewMemberButtonMC();
	btn_6.setTransform(1100,32,1,1,0,0,0,100,32);

	btn_5 = this.btn_5 = new lib.CrewMemberButtonMC();
	btn_5.setTransform(900,32,1,1,0,0,0,100,32);

	btn_4 = this.btn_4 = new lib.CrewMemberButtonMC();
	btn_4.setTransform(700,32,1,1,0,0,0,100,32);

	btn_3 = this.btn_3 = new lib.CrewMemberButtonMC();
	btn_3.setTransform(500,32,1,1,0,0,0,100,32);

	btn_2 = this.btn_2 = new lib.CrewMemberButtonMC();
	btn_2.setTransform(300,32,1,1,0,0,0,100,32);

	btn_1 = this.btn_1 = new lib.CrewMemberButtonMC();
	btn_1.setTransform(100,32,1,1,0,0,0,100,32);

	// bg
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#333333").s().p("EhaoAE/QjHABAAjIIAAjvQAAjIDHAAMC1QAAAQDHAAAADIIAADvQAADIjHgBg");
	shape_1.setTransform(600,32);

	this.addChild(shape_1,btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-1.5,-1.5,1203,67);


// stage content:
(lib.mimdebug = function() {
	var item;
	var instance;
	this.initialize();

	// item
	instance = this.instance = new lib.CrewMembersMC();
	instance.setTransform(630.5,567,1,1,0,0,0,600,32.2);

	item = this.item = new lib.TouchListItemMC();

	this.addChild(item,instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(640,358.4,1232,601.9);

})(pixiflash_lib = pixiflash_lib||{}, pixiflash_images = pixiflash_images||{}, pixiflash = pixiflash||{}, ss = ss||{});
var pixiflash_lib, pixiflash_images, pixiflash, ss;