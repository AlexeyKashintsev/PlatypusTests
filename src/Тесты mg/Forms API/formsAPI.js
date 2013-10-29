/**
 * 
 * @author mg
 * @name FormsAPI
 */

function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
    return true;//confirm('Really close the form?');
}//GEN-LAST:event_formWindowClosing

function jToggleButtonActionPerformed(evt) {//GEN-FIRST:event_jToggleButtonActionPerformed
    Logger.info("jToggleButtonActionPerformed");
}//GEN-LAST:event_jToggleButtonActionPerformed

function jRadioButtonActionPerformed(evt) {//GEN-FIRST:event_jRadioButtonActionPerformed
    Logger.info("jRadioButtonActionPerformed");
}//GEN-LAST:event_jRadioButtonActionPerformed

function jRadioButton1ActionPerformed(evt) {//GEN-FIRST:event_jRadioButton1ActionPerformed
    Logger.info("jRadioButton1ActionPerformed");
}//GEN-LAST:event_jRadioButton1ActionPerformed


var form = this;

params.md.Param1.pk = true;
params.Param3 = 'fffff';

var s = new Style();
s.background = Color.gray;
s.foreground = Color.green;

var s1 = new Style();
s1.background = Color.green;
s1.foreground = Color.gray;

function dbComboSelectValue(aEditor) {//GEN-FIRST:event_dbComboSelectValue
    var t = 90;
    t--;
    t--;
}//GEN-LAST:event_dbComboSelectValue

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
    var selTest = new GridComboSelectionTest();
    selTest.show();
    var font = new Font("Arial", FontStyle.ITALIC, 40);
    alert(jButton1.font);
    jButton1.font = font;
    var lbl = new Label("Some text");
    lbl.icon = Icons.load("address-book.png");
    var container = new GridPane(10, 15, 12, 35);
    container.clear();
    alert(lbl);
}//GEN-LAST:event_jButton1ActionPerformed

function formWindowRestored(evt) {//GEN-FIRST:event_formWindowRestored
    Logger.info("formWindowRestored");
}//GEN-LAST:event_formWindowRestored

function formWindowMaximized(evt) {//GEN-FIRST:event_formWindowMaximized
    Logger.info("formWindowMaximized");
}//GEN-LAST:event_formWindowMaximized

function rowsetRequeried() {//GEN-FIRST:event_rowsetRequeried
    Logger.info("unitsRequeried");
}//GEN-LAST:event_rowsetRequeried

function btnAddNewActionPerformed(evt) {//GEN-FIRST:event_btnAddNewActionPerformed

    Logger.info(jMenuBar.parent + " ; "+ view.count);

    var mc = new ModelCombo();
    mc.onSelect = function(aEditor){
        aEditor.value = dsUnits[3].ID;
    };
    mc.onRender = function(evt){
        evt.cell.display = evt.object.NAME;
        evt.cell.style = s;
        return true;
    };
    mc.field = md.Param2;
    mc.valueField = dsUnits.md.ID;
    mc.displayField = dsUnits.md.NAME;
    mc.list = true;// same as default
    mc.userProp = "Sample user property";
    tlbTest.add(mc);
    var _mc = tlbTest.child(tlbTest.count-1);
    /*
    var form1 = new Form("formsAPI1");
    form1.showInternalFrame(jDesktopPane);
    
    var form2 = new Form("formsAPI2");
    form1.showInternalFrame(jDesktopPane);
    var form3 = new Form("formsAPI3");
    form1.showInternalFrame(jDesktopPane);
    */
   
    jDesktopPane.forms.forEach(function(aForm){
        Logger.info(aForm.title);
    });
    
    alert(mc.userProp);
    
    var btn = new Button("Just added", Icons.load("drill.png"));
    btn.onActionPerformed = function(evt){
        alert(evt, title);
        evt.source.parent.remove(btn);
    }; 
    tlbTest.add(btn);
}//GEN-LAST:event_btnAddNewActionPerformed

function dbCheckFocusGained(evt) {//GEN-FIRST:event_dbCheckFocusGained
    Logger.info(evt+" gained");
}//GEN-LAST:event_dbCheckFocusGained

function dbCheckFocusLost(evt) {//GEN-FIRST:event_dbCheckFocusLost
    Logger.info(evt+" lost");
}//GEN-LAST:event_dbCheckFocusLost

function tlbTestComponentRemoved(evt) {//GEN-FIRST:event_tlbTestComponentRemoved
    Logger.info(evt+" "+evt.child+" removed");
}//GEN-LAST:event_tlbTestComponentRemoved

