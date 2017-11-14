var QWC_Custom = {};

QWC_Custom.App = function () {

    $('body').addClass('qwc_body');
    
    

    var start = $("#pluginLoadMsg");

    var $header = $('<div/>')
                    .attr("id", "qwc_header")
                    .addClass("qwc_header");

    $header.insertAfter(start);

    $content = $('<div/>')
                    .attr("id", "qwc_content")
                    .addClass("qwc_content ms-formtable clearfix");
    var formtableLength = $(".ms-formtable td").length;

    $(".ms-formtable tr").each(function (index) {

        $fieldCol = $('<div/>').addClass("col-xs-6");       

        $(this).find("td").each(function (index) {
            var className = $(this).attr('class');
      
            if (className === "qwform") {
                var label = $(this).find('.qwformlabel');
                if (label.length != 0) {                    
                    var lblClone = label.clone(true, true);
                    $fieldCol.append(lblClone);
                    $content.append($fieldCol);
                    

                }
            }
            else
                if (className === "fieldContainer qwform") {
                    var field = $(this).find('[data-fieldtype]');                    
                    if (field.length != 0) {
                        if (field.attr('data-fieldtype') == 'attachments') {
                            field = $(this).find("#attachmentWrapper");
                        }
                        if (field.attr('data-fieldtype') == 'rte') {
                            field = $(this).children();
                        }
                        if (field.attr('data-fieldtype') == 'date') {
                            field = $(this).find("#dateWrapper").children();
                        }
                        var fldClone = field.clone(true, true);
                        //fldClone.addClass("fieldContainer qwform");
                        $fieldCol.append(fldClone);
                        $content.append($fieldCol);
                        
                       
                    } else {
                        $labelCol = $('<div/>').addClass("col-xs-12");
                        field = $(this).find('.readOnlyCtrl')
                        if (field.length != 0) {
                            fieldVal = "fieldControl" + index;

                            var fldClone = field.clone(true, true);
                            $labelCol.append(fldClone);
                            $content.append($labelCol);
                            
                        }
                    }
                }
        });
        
        
    });
    
    $content.insertAfter(".ms-formtable");
    $("table.ms-formtable").attr('style', "height:0px; width:0px");
    
   

};

QWC_Custom.App.prototype = {

};


window.onload = function () {
//    new QWC_Custom.App();
    $( "#bt_2" ).removeClass( "col-xs-6" ).addClass( "col-xs-12" );
    $( "#bt_3" ).removeClass( "col-xs-6" ).addClass( "col-xs-12" );
    $( "#bt_5" ).removeClass( "col-xs-6" ).addClass( "col-xs-4" );
    $("#bt_6").removeClass("col-xs-6").addClass("col-xs-4");
    $("#bt_7").removeClass("col-xs-6").addClass("col-xs-4");
    $("#bt_8").removeClass("col-xs-6").addClass("col-xs-4");
    $( "#bt_9" ).removeClass( "col-xs-6" ).addClass( "col-xs-4" );
    $( "#bt_10" ).removeClass( "col-xs-6" ).addClass( "col-xs-4" );
    $( "#bt_12" ).removeClass( "col-xs-6" ).addClass( "col-xs-12" );
    $("#bt_17").css("background-color", "#F5F5F5");
    $("#bt_18").css("padding-top", "20px");
    $( "#bt_19" ).css("background-color", "#F5F5F5");
    $("#bt_20").css("padding-top", "20px");
    $("#bt_21").css("background-color", "#F5F5F5");
    $("#bt_22").css("padding-top", "20px");
    $("#bt_23").css("background-color", "#F5F5F5");
    $( "#bt_26" ).removeClass( "col-xs-6" ).addClass( "col-xs-8" );
    $("#bt_27").removeClass("col-xs-6").addClass("col-xs-4");
    $("#bt_28").removeClass("col-xs-6").addClass("col-xs-8");
    $("#bt_29").removeClass("col-xs-6").addClass("col-xs-4");
};