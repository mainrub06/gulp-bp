'use strict';
$(document).ready(function () {

  // форма

  $('#id').submit(function (evt) {
    evt.preventDefault();
    var form = jQuery(this);

    form.ajaxSubmit({
      url: './form.php',
      beforeSubmit: function () {
        if (form.find('input[type=checkbox]').prop("checked")) {
          console.log('checkbox-checked =)');
        } else {
          form.find('.form-err-place').html('<div class="err">Поставьте галочку</div>');
          return false;
        }
        if (form.find('input[name=name]').val() === '') {
          form.find('.form-err-place').html('<div class="err">Введите ваше имя</div>');
          return false;
        }
        if (form.find('input[name=tel]').val() === '') {
          form.find('.form-err-place').html('<div class="err">Введите ваш телефон</div>');
          return false;
        }
      },
      success: function (data) {
        if (form.find('input[type=checkbox]').prop("checked")) {
          if (data) {
            form.find('.form-err-place').html('<div class="err">' + data + '</div>');
            return false;
          } else {
            parent.jQuery.fancybox.close();

            var instance = $.fancybox.open('<p>Спасибо, скоро расчёт будет отправлен на ваш почновый ящик!</p>');

            // яндекс цель для метрики
            // ym(ID_COUNTER, 'reachGoal', 'ID_OF_TARGET');

            setTimeout(function () {
              instance.close();
            }, 5000);
            form.find('input[name=name]').val('');
            form.find('input[name=tel]').val('');
            form.find('.form-err-place .err').text('');
          }
        }
        else {
          form.find('.form-err-place').html('<div class="err">Поставьте галочку</div>');
          return false;
        }
      }
    });
  });
});