function dbImageSelectValue(aEditor) {//GEN-FIRST:event_dbImageSelectValue
    aEditor.value = model.loadBlobFromFile("c:\\Рисунок1.png");
}//GEN-LAST:event_dbImageSelectValue

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
//close();    
}//GEN-LAST:event_formWindowOpened

function formWindowClosed(evt) {//GEN-FIRST:event_formWindowClosed
    Logger.info("FormsAPI closed");
}//GEN-LAST:event_formWindowClosed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
    jToggleButton.selected = !jToggleButton.selected;
}//GEN-LAST:event_buttonActionPerformed

function jDropDownButtonActionPerformed(evt) {//GEN-FIRST:event_jDropDownButtonActionPerformed
    Logger.info("jDropDownButton.font: "+jDropDownButton.font);
    jDropDownButton.font = new Font("Courier", FontStyle.NORMAL, jDropDownButton.font.size + 1);
}//GEN-LAST:event_jDropDownButtonActionPerformed

function btnCursorActionPerformed(evt) {//GEN-FIRST:event_btnCursorActionPerformed
    if(btnCursor.cursor != Cursor.MOVE)
        btnCursor.cursor = Cursor.MOVE;
    else
        btnCursor.cursor = null;
}//GEN-LAST:event_btnCursorActionPerformed

function btnMakeVisibleActionPerformed(evt) {//GEN-FIRST:event_btnMakeVisibleActionPerformed
    alert(dbGrid.makeVisible(dsUnits[dsUnits.length-1]));
}//GEN-LAST:event_btnMakeVisibleActionPerformed

function btnFindSomethingActionPerformed(evt) {//GEN-FIRST:event_btnFindSomethingActionPerformed
    dbGrid.find();
}//GEN-LAST:event_btnFindSomethingActionPerformed

function btnSelectionActionPerformed(evt) {//GEN-FIRST:event_btnSelectionActionPerformed
    alert(dbGrid.selected);
}//GEN-LAST:event_btnSelectionActionPerformed

function btnDeletableActionPerformed(evt) {//GEN-FIRST:event_btnDeletableActionPerformed
    dbGrid.deletable = btnDeletable.selected;
    jLabel2.icon = Icon.load("car.png");
    jButton4.icon = Icon.load("car.png");
    jMenuItem2.icon = Icon.load("car.png");
}//GEN-LAST:event_btnDeletableActionPerformed

function btnInsertableActionPerformed(evt) {//GEN-FIRST:event_btnInsertableActionPerformed
    dbGrid.insertable = btnInsertable.selected;
}//GEN-LAST:event_btnInsertableActionPerformed

function tabsStateChanged(evt) {//GEN-FIRST:event_tabsStateChanged
    Logger.info(evt.source.count);
}//GEN-LAST:event_tabsStateChanged

function dbCheckOnSelect(aEditor) {//GEN-FIRST:event_dbCheckOnSelect
    aEditor.value = !aEditor.value;
}//GEN-LAST:event_dbCheckOnSelect

var selector = new fakeSelector();

function param1OnSelect(aEditor) {//GEN-FIRST:event_param1OnSelect
    selector.showModal(function(aValue){
        aEditor.value = aValue;
    });
}//GEN-LAST:event_param1OnSelect

function param2OnSelect(aEditor) {//GEN-FIRST:event_param2OnSelect
    var value = ++aEditor.value;
}//GEN-LAST:event_param2OnSelect

function param4OnSelect(aEditor) {//GEN-FIRST:event_param4OnSelect
    var value = aEditor.value = new Date();
}//GEN-LAST:event_param4OnSelect

function param6OnSelect(aEditor) {//GEN-FIRST:event_param6OnSelect
    var value = aEditor.value;
}//GEN-LAST:event_param6OnSelect

function param7OnSelect(aEditor) {//GEN-FIRST:event_param7OnSelect
    var value = aEditor.value;
}//GEN-LAST:event_param7OnSelect

function columnOnSelect(aEditor) {//GEN-FIRST:event_columnOnSelect
    var value = aEditor.value;
}//GEN-LAST:event_columnOnSelect

function btnSetClearBottomActionPerformed(evt) {//GEN-FIRST:event_btnSetClearBottomActionPerformed
    /*
    if(pnlBorder.rightComponent != null)
        pnlBorder.rightComponent.parent.remove(pnlBorder.rightComponent);
    else
        pnlBorder.add(new Button("Bottom Label"), HorizontalPosition.RIGHT, 50);
    */
    //pnlBorder.rightComponent = new Label("Bottom Label");
    
    if(pnlBorder.rightComponent != null)
        pnlBorder.rightComponent = null;
    else
        pnlBorder.rightComponent = new Label("Bottom Label");
        
}//GEN-LAST:event_btnSetClearBottomActionPerformed

