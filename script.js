
//скрытие контента при клике на заголовок
document.querySelectorAll('.toggle-description').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const description = toggle.nextElementSibling;
        description.classList.toggle('hidden');
    });
});


// плавная прокрутка при нажатии на ссылки навигации
$(document).ready(function() {
    $('nav ul li a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});

вкладки 
$(document).ready(function(){
    // Скрыть все разделы, кроме первого
    $(".tab-content").not(":first").hide();
    
    // Обработчик события клика на вкладке
    $("#tabs a").click(function(){
        // Отменить стандартное поведение ссылки
        event.preventDefault();
        
        // Скрыть все разделы
        $(".tab-content").hide();
        
        // Отобразить содержимое соответствующего раздела
        var tab = $(this).attr("href");
        $(tab).fadeIn();
    });
});
