/**
 * 
 * @author mg
 */
function AutoRefreshTestRunner() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };

    form.btnTestIt.onActionPerformed = function(event) {
        var f = new AutoRefreshTest();
        f.show();
    };
}