function btnSetClearCenterActionPerformed(evt) {//GEN-FIRST:event_btnSetClearCenterActionPerformed
    if(pnlBorder.centerComponent != null)
        pnlBorder.centerComponent.parent.remove(pnlBorder.centerComponent);
    else
        pnlBorder.add(btnSetClearBottom, HorizontalPosition.CENTER);
//pnlBorder.centerComponent = btnSetClearBottom;
}//GEN-LAST:event_btnSetClearCenterActionPerformed

var btnNewFlowButton = new Button("suicide Button", null, function(evt){
    evt.source.parent.remove(evt.source);     
});

function btnAdd2FlowActionPerformed(evt) {//GEN-FIRST:event_btnAdd2FlowActionPerformed
    if(btnNewFlowButton.parent != null)
        btnNewFlowButton.parent.remove(btnNewFlowButton);
    else
        pnlFlow.add(btnNewFlowButton);
}//GEN-LAST:event_btnAdd2FlowActionPerformed

function btnAddNewTabActionPerformed(evt) {//GEN-FIRST:event_btnAddNewTabActionPerformed
    var anchors = new AnchorsPane();
    tabs.add(anchors, "new Tab");
    anchors.add(new Button("Click to kill the tab!", null, function(evt){
        anchors.parent.remove(anchors);
    }
    )
    , {
        "left":20, 
        "top":10, 
        "width":115, 
        "height":20
    }
    );
    anchors.add(new Button("suicide Button", null, function(evt){
        evt.source.parent.remove(evt.source);     
    }
    )
    , {
        "left":20, 
        "top":35, 
        "width":115, 
        "height":20
    }
    );
    anchors.add(new Button("clear Button", null, function(evt){
        evt.source.parent.clear();     
    }
    )
    , {
        "left":20, 
        "top":60, 
        "width":115, 
        "height":20
    }
    );
    
}//GEN-LAST:event_btnAddNewTabActionPerformed

function btnAddRemove2GridActionPerformed(evt) {//GEN-FIRST:event_btnAddRemove2GridActionPerformed
    pnlGrid.add(new Button("suicide Button", null, function(evt){
        evt.source.parent.remove(evt.source);     
    }
    ));
}//GEN-LAST:event_btnAddRemove2GridActionPerformed

function btnAdd2BoxActionPerformed(evt) {//GEN-FIRST:event_btnAdd2BoxActionPerformed
    pnlBox.add(new Button("suicide Button", null, function(evt){
        evt.source.parent.remove(evt.source);     
    }
    ));
}//GEN-LAST:event_btnAdd2BoxActionPerformed

var _txtCard1 = txtCard1;

function btnNextCardActionPerformed(evt) {//GEN-FIRST:event_btnNextCardActionPerformed
    if(_txtCard1.visible)
        pnlCards.show("card2");
    else if(btnCard2.visible)
        pnlCards.show("card3");
    else
        pnlCards.show("card1");
}//GEN-LAST:event_btnNextCardActionPerformed

function btnAddRemoveCardActionPerformed(evt) {//GEN-FIRST:event_btnAddRemoveCardActionPerformed
    if(_txtCard1.parent != null){
        _txtCard1.parent.remove(_txtCard1);
        _txtCard1 = new TextField("sample text");
    }else
        pnlCards.add(_txtCard1, "card1");
}//GEN-LAST:event_btnAddRemoveCardActionPerformed

function btnAdd2AbsoltueActionPerformed(evt) {//GEN-FIRST:event_btnAdd2AbsoltueActionPerformed
    var btn = new Button("suicide Button", null, function(evt){
        evt.source.parent.remove(evt.source);     
    }
    );
    pnlAbsolute.add(btn, {
        "left":20, 
        "top":45
    });//, "width":115, "height":20});
}//GEN-LAST:event_btnAdd2AbsoltueActionPerformed

function btnSizeDebugActionPerformed(evt) {//GEN-FIRST:event_btnSizeDebugActionPerformed
    //button3.width += 20;
    //jEditorPane.height += 25;
    Form.onChange = function(evt){
        Logger.info(Form.shown);
    }
    panel.height += 20;
}//GEN-LAST:event_btnSizeDebugActionPerformed

function formWindowMinimized(evt) {//GEN-FIRST:event_formWindowMinimized
    Logger.info("formWindowMinimized");
}//GEN-LAST:event_formWindowMinimized

