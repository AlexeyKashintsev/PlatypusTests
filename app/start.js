/**
 * Do not edit this file manually, it will be overwritten by
 * Platypus Application Designer.
 */
// this === global
if(!this.P)
    this.P = {};
P.ready = function() {
    P.require(['MultiSourceWithErrorTestView'], function(){
        var f = new MultiSourceWithErrorTestView();
        f.show();
    }, function(e){
        P.Logger.severe(e);
    });
};
