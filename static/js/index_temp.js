$(function () {
    console.log(111111111111)
    $('img').each(function () {
        console.log(22222222222)
        var img_path=$(this).attr('src')

        // "{% static 'js/jquery-1.12.3.js' %}"
        img_new_path="{% static '"+img_path+"' %}"
        $(this).attr('src',img_new_path)
    })
    console.log($('body').html())
})