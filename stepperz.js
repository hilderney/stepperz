/*!
 * stepperz 
 * version: 0.0.1
 * created by: hilderney zapf
 * dependencies: jquery
 */
$(document).ready(function () {
    var tabHeight = $('.stepper-main').find('.stepper-container')[0].clientHeight;
    $('.stepper-main').find('.stepper-container')[0].style.height = (tabHeight + 'px');

    $('.stepper-buttons').on('click', '.step-next', (e) => {
        _stepperPosition = 0;
        
        var listNavItens = $('.stepper-navigation').find('.btn-step');
        var listTabItens = $('.stepper-container').find('.step-pane');
        var current = 0;
        
        for (var item of listNavItens) {
            if ($(item).hasClass('btn-active')) {
                _stepperPosition = current + 1 ;
            }
            current++;
        }
        setStepper(_stepperPosition, listNavItens, listTabItens);
        setStepNavButtons(_stepperPosition, listTabItens.length -1);
    });

    $('.stepper-buttons').on('click', '.step-prev', (e) => {
        _stepperPosition = 0;
        
        var listNavItens = $('.stepper-navigation').find('.btn-step');
        var listTabItens = $('.stepper-container').find('.step-pane');
        var current = 0;
        
        for (var item of listNavItens) {
            if ($(item).hasClass('btn-active')) {
                _stepperPosition = current -1;
            }
            current++;
        }
        setStepper(_stepperPosition, listNavItens, listTabItens);
        setStepNavButtons(_stepperPosition, listTabItens.length -1);

    });

    $('.stepper-group-item').on('click', (e) => {

        _stepperPosition = 0;
        var button = $(e.currentTarget).find('button');
        var listNavItens = $('.stepper-navigation').find('.btn-step');
        var listTabItens = $('.stepper-container').find('.step-pane');

        if (button.hasClass('btn-active') || button.hasClass('btn-done')) {
            var current = 0;
            for (var item of listNavItens) {
                if (item == button[0]) {
                    _stepperPosition = current;
                }
                current++;
            }
            setStepper(_stepperPosition, listNavItens, listTabItens);
            setStepNavButtons(_stepperPosition, listTabItens.length -1);
        }
        else{
            var label = button.find('.stepper-label').html();
            alert('Passo <' + label + '> está desativado');
        }

    });

});

function setStepError() {
    
}

function setStepper(pos, listNavItens, listTabItens) {

    tabContainer = listTabItens.parent();
    listNavItens.removeClass('btn-done');
    listNavItens.removeClass('btn-active');
    
    for (var i = 0; i <= listNavItens.length - 1; i++) {
        
        var icon = $(listNavItens[i]).find('.stepper-icon').children('span');

        if (i < pos) {
            $(listNavItens[i]).addClass('btn-done');
            $(listNavItens[i]).removeClass('disabled');
            icon.html('');
            icon.html('<i class="fa fa-check" aria-hidden="true"></i>');
            $(listTabItens[i]).removeClass('active');
        } else if (i == pos) {
            $(listNavItens[i]).addClass('btn-active');
            $(listNavItens[i]).removeClass('disabled');
            icon.html(i + 1);
            $(listTabItens[i]).addClass('active');
            var pag = 'transform: translate3d(' + -100 * (i) + '%, 0px, 0px);';
            tabContainer.attr('style', pag);
            var elemHeight = $(listTabItens[i])[0].clientHeight;
            tabContainer[0].style.height = (elemHeight + 'px');
        } else if (i > pos) {
            $(listNavItens[i]).removeClass('btn-done');
            $(listNavItens[i]).removeClass('btn-active');
            $(listNavItens[i]).addClass('disabled');
            icon.html(i + 1);
            $(listTabItens[i]).removeClass('active');
        }
    }
}

function setStepNavButtons(pos, size) {
    
    $('.stepper-buttons .btn.step-end').parent().addClass('disabled');
    $('.stepper-buttons .btn.step-end').attr('disabled', 'true');

    if (pos == 0) {
        $('.stepper-buttons .btn.step-prev').parent().addClass('disabled');
        $('.stepper-buttons .btn.step-prev').attr('disabled', 'true');
        $('.stepper-buttons .btn.step-next').parent().removeClass('disabled');
        $('.stepper-buttons .btn.step-next').removeAttr('disabled');
    }
    if (pos > 0) {
        $('.stepper-buttons .btn.step-prev').parent().removeClass('disabled');
        $('.stepper-buttons .btn.step-prev').removeAttr('disabled');
        $('.stepper-buttons .btn.step-end').parent().addClass('disabled');
        $('.stepper-buttons .btn.step-end').attr('disabled', 'true');
    }
    if (pos < size) {
        $('.stepper-buttons .btn.step-next').parent().removeClass('disabled');
        $('.stepper-buttons .btn.step-next').removeAttr('disabled');
        $('.stepper-buttons .btn.step-end').parent().addClass('disabled');
        $('.stepper-buttons .btn.step-end').attr('disabled', 'true');
    }
    if (pos == size) {
        $('.stepper-buttons .btn.step-next').parent().addClass('disabled');
        $('.stepper-buttons .btn.step-next').attr('disabled', 'true');
        $('.stepper-buttons .btn.step-end').parent().removeClass('disabled');
        $('.stepper-buttons .btn.step-end').removeAttr('disabled');
    }
}
