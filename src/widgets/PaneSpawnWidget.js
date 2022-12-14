/* ------------------------------------------------------------------------- *
 *  Proofscape Integrated Study Environment (PISE)                           *
 *                                                                           *
 *  Copyright (c) 2018-2022 Proofscape contributors                          *
 *                                                                           *
 *  Licensed under the Apache License, Version 2.0 (the "License");          *
 *  you may not use this file except in compliance with the License.         *
 *  You may obtain a copy of the License at                                  *
 *                                                                           *
 *      http://www.apache.org/licenses/LICENSE-2.0                           *
 *                                                                           *
 *  Unless required by applicable law or agreed to in writing, software      *
 *  distributed under the License is distributed on an "AS IS" BASIS,        *
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 *  See the License for the specific language governing permissions and      *
 *  limitations under the License.                                           *
 * ------------------------------------------------------------------------- */

define([
    "dojo/_base/declare",
    "ise/widgets/Widget"
], function(
    declare,
    Widget
) {

/* This is an abstract Widget class representing all those widgets
 * whose "activation" type is: click me to spawn a new pane, with
 * certain content in it. Chart, Notes, and Examp widgets are all
 * of this type.
 */
var PaneSpawnWidget = declare(Widget, {

    activate: function(wdq, uid, nm, pane) {
        wdq.on('click', function(){
            // In the context of this click handler, `this` will
            // point to the DOM element that was clicked.
            nm.click(uid, this);
        });
    },

});

return PaneSpawnWidget;

});