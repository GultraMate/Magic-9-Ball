gdjs._57_32BallCode = {};
gdjs._57_32BallCode.localVariables = [];
gdjs._57_32BallCode.idToCallbackMap = new Map();
gdjs._57_32BallCode.GD_95959_9595BallObjects1= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects2= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects3= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects4= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects5= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects6= [];
gdjs._57_32BallCode.GD_95959_9595BallObjects7= [];
gdjs._57_32BallCode.GDRollButtonObjects1= [];
gdjs._57_32BallCode.GDRollButtonObjects2= [];
gdjs._57_32BallCode.GDRollButtonObjects3= [];
gdjs._57_32BallCode.GDRollButtonObjects4= [];
gdjs._57_32BallCode.GDRollButtonObjects5= [];
gdjs._57_32BallCode.GDRollButtonObjects6= [];
gdjs._57_32BallCode.GDRollButtonObjects7= [];
gdjs._57_32BallCode.GDanswerObjects1= [];
gdjs._57_32BallCode.GDanswerObjects2= [];
gdjs._57_32BallCode.GDanswerObjects3= [];
gdjs._57_32BallCode.GDanswerObjects4= [];
gdjs._57_32BallCode.GDanswerObjects5= [];
gdjs._57_32BallCode.GDanswerObjects6= [];
gdjs._57_32BallCode.GDanswerObjects7= [];


gdjs._57_32BallCode.asyncCallback12182388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_9_Ball"), gdjs._57_32BallCode.GD_95959_9595BallObjects4);

{for(var i = 0, len = gdjs._57_32BallCode.GD_95959_9595BallObjects4.length ;i < len;++i) {
    gdjs._57_32BallCode.GD_95959_9595BallObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 1, 1, 7, 0.1, true, null);
}
}
{for(var i = 0, len = gdjs._57_32BallCode.GD_95959_9595BallObjects4.length ;i < len;++i) {
    gdjs._57_32BallCode.GD_95959_9595BallObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking(null);
}
}
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12182388, gdjs._57_32BallCode.asyncCallback12182388);
gdjs._57_32BallCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GD_95959_9595BallObjects3) asyncObjectsList.addObject("_9_Ball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12182388(runtimeScene, asyncObjectsList)), 12182388, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12181628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_9_Ball"), gdjs._57_32BallCode.GD_95959_9595BallObjects3);

{for(var i = 0, len = gdjs._57_32BallCode.GD_95959_9595BallObjects3.length ;i < len;++i) {
    gdjs._57_32BallCode.GD_95959_9595BallObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 2, 2, 7, 0.1, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12181628, gdjs._57_32BallCode.asyncCallback12181628);
gdjs._57_32BallCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GD_95959_9595BallObjects2) asyncObjectsList.addObject("_9_Ball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12181628(runtimeScene, asyncObjectsList)), 12181628, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12181972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_9_Ball"), gdjs._57_32BallCode.GD_95959_9595BallObjects2);

{for(var i = 0, len = gdjs._57_32BallCode.GD_95959_9595BallObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GD_95959_9595BallObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 3, 3, 7, 0.1, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12181972, gdjs._57_32BallCode.asyncCallback12181972);
gdjs._57_32BallCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GD_95959_9595BallObjects1) asyncObjectsList.addObject("_9_Ball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12181972(runtimeScene, asyncObjectsList)), 12181972, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12185124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects4);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects4.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 1, 1, 7, 0.1, true, null);
}
}
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects4.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects4[i].getBehavior("ShakeObject_PositionAngle").StopShaking(null);
}
}
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12185124, gdjs._57_32BallCode.asyncCallback12185124);
gdjs._57_32BallCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects3) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12185124(runtimeScene, asyncObjectsList)), 12185124, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12184596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects3);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 2, 2, 7, 0.1, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12184596, gdjs._57_32BallCode.asyncCallback12184596);
gdjs._57_32BallCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12184596(runtimeScene, asyncObjectsList)), 12184596, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12184268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 3, 3, 7, 0.1, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12184268, gdjs._57_32BallCode.asyncCallback12184268);
gdjs._57_32BallCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12184268(runtimeScene, asyncObjectsList)), 12184268, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12189012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12189012, gdjs._57_32BallCode.asyncCallback12189012);
gdjs._57_32BallCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12189012(runtimeScene, asyncObjectsList)), 12189012, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12188068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects6);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects6.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects6[i].getBehavior("Text").setText("Ok fine.");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12188068, gdjs._57_32BallCode.asyncCallback12188068);
gdjs._57_32BallCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects5) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12188068(runtimeScene, asyncObjectsList)), 12188068, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12188140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects5);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects5.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects5[i].getBehavior("Text").setText("You're testing my patience!");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12188140, gdjs._57_32BallCode.asyncCallback12188140);
gdjs._57_32BallCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects4) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12188140(runtimeScene, asyncObjectsList)), 12188140, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12187500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects4);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects4.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects4[i].getBehavior("Text").setText("There's a chance.");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12187500, gdjs._57_32BallCode.asyncCallback12187500);
gdjs._57_32BallCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects3) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12187500(runtimeScene, asyncObjectsList)), 12187500, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12187428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects3);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects3[i].getBehavior("Text").setText("Ok maybe.");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12187428, gdjs._57_32BallCode.asyncCallback12187428);
gdjs._57_32BallCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12187428(runtimeScene, asyncObjectsList)), 12187428, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12185724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);