function colFirstOnRender(evt) {//GEN-FIRST:event_colFirstOnRender
    var t = 90;
    t--;
    t--;
}//GEN-LAST:event_colFirstOnRender

function colFirstOnSelect(aEditor) {//GEN-FIRST:event_colFirstOnSelect
    aEditor.value += " selected";
}//GEN-LAST:event_colFirstOnSelect

function dbCheckOnRender(evt) {//GEN-FIRST:event_dbCheckOnRender
    Logger.info(evt.cell.style);
    evt.cell.display = ''+evt.object.Param1;
    if(dbCheck.value)
        evt.cell.style = s;
    else
        evt.cell.style = s1;
    //evt.cell.style = dbCheck.value ? s : s1;
    return true;
}//GEN-LAST:event_dbCheckOnRender

function onChanged(evt) {//GEN-FIRST:event_onChanged
    Logger.info("paramsOnChanged. field: "+evt.field+"; oldValue: "+evt.oldValue+"; newValue: "+evt.newValue+"; source: "+evt.source);
}//GEN-LAST:event_onChanged

function btnExpandActionPerformed(evt) {//GEN-FIRST:event_btnExpandActionPerformed
    pnlFlow.top += 20;
    var g = 0;
}//GEN-LAST:event_btnExpandActionPerformed

function btnCollapseActionPerformed(evt) {//GEN-FIRST:event_btnCollapseActionPerformed
    pnlFlow.top -= 20;
    var g1 = 0;
}//GEN-LAST:event_btnCollapseActionPerformed

function btnSetClearLeftActionPerformed(evt) {//GEN-FIRST:event_btnSetClearLeftActionPerformed
    if(split.firstComponent != null)
        split.firstComponent = null;
    else
        split.firstComponent = new Button("Left split suicide button", null, function(evt){
            evt.source.parent.remove(evt.source);
        });
}//GEN-LAST:event_btnSetClearLeftActionPerformed

function btnRotateSplitActionPerformed(evt) {//GEN-FIRST:event_btnRotateSplitActionPerformed
    if(split.orientation == Orientation.HORIZONTAL)
        split.orientation = Orientation.VERTICAL;
    else
        split.orientation = Orientation.HORIZONTAL;
}//GEN-LAST:event_btnRotateSplitActionPerformed

function btnAddToBoxActionPerformed(evt) {//GEN-FIRST:event_btnAddToBoxActionPerformed
    var btn = new Button("suicide button", null, function(evt){
        evt.source.parent.remove(evt.source);
    })
    pnlScrollableBox.add(btn);
    var txt = new TextField("Sample text");
    pnlScrollableBox.add(txt);
}//GEN-LAST:event_btnAddToBoxActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
    evt.source.parent.remove(evt.source);
}//GEN-LAST:event_button3ActionPerformed

function btnClearBoxActionPerformed(evt) {//GEN-FIRST:event_btnClearBoxActionPerformed
    pnlScrollableBox.clear();
}//GEN-LAST:event_btnClearBoxActionPerformed

function btnLaunchBoxTestActionPerformed(evt) {//GEN-FIRST:event_btnLaunchBoxTestActionPerformed
    var bt = new BoxTest();
    bt.show();
}//GEN-LAST:event_btnLaunchBoxTestActionPerformed

function btnLaunchLabelTestActionPerformed(evt) {//GEN-FIRST:event_btnLaunchLabelTestActionPerformed
    var lt = new LabelTest();
    lt.show();
}//GEN-LAST:event_btnLaunchLabelTestActionPerformed

