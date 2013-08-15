/**
 *
 * @name GridComboSelectionTest
 * @author mg
 */

function AMOUNTSelectValue(aEditor) {//GEN-FIRST:event_AMOUNTSelectValue
    var amountSelector = new AmountSelector();
    amountSelector.showModal(function(aValue){
        aEditor.value = aValue;
    });
}//GEN-LAST:event_AMOUNTSelectValue

function dbCombo1SelectValue(aEditor) {//GEN-FIRST:event_dbCombo1SelectValue
    var amountSelector = new AmountSelector();
    amountSelector.showModal(function(aValue){
        aEditor.value = aValue;
    });
}//GEN-LAST:event_dbCombo1SelectValue

var toSelect = 0;

function btnSelectActionPerformed(evt) {//GEN-FIRST:event_btnSelectActionPerformed
    dbGrid1.select(orders[toSelect++]);
}//GEN-LAST:event_btnSelectActionPerformed

function btnUnselectActionPerformed(evt) {//GEN-FIRST:event_btnUnselectActionPerformed
    dbGrid1.unselect(orders[--toSelect]);
}//GEN-LAST:event_btnUnselectActionPerformed

function btnClearSelectionActionPerformed(evt) {//GEN-FIRST:event_btnClearSelectionActionPerformed
    dbGrid1.clearSelection();
    toSelect = 0;
}//GEN-LAST:event_btnClearSelectionActionPerformed

function btnShowComboValueActionPerformed(evt) {//GEN-FIRST:event_btnShowComboValueActionPerformed
    alert(dbCombo1.value, title);
}//GEN-LAST:event_btnShowComboValueActionPerformed

function btnSetFormTitleActionPerformed(evt) {//GEN-FIRST:event_btnSetFormTitleActionPerformed
    title = "Some title for the form.";
}//GEN-LAST:event_btnSetFormTitleActionPerformed

function dbCombo1OnRender(evt) {//GEN-FIRST:event_dbCombo1OnRender
    evt.cell.display += '; '+evt.cell.data+'; '+evt.object.GOOD_NAME;
    evt.cell.style.foreground = Color.lightGray;
    return true;
}//GEN-LAST:event_dbCombo1OnRender

function fake1OnRender(evt) {//GEN-FIRST:event_fake1OnRender
    evt.cell.display = evt.id+'; '+evt.columnId+'; '+evt.object.GOOD_NAME;
    return true;
}//GEN-LAST:event_fake1OnRender

function dbGrid1OnRender(evt) {//GEN-FIRST:event_dbGrid1OnRender
    evt.cell.display += '; ' + evt.cell.data + ' ' + evt.columnId;
    evt.cell.style.foreground = Color.lightGray;
    return true;
}//GEN-LAST:event_dbGrid1OnRender

function GOODOnRender(evt) {//GEN-FIRST:event_GOODOnRender
    evt.cell.display = evt.object.GOOD_NAME;     
    evt.cell.style.foreground = Color.green;   
    return true;
}//GEN-LAST:event_GOODOnRender