{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Nope.");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12185724, gdjs._57_32BallCode.asyncCallback12185724);
gdjs._57_32BallCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
for (const obj of gdjs._57_32BallCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12185724(runtimeScene, asyncObjectsList)), 12185724, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.asyncCallback12189828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 12));
}
gdjs._57_32BallCode.localVariables.length = 0;
}
gdjs._57_32BallCode.idToCallbackMap.set(12189828, gdjs._57_32BallCode.asyncCallback12189828);
gdjs._57_32BallCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._57_32BallCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.2), (runtimeScene) => (gdjs._57_32BallCode.asyncCallback12189828(runtimeScene, asyncObjectsList)), 12189828, asyncObjectsList);
}
}

}


};gdjs._57_32BallCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Such rubbish. No!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Absalutley not.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Why would you even suggest such a thing?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("That's gonna be a no.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("All signs point to: heck no.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Plain no.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Here, lean in. I'll tell you a secret: NO.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Keine Chance. (Not a chance in German.)");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Mr. Holschuh told me to tell you that I am going to tell you no.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("I'd rather eat a gym sock than tell you yes.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 11);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Don't count on it.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 12);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Undoutably not.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 13);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("My sources say no.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 14);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects2);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects2[i].getBehavior("Text").setText("Outlook is not so good.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects1);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects1[i].getBehavior("Text").setText("Very doubtful.");
}
}
}

}


};gdjs._57_32BallCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RollButton"), gdjs._57_32BallCode.GDRollButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57_32BallCode.GDRollButtonObjects1.length;i<l;++i) {
    if ( gdjs._57_32BallCode.GDRollButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._57_32BallCode.GDRollButtonObjects1[k] = gdjs._57_32BallCode.GDRollButtonObjects1[i];
        ++k;
    }
}
gdjs._57_32BallCode.GDRollButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_9_Ball"), gdjs._57_32BallCode.GD_95959_9595BallObjects1);
{for(var i = 0, len = gdjs._57_32BallCode.GD_95959_9595BallObjects1.length ;i < len;++i) {
    gdjs._57_32BallCode.GD_95959_9595BallObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 7, 7, 7, 0.05, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RollButton"), gdjs._57_32BallCode.GDRollButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57_32BallCode.GDRollButtonObjects1.length;i<l;++i) {
    if ( gdjs._57_32BallCode.GDRollButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._57_32BallCode.GDRollButtonObjects1[k] = gdjs._57_32BallCode.GDRollButtonObjects1[i];
        ++k;
    }
}
gdjs._57_32BallCode.GDRollButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects1);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(5, 7, 7, 7, 0.05, true, null);
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RollButton"), gdjs._57_32BallCode.GDRollButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57_32BallCode.GDRollButtonObjects1.length;i<l;++i) {
    if ( gdjs._57_32BallCode.GDRollButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._57_32BallCode.GDRollButtonObjects1[k] = gdjs._57_32BallCode.GDRollButtonObjects1[i];
        ++k;
    }
}
gdjs._57_32BallCode.GDRollButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs._57_32BallCode.GDanswerObjects1);
{for(var i = 0, len = gdjs._57_32BallCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs._57_32BallCode.GDanswerObjects1[i].getBehavior("Text").setText("I'm not gonna do it.");
}
}

{ //Subevents
gdjs._57_32BallCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RollButton"), gdjs._57_32BallCode.GDRollButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._57_32BallCode.GDRollButtonObjects1.length;i<l;++i) {
    if ( gdjs._57_32BallCode.GDRollButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._57_32BallCode.GDRollButtonObjects1[k] = gdjs._57_32BallCode.GDRollButtonObjects1[i];
        ++k;
    }
}
gdjs._57_32BallCode.GDRollButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(999);
}

{ //Subevents
gdjs._57_32BallCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 999);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._57_32BallCode.eventsList13(runtimeScene);} //End of subevents
}

}


};

gdjs._57_32BallCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._57_32BallCode.GD_95959_9595BallObjects1.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects2.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects3.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects4.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects5.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects6.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects7.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects1.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects2.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects3.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects4.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects5.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects6.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects7.length = 0;
gdjs._57_32BallCode.GDanswerObjects1.length = 0;
gdjs._57_32BallCode.GDanswerObjects2.length = 0;
gdjs._57_32BallCode.GDanswerObjects3.length = 0;
gdjs._57_32BallCode.GDanswerObjects4.length = 0;
gdjs._57_32BallCode.GDanswerObjects5.length = 0;
gdjs._57_32BallCode.GDanswerObjects6.length = 0;
gdjs._57_32BallCode.GDanswerObjects7.length = 0;

gdjs._57_32BallCode.eventsList14(runtimeScene);
gdjs._57_32BallCode.GD_95959_9595BallObjects1.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects2.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects3.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects4.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects5.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects6.length = 0;
gdjs._57_32BallCode.GD_95959_9595BallObjects7.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects1.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects2.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects3.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects4.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects5.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects6.length = 0;
gdjs._57_32BallCode.GDRollButtonObjects7.length = 0;
gdjs._57_32BallCode.GDanswerObjects1.length = 0;
gdjs._57_32BallCode.GDanswerObjects2.length = 0;
gdjs._57_32BallCode.GDanswerObjects3.length = 0;
gdjs._57_32BallCode.GDanswerObjects4.length = 0;
gdjs._57_32BallCode.GDanswerObjects5.length = 0;
gdjs._57_32BallCode.GDanswerObjects6.length = 0;
gdjs._57_32BallCode.GDanswerObjects7.length = 0;


return;

}

gdjs['_57_32BallCode'] = gdjs._57_32BallCode;
