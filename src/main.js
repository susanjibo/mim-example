import jibo from 'jibo';
import path from 'path';
import GuiManager from './mim/debug-gui-manager';
import MimManager from './mim/mim-manager';

let {Status, factory} = jibo.bt;


let root = null;
//let tree = null;

let blackboard = {};
let notepad = {};

function start() {
    root = factory.create('../behaviors/main', {
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
    console.log('Setup');

    require('./behaviors/debug-behavior');
    require('./behaviors/mim');
    require('./behaviors/mim-gui');
    let eyeElement = document.getElementById('eye');
    jibo.visualize.createRobotRenderer(eyeElement, jibo.visualize.DisplayType.EYE);

    let ui_div = document.getElementById('ui');
    GuiManager.init(ui_div);
    MimManager.init();
    MimManager.setGuiManager(GuiManager);

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