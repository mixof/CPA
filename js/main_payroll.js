jQuery(function($){
    $('.leaderboard-archive a.lined-btn').click(function(){
        $.ajax({
            url: _wpUtilSettings.ajax.url,
            type: 'POST',
            data: 'action=get_leaders&leaders_offset=10&leaders_total=10',
            beforeSend: function(){
                // Handle the beforeSend event
            },

        success: function( data ) {

            alert( data );
        }
    });

         return false;
    });
});