/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('getinfo', function(Y, NAME) {

/**
 * The getinfo module.
 *
 * @module getinfo
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('model').getData(function(err, data) {
                  ac.http.setHeader("Content-Type", 'application/json; charset=utf-8');
                if (err) {
                    ac.error(err);
                    return;
                }

                dataStr = JSON.stringify(data);

                console.log(data);

                console.log(dataStr);
                ac.done({
                    data: dataStr
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito',  'mojito-models-addon',  'mojito-http-addon']});
