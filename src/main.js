import jibo from 'jibo';
import path from 'path';

let {Status, factory} = jibo.bt;

let GuiManager;

let root = null;
//let tree = null;

let blackboard = {};
let notepad = {};

function start() {
    root = factory.create('../behaviors/test-pizza', {
        blackboard: blackboard,
        notepad: notepad
    });
    root.start();
    window.requestAnimationFrame(update);
}

function update() {
    if (root.status !== Status.IN_PROGRESS) {
        console.log(`BehaviorTree Exited with status: ${root.status}`);
    } else {
        root.update();
        //GuiManager.update();
        window.requestAnimationFrame(update);
    }
}

//function onGuiManagerReady() {
//    console.log(`onGuiManagerReady`);
//}

function setup() {
    console.log('setup');

    require('./behaviors/debug-behavior');
    require('./behaviors/mim');
    require('./behaviors/mim-gui');
    let eyeElement = document.getElementById('eye');
    jibo.visualize.createRobotRenderer(eyeElement, jibo.visualize.DisplayType.EYE);

    let JiboEd = jibo.requireAssetPack(path.resolve(__dirname, '../node_modules/embodied-dialog/package.json'));
    let JiboLevers = jibo.requireAssetPack(path.resolve(__dirname, '../node_modules/jibo-levers/package.json'));

    start();
}

jibo.init(setup);

//jibo.init().then(() => {
//
//    setup();
//
//}).catch(e => {
//    console.error(e);
//});