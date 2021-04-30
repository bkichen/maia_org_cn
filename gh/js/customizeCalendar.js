$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left:'prev',
			center:'title',
			right:'next'
		},
		editable: true,
		titleFormat:'MMMM YYYY',
		contentHeight:250,
		weekMode:'variable',
		events: {
			// 链接
			url: 'json/calendar.json',
			error: function() {
				$('#script-warning').show();
			}
		},
		eventRender: function(event) {
			var dataToFind = moment(event.start).format('YYYY-MM-DD');
			$("td[data-date='" + dataToFind + "']").addClass('activeDay');
		},
		dayClick: function(date, jsEvent,events) {
			var list = art.dialog.list; 
			for (var i in list) { 
				list[i].close(); 
			};
			var events = $('#calendar').fullCalendar('clientEvents', function(event) {
				var eventStart = event.start.format('YYYY-MM-DD');
				var eventEnd = event.end ? event.end.format('YYYY-MM-DD') : null;
				var theDate = date.format('YYYY-MM-DD');
				return (eventStart <= theDate && (eventEnd >= theDate) && !(eventStart < theDate && (eventEnd == theDate))) || (eventStart == theDate && (eventEnd === null));
			});
			showDialog(date,jsEvent,events)
		}
		
	});
	function showDialog(date,jsEvent,events) {
		if(events.length == 0){
			$('.aui_outer').hide()
		}else{
			$('.aui_outer').show()
		}
		var data = '';
		for(var i = 0; i < events.length ;i++){
			var title = events[i].title;
			var time = events[i].start.format('MM-DD');
			var url = events[i].url;
			data += '<p class="mobile_time">'+time+'</p><p class="mobile_title"><a href="' + url + '" target="_blank" title="' + title + '">' + title + '</a></p>';
		}
		var winWidth = $(window).width()
		if( winWidth > 992){
			var dialog = art.dialog({ id: 'event',width:260, title:date.format('YYYY-MM-DD'), left: jsEvent.clientX+2 , top: jsEvent.clientY,content:data });
		}else{
			$('#mobile_data').empty()
			$('#mobile_data').html(data)
		}
	}
});