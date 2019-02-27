/*!
 * stepperz 
 * version: 0.0.1
 * created by: hilderney zapf
 * dependencies: jquery
 */
$(document).ready(function(){
    $('.stepper-buttons').on('click', '.step-next', (e)=>{
        //Pegar o Item atual ativado.
    var listItems = $(e.currentTarget.parentElement.parentElement).children('.stepper-navigation').children('.stepper-group').children('.stepper-group-item').children('.btn-step');
    var count = 0;
    var current = 0;
    for (var item of listItems) {
        if ($(item).hasClass('btn-active')) {
            current = count;
            stepperPosition = current + 1;
        }
        count++;
    }
        //Ativar o proximo item e limpar o active do atual.
    var next;
    current + 1 > listItems.length -1 ? next = listItems.length -1 : next = current + 1;
    $(listItems[next]).addClass('btn-active');
    next != current ? $(listItems[current]).removeClass('btn-active') : '';

        //marcar o item atual como Done.
    $(listItems[current]).addClass('btn-done');
    var icon = $(listItems[current]).children('.stepper-ripple').children('.stepper-content').children('.stepper-icon').children('span');
    icon.html('');
    icon.attr('aria-hidden', 'true');
    icon.addClass('glyphicon glyphicon-pencil');

        //carregar a próxima tela.
    var tabContainer = $(e.currentTarget.parentElement.parentElement).children('.stepper-container-wrapper').children('.stepper-container');
    var pag = 'transform: translate3d(' + -100 * (next) + '%, 0px, 0px);';
    tabContainer.attr('style', pag);
    for (var tab of $(tabContainer.children('.step-pane'))) {
        $(tab).removeClass('active')
    }
    $(tabContainer.children('.step-pane')[next]).addClass('active');
    var elemHeight = $(tabContainer.children('.step-pane')[next])[0].clientHeight;
    tabContainer.css('height', elemHeight);
    if (stepperPosition >= 1) {
        $('.stepper-buttons .btn.step-prev').removeClass('disabled');
        $('.stepper-buttons .btn.step-prev').removeAttr('disabled');
    }
    if (stepperPosition >= tabContainer.children('.step-pane').length -1 ){
        $('.stepper-buttons .btn.step-next').addClass('disabled');
        $('.stepper-buttons .btn.step-next').attr('disabled','false');
        $('.stepper-buttons .btn.step-next').addClass('hidden');
        $('.stepper-buttons .btn.step-end').removeClass('hidden');
    }
    });

    $('.stepper-buttons').on('click', '.step-prev', (e)=>{
    var listItems = $(e.currentTarget.parentElement.parentElement).children('.stepper-navigation').children('.stepper-group').children('.stepper-group-item').children('.btn-step');
    var count = 0;
    var current = 0;
    for (var item of listItems) {
        if ($(item).hasClass('btn-active')) {
            current = count;
            stepperPosition = current;
        }
        count++;
    }

    //Ativando item Anterior e desativando o próximo.
    var prev;
    current - 1 < 0 ? prev = 0 : prev = current -1;
    //current - 1 > listItems.length -1 ? prev = listItems.length -1 : prev = current;
    $(listItems[prev]).addClass('btn-active');
    prev != current ? $(listItems[current]).removeClass('btn-active') : '';
    
    //Limpar o Item atual como Done.
    $(listItems[current]).removeClass('btn-done');
    $(listItems[prev]).removeClass('btn-done');
    var iconAtual = $(listItems[current]).children('.stepper-ripple').children('.stepper-content').children('.stepper-icon').children('span');
    var iconPrev = $(listItems[prev]).children('.stepper-ripple').children('.stepper-content').children('.stepper-icon').children('span');
    iconPrev.html(current);
    iconPrev.removeAttr('aria-hidden');
    iconPrev.removeClass('glyphicon glyphicon-pencil');
    iconAtual.html(current + 1);
    iconAtual.removeAttr('aria-hidden');
    iconAtual.removeClass('glyphicon glyphicon-pencil');
    
    //carregar a tela anterior.
    var tabContainer = $(e.currentTarget.parentElement.parentElement).children('.stepper-container-wrapper').children('.stepper-container');
    var pag = 'transform: translate3d(' + -100 * (prev) + '%, 0px, 0px);';
    tabContainer.attr('style', pag);
    for (var tab of $(tabContainer.children('.step-pane'))) {
        $(tab).removeClass('active')
    }
    $(tabContainer.children('.step-pane')[prev]).addClass('active');
    var elemHeight = $(tabContainer.children('.step-pane')[prev])[0].clientHeight;
    tabContainer.css('height', elemHeight);

    if (stepperPosition >= 1) {
        $('.stepper-buttons .btn.step-prev').removeClass('disabled');
        $('.stepper-buttons .btn.step-prev').removeAttr('disabled');
        $('.stepper-buttons .btn.step-next').removeClass('disabled');
        $('.stepper-buttons .btn.step-next').removeAttr('disabled');
    }
    if (stepperPosition <= 1) {
        $('.stepper-buttons .btn.step-prev').addClass('disabled');
        $('.stepper-buttons .btn.step-prev').attr('disabled', 'true');
    }
    if (stepperPosition >= tabContainer.children('.step-pane').length -1){
        $('.stepper-buttons .btn.step-next').removeClass('hidden');
        $('.stepper-buttons .btn.step-end').addClass('hidden');
    }
    
    });

    $('.stepper-group-item').on('click', (e)=>{
    stepperPosition = 0;
    var listItems = $(e.currentTarget).children('button').parent().parent().children().children('button')
    var button = $(e.currentTarget).children('button');
    var label = $(e.currentTarget).children('button').children().children().children('.stepper-text').children('.stepper-label').html();
    var tabPanes = $(e.currentTarget.parentElement.parentElement.parentElement).children('.stepper-container-wrapper').children('.stepper-container').children('.step-pane')
    var selected;

    if(button.hasClass('btn-active') || button.hasClass('btn-done')) {        
        var count = 0;
        for (var item of listItems) {
            if (item == button[0]) {
                selected = count;
                stepperPosition = selected;
            }
            count++;
        }
        listItems.removeClass('btn-done');
        listItems.removeClass('btn-active');
        for (var i = 0; i <= listItems.length -1; i++ ) {
            var icon = $(listItems[i]).children('.stepper-ripple').children('.stepper-content').children('.stepper-icon').children('span');
            if( i < selected) {
                $(listItems[i]).addClass('btn-done');
                icon.html('');
                icon.attr('aria-hidden', 'true');
                icon.addClass('glyphicon glyphicon-pencil');
                $(tabPanes[i]).removeClass('active');
            }
            else if ( i == selected) {
                $(listItems[i]).addClass('btn-active');
                icon.html(i+1);
                icon.removeAttr('aria-hidden');
                icon.removeClass('glyphicon glyphicon-pencil');
                $(tabPanes[i]).addClass('active');
                var pag = 'transform: translate3d(' + -100 * (i) + '%, 0px, 0px);';
                tabPanes.parent().attr('style', pag);
                var elemHeight = $(tabPanes[i])[0].clientHeight;
                tabPanes.parent().css('height', elemHeight);
            }
            else if ( i > selected) {
                $(listItems[i]).removeClass('btn-done');
                $(listItems[i]).removeClass('btn-active');
                icon.html(i+1);
                icon.removeAttr('aria-hidden');
                icon.removeClass('glyphicon glyphicon-pencil');
                $(tabPanes[i]).removeClass('active');
            }
        }
        $('.stepper-buttons .btn.step-end').addClass('hidden');
        if (selected >= 0) {
            $('.stepper-buttons .btn.step-prev').removeClass('disabled');
            $('.stepper-buttons .btn.step-prev').removeAttr('disabled');
            $('.stepper-buttons .btn.step-next').removeClass('disabled');
            $('.stepper-buttons .btn.step-next').removeAttr('disabled');
        }
        if (selected < 1) {
            $('.stepper-buttons .btn.step-prev').addClass('disabled');
            $('.stepper-buttons .btn.step-prev').attr('disabled', 'true');
        }
        if (selected < tabPanes.length -1){
            $('.stepper-buttons .btn.step-next').removeClass('hidden');
            $('.stepper-buttons .btn.step-end').addClass('hidden');
        }
        if (selected >= tabPanes.length -1){
            $('.stepper-buttons .btn.step-next').addClass('hidden');
            $('.stepper-buttons .btn.step-end').removeClass('hidden');
        }
    }
    
    });
});