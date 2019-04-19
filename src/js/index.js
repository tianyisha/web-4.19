require.config({
    paths: {
        "ajax": "js/ajax"
    }
})
require(['ajax'], function(ajax) {
    $.ajax({
        type: "get",
        url: '../mock/data.json',
        success: function(res) {
            console.log(res)
        }

    })
})