function mnuFillFileMenuActionPerformed(evt) {//GEN-FIRST:event_mnuFillFileMenuActionPerformed
    var menu = menuBar.children[0];
    var subMenu = new Menu("new sub-Menu");
    menu.add(new CheckMenuItem("new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu.add(new RadioMenuItem("new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu.add(subMenu);
    subMenu.add(new CheckMenuItem("sub- new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    subMenu.add(new RadioMenuItem("sub- new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));        
    
    var menu1 = new Menu("1 new Menu");    
    var subMenu1 = new Menu("1 new sub-Menu");
    var menuBar1 = new MenuBar();
    menuBar1.add(menu1);
    menu1.add(new CheckMenuItem("1 new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu1.add(new RadioMenuItem("1 new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu1.add(subMenu1);
    subMenu1.add(new CheckMenuItem("1 sub- new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    subMenu1.add(new RadioMenuItem("1 sub- new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));        
    view.add(menuBar1, {
        "left" : menuBar.left+200, 
        "top":menuBar.top, 
        "width":300, 
        "height":25
    });    
}//GEN-LAST:event_mnuFillFileMenuActionPerformed

function mnuFillPopupMenuActionPerformed(evt) {//GEN-FIRST:event_mnuFillPopupMenuActionPerformed
    var menu = new Menu("new Menu");    
    var subMenu = new Menu("new sub-Menu");
    jPopupMenu.add(menu);
    menu.add(new CheckMenuItem("new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu.add(new RadioMenuItem("new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu.add(subMenu);
    subMenu.add(new CheckMenuItem("sub- new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    subMenu.add(new RadioMenuItem("sub- new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));        
    
    var menu1 = new Menu("1 new Menu");    
    var subMenu1 = new Menu("1 new sub-Menu");
    var popup = new PopupMenu();     
    popup.add(menu1);
    menu1.add(new CheckMenuItem("1 new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu1.add(new RadioMenuItem("1 new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));
    menu1.add(subMenu1);
    subMenu1.add(new CheckMenuItem("1 sub- new check item", true, function(evt){
        alert(evt.source.text + " invoked")
    }));
    subMenu1.add(new RadioMenuItem("1 sub- new radio item", false, function(evt){
        alert(evt.source.text + " invoked")
    }));        
    button.componentPopupMenu = popup;
}//GEN-LAST:event_mnuFillPopupMenuActionPerformed

function btnStyleTestActionPerformed(evt) {//GEN-FIRST:event_btnStyleTestActionPerformed
    var st = new SimpleStyleTest();
    st.show();
}//GEN-LAST:event_btnStyleTestActionPerformed

function btnChartTestActionPerformed(evt) {//GEN-FIRST:event_btnChartTestActionPerformed
    var ct = new ChartTest();
    ct.show();
}//GEN-LAST:event_btnChartTestActionPerformed

function btnUnitsRequeryActionPerformed(evt) {//GEN-FIRST:event_btnUnitsRequeryActionPerformed
    dsUnits.requery();
}//GEN-LAST:event_btnUnitsRequeryActionPerformed

function param11OnSelect(aEditor) {//GEN-FIRST:event_param11OnSelect
// TODO Добавьте свой код:
}//GEN-LAST:event_param11OnSelect

function param21OnSelect(aEditor) {//GEN-FIRST:event_param21OnSelect
// TODO Добавьте свой код:
}//GEN-LAST:event_param21OnSelect

function param41OnSelect(aEditor) {//GEN-FIRST:event_param41OnSelect
// TODO Добавьте свой код:
}//GEN-LAST:event_param41OnSelect

function param61OnSelect(aEditor) {//GEN-FIRST:event_param61OnSelect
// TODO Добавьте свой код:
}//GEN-LAST:event_param61OnSelect

function btnTextsTestActionPerformed(evt) {//GEN-FIRST:event_btnTextsTestActionPerformed
    require(["TextsTest"], function(){ 
        try {
            var tt = new TextsTest();
            tt.show();
        } catch(e) {
            alert(e);
        }
    });
}//GEN-LAST:event_btnTextsTestActionPerformed

function btnUploadTestActionPerformed(evt) {//GEN-FIRST:event_btnUploadTestActionPerformed
    require(["UploadTest"], function(){ 
        var ut = new UploadTest();
        ut.show();
    });
}//GEN-LAST:event_btnUploadTestActionPerformed

function btnLogoutActionPerformed(evt) {//GEN-FIRST:event_btnLogoutActionPerformed
    logout(function(){
        document.location.reload(true);
    });
}//GEN-LAST:event_btnLogoutActionPerformed

function btnTryToLeakActionPerformed(evt) {//GEN-FIRST:event_btnTryToLeakActionPerformed
    var lt = new LeaksTest();
    lt.start();
    lt = null;
}//GEN-LAST:event_btnTryToLeakActionPerformed

function jTextFieldKeyPressed(evt) {//GEN-FIRST:event_jTextFieldKeyPressed
    var isEnter = evt.key == VK_ENTER;
    Logger.info("isEnter: "+isEnter);
}//GEN-LAST:event_jTextFieldKeyPressed

function param7OnRender(evt) {//GEN-FIRST:event_param7OnRender
    evt.cell.style.align = HorizontalPosition.RIGHT;
    return true;
}//GEN-LAST:event_param7OnRender

function btnGridAddressesFindActionPerformed(evt) {//GEN-FIRST:event_btnGridAddressesFindActionPerformed
    grdAddresses.find();
}//GEN-LAST:event_btnGridAddressesFindActionPerformed


