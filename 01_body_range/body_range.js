/** modeless用の設定 */
document.getElementById("showTop").addEventListener("click", () => {
    showWindow("topDiv");
});

document.getElementById("closeTop").addEventListener("click", () => {
    closeWindow("topDiv");
});

function showWindow(divId) {
    document.getElementById(divId).style.visibility = "visible";
    console.log(`body offsetwidth:${document.body.offsetWidth}`);
    console.log(`body offsetHeight:${document.body.offsetHeight}`);
}

function closeWindow(divId) {
    document.getElementById(divId).style.visibility = "hidden";
}

/** ドラッグ＆ドロップで移動する設定*/
var elemId;             //ドラッグした要素のId
var elemOffsetX;        //ドラッグした要素のoffsetX
var elemOffsetY;        //ドラッグした要素のoffsetY

//"topDiv"にマウスダウン、マウスアップ時のEventLisnterを追加。
document.getElementById("topDiv").addEventListener("pointerdown", handlePointerDown);
//document.getElementById("topDiv").addEventListener("pointerup", handlePointerUp);

/**
 * マウス、もしくは、タッチで要素がアクティブになった時に、
 * - その座標の保存。
 * - ドラッグによる移動時のEventListnerを追加。×画面の上に表示されます。
 * - ドラッグしながらポインタが画面外移動時のEventListenerを追加。
 * 
 * @param {object} event コールバック関数は発生したイベントを説明するEventに基づくオブジェクト。
 */
function handlePointerDown(event) {
    getElemOffset(event);
//    document.getElementById(elemId).addEventListener("pointermove", dragWindow);
    document.body.addEventListener("pointerleave", showPointerPos);
}

/**
 * 要素のオフセット(offsetX、offsetY)、およびその要素のIdを保存。
 * 
 * @param {object} event コールバック関数は発生したイベントを説明するEventに基づくオブジェクト。
 */
function getElemOffset(event) {
    elemOffsetX = event.offsetX;
    elemOffsetY = event.offsetY;
    elemId = event.target.id;
}

/**
 * body外移動時にポインターの位置を表示。
 * 
 * @param {object} event コールバック関数は発生したイベントを説明するEventに基づくオブジェクト。
 */
function showPointerPos(event) {
    console.log(`pointer pageX:${event.pageX}`);
    console.log(`pointer pageY:${event.pageY}`);
}