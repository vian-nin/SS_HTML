$('.btn-next').on('click', function() {
	
	var currentStepNum = $('#checkout-progress').data('current-step');
	var nextStepNum = (currentStepNum + 1);
	var currentStep = $('.step.step-' + currentStepNum);
	var nextStep = $('.step.step-' + nextStepNum);
	var progressBar = $('#checkout-progress');
	$('.btn-prev').removeClass('disabled');
	$('#section'+currentStepNum).toggle();
	$('#section'+nextStepNum).toggle();
	if(nextStepNum == 4) {
		$(this).toggle();
		$('.btn-submit').toggle();
	}
	/*if(nextStepNum == 5){
		$(this).addClass('disabled');
	}*/
	$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (currentStepNum + 1));
	
	currentStep.removeClass('active').addClass('valid');
	currentStep.find('span').addClass('opaque');
	currentStep.find('.fa.fa-check').removeClass('opaque');
	
	nextStep.addClass('active');
	progressBar.removeAttr('class').addClass('step-' + nextStepNum).data('current-step', nextStepNum);
});

$('.btn-submit').on('click',function(){
	$('.btn-submit').toggle('disabled');
	$('.btn-prev').toggle();
	var currentStepNum = $('#checkout-progress').data('current-step');
	var currentStep = $('.step.step-' + currentStepNum);
	currentStep.removeClass('active').addClass('valid');
	currentStep.find('.fa.fa-check').removeClass('opaque');
});

$('.btn-prev').on('click', function() {
	
	var currentStepNum = $('#checkout-progress').data('current-step');
	var prevStepNum = (currentStepNum - 1);
	var currentStep = $('.step.step-' + currentStepNum);
	var prevStep = $('.step.step-' + prevStepNum);
	var progressBar = $('#checkout-progress');
	$('.btn-next').removeClass('disabled');
	$('#section'+currentStepNum).toggle();
	$('#section'+prevStepNum).toggle();
	if(currentStepNum == 4){
		$('.btn-submit').toggle();
		$('.btn-next').toggle();
	}
	if(currentStepNum == 1) {
		return false;
	}
	if(prevStepNum == 1){
		$(this).addClass('disabled');
	}
	$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));
	
	currentStep.removeClass('active');
	prevStep.find('span').removeClass('opaque');
	prevStep.find('.fa.fa-check').addClass('opaque');
	
	prevStep.addClass('active').removeClass('valid');
	progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
});

jQuery(function() {
	jQuery('.component-datepicker.default').datepicker({
		autoclose: true,
		startDate: "today",
	});

	jQuery('.component-datepicker.today').datepicker({
		autoclose: true,
		startDate: "today",
		todayHighlight: true
	});

	jQuery('.component-datepicker.past-enabled').datepicker({
		autoclose: true,
	});

	jQuery('.component-datepicker.format').datepicker({
		autoclose: true,
		format: "dd-mm-yyyy",
	});

	jQuery('.component-datepicker.autoclose').datepicker();

	jQuery('.component-datepicker.disabled-week').datepicker({
		autoclose: true,
		daysOfWeekDisabled: "0"
	});

	jQuery('.component-datepicker.highlighted-week').datepicker({
		autoclose: true,
		daysOfWeekHighlighted: "0"
	});

	jQuery('.component-datepicker.mnth').datepicker({
		autoclose: true,
		minViewMode: 1,
		format: "mm/yy"
	});

	jQuery('.component-datepicker.multidate').datepicker({
		multidate: true,
		multidateSeparator: " , "
	});

	jQuery('.component-datepicker.input-daterange').datepicker({
		autoclose: true
	});

	jQuery('.component-datepicker.inline-calendar').datepicker();

	jQuery('.datetimepicker').datetimepicker({
		showClose: true
	});

	jQuery('.datetimepicker1').datetimepicker({
		format: 'LT',
		showClose: true
	});

	jQuery('.datetimepicker2').datetimepicker({
		inline: true,
		sideBySide: true
	});

	jQuery('.datetimepicker3,.datetimepicker4').datetimepicker();

	// .daterange1
	jQuery(".daterange1").daterangepicker({
		"buttonClasses": "button button-rounded button-mini m-0",
		"applyClass": "button-color",
		"cancelClass": "button-light"
	});

	// .daterange2
	jQuery(".daterange2").daterangepicker({
		"opens": "center",
		timePicker: true,
		timePickerIncrement: 30,
		locale: {
			format: 'MM/DD/YYYY h:mm A'
		},
		"buttonClasses": "button button-rounded button-mini m-0",
		"applyClass": "button-color",
		"cancelClass": "button-light"
	});

	// .daterange3
	jQuery(".daterange3").daterangepicker({
		singleDatePicker: true,
		showDropdowns: true
	},
	function(start, end, label) {
		var years = moment().diff(start, 'years');
		alert("You are " + years + " years old.");
	});

	// reportrange
	function cb(start, end) {
		jQuery(".reportrange span").html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
	}
	cb(moment().subtract(29, 'days'), moment());

	jQuery(".reportrange").daterangepicker({
		"buttonClasses": "button button-rounded button-mini m-0",
		"applyClass": "button-color",
		"cancelClass": "button-light",
		ranges: {
		   'Today': [moment(), moment()],
		   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
		   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
		   'This Month': [moment().startOf('month'), moment().endOf('month')],
		   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}, cb);

	// .daterange4
	jQuery(".daterange4").daterangepicker({
		autoUpdateInput: false,
		locale: {
			cancelLabel: 'Clear'
		},
		"buttonClasses": "button button-rounded button-mini m-0",
		"applyClass": "button-color",
		"cancelClass": "button-light"
	});

	jQuery(".daterange4").on('apply.daterangepicker', function(ev, picker) {
		jQuery(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
	});

	jQuery(".daterange4").on('cancel.daterangepicker', function(ev, picker) {
		jQuery(this).val('');
	});

});

