editor.getSession().on('change', function(e) {
    $("#tehiframe").attr("srcdoc", editor.getValue());
});
