$(document).ready(function() {
    $('.news-row').on('click', function(e) {
        e.preventDefault();

        var data = $(this).attr('data-id');

        $('a[id^="news-sub-header"]').each(function(index){
            if (this.id != 'news-sub-header-' + data) {
                $('#' + this.id).removeClass('news-sub-header-open').addClass('news-sub-header-closed');
                $('#' + this.id + ' > .news-sub-header-closed-indicator').removeClass('hidden').addClass('visible');
                $('#' + this.id.substr(0, 15) + '-content-' + this.id.substr(16, 1)).removeClass('visible').addClass('hidden');
            }
        });

        if ($('#news-sub-header-' + data).hasClass('news-sub-header-closed')) {
            $('#news-sub-header-' + data).removeClass('news-sub-header-closed').addClass('news-sub-header-open');
            $('#news-sub-header-' + data + ' > .news-sub-header-closed-indicator').removeClass('visible').addClass('hidden');
            $('#news-sub-header-content-' + data).removeClass('hidden').addClass('visible');
        } else if ($('#news-sub-header-' + data).hasClass('news-sub-header-open')) {
            $('#news-sub-header-' + data).removeClass('news-sub-header-open').addClass('news-sub-header-closed');
            $('#news-sub-header-' + data + ' > .news-sub-header-closed-indicator').removeClass('hidden').addClass('visible');
            $('#news-sub-header-content-' + data).removeClass('visible').addClass('hidden');
        }
    });
